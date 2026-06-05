import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "sk_test_placeholder", {
  apiVersion: "2026-05-27.dahlia"
});

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 10000, // $100.00 in cents
      currency: "usd",
      receipt_email: email,
      description: "Klaudium Studio Course",
      metadata: { name, email }
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
