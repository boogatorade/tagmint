import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import getStripe from '@/lib/stripe';
import { appendToGoogleSheet } from '@/lib/sheets';
import { sendOwnerNotification } from '@/lib/notify';
import { fulfillOrder } from '@/lib/fulfill';
import { sendCustomerDelivery, sendOwnerCopy } from '@/lib/customerEmail';
import fs from 'fs';
import path from 'path';

// Stripe requires the raw request body for signature verification.
// Next.js App Router does not parse the body automatically, so we read it as text.
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error('[webhook] STRIPE_WEBHOOK_SECRET is not set.');
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
  }

  // Read the raw body as a Buffer for Stripe signature verification
  const rawBody = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header.' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = getStripe().webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error('[webhook] Signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid webhook signature.' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    const metadata = session.metadata ?? {};
    const name = metadata.name ?? '';
    const email = session.customer_email ?? metadata.email ?? '';
    const shopUrl = metadata.shopUrl ?? '';
    const listingUrls = metadata.listingUrls ?? '';
    const pkg = metadata.package ?? '';
    const amount = session.amount_total ?? 0;
    const sessionId = session.id;
    const date = new Date().toISOString();

    const order = {
      name,
      email,
      shopUrl,
      listingUrls,
      package: pkg,
      amount,
      date,
      sessionId,
    };

    // Run both side-effects concurrently; log errors but don't fail the webhook
    const [sheetsResult, notifyResult] = await Promise.allSettled([
      appendToGoogleSheet(order),
      sendOwnerNotification(order),
    ]);

    if (sheetsResult.status === 'rejected') {
      console.error('[webhook] Failed to append to Google Sheet:', sheetsResult.reason);
    }

    if (notifyResult.status === 'rejected') {
      console.error('[webhook] Failed to send owner notification:', notifyResult.reason);
    }

    // --- Automated fulfillment ---
    // Read listing details from temp file if it exists (uploaded during checkout)
    let listingDetails = '';
    const tmpFilePath = path.join('/tmp', 'tagmint-orders', `${sessionId}.txt`);
    try {
      listingDetails = fs.readFileSync(tmpFilePath, 'utf8');
      console.log(`[webhook] Loaded listing details from ${tmpFilePath}`);
    } catch {
      // File doesn't exist or can't be read — proceed without listing details
      console.log(`[webhook] No listing details file found at ${tmpFilePath}`);
    }

    const fulfillmentOrder = {
      name,
      email,
      shopUrl,
      listingUrls,
      listingDetails,
      package: pkg,
      sessionId,
    };

    const [fulfillResult] = await Promise.allSettled([
      (async () => {
        const optimizedContent = await fulfillOrder(fulfillmentOrder);

        // Send delivery email to customer and owner copy concurrently
        const [customerResult, ownerCopyResult] = await Promise.allSettled([
          sendCustomerDelivery({ name, email, shopUrl, package: pkg, sessionId }, optimizedContent),
          sendOwnerCopy({ name, email, shopUrl, package: pkg, sessionId }, optimizedContent),
        ]);

        if (customerResult.status === 'rejected') {
          console.error('[webhook] Failed to send customer delivery:', customerResult.reason);
        }
        if (ownerCopyResult.status === 'rejected') {
          console.error('[webhook] Failed to send owner copy:', ownerCopyResult.reason);
        }

        // Clean up temp file after successful processing
        try {
          fs.unlinkSync(tmpFilePath);
          console.log(`[webhook] Deleted temp file ${tmpFilePath}`);
        } catch {
          // File may not exist; ignore
        }
      })(),
    ]);

    if (fulfillResult.status === 'rejected') {
      console.error('[webhook] Fulfillment failed:', fulfillResult.reason);
    }
  }

  // Always return 200 to acknowledge receipt of the event
  return NextResponse.json({ received: true }, { status: 200 });
}
