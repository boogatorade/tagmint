import Anthropic from '@anthropic-ai/sdk';

const SYSTEM_PROMPT =
  "You are an expert e-commerce SEO specialist for Etsy and eBay. You optimize listings to rank higher in search results and convert more browsers into buyers. For Etsy: titles up to 140 chars, all 13 tags with long-tail keywords (no duplicates from title), descriptions open with keywords in first 160 chars. For eBay: titles up to 80 chars leading with the strongest keyword, item specifics filled precisely, descriptions front-loaded with keywords and trust signals. You write in a natural, buyer-focused way and always clarify which platform you are optimizing for. IMPORTANT: Do not use any markdown formatting. No asterisks, no bold, no bullet symbols, no hashtags. Use plain text only.";

export async function fulfillOrder(order: {
  name: string;
  email: string;
  shopUrl: string;
  listingUrls: string;
  listingDetails: string;
  package: string;
  sessionId: string;
}): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY is not set');
  }

  const client = new Anthropic({ apiKey });

  // Build user prompt based on whether listing details were provided
  let userPrompt: string;

  if (order.listingDetails && order.listingDetails.trim().length > 0) {
    userPrompt =
      `Here are the current listings for ${order.shopUrl}. Please optimize each one:\n\n` +
      `${order.listingDetails}\n\n` +
      `For each listing provide:\n` +
      `**OPTIMIZED TITLE:** (max 140 chars, keyword-rich)\n` +
      `**OPTIMIZED TAGS:** (exactly 13 tags, comma-separated, no duplicates from title)\n` +
      `**OPTIMIZED DESCRIPTION:** (opens with keywords, natural tone, highlights benefits)`;
  } else {
    // Generate based on shop URL and listing URLs with reasonable assumptions
    const listingUrlsFormatted = order.listingUrls
      ? order.listingUrls
          .split(',')
          .map((url) => url.trim())
          .filter(Boolean)
          .join('\n')
      : '(none provided)';

    userPrompt =
      `Please optimize listings for the Etsy shop at ${order.shopUrl}.\n\n` +
      `Listing URLs:\n${listingUrlsFormatted}\n\n` +
      `Based on the shop URL and listing URLs, make reasonable assumptions about the products ` +
      `and create optimized content. For each listing provide:\n` +
      `**OPTIMIZED TITLE:** (max 140 chars, keyword-rich)\n` +
      `**OPTIMIZED TAGS:** (exactly 13 tags, comma-separated, no duplicates from title)\n` +
      `**OPTIMIZED DESCRIPTION:** (opens with keywords, natural tone, highlights benefits)`;
  }

  // Adjust scope intro based on package
  let packageIntro = '';
  switch (order.package) {
    case 'standard':
      packageIntro =
        'This is a 3-listing optimization with keyword research. Please also include a brief **KEYWORD RESEARCH NOTE** at the top with 5-10 high-value search terms for this shop\'s niche.\n\n';
      break;
    case 'premium':
      packageIntro =
        'This is a full 10-listing optimization with shop audit. Please start with a **SHOP AUDIT INTRODUCTION** summarizing key SEO opportunities and overall shop health observations.\n\n';
      break;
    default:
      // basic: 1 listing, no extra intro
      packageIntro = '';
  }

  const fullUserPrompt = packageIntro + userPrompt;

  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: fullUserPrompt }],
  });

  // Extract the text content from the response
  const textBlock = response.content.find((block) => block.type === 'text');
  if (!textBlock || textBlock.type !== 'text') {
    throw new Error('No text content returned from Claude');
  }

  return textBlock.text
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/#{1,6} /g, '')
    .trim();
}
