import React from 'react';
import Tag from '../Tag/Tag';
import TagHeading from '../TagHeading/TagHeading';
import Card from '../Card/Card';

const BestSellingProducts = () => {
    return (
        <div className=' mb-40'>
            {/* Tag name */}
            <Tag tagName="This Month"></Tag>

            {/* tag heading with card controller button */}
            <div className=' flex flex-col lg:flex-row justify-between items-start lg:items-center'>
                <TagHeading tagHeading="Best Selling Products"></TagHeading>

                {/* Right left button */}
                <button style={{ border: "1px solid black" }} className=' transition-all hover:bg-white hover:text-black px-10 py-3 bg-black text-white font-semibold'>View All</button>
            </div>

            {/* Best selling product items */}
            <div className=' flex flex-col lg:flex-row justify-between items-center'>
                <Card BestSellingProducts={true}></Card>
                <Card BestSellingProducts={true}></Card>
                <Card BestSellingProducts={true}></Card>
                <Card BestSellingProducts={true}></Card>
            </div>


        </div>
    );
};

export default BestSellingProducts;