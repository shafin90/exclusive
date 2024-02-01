import React from 'react';
import Tag from '../Tag/Tag';
import TagHeading from '../TagHeading/TagHeading';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import Card from '../Card/Card';
import axios from 'axios';

const OurProducts = async () => {

    const { data } = await axios.get("http://localhost:3000/api/products")


    return (
        <div className=' mb-80'>
            {/* Tag Name==== */}
            <Tag tagName="Our Products"></Tag>

            {/* Tag Heading========== */}
            <TagHeading tagHeading="Explore Our Products"></TagHeading>

            {/* Our product items first row */}
            <div className=' grid md:grid-rows-4 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 gap-3 mb-14'>
                <Card
                    BestSellingProducts={true}
                    id={data[20]._id}
                    key={data[20]._id}
                    img={data[20].img}
                    cardHeading={data[20].name}
                    price={data[20].price}
                    rating={data[20].rating}
                    availabe={data[20].availabe}
                ></Card>

                <Card
                    BestSellingProducts={true}
                    id={data[25]._id}
                    key={data[25]._id}
                    img={data[25].img}
                    cardHeading={data[25].name}
                    price={data[25].price}
                    rating={data[25].rating}
                    availabe={data[25].availabe}
                ></Card>

                <Card
                    BestSellingProducts={true}
                    id={data[21]._id}
                    key={data[21]._id}
                    img={data[21].img}
                    cardHeading={data[21].name}
                    price={data[21].price}
                    rating={data[21].rating}
                    availabe={data[21].availabe}
                ></Card>

                <Card
                    BestSellingProducts={true}
                    id={data[16]._id}
                    key={data[16]._id}
                    img={data[16].img}
                    cardHeading={data[16].name}
                    price={data[16].price}
                    rating={data[16].rating}
                    availabe={data[16].availabe}
                ></Card>


                <Card
                    BestSellingProducts={true}
                    id={data[12]._id}
                    key={data[12]._id}
                    img={data[12].img}
                    cardHeading={data[12].name}
                    price={data[12].price}
                    rating={data[12].rating}
                    availabe={data[12].availabe}
                ></Card>

                <Card
                    BestSellingProducts={true}
                    id={data[24]._id}
                    key={data[24]._id}
                    img={data[24].img}
                    cardHeading={data[24].name}
                    price={data[24].price}
                    rating={data[24].rating}
                    availabe={data[24].availabe}
                ></Card>

                <Card
                    BestSellingProducts={true}
                    id={data[30]._id}
                    key={data[30]._id}
                    img={data[30].img}
                    cardHeading={data[30].name}
                    price={data[30].price}
                    rating={data[30].rating}
                    availabe={data[30].availabe}
                ></Card>

                <Card
                    BestSellingProducts={true}
                    id={data[29]._id}
                    key={data[29]._id}
                    img={data[29].img}
                    cardHeading={data[29].name}
                    price={data[29].price}
                    rating={data[29].rating}
                    availabe={data[29].availabe}
                ></Card>
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