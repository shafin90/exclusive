
import React from 'react';

import StarRating from "@/app/component/StarRating/StarRating";
import CardImage from '../CardImage/CardImage';

const Card = ({BestSellingProducts}) => {
    return (
        <div className={BestSellingProducts?'mt-10 lg:mt-0 w-80 bg-slate-100 pb-10 me-3':' mt-10 lg:mt-0 w-80 bg-slate-100 pb-10 me-10'} >
            {/* card image container */}
            <CardImage></CardImage>

            {/* Card heading */}
            <h1 className='font-bold my-1 text-lg ms-4 mt-3'>Gaming Console</h1>

            {/* Price */}
            <p className='text-sm ms-4 '>$120</p>

            {/* Star rating */}
            <div className='ms-4 flex justify-start items-center'>
                <StarRating ratings={3.5}></StarRating>
                <p className=' text-slate-800 ms-3 mt-2'>
                    (88)
                </p>
            </div>


        </div>
    );
};

export default Card;
