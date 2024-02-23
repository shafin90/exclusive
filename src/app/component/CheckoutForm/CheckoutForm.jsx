// components/CheckoutForm.js
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'; // Import axios
import { useRouter } from 'next/navigation';
import { clearList } from '@/redux/productListSlice/productListSlice'

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const totalPriceAmount = useSelector((state) => state.totalPrice.value);
  const router = useRouter();
  const productListInCart = useSelector((state) => state.productList.value)
  const dispatch = useDispatch()

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
      // Send paymentMethod.id to your server using axios
      const { id } = paymentMethod;
      try {

        const response = await fetch('/api/stripe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: Math.round(totalPriceAmount * 100),
            currency: 'usd',
            paymentMethodId: id,
          }),
        });


        const data = await response.json();


        if (data.clientSecret) {
          alert("payment successfull")
          router.push('/')
          dispatch(clearList())
        } else {
          alert('Something went wrong. Try again.');
        }

        console.log("This is the data", data);
        // Handle the response from your server
      } catch (error) {
        console.error('Axios error:', error);
        alert('Something went wrong with the payment. Try again later.');
      }
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <CardElement className='border py-5 px-5' />
      <h1 className='font-bold text-2xl mt-5'>Total Amount: {totalPriceAmount}</h1>
      <button
        style={{ border: '1px solid black' }}
        type='submit'
        className='mt-5 hover:bg-white hover:text-black cursor-pointer transition-all px-10 py-3 bg-black text-white'
        disabled={loading}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
