import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe("sk_test_51OY48pCg3UF6njdMIGMex9SQFX49Hl36mb8yI20UV3M5HtIj3meONK8fF2YAaSp98DHENkED2aPt3JuI9Ypd7oXI00qqrB0fF5", {
  apiVersion: '2020-08-27',
});

export async function POST(request = NextRequest) {
  if (request.method === 'POST') {
    try {
      const { amount, currency, paymentMethodId } = await request.json();

      console.log("This is amount, currency and id",amount, currency, paymentMethodId)

      // Create a PaymentIntent
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        payment_method: paymentMethodId,
        confirm: true,
      });

      return NextResponse.json({ clientSecret: paymentIntent.client_secret }, { status: 200 });
    } catch (error) {
      console.error('Stripe error:', error);
    
      if (error.type === 'StripeCardError') {
        // The card was declined
        return NextResponse.json({ error: error.message, type: error.type }, { status: 400 });
      } else {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
      }
    }
  } else {
    return NextResponse.plain('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
  }
}
