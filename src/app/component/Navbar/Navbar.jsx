'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { TbJewishStar } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";
import { SlLogin } from "react-icons/sl";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { BiSolidLogOut } from "react-icons/bi";
import { addUser } from '../../../redux/userSlice/userSlice'
import { getAuth, signOut } from "firebase/auth";
import { app } from '../../../../firebase.config';

const auth = getAuth(app);

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(null);
    const products = useSelector((state) => state.productList.value)
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, [])

    const router = useRouter();
   
    // Logout function
    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(addUser(null))
        }).catch((error) => {
            alert("problem facing while logout")
        });
    }

    return (
        <div className=' flex justify-between items-center w-5/6 mx-auto mt-8 mb-6'>
            {/* Logo============ */}
            <Link href="" className=' text-black font-bold w-2/12 sm:text-2xl md:text-2xl lg:text-4xl '>Exclusive</Link>

            {/* menubar========== */}
            <ul className={windowWidth > 1024 ? 'flex justify-between items-center xl:w-3/12 2xl:w-3/12' : "hidden"} >
                <li>
                    <Link href="/" className='font-semibold hover:border-b-2 border-black pb-1'>Home</Link>
                </li>

                <li>
                    <Link href="/contactUs" className=' font-semibold hover:border-b-2 border-black pb-1'>Contact</Link>
                </li>

                <li>
                    <Link href="/aboutUs" className=' font-semibold hover:border-b-2 border-black pb-1'>About Us</Link>
                </li>
            </ul>

            {/* Searchbar and wishlist========= */}
            <div className=' sm:w-8/12 md:w-8/12 xl:w-5/12 2xl:w-5/12 flex justify-between items-center'>
                {/* Input field and search icon */}
                <div style={{ border: "1px solid black" }} className=' bg-transparent  flex justify-content-between  items-center w-8/12'>

                    <input
                        type="text"
                        placeholder='What are you looking for?'
                        className='ps-5 py-4 text-sm bg-transparent w-10/12 border-none outline-none focus:border-none'
                    />
                    <IoIosSearch className='w-2/12 text-xl cursor-pointer hover:scale-150 transition-all' />
                </div>

                {/* wish icon and cart icon container div */}
                <div className='w-3/12 flex justify-between items-center'>
                    {/* wish icon */}

                    <TbJewishStar
                        onClick={() => router.push('/wish')}
                        className=' text-xl relative right-2  hover:rotate-90 transition-all hover:scale-125 cursor-pointer' />

                    {/* cart icon */}
                    <div className=' relative'>
                        <span
                            style={{ fontSize: "10px", top: "-8px", right: "-8px", display: products.length === 0 && "none" }}
                            className=' absolute text-white bg-black w-4 h-4 rounded-full flex justify-center items-center'>{products.length}</span>
                        <IoCartOutline
                            onClick={() => router.push('/cart')}
                            className=' text-2xl  hover:scale-125 transition-all cursor-pointer' />
                    </div>

                    {/* login logout = if user available, then logout button, otherwise login================================*/}
                    {/* 1. login button */}
                    <SlLogin
                        onClick={() => { router.push('/registerPage') }}
                        className={user ? "hidden" : 'text-2xl  hover:scale-125 transition-all cursor-pointer'} />

                    {/*2. logout button login logout */}
                    <BiSolidLogOut
                        onClick={handleLogout}
                        className={user ? 'text-2xl  hover:scale-125 transition-all cursor-pointer' : "hidden"} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;