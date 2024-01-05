'use client'
import React, { useState } from 'react';
import { TbJewishStar } from 'react-icons/tb';


const CardImage = ({img}) => {
    const [isHover, setIsHover] = useState(true)
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
            <TbJewishStar className='text-2xl absolute top-4 text-gray-700 cursor-pointer right-3 hover:rotate-90 transition-all hover:scale-125'/>

            {/* Add to cart lebel */}
            <div style={{ width: "100%" }}
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