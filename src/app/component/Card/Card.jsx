
import React from 'react';

import StarRating from "@/app/component/StarRating/StarRating";
import CardImage from '../CardImage/CardImage';

const Card = () => {
    return (
        <div className='w-80 bg-slate-100 pb-10 me-10'>
            {/* card image container */}
            <CardImage></CardImage>

            {/* Card heading */}
            <h1 className='font-bold my-1 text-lg ms-3 mt-3'>Gaming Console</h1>

            {/* Price */}
            <p className='text-sm ms-3 '>$120</p>

            {/* Star rating */}
            <div className='ms-3 flex justify-start items-center'>
                <StarRating ratings={3.5}></StarRating>
                <p className=' text-slate-800 ms-3 mt-2'>
                    (88)
                </p>
            </div>


        </div>
    );
};

export default Card;
