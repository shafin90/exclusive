import React from 'react';
import axios from 'axios';
import CategorisedProducts from '@/app/component/CategorisedProducts/CategorisedProducts';

const page = async () => {

    const response = await axios.get("http://localhost:3000/api/products");
    const allData = await response.data; // get all the data

    let youtubeData = await allData.filter(item => item.category === "Youtube Studio Gear");// get all youtube related products
    
    return (
        <div className=' w-10/12 mx-auto mt-14'>
            <CategorisedProducts products={youtubeData} ></CategorisedProducts>
        </div>
    );
};

export default page;