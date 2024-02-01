import React from 'react';
import Tag from '../Tag/Tag';
import TagHeading from '../TagHeading/TagHeading';
import Card from '../Card/Card';
import axios from 'axios';

const BestSellingProducts = async () => {

    const { data } = await axios.get("http://localhost:3000/api/products")

    return (
        <div className=' mb-40'>
            {/* Tag name ========================================================*/}
            <Tag tagName="This Month"></Tag>

            {/* tag heading with card controller button ==========================*/}
            <div className=' flex flex-col lg:flex-row justify-between items-start lg:items-center'>
                <TagHeading tagHeading="Best Selling Products"></TagHeading>

                {/* Right left button =============================================*/}
                <button style={{ border: "1px solid black" }} className=' transition-all hover:bg-white hover:text-black px-10 py-3 bg-black text-white font-semibold'>View All</button>
            </div>

            {/* Best selling product items ========================================*/}
            <div className=' grid  md:grid-rows-2 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3  gap-4'>
                <Card
                    BestSellingProducts={true}
                    id={data[32]._id}
                    key={data[32]._id}
                    img={data[32].img}
                    cardHeading={data[32].name}
                    price={data[32].price}
                    rating={data[32].rating}
                    availabe={data[32].availabe}
                ></Card>

                <Card
                    BestSellingProducts={true}
                    id={data[26]._id}
                    key={data[26]._id}
                    img={data[26].img}
                    cardHeading={data[26].name}
                    price={data[26].price}
                    rating={data[26].rating}
                    availabe={data[26].availabe}
                ></Card>

                <Card
                    BestSellingProducts={true}
                    id={data[23]._id}
                    key={data[23]._id}
                    img={data[23].img}
                    cardHeading={data[23].name}
                    price={data[23].price}
                    rating={data[23].rating}
                    availabe={data[23].availabe}
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


        </div>
    );
};

export default BestSellingProducts;