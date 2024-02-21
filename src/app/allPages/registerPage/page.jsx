import Link from 'next/link';
import React from 'react';
import Register from '@/app/component/Card/Card';

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

            {/* Register page */}
            <Register></Register>
        </div>
    );
};

export default page;