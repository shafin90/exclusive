'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { add } from '@/redux/productListSlice/productListSlice'


const BuyNowBtn = ({ product }) => {
    const router = useRouter();
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
    console.log(count)
    return (
        <button
            onClick={() => {
                router.push("/checkOut")
                dispatch(add({
                    id: product._id,
                    name: product.name, 
                    img: product.img, 
                    price: (product.price*count).toFixed(2), 
                    count: count
                }))
            }}
            style={{ border: " 1px solid black" }}
            className='cursor-pointer transition-all hover:bg-white hover:text-black bg-black px-5 py-3 text-white'>
            Buy Now
        </button>
    );
};

export default BuyNowBtn;