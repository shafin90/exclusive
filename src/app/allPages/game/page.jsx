import axios from 'axios';
import React from 'react';
import { FaHeadphones } from 'react-icons/fa';
import Card from '../component/Card/Card';

const page = async () => {
    const response = await axios.get("http://localhost:3000/api/products");
    const allData = response.data; // get all the data

    const gameData = allData.filter(item => item.category === "Game");// get all youtube related products



    return (
        <div className=' w-10/12 mx-auto mt-14'>

            {/* Category Logo, Filtering, Sorting */}
            <div className=' flex justify-between items-center mb-10  border-b pb-9'>

                {/* Category Logo =========*/}
                <div className='flex justify-start items-center '>
                    <div className=' w-20 bg-black h-12'>,</div>
                    <FaHeadphones className='text-5xl ms-1' />
                </div>

                {/* Filtering =========*/}
                <div className=' flex justify-between items-center'>

                    {/* Minimum price */}
                    <div className=' me-5 flex justify-between items-center'>
                        <label className=' me-2'>min: </label>
                        <input type="text" className=' border outline-none px-3 py-2 w-32 me-2' />
                        <span>$</span>
                    </div>

                    {/* Maximum price */}
                    <div className='flex justify-between items-center'>
                        <label className=' me-2'>max:</label>
                        <input type="text" className=' border outline-none px-3 py-2 w-32 me-2' />
                        <span>$</span>
                    </div>
                </div>

                {/* Sorting */}
                <div className=' flex justify-end items-center'>
                    <select className=' outline-none border px-4 py-3'>
                        {/* ascending order */}
                        <option value="ascending" className=' hover:bg-black cursor-pointer'>
                            Ascending
                        </option>

                        {/* Discending order */}
                        <option value="discending">
                            Discending
                        </option>
                    </select>
                </div>
            </div>




            {/* Youtube studio related product collections */}
            <div className=' w-full grid md:grid-rows-5 md:grid-cols-2   lg:grid-rows-3 lg:grid-cols-3  gap-3'>

                {
                    gameData.map(item => <Card
                        img={item.img}
                        cardHeading={item.name}
                        price={item.price}
                        rating={item.rating}
                        category={item.category}
                        available={item.available}
                    ></Card>)
                }

            </div>

        </div>
    );
};

export default page;