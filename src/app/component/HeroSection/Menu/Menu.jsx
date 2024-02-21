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
                    onClick={() => router.push("/allPages/youtube")}
                    className='cursor-pointer hover:ps-2 flex justify-start items-center py-4 border-b  bg-white hover:bg-gray-100 transition-all'>
                    <TfiYoutube className='text-2xl me-2' />
                    <Link href="/allPages/youtube">Youtube Studio Gears</Link>
                </li>

                <li
                    onClick={() => router.push("/allPages/headPhone")}
                    className='cursor-pointer hover:ps-2 flex justify-start items-center py-4 border-b  bg-white hover:bg-gray-100 transition-all'>
                    <FaHeadphones className='text-xl me-3' />
                    <Link href="/allPages/headPhone">HeadPhone & EarPhone</Link>
                </li>

                <li
                    onClick={() => router.push("/allPages/watch")}
                    className='cursor-pointer hover:ps-2 flex justify-start items-center py-4 border-b  bg-white hover:bg-gray-100 transition-all'>
                    <IoWatchOutline className='text-xl me-3' />
                    <Link href="/allPages/watch">Watch Collection</Link>
                </li>

                <li
                    onClick={() => router.push("/allPages/homeApplicance")}
                    className='cursor-pointer flex justify-start items-center py-4 border-b  bg-white hover:bg-gray-100 transition-all hover:ps-2'>
                    <MdOutlineAddHomeWork className='text-xl me-3' />
                    <Link href="/allPages/homeApplicance">Home Appliances</Link>
                </li>

                <li
                    onClick={() => router.push("/allPages/game")}
                    className='cursor-pointer flex justify-start items-center py-4 border-b  bg-white hover:bg-gray-100 transition-all hover:ps-2'>
                    <IoGameControllerSharp className='text-xl me-3' />
                    <Link href="/allPages/game">Game</Link>
                </li>

                <li
                    onClick={() => router.push("/allPages/camera")}
                    className='cursor-pointer flex justify-start items-center py-4 border-b  bg-white hover:bg-gray-100 transition-all hover:ps-2'>
                    <FaCameraRetro className='text-xl me-3' />
                    <Link href="/allPages/camera">Camera</Link>
                </li>

                <li
                    onClick={() => router.push("/allPages/telivision")}
                    className='cursor-pointer flex justify-start items-center py-4 border-b  bg-white hover:bg-gray-100 transition-all hover:ps-2'>
                    <LuMonitor className='text-xl me-3' />
                    <Link href="/allPages/telivision">Telivishion</Link>
                </li>

                <li
                    onClick={() => router.push("/allPages/computer")}
                    className='cursor-pointer flex justify-start items-center py-4 border-b  bg-white hover:bg-gray-100 transition-all hover:ps-2'>
                    <FaComputer className='text-xl me-3' />
                    <Link href="/allPages/computer">Computer & Office</Link>
                </li>

                <li
                    onClick={() => router.push("/allPages/bicycle")}
                    className='cursor-pointer flex justify-start items-center py-4 border-b bg-white hover:bg-gray-100 transition-all hover:ps-2'>
                    <IoBicycle className='text-xl me-3' />
                    <Link href="/allPages/bicycle">Bicycle & Accessories</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;