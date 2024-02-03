'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '@/redux/productListSlice/productListSlice'
import {reducePrice} from "@/redux/totalPriceSlice/totalPriceSlice"

const CartList = () => {
    const products = useSelector((state) => state.productList.value);
    const dispatch = useDispatch()
    
    return (
        <div className=' overflow-y-scroll border p-4 '>
            <div className=' h-96'>
                {products.map((product, index) => (
                    <div key={index} className='w-full flex justify-between items-center mb-4'>
                        {/* name and image of product */}
                        <div className='flex justify-start items-center'>
                            <img
                                className='w-16 h-16'
                                src={product.img}
                                alt="" />
                            <h1 className='font-medium text-black text-sm ms-3'>
                                {product.name}
                            </h1>
                        </div>

                        <p className=' text-sm text-black'>
                            {product.count}
                        </p>

                        {/* Price and cross button================== */}
                        <div className=' flex justify-end items-center'>
                            {/* price of product */}
                            <div className=' me-4'>
                                <p className=' text-sm'>  ${product.price}</p>
                            </div>

                            {/* cross button to cancel the product */}
                            <button
                                onClick={() => {
                                    // dispatching remove reducer from productListSlice to remove item from the list
                                    dispatch(remove(product.id))
                                    
                                    // dispatching reducePrice reducer from totalPriceSlice to reduce total price as the product is being deleted
                                    dispatch(reducePrice(product.price))
                                    console.log(product.price)
                                }}
                                className=' text-2xl hover:rotate-180 transition-all cursor-pointer'>
                                x
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartList;
