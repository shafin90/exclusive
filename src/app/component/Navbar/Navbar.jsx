'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { TbJewishStar } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";
import { SlLogin } from "react-icons/sl";

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(null);
    useEffect(()=>{
        setWindowWidth(window.innerWidth);
    },[])
   
    return (
        <div className=' flex justify-between items-center w-5/6 mx-auto mt-8 mb-6'>
            {/* Logo============ */}
            <Link href="" className=' text-black font-bold w-2/12 sm:text-2xl md:text-2xl lg:text-4xl '>Exclusive</Link>

            {/* menubar========== */}
            <ul className={windowWidth>1024?'flex justify-between items-center xl:w-3/12 2xl:w-3/12':"hidden"} >
                <li>
                    <Link href="" className=' font-semibold'>Home</Link>
                </li>

                <li>
                    <Link href="" className=' font-semibold'>Contact</Link>
                </li>

                <li>
                    <Link href="" className=' font-semibold'>About Us</Link>
                </li>
            </ul>

            {/* Searchbar and wishlist========= */}
            <div className=' sm:w-8/12 md:w-8/12 xl:w-5/12 2xl:w-5/12 flex justify-between items-center'>
                {/* Input field and search icon */}
                <div className=' bg-slate-100 rounded flex justify-content-between  items-center w-8/12'>

                    <input
                        type="text"
                        placeholder='What are you looking for?'
                        className='ps-5 py-4 text-sm bg-transparent w-10/12 border-none outline-none focus:border-none'
                    />
                    <IoIosSearch className='w-2/12 text-xl' />
                </div>

                {/* wish icon and cart icon container div */}
                <div className='w-3/12 flex justify-between items-center'>
                    <TbJewishStar className=' text-xl relative right-2  hover:rotate-90 transition-all hover:scale-125 cursor-pointer' />
                    <IoCartOutline className=' text-2xl  hover:scale-125 transition-all cursor-pointer' />
                    <SlLogin  className=' text-2xl  hover:scale-125 transition-all cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;