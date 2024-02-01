import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe("sk_test_51OY48pCg3UF6njdMIGMex9SQFX49Hl36mb8yI20UV3M5HtIj3meONK8fF2YAaSp98DHENkED2aPt3JuI9Ypd7oXI00qqrB0fF5", {
  apiVersion: '2020-08-27',
});

export default async function handler(req= NextApiRequest, res = NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { amount, currency, paymentMethodId } = req.body;

      // Create a PaymentIntent
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        payment_method: paymentMethodId,
        confirm: true,
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
