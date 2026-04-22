import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are the TagMint support assistant. TagMint is an AI-powered Etsy and eBay SEO optimization service at tagmint-app.netlify.app.

You help users with:
- Questions about the TagMint service, how it works, and what they get
- Pricing: $7 for 1 listing (Listing Tune-Up), $19 for 3 listings + keyword report (Shop Boost), $49 for 10 listings + shop audit (Full Shop Overhaul)
- Etsy SEO: titles (up to 140 chars), tags (13 tags, long-tail keywords), descriptions
- eBay SEO: titles (up to 80 chars), item specifics, Cassini algorithm
- General advice on improving listing visibility and sales on Etsy or eBay

If someone asks about anything unrelated to TagMint, Etsy, eBay, or e-commerce SEO, politely say you can only help with TagMint and Etsy/eBay seller questions.

Keep responses concise and helpful. Do not use markdown formatting — plain text only. No asterisks, no bullet symbols, no hashtags.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages,
    });

    const text = response.content.find((b) => b.type === 'text');
    return NextResponse.json({ reply: text?.text ?? '' });
  } catch (err) {
    console.error('[chat] Error:', err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
