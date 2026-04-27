import { NextRequest, NextResponse } from 'next/server';
import getStripe from '@/lib/stripe';

const PLANS = {
  monthly: {
    lookup_key: 'tagmint_monthly',
    amount: 1499,
    interval: 'month' as const,
    nickname: 'TagMint Pro Monthly',
  },
  annual: {
    lookup_key: 'tagmint_annual',
    amount: 9900,
    interval: 'year' as const,
    nickname: 'TagMint Pro Annual',
  },
} as const;

type PlanKey = keyof typeof PLANS;

/** Find an existing price by lookup_key, or create it (idempotent). */
async function getOrCreatePrice(plan: PlanKey): Promise<string> {
  const stripe = getStripe();
  const cfg = PLANS[plan];

  const existing = await stripe.prices.list({ lookup_keys: [cfg.lookup_key], limit: 1 });
  if (existing.data.length > 0) return existing.data[0].id;

  // First-time setup: create the product + price
  const product = await stripe.products.retrieve('tagmint_pro').catch(() => null);
  let productId: string;

  if (product && !product.deleted) {
    productId = product.id;
  } else {
    const p = await stripe.products.create({
      id: 'tagmint_pro',
      name: 'TagMint Pro',
      description: 'Monthly listing optimization credits for Etsy & eBay sellers.',
    });
    productId = p.id;
  }

  const price = await stripe.prices.create({
    product: productId,
    unit_amount: cfg.amount,
    currency: 'usd',
    recurring: { interval: cfg.interval },
    lookup_key: cfg.lookup_key,
    nickname: cfg.nickname,
    transfer_lookup_key: true,
  });

  return price.id;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { plan, name, email, shopUrl } = body;

    if (!plan || !(plan in PLANS)) {
      return NextResponse.json({ error: 'Invalid plan. Must be monthly or annual.' }, { status: 400 });
    }
    if (!name?.trim()) return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    if (!email?.includes('@')) return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
    if (!shopUrl?.trim()) return NextResponse.json({ error: 'Shop URL is required.' }, { status: 400 });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!siteUrl) {
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }

    const priceId = await getOrCreatePrice(plan as PlanKey);

    const session = await getStripe().checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: `${siteUrl}/success?plan=${plan}&type=subscription`,
      cancel_url: `${siteUrl}/cancel`,
      customer_email: email,
      allow_promotion_codes: true,
      subscription_data: {
        metadata: { name: name.trim(), shopUrl: shopUrl.trim(), plan },
      },
      metadata: { name: name.trim(), shopUrl: shopUrl.trim(), plan, type: 'subscription' },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('[subscribe] Error creating subscription session:', err);
    return NextResponse.json({ error: 'Failed to create subscription session.' }, { status: 500 });
  }
}
