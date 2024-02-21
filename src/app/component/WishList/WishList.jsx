'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeFromWishList } from '@/redux/wishListSlice/wishListSlice'
import { add } from "@/redux/productListSlice/productListSlice"

const WishList = () => {

    const products = useSelector((state) => state.wishList.value)
    const dispatch = useDispatch()

    return (
        <div>
            {/* Product list */}
            <p className=' text-sm text-center text-gray-400 font-thin'> {
                products.length === 0 && "No more products availavle in the wish list"
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
                        <p className=' text-sm me-3'> {item.price}</p>

                        <button
                            style={{ border: "1px solid black" }}
                            onClick={() => {
                                dispatch(removeFromWishList(item.id))
                                dispatch(add(item))
                            }}
                            className=' px-4 py-3 text-sm bg-black text-white hover:bg-white hover:text-black transition-all  cursor-pointer'>
                            add to cart
                        </button>

                    </div>
                </div>)
            }
        </div>
    );
};

export default WishList;