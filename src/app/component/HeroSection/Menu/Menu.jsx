'use client'

import Link from 'next/link';
import React from 'react';
import { TfiYoutube } from "react-icons/tfi";
import { FaHeadphones } from "react-icons/fa";
import { IoWatchOutline } from "react-icons/io5";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { IoGameControllerSharp } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { LuMonitor } from "react-icons/lu";
import { FaComputer } from "react-icons/fa6";
import { IoBicycle } from "react-icons/io5";
import { useRouter } from 'next/navigation';


const Menu = () => {
    const router = useRouter();
    return (
        <div className=' hidden lg:block  w-3/12 border-r'>
            <ul>
                <li
                    onClick={() => router.push("/youtube")}
                    className='cursor-pointer hover:ps-2 flex justify-start items-center py-4 border-b  bg-white hover:bg-slate-100 transition-all'>
                    <TfiYoutube className='text-2xl me-2' />
                    <Link href="/youtube">Youtube Studio Gears</Link>
                </li>

                <li className='cursor-pointer hover:ps-2 flex justify-start items-center py-4 border-b  bg-white hover:bg-slate-100 transition-all'>
                    <FaHeadphones className='text-xl me-3' />
                    <Link href="">HeadPhone & EarPhone</Link>
                </li>

                <li className='cursor-pointer hover:ps-2 flex justify-start items-center py-4 border-b  bg-white hover:bg-slate-100 transition-all'>
                    <IoWatchOutline className='text-xl me-3' />
                    <Link href="">Watch Collection</Link>
                </li>

                <li className='cursor-pointer flex justify-start items-center py-4 border-b  bg-white hover:bg-slate-100 transition-all hover:ps-2'>
                    <MdOutlineAddHomeWork className='text-xl me-3' />
                    <Link href="">Home Appliances</Link>
                </li>

                <li className='cursor-pointer flex justify-start items-center py-4 border-b  bg-white hover:bg-slate-100 transition-all hover:ps-2'>
                    <IoGameControllerSharp className='text-xl me-3' />
                    <Link href="">Game</Link>
                </li>

                <li className='cursor-pointer flex justify-start items-center py-4 border-b  bg-white hover:bg-slate-100 transition-all hover:ps-2'>
                    <FaCameraRetro className='text-xl me-3' />
                    <Link href="">Camera</Link>
                </li>

                <li className='cursor-pointer flex justify-start items-center py-4 border-b  bg-white hover:bg-slate-100 transition-all hover:ps-2'>
                    <LuMonitor className='text-xl me-3' />
                    <Link href="">Telivishion</Link>
                </li>

                <li className='cursor-pointer flex justify-start items-center py-4 border-b  bg-white hover:bg-slate-100 transition-all hover:ps-2'>
                    <FaComputer className='text-xl me-3' />
                    <Link href="">Computer & Office</Link>
                </li>

                <li className='cursor-pointer flex justify-start items-center py-4 border-b bg-white hover:bg-slate-100 transition-all hover:ps-2'>
                    <IoBicycle className='text-xl me-3' />
                    <Link href="">Bicycle & Accessories</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;