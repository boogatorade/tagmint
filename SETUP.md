# TagMint — Setup Guide

---

## QUICKSTART — Get paid in 10 minutes

Here is exactly where things stand and what to do next.

**Step 1: Your site is live** ✅
> https://tagmint-app.netlify.app — customers can visit it right now.

**Step 2: Stripe is connected** ✅
> Payments work. When a customer checks out, money goes to your Stripe account.

**Step 3: Set up order tracking (Google Sheets)**
Every sale gets logged to a spreadsheet automatically. Three things to do:

1. Create a free [Google Sheet](https://sheets.google.com) and grab the ID from its URL.
2. Create a free [Google Cloud service account](https://console.cloud.google.com) with the Sheets API enabled, download the JSON key, and share the sheet with the service account email.
3. Add three lines to your `.env.local` file (see the "Google Sheet Setup" and "Google Service Account" sections below for the exact values).

Then run this to confirm it works:
```bash
npx tsx --env-file=.env.local scripts/setup-sheet-headers.ts
npx tsx --env-file=.env.local scripts/test-sheets.ts
```

**Step 4: Set up sale notifications (email)**
Get an email the moment a sale comes in. Two things to do:

1. Turn on 2-Step Verification on your Google account, then generate a Gmail App Password ([instructions below](#4-gmail-app-password-for-sale-notifications)).
2. Add `NOTIFY_EMAIL`, `NOTIFY_EMAIL_PASSWORD`, and `OWNER_EMAIL` to `.env.local`.

Then run a full end-to-end test (checks both the sheet and email at once):
```bash
npx tsx --env-file=.env.local scripts/simulate-order.ts
```

That's it. Once `simulate-order.ts` prints "You are ready to accept real orders," everything is wired up.

---

Follow these steps in order to get TagMint fully working. No coding required!

---

## 1. Stripe Test Keys

Stripe is the payment processor. You need two keys: a **Secret Key** (used on the server) and a **Publishable Key** (used in the browser).

1. Go to [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register) and create a free account.
2. After logging in, click **Developers** in the top-right corner, then click **API keys**.
3. You will see:
   - **Publishable key** — starts with `pk_test_...`
   - **Secret key** — starts with `sk_test_...` (click "Reveal test key" to see it)
4. Copy both keys into your `.env.local` file:
   ```
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```

> Note: Test keys are safe to use during development. Switch to live keys when you're ready to accept real payments.

---

## 2. Google Sheet Setup

This is where all your orders will be logged automatically.

1. Go to [https://sheets.google.com](https://sheets.google.com) and create a new blank spreadsheet.
2. Name it something like **TagMint Orders**.
3. Look at the URL — it looks like:
   ```
   https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I/edit
   ```
   The long string between `/d/` and `/edit` is your **Sheet ID**.
4. Copy that ID into your `.env.local` file:
   ```
   GOOGLE_SHEET_ID=1A2B3C4D5E6F7G8H9I
   ```

---

## 3. Google Service Account (for automatic order logging)

A service account lets the app write to your Google Sheet without you having to log in manually.

**Step 1 — Create a Google Cloud project:**
1. Go to [https://console.cloud.google.com](https://console.cloud.google.com).
2. Click the project dropdown at the top, then click **New Project**.
3. Give it any name (e.g., "TagMint") and click **Create**.

**Step 2 — Enable the Sheets API:**
1. In the search bar at the top, search for **Google Sheets API**.
2. Click on it, then click **Enable**.

**Step 3 — Create a service account:**
1. Go to **IAM & Admin → Service Accounts** in the left sidebar.
2. Click **+ Create Service Account**.
3. Give it a name (e.g., "tagmint-sheets") and click **Create and Continue**.
4. Skip the optional role step and click **Done**.

**Step 4 — Get the credentials JSON:**
1. Click on the service account you just created.
2. Go to the **Keys** tab.
3. Click **Add Key → Create new key → JSON** and click **Create**.
4. A `.json` file will download to your computer. Open it.
5. Find the `"client_email"` value and copy it into `.env.local`:
   ```
   GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
   ```
6. Find the `"private_key"` value. It's a long string starting with `-----BEGIN PRIVATE KEY-----`. Copy the **entire value** (including begin/end lines) into `.env.local`. It must be wrapped in double quotes:
   ```
   GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nABC...\n-----END PRIVATE KEY-----\n"
   ```

**Step 5 — Share your Google Sheet with the service account:**
1. Open your Google Sheet.
2. Click the **Share** button (top-right).
3. Paste the service account email (from step 5 above) into the share field.
4. Set permission to **Editor** and click **Send**.

---

## 4. Gmail App Password (for sale notifications)

When a sale happens, the app emails you. Gmail requires an "App Password" instead of your regular password.

1. Go to your Google Account at [https://myaccount.google.com](https://myaccount.google.com).
2. Click **Security** in the left sidebar.
3. Make sure **2-Step Verification** is turned on (required for App Passwords).
4. Search for **App Passwords** in the search bar at the top of the page.
5. Select **Mail** as the app and **Other (Custom name)** as the device — type "TagMint".
6. Click **Generate**. Google will show you a 16-character password.
7. Copy it into `.env.local`:
   ```
   NOTIFY_EMAIL=your-gmail-address@gmail.com
   NOTIFY_EMAIL_PASSWORD=abcd efgh ijkl mnop
   OWNER_EMAIL=the-email-where-you-want-sale-alerts@example.com
   ```

> The `NOTIFY_EMAIL` is the Gmail account that **sends** the notification. `OWNER_EMAIL` is where you **receive** it (can be the same address).

---

## 5. Deploy to Vercel

Vercel hosts your app for free and makes it accessible online.

**Step 1 — Install and deploy:**
```bash
npx vercel
```
Follow the prompts. When asked about the framework, select **Next.js**.

**Step 2 — Add environment variables:**
1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard) and click your project.
2. Click **Settings → Environment Variables**.
3. Add each variable from your `.env.local` file one by one:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET` (you'll fill this in step 6)
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_SITE_URL` (set to your Vercel deployment URL, e.g. `https://tagmint.vercel.app`)
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`
   - `GOOGLE_SHEET_ID`
   - `OWNER_EMAIL`
   - `NOTIFY_EMAIL`
   - `NOTIFY_EMAIL_PASSWORD`
4. Click **Redeploy** to apply the new variables.

---

## 6. Stripe Webhook Setup

Webhooks let Stripe tell your app when a payment succeeds, so orders get logged and you get notified.

1. Go to [https://dashboard.stripe.com/webhooks](https://dashboard.stripe.com/webhooks).
2. Click **+ Add endpoint**.
3. In the **Endpoint URL** field, enter:
   ```
   https://your-vercel-domain.vercel.app/api/webhook
   ```
   (Replace with your actual Vercel URL from step 5.)
4. Under **Events to listen to**, click **+ Select events** and choose:
   - `checkout.session.completed`
5. Click **Add endpoint**.
6. On the next screen, click **Reveal** under **Signing secret** to see the `whsec_...` value.
7. Copy it and add it to Vercel's environment variables as `STRIPE_WEBHOOK_SECRET`, then redeploy.

**To test the webhook locally:**
1. Install the Stripe CLI: [https://stripe.com/docs/stripe-cli](https://stripe.com/docs/stripe-cli)
2. Run:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhook
   ```
3. The CLI will print a webhook signing secret — use that as `STRIPE_WEBHOOK_SECRET` in your `.env.local` for local testing.

---

## You're done!

Once everything is set up:
- Customers can check out and pay via Stripe.
- Every completed payment is automatically logged to your Google Sheet.
- You receive an email notification for every sale.
