import React from 'react';
import Tag from '../Tag/Tag';
import TagHeading from '../TagHeading/TagHeading';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import Card from '../Card/Card';

const OurProducts = () => {
    return (
        <div className=' mb-80'>
            {/* Tag Name==== */}
            <Tag tagName="Our Products"></Tag>

            {/* Tag Heading========== */}
            <TagHeading tagHeading="Explore Our Products"></TagHeading>

            {/* Our product items first row */}
            <div className=' flex flex-col lg:flex-row justify-between items-center mb-4'>
                <Card BestSellingProducts={true}></Card>
                <Card BestSellingProducts={true}></Card>
                <Card BestSellingProducts={true}></Card>
                <Card BestSellingProducts={true}></Card>
            </div>

            {/* Our product items Second row */}
            <div className=' flex flex-col lg:flex-row justify-between items-center mb-16'>
                <Card BestSellingProducts={true}></Card>
                <Card BestSellingProducts={true}></Card>
                <Card BestSellingProducts={true}></Card>
                <Card BestSellingProducts={true}></Card>
            </div>


            {/* View all products button======= */}
            <div className=' relative  '>
                <div className=' flex justify-center items-center w-100'>
                    <button style={{ border: "1px solid black" }} className=' bg-black text-white px-8 py-3 border-black hover:bg-white hover:text-black font-semibold transition-all'>
                        View All Products
                    </button>
                </div>
            </div>

        </div>
    );
};

export default OurProducts;