import React from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { LuContact } from "react-icons/lu";
import { MdConnectWithoutContact } from "react-icons/md";
import Link from 'next/link';

const BottomNav = () => {
    return (
        <div className=' bg-black w-screen sticky bottom-0 flex justify-between items-center py-4'>
            <div className=' w-9/12 mx-auto flex justify-between items-center'>
                <Link href="" className=" text-white">
                    <IoReorderThreeOutline className=' text-2xl' />
                </Link>
                <Link href="" className=" text-white">
                    <GoHome className=' text-2xl' />
                </Link>
                <Link href="" className=" text-white">
                    <LuContact className=" text-2xl" />
                </Link>
                <Link href="" className=" text-white">
                    <MdConnectWithoutContact className=' text-2xl' />
                </Link>
            </div>
        </div>
    );
};

export default BottomNav;