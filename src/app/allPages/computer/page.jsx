import axios from 'axios';
import React from 'react';
import CategorisedProducts from '@/app/component/CategorisedProducts/CategorisedProducts';

const page = async () => {
    const response = await axios.get("http://localhost:3000/api/products");
    const allData = response.data; // get all the data

    const computerData = allData.filter(item => item.category === "Computer & Office");// get all youtube related products

    return (
        <div className=' w-10/12 mx-auto mt-14'>
            <CategorisedProducts
                products={computerData}
            ></CategorisedProducts>
        </div>
    );
};

export default page;