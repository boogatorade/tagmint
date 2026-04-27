#!/usr/bin/env npx tsx
/**
 * Run once to create TagMint subscription products in Stripe.
 * npx tsx --env-file=.env.local scripts/setup-stripe-subscriptions.ts
 *
 * Copy the output price IDs into .env.local and Vercel env vars.
 */
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

async function main() {
  // Create the product
  const product = await stripe.products.create({
    name: 'TagMint Pro',
    description: 'Monthly listing optimization credits for Etsy & eBay sellers.',
    metadata: { tagmint: 'subscription' },
  });
  console.log(`Created product: ${product.id}`);

  // Monthly price — $14.99/month
  const monthly = await stripe.prices.create({
    product: product.id,
    unit_amount: 1499,
    currency: 'usd',
    recurring: { interval: 'month' },
    lookup_key: 'tagmint_monthly',
    nickname: 'TagMint Pro Monthly',
  });
  console.log(`Created monthly price: ${monthly.id}`);

  // Annual price — $99/year
  const annual = await stripe.prices.create({
    product: product.id,
    unit_amount: 9900,
    currency: 'usd',
    recurring: { interval: 'year' },
    lookup_key: 'tagmint_annual',
    nickname: 'TagMint Pro Annual',
  });
  console.log(`Created annual price: ${annual.id}`);

  console.log('\n--- Add these to .env.local and Vercel env vars ---');
  console.log(`STRIPE_MONTHLY_PRICE_ID=${monthly.id}`);
  console.log(`STRIPE_ANNUAL_PRICE_ID=${annual.id}`);
  console.log('\nDone!');
}

main().catch(console.error);
