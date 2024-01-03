
import Link from 'next/link';
import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

const TopNavbar = () => {
    return (
        <div className=' w-full bg-black text-slate-50  flex justify-center items-center py-3'>
            {/* <AnimatedCursor
                color='53,56,61'
            /> */}
            <p className=' text-sm'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <Link href="" className=' ms-4 font-semibold text-sm'>Shop Now!!!</Link>
        </div>
    );
};

export default TopNavbar;