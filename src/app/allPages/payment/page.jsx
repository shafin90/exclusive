'use client'

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/app/component/CheckoutForm/CheckoutForm';

const stripePromise = loadStripe("pk_test_51OY48pCg3UF6njdMXYwA7KnDAXPU64Spvu2xdQmgH0ggjM57bwH5T8X6iyY3G3w299SUGQa6wWdFlZpaqprQGVlq00iDqMKDhL");

export default function Checkout() {
  return (
    <div className=' w-full md:w-7/12 mx-auto mt-24'>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
