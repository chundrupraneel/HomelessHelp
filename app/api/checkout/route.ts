import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { siteConfig } from "@/lib/site-config";

const MIN_CENTS = 100;
const MAX_CENTS = 100000_00;

export async function POST(request: NextRequest) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      { error: "Card donations aren't set up yet. Please use Venmo or Zelle below." },
      { status: 503 },
    );
  }

  const body = await request.json().catch(() => null);
  const amount = body?.amount;

  if (!Number.isInteger(amount) || amount < MIN_CENTS || amount > MAX_CENTS) {
    return NextResponse.json({ error: "Enter an amount between $1 and $100,000." }, { status: 400 });
  }

  const origin = request.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    submit_type: "donate",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: amount,
          product_data: {
            name: `Donation to ${siteConfig.name}`,
            description: "Supports collecting and assembling care kits for people experiencing homelessness.",
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/donate/cancel`,
  });

  return NextResponse.json({ url: session.url });
}
