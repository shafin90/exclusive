

import React from 'react';
import Tag from '../Tag/Tag';
import TagHeading from '../TagHeading/TagHeading';
import Card from '../Card/Card';
import './FlashSales.css'
import axios from 'axios';


const FlashSales = async () => {

    const response = await axios.get("http://localhost:3000/api/products");
    const allData = response.data; // get all the data



    return (
        <div style={{ borderBottom: "0.5px solid #b3b3b3" }} className=' w-auto mx-auto  pb-20  mb-20'>
            <Tag tagName="Today's"></Tag>

            {/* tag heading with card controller button */}
            <div className=' flex justify-between items-center'>
                <TagHeading tagHeading="Flash Sales"></TagHeading>
            </div>

            {/* Card collection */}
            <div className=' w-full overflow-hidden '>
                <div className=' w-full  flash_Sale_Container relative mb-8 overflow-x-scroll overflow-y-hidden'>
                    <div className=' h-full absolute  grid grid-rows-1  grid-cols-8 gap-5 transition-all'>
                        <Card
                            id={allData[9]._id}
                            key={allData[9]._id}
                            img={allData[9].img}
                            cardHeading={allData[9].name}
                            price={allData[9].price}
                            rating={allData[9].rating}
                            availabe={allData[9].availabe}
                        ></Card>

                        <Card
                            id={allData[10]._id}
                            key={allData[10]._id}
                            img={allData[10].img}
                            cardHeading={allData[10].name}
                            price={allData[10].price}
                            rating={allData[10].rating}
                            availabe={allData[10].availabe}
                        ></Card>

                        <Card
                            id={allData[4]._id}
                            key={allData[4]._id}
                            img={allData[4].img}
                            cardHeading={allData[4].name}
                            price={allData[4].price}
                            rating={allData[4].rating}
                            availabe={allData[4].availabe}
                        ></Card>

                        <Card
                            id={allData[30]._id}
                            key={allData[30]._id}
                            img={allData[30].img}
                            cardHeading={allData[30].name}
                            price={allData[30].price}
                            rating={allData[30].rating}
                            availabe={allData[30].availabe}
                        ></Card>

                        <Card
                            id={allData[16]._id}
                            key={allData[16]._id}
                            img={allData[16].img}
                            cardHeading={allData[16].name}
                            price={allData[16].price}
                            rating={allData[16].rating}
                            availabe={allData[16].availabe}
                        ></Card>

                        <Card
                            id={allData[25]._id}
                            key={allData[25]._id}
                            img={allData[25].img}
                            cardHeading={allData[25].name}
                            price={allData[25].price}
                            rating={allData[25].rating}
                            availabe={allData[25].availabe}
                        ></Card>

                        <Card
                            id={allData[35]._id}
                            key={allData[35]._id}
                            img={allData[35].img}
                            cardHeading={allData[35].name}
                            price={allData[35].price}
                            rating={allData[35].rating}
                            availabe={allData[35].availabe}
                        ></Card>

                        <Card
                            id={allData[33]._id}
                            key={allData[33]._id}
                            img={allData[33].img}
                            cardHeading={allData[33].name}
                            price={allData[33].price}
                            rating={allData[33].rating}
                            availabe={allData[33].availabe}
                        ></Card>
                    </div>
                </div>
            </div>


            {/* View all products button */}
            <div className=' relative '>
                <div className=' flex justify-center items-center w-100'>
                    <button
                        style={{ border: "1px solid black" }}
                        className=' bg-black text-white px-8 py-3 border-black hover:bg-white hover:text-black font-semibold transition-all mt-12 lg:mt-0 '>
                        View All Products
                    </button>
                </div>
            </div>


        </div>
    );
};

export default FlashSales;