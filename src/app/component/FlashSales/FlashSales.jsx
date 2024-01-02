import React from 'react';
import Tag from '../Tag/Tag';
import TagHeading from '../TagHeading/TagHeading';
import Card from '../Card/Card';
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
const FlashSales = () => {
    return (
        <div className=' w-auto mx-auto  pb-20 border-b-black'>
            <Tag tagName="Today's"></Tag>

            {/* tag heading with card controller button */}
            <div className=' flex justify-between items-center'>
                <TagHeading></TagHeading>

                {/* Right left button */}
                <div className=' flex justify-between items-center'>
                    <BsArrowLeftCircleFill className=' me-4 text-2xl hover:text-3xl transition-all' />
                    <BsArrowRightCircleFill className=' text-2xl hover:text-3xl transition-all' />
                </div>
            </div>

            {/* Card collection */}
            <div className=' relative h-96 mb-12'>
                <div className='absolute  flex justify-between items-center'>
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
            <div className=' relative  '>
                <div className=' flex justify-center items-center w-100'>
                    <button style={{ border:"1px solid black"}} className=' bg-black text-white px-8 py-3 border-black hover:bg-white hover:text-black font-semibold transition-all'>
                        View All Products
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FlashSales;