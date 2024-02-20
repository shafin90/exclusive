import React from 'react';
import StarRating from "@/app/component/StarRating/StarRating";
import CardImage from '../CardImage/CardImage';
import { zero } from '@/redux/counterSlice/counterSlice'
import DetailsBtnForCard from '../DetailsBtnForCard/DetailsBtnForCard';

const Card = ({ BestSellingProducts, img, cardHeading, price, rating, availabe, id }) => {

    return (
        <div
            style={{ border: "2px solid #f3f4f6" }}
            className={BestSellingProducts ? ' overflow-hidden mt-10 lg:mt-0 w-100 bg-gray-100 pb-10' : ' mt-10 lg:mt-0 w-100 bg-gray-100 pb-10 overflow-hidden'} >

            {/* card image container =================*/}
            <div className=' w-full h-72'>
                <CardImage
                    id={id}
                    price={price}
                    name={cardHeading}
                    img={img ? img : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhS46OiS9co1oXup4UMf-NjtXAwJ1ewECm5nWl6n6Zd5yfvL4UM1byEtXo6ZjaVy-pXzb6ZSOXzjg3fJYViKHDBo8mCvxEtzgmFF5HtjHUGAdp9cu0LEDO3_Tued_66QEiIkDVPyZsRaWjI1Myf8kMRzjWnsdi3lCW_hvfD5KK4GeQ825iCpNVRFATU/s1920/Dark%20Winds%20Tv%20Series.jpg"}></CardImage>
            </div>

            {/* Card heading =========================*/}
            <h1 className='font-bold my-1 text-lg ms-4 mt-3'>
                {cardHeading ? cardHeading : "Gaming Console"}
            </h1>


            {/* Price ===================================*/}
            <p className='text-sm ms-4 '>
                {price ? price : "120"}$
            </p>

            {/* Star rating ========================*/}
            <div className='ms-4 flex justify-start items-center'>
                <StarRating ratings={rating ? rating : 3.5}></StarRating>
                <p className=' text-slate-800 ms-3 mt-2'>
                    {availabe ? availabe : "90"}
                </p>
            </div>

            {/* Details Button========================= */}
            <DetailsBtnForCard
                pathName={`/allPages/${id}`}
            ></DetailsBtnForCard>

        </div>
    );
};

export default Card;
