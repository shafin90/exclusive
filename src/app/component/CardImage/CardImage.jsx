'use client'
import React, { useState } from 'react';
import { TbJewishStar } from 'react-icons/tb';
import { useDispatch } from 'react-redux'
import { add } from '@/redux/productListSlice/productListSlice'
import { addToWishList } from "@/redux/wishListSlice/wishListSlice"

const CardImage = ({ img, name, id, price, rating, available }) => {

    const [isHover, setIsHover] = useState(true)
    const dispatch = useDispatch()

    return (
        <div
            onMouseEnter={() => setIsHover(false)}
            onMouseLeave={() => setIsHover(true)}
            className=' relative w-full h-full'>

            <img
                src={img}
                alt="Microphone"
                loading="lazy" // Enable lazy loading
                className=" w-full h-full  relative"   // Make the image responsive
            />

            {/* wish icon */}
            <TbJewishStar
                onClick={()=>dispatch(addToWishList({img, name, id, price})) }
                className='text-2xl absolute top-4 bg-white rounded-full w-9 h-9 p-1 text-black cursor-pointer right-3 hover:rotate-90 transition-all hover:scale-125 hover:bg-black hover:text-white' />

            {/* Add to cart lebel */}
            <div style={{ width: "100%" }}
                onClick={() => { dispatch(add({ id, img, name, price, count: 1 })) }}
                className={
                    isHover
                        ?
                        'hidden' :
                        'cursor-pointer absolute bg-black text-white py-2 hover:py-4 hover:text-xl text-center bottom-0 transition-all'
                }
            >
                Add to cart
            </div>

        </div>
    );
};

export default CardImage;