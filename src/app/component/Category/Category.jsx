'use client'

import React, { useState } from 'react';
import { CiMobile4 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { IoWatchOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';



const Category = ({ category, path }) => {
    const [isHover, setIsHover] = useState(false);
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(path)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={isHover ? ' cursor-pointer bg-black w-full h-40 border flex justify-center items-center me-4 transition-all mb-4 lg:mb-0' : 'cursor-pointer transition-all bg-white w-full h-40 border flex justify-center items-center me-4 mb-4 lg:mb-0'} >

            {
                category == "phone" ?
                    <CiMobile4 className={isHover ? "text-white text-6xl transition-all" : ' text-black text-6xl transition-all'} />
                    :
                    category == "computer" ?
                        <RiComputerLine className={isHover ? "text-white text-6xl transition-all" : ' text-black text-6xl transition-all'} />
                        :
                        category == "smartWatch" ?
                            <IoWatchOutline className={isHover ? "text-white text-6xl transition-all" : ' text-black text-6xl transition-all'} />
                            :
                            category == "camera" ?
                                <CiCamera className={isHover ? "text-white text-6xl transition-all" : ' text-black text-6xl transition-all'} />
                                :
                                category == "headPhone" ?
                                    <FaHeadphones className={isHover ? "text-white text-6xl transition-all" : ' text-black text-6xl transition-all'} />
                                    :
                                    <IoGameControllerOutline className={isHover ? "text-white text-6xl transition-all" : ' text-black text-6xl transition-all'} />

            }


        </div>
    );
};

export default Category;