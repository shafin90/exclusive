import Link from 'next/link';
import React from 'react';
import { FaGoogle } from "react-icons/fa";
import Login from '@/app/component/Login/Login';


const page = () => {
    return (
        <div className=' mx-auto w-5/6 grid grid-rows-1 grid-cols-2 my-20'>

            {/* Image */}
            <div>
                <img
                    className=' w-full h-full'
                    src="/images/Side Image.jpg"
                    alt="" />
            </div>

            {/* Register form */}
            <Login></Login>
        </div>
    );
};

export default page;