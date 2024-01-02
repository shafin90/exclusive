import Link from 'next/link';
import React from 'react';
import { BiFemale } from "react-icons/bi";
import { FaMale } from "react-icons/fa";
import { CgSmartHomeWashMachine } from "react-icons/cg"
import { IoHome } from "react-icons/io5";
import { AiFillMedicineBox } from "react-icons/ai";
import { MdOutlineSportsScore } from "react-icons/md";
import { FaBaby } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";

const Menu = () => {
    return (
        <div className=' w-3/12 border-r'>
            <ul>
                <li className=' flex justify-start items-center py-4 border-b cursor-pointer bg-white hover:bg-slate-100 transition-all'>
                    <BiFemale className='text-2xl me-2' />
                    <Link href="">Womans Fashion</Link>
                </li>

                <li className='flex justify-start items-center py-4 border-b cursor-pointer bg-white hover:bg-slate-100 transition-all'>
                    <FaMale className='text-xl me-3' />
                    <Link href="">Mens Fashion</Link>
                </li>

                <li className='flex justify-start items-center py-4 border-b cursor-pointer bg-white hover:bg-slate-100 transition-all'>
                    <CgSmartHomeWashMachine className='text-xl me-3' />
                    <Link href="">Electronics</Link>
                </li>

                <li className='flex justify-start items-center py-4 border-b cursor-pointer bg-white hover:bg-slate-100 transition-all'>
                    <IoHome className='text-xl me-3' />
                    <Link href="">Home & Lifestyle</Link>
                </li>

                <li className='flex justify-start items-center py-4 border-b cursor-pointer bg-white hover:bg-slate-100 transition-all'>
                    <AiFillMedicineBox className='text-xl me-3' />
                    <Link href="">Medicine</Link>
                </li>

                <li className='flex justify-start items-center py-4 border-b cursor-pointer bg-white hover:bg-slate-100 transition-all'>
                    <MdOutlineSportsScore className='text-xl me-3' />
                    <Link href="">Sports & Outdoor</Link>
                </li>

                <li className='flex justify-start items-center py-4 border-b cursor-pointer bg-white hover:bg-slate-100 transition-all'>
                    <FaBaby className='text-xl me-3' />
                    <Link href="">Babys & Toys</Link>
                </li>

                <li className='flex justify-start items-center py-4 border-b cursor-pointer bg-white hover:bg-slate-100 transition-all'>
                    <MdLocalGroceryStore className='text-xl me-3' />
                    <Link href="">Groceries & Pets</Link>
                </li>

                <li className='flex justify-start items-center py-4 border-b cursor-pointer bg-white hover:bg-slate-100 transition-all'>
                    <MdHealthAndSafety className='text-xl me-3' />
                    <Link href="">Health & Beauty</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;