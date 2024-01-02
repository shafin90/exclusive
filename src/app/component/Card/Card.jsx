
import React from 'react';

import StarRating from "@/app/component/StarRating/StarRating";

const Card = () => {
    return (
        <div className='w-80 bg-slate-100 pb-10'>
            <img
                src="https://wallpapercave.com/wp/wp4364789.jpg"
                alt="Microphone"
                loading="lazy" // Enable lazy loading
                className="w-full h-5/6" // Make the image responsive
            />
            <h1 className='font-bold my-1 text-lg ms-3 mt-3'>Gaming Console</h1>
            <p className='text-sm ms-3 mb-1'>$120</p>

            <div className='ms-3'>
               <StarRating ratings={3.5}></StarRating>
            </div>


        </div>
    );
};

export default Card;
