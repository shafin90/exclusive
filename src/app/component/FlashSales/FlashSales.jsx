'use client'

import React, { useState } from 'react';
import Tag from '../Tag/Tag';
import TagHeading from '../TagHeading/TagHeading';
import Card from '../Card/Card';
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

const FlashSales = () => {

    const [moveLeftToRight, setMoveLeftToRight] = useState(0);

    return (
        <div style={{ borderBottom: "0.5px solid #b3b3b3" }} className=' w-auto mx-auto  pb-20  mb-20'>
            <Tag tagName="Today's"></Tag>

            {/* tag heading with card controller button */}
            <div className=' flex justify-between items-center'>
                <TagHeading tagHeading="Flash Sales"></TagHeading>

                {/* Right left button */}
                <div className=' flex justify-between items-center'>

                    <BsArrowLeftCircleFill

                        onClick={() => {
                            if (moveLeftToRight < 0) {
                                setMoveLeftToRight(moveLeftToRight + 600)
                            } else {
                                setMoveLeftToRight(0)
                            }
                        }
                        }

                        className=' me-4 text-2xl hover:text-3xl cursor-pointer' />

                    <BsArrowRightCircleFill

                        onClick={() => {
                            if (moveLeftToRight > -1000) {
                                setMoveLeftToRight(moveLeftToRight - 600)
                            } else {
                                setMoveLeftToRight(-1700)
                            }

                        }}
                        className=' text-2xl hover:text-3xl cursor-pointer' />
                </div>
            </div>

            {/* Card collection */}
            <div className=' relative h-96 mb-12'>
                <div style={{ left: moveLeftToRight + "px", transition: "left 1s ease-in-out" }}
                    className='absolute flex justify-between items-center transition-all'>
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