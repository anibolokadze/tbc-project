import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET);

export const GET = async () => {
  try {
    const paymentIntents = await stripe.paymentIntents.list({
      limit: 100, // Adjust the limit as needed
    });

    const successfulPayments = paymentIntents.data.filter(
      (intent: { status: string }) => intent.status === "succeeded"
    );
    console.log("payment details", successfulPayments);
    return NextResponse.json({ orders: successfulPayments });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
