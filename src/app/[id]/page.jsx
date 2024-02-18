
import axios from 'axios';
import React from 'react';
import StarRating from '../component/StarRating/StarRating';
import { TbJewishStar } from 'react-icons/tb';
import Counter from '../component/Counter/Counter';
import Card from '../component/Card/Card';
import BuyNowBtn from '../component/BuyNowBtn/BuyNowBtn';

const page = async ({ params }) => {

    
    // fetching all data
    const response = await axios.get("http://localhost:3000/api/products");
    const allData = response.data; // get all the data

    // get the specific product
    const product = await allData.find(item => item?._id === params.id)

    // All products of this category
    const allProductsOfThisCategory = await allData.filter(item => item?.category === product?.category)



    return (
        <div className=' mx-auto w-5/6'>
            {/* path direction */}
            <p className=' text-gray-700 text-sm text-start mt-4'>
                Home/{product?.category}
            </p>

            {/* image and details div======================================= */}
            <div className=' grid grid-rows-1 grid-cols-2 gap-10 mt-20 mb-32'>

                {/* Product Image */}
                <div className=' overflow-hidden border'>
                    <img
                        className=' w-full h-full hover:scale-125 transition-all cursor-pointer'
                        src={product.img}
                        alt="" />
                </div>

                {/* product details */}
                <div>

                    {/* Product name */}
                    <h1 className=' text-4xl font-bold text-black mb-2'>{product.name}</h1>

                    {/* Ratings */}
                    <div className=' flex justify-start items-center w-full'>
                        <StarRating ratings={product.rating} ></StarRating>
                        <p className=' ms-3 text-gray-900 mt-1'>{product.rating} | <span className=' text-green-400 font-semibold ms-3'>InStock</span></p>
                    </div>

                    {/* Price */}
                    <h1 className='text-3xl font-medium mt-3 mb-10' >${product.price}</h1>

                    {/* Line */}
                    <hr />

                    {/* count the number of how much product getting sell,  buy now button, wish button */}
                    <div className=' flex justify-between items-center mt-5'>

                        {/* Counter =====*/}
                        <Counter></Counter>

                        {/* wish icon and Buy Now button */}
                        <div className=' flex justify-between items-center '>
                            {/* wish icon */}
                            <TbJewishStar
                                className='text-2xl  top-4 bg-white rounded-full w-9 h-9 p-1 text-black cursor-pointer right-3 hover:rotate-90 transition-all hover:scale-125 hover:bg-black hover:text-white me-5' />

                            {/* Buy now button===== */}
                            <BuyNowBtn product={product}></BuyNowBtn>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            {/* Related Items ----Tag */}
            <div className=' flex justify-start items-center mt-16 mb-6'>
                <div className=' bg-black w-10'>,</div>
                <p className=' ms-2 text-xl font-semibold'>Relatedt Items</p>
            </div>

            {/* related Product list */}
            <div className=' grid grid-rows-1 grid-cols-3 gap-4'>
                {allProductsOfThisCategory.slice(0, 3).map(item => <Card

                    img={item.img}
                    cardHeading={item.name}
                    price={item.price}
                    rating={item.rating}

                ></Card>)}
            </div>

        </div>
    );
};

export default page;