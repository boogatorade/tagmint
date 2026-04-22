import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import getStripe from '@/lib/stripe';

type Package = 'basic' | 'standard' | 'premium';

interface PackageConfig {
  amount: number; // in cents
  name: string;
  description: string;
}

const PACKAGES: Record<Package, PackageConfig> = {
  basic: {
    amount: 700,
    name: 'Listing Tune-Up',
    description: 'Listing Tune-Up — 1 listing optimized',
  },
  standard: {
    amount: 1900,
    name: 'Shop Boost',
    description: 'Shop Boost — 3 listings + keyword report',
  },
  premium: {
    amount: 4900,
    name: 'Full Shop Overhaul',
    description: 'Full Shop Overhaul — 10 listings + full audit',
  },
};

function isValidPackage(pkg: unknown): pkg is Package {
  return typeof pkg === 'string' && pkg in PACKAGES;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { package: pkg, name, email, shopUrl, listingUrls, listingDetails } = body;

    if (!isValidPackage(pkg)) {
      return NextResponse.json(
        { error: `Invalid package. Must be one of: ${Object.keys(PACKAGES).join(', ')}.` },
        { status: 400 },
      );
    }

    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json({ error: 'name is required.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
    }

    if (!shopUrl || typeof shopUrl !== 'string' || shopUrl.trim() === '') {
      return NextResponse.json({ error: 'shopUrl is required.' }, { status: 400 });
    }

    const pkgConfig = PACKAGES[pkg];
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    if (!siteUrl) {
      console.error('[checkout] NEXT_PUBLIC_SITE_URL is not set.');
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }

    const session = await getStripe().checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: pkgConfig.name,
              description: pkgConfig.description,
            },
            unit_amount: pkgConfig.amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cancel`,
      customer_email: email,
      metadata: {
        name: name.trim(),
        shopUrl: shopUrl.trim(),
        listingUrls: typeof listingUrls === 'string' ? listingUrls.trim() : '',
        package: pkg,
        listingDetails:
          typeof listingDetails === 'string'
            ? listingDetails.trim().slice(0, 490)
            : '',
      },
    });

    // Write full listingDetails to a temp file so the webhook can read it
    if (session.id && typeof listingDetails === 'string' && listingDetails.trim() !== '') {
      const dir = '/tmp/tagmint-orders';
      fs.mkdirSync(dir, { recursive: true });
      const filePath = path.join(dir, `${session.id}.txt`);
      fs.writeFileSync(filePath, listingDetails, 'utf8');
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('[checkout] Error creating checkout session:', err);
    return NextResponse.json({ error: 'Failed to create checkout session.' }, { status: 500 });
  }
}
