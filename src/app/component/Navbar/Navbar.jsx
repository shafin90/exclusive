import Link from 'next/link';
import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { TbJewishStar } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <div className=' flex justify-between items-center w-5/6 mx-auto mt-8 mb-6'>
            {/* Logo============ */}
            <Link href="" className=' text-black font-bold w-2/12 text-4xl '>Exclusive</Link>

            {/* menubar========== */}
            <ul className=' flex justify-between items-center w-4/12'>
                <li>
                    <Link href="" className=' font-semibold' >Home</Link>
                </li>

                <li>
                    <Link href="" className=' font-semibold'>Contact</Link>
                </li>

                <li>
                    <Link href="" className=' font-semibold'>About</Link>
                </li>

                <li>
                    <Link href="" className=' font-semibold'>Sign UP</Link>
                </li>
            </ul>

            {/* Searchbar and wishlist========= */}
            <div className='w-3/12 flex justify-between items-center'>
                {/* Input field and search icon */}
                <div className=' bg-slate-100 rounded-md flex justify-content-between  items-center w-10/12'>
                    
                    <input
                        type="text"
                        placeholder='What are you looking for?'
                        className='ps-5 py-4 text-sm bg-transparent outline-none w-10/12' />
                    
                    <IoIosSearch className='w-2/12 text-xl' />
                </div>

                {/* wish icon and car icon container div */}
                <div className='w-3/12 flex justify-end items-center'>
                    <TbJewishStar className=' text-xl relative right-2 cursor-pointer hover:rotate-45 transition-all hover:scale-125' />
                    <IoCartOutline className=' text-2xl cursor-pointer hover:scale-125 transition-all' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;