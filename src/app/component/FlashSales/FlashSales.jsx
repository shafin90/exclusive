'use client'

import React, { useState } from 'react';
import Tag from '../Tag/Tag';
import TagHeading from '../TagHeading/TagHeading';
import Card from '../Card/Card';
import './FlashSales.css'


const FlashSales = () => {

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
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>

                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
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