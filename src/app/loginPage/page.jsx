import Link from 'next/link';
import React from 'react';
import { FaGoogle } from "react-icons/fa";


const page = () => {
    return (
        <div className=' mx-auto w-5/6 grid grid-rows-1 grid-cols-2 my-20'>

            {/* Image */}
            <div>
                <img
                    className=' w-full h-full'
                    src="/images/Side Image.jpg"
                    alt="" />
            </div>

            {/* Register form */}
            <div className=' flex justify-center items-center'>
                {/* Inner div */}
                <div className=' w-80'>

                    {/* heading */}
                    <h1 className=' text-4xl font-semibold mb-4'>Log in to Exclusive</h1>
                    <p className=' mb-16'>Enter your details below</p>

                    {/* Email */}
                    <div className=' w-full border-b pb-2 mb-8'>
                        <input type="email" placeholder='Email' className=' outline-none w-full' />
                    </div>

                    {/* password */}
                    <div className=' w-full border-b pb-2 mb-8'>
                        <input type="password" placeholder='password' className=' outline-none w-full' />
                    </div>

                    {/* Create account button */}
                    <button
                        style={{ border: "1px solid black" }}
                        className=' py-4 w-full bg-black text-white transition-all hover:bg-white hover:text-black cursor-pointer mb-5'>Login</button>

                    {/*  sign up with  google */}
                    <button
                        style={{ border: "1px solid black" }}
                        className=' py-4 w-full bg-white text-black transition-all hover:bg-black hover:text-white cursor-pointer flex justify-center items-center'>
                        Forgot Password?</button>



                    {/* already have an account? */}
                    <p className=' flex justify-start items-center text-gray-500 text-sm mt-10'>
                        Already have account?

                        <Link className='text-gray-500 text-sm ms-3' href="/registerPage">sign up</Link>
                    </p>


                </div>


            </div>
        </div>
    );
};

export default page;