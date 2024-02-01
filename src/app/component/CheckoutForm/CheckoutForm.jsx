// components/CheckoutForm.js
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    setLoading(false);

    if (error) {
      console.error(error);
    } else {
      // Send paymentMethod.id to your server
      const { id } = paymentMethod;
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 1000, currency: 'usd', paymentMethodId: id }),
      });

      const data = await response.json();
      console.log(data);

      // Handle the response from your server
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button
        style={{ border: "1px solid black" }}
        type="submit" 
        className=' mt-5 hover:bg-white hover:text-black cursor-pointer transition-all px-10 py-3 bg-black text-white' 
        disabled={loading}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
