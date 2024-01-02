'use client'
import React, { useState } from 'react';
import { TbJewishStar } from 'react-icons/tb';


const CardImage = () => {
    const [isHover, setIsHover] = useState(true)
    return (
        <div
            onMouseEnter={() => setIsHover(false)}
            onMouseLeave={() => setIsHover(true)}
            className=' relative w-full h-5/6'>

            <img
                src="https://wallpapercave.com/wp/wp4364789.jpg"
                alt="Microphone"
                loading="lazy" // Enable lazy loading
                className="w-100  h-100  relative"   // Make the image responsive
            />

            {/* wish icon */}
            <TbJewishStar className='text-2xl absolute top-4 text-white right-3 hover:rotate-90 transition-all hover:scale-125'/>

            {/* Add to cart lebel */}
            <div style={{ width: "100%" }}
                className={
                    isHover
                        ?
                        'hidden' :
                        'absolute bg-black text-white py-2 hover:py-4 hover:text-xl text-center bottom-0 transition-all'
                }
            >
                Add to cart
            </div>

        </div>
    );
};

export default CardImage;