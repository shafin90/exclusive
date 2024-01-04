'use client'

import React, { useEffect, useState } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { LuContact } from "react-icons/lu";
import { MdConnectWithoutContact } from "react-icons/md";
import Link from 'next/link';

const BottomNav = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [screenWidth, setScreenWidth] = useState(null)



    useEffect(() => {
        setScreenWidth(window.innerWidth);
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;

            // Check if the scroll position is more than 200px from the bottom
            if (scrollPosition > (document.documentElement.scrollHeight - window.innerHeight - 200)) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        };

        // Attach the event listener to the scroll event
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navStyle = isHidden ? 'hidden' : screenWidth<1030 ?'flex':'hidden';

    return (
        <div className={`bg-black w-screen sticky bottom-0 ${navStyle} justify-between items-center py-4`}>
            <div className=' w-9/12 mx-auto flex justify-between items-center'>
                <Link href="/mobieMenu" className=" text-white">
                    <IoReorderThreeOutline className=' text-4xl' />
                </Link>
                <Link href="/" className=" text-white">
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