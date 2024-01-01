import Link from 'next/link';
import React from 'react';

const TopNavbar = () => {
    return (
        <div className=' w-full bg-black text-slate-50 text-center py-4'>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
            <Link href="" className=' ms-4 font-semibold'>Shop Now!!!</Link>
        </div>
    );
};

export default TopNavbar;