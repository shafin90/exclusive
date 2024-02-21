'use client'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '@/redux/productListSlice/productListSlice'
import {reducePrice} from "@/redux/totalPriceSlice/totalPriceSlice"
import { useRouter } from 'next/navigation';

const CartProductList = () => {
    
    const products = useSelector((state) => state.productList.value)
    const dispatch = useDispatch()
    const router = useRouter();
    
    return (
        <div className=' mx-auto w-5/6 mt-14'>
            {/* Product list */}
            <p className=' text-sm text-center text-gray-400 font-thin'> {
                products.length === 0 && "No more products availavle in the cart list"
            }</p>
            {
                products.map(item => <div className=' flex justify-between items-center'>

                    {/* image and name section */}
                    <div className=' flex justify-start items-center'>
                        <img src={item.img} className=' w-20 h-20' alt="" />
                        <p className=' tetx-sm ms-3'>{item.name}</p>
                    </div>


                    {/* price and cross button */}
                    <div className=' flex justify-end items-center'>
                        <p className=' text-sm me-3'>${item.price}</p>

                        <button
                            onClick={() => {
                                //  dispatching remove reducer from productListSlice to remove product item from the list 
                                dispatch(remove(item.id))

                                // dispatching reducePrice reducer from totalPriceSlice to reduce total price as the product is being deleted
                                dispatch(reducePrice(item.price))
                                console.log(item.price)

                            }}
                            className=' text-2xl transition-all hover:rotate-180 cursor-pointer'>
                            X
                        </button>

                    </div>
                </div>)
            }

            {/* Checkout button */}
            <div className=' flex justify-center items-center mt-8'>
                <button
                    onClick={() => router.push('/checkOut')}
                    style={{ border: "1px solid black" }}
                    className=' px-5 py-3 bg-black hover:bg-white text-white hover:text-black transition-all cursor-pointer'>
                    CheckOut Page
                </button>
            </div>
        </div>
    );
};

export default CartProductList;