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
                    className='cursor-pointer hover:ps-2 flex justify-start items-center py-4 border-b  bg-white hover:bg-gray-100 transition-all'>
                    <TfiYoutube className='text-2xl me-2' />
                    <Link href="/youtube">Youtube Studio Gears</Link>
                </li>

                <li
                    onClick={() => router.push("/headPhone")}
                    className='cursor-pointer hover:ps-2 flex justify-start items-center py-4 border-b  bg-white hover:bg-gray-100 transition-all'>
                    <FaHeadphones className='text-xl me-3' />
                    <Link href="/headPhone">HeadPhone & EarPhone</Link>
                </li>

                <li
                    onClick={() => router.push("/watch")}
                    className='cursor-pointer hover:ps-2 flex justify-start items-center py-4 border-b  bg-white hover:bg-gray-100 transition-all'>
                    <IoWatchOutline className='text-xl me-3' />
                    <Link href="/watch">Watch Collection</Link>
                </li>

                <li
                    onClick={() => router.push("/homeApplicance")}
                    className='cursor-pointer flex justify-start items-center py-4 border-b  bg-white hover:bg-gray-100 transition-all hover:ps-2'>
                    <MdOutlineAddHomeWork className='text-xl me-3' />
                    <Link href="/homeApplicance">Home Appliances</Link>
                </li>

                <li
                    onClick={() => router.push("/game")}
                    className='cursor-pointer flex justify-start items-center py-4 border-b  bg-white hover:bg-gray-100 transition-all hover:ps-2'>
                    <IoGameControllerSharp className='text-xl me-3' />
                    <Link href="/game">Game</Link>
                </li>

                <li
                    onClick={() => router.push("/camera")}
                    className='cursor-pointer flex justify-start items-center py-4 border-b  bg-white hover:bg-gray-100 transition-all hover:ps-2'>
                    <FaCameraRetro className='text-xl me-3' />
                    <Link href="/camera">Camera</Link>
                </li>

                <li
                    onClick={() => router.push("/telivision")}
                    className='cursor-pointer flex justify-start items-center py-4 border-b  bg-white hover:bg-gray-100 transition-all hover:ps-2'>
                    <LuMonitor className='text-xl me-3' />
                    <Link href="telivision">Telivishion</Link>
                </li>

                <li
                    onClick={() => router.push("/computer")}
                    className='cursor-pointer flex justify-start items-center py-4 border-b  bg-white hover:bg-gray-100 transition-all hover:ps-2'>
                    <FaComputer className='text-xl me-3' />
                    <Link href="/computer">Computer & Office</Link>
                </li>

                <li
                    onClick={() => router.push("/bicycle")}
                    className='cursor-pointer flex justify-start items-center py-4 border-b bg-white hover:bg-gray-100 transition-all hover:ps-2'>
                    <IoBicycle className='text-xl me-3' />
                    <Link href="/bicycle">Bicycle & Accessories</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;