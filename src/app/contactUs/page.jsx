'use client'
import React from 'react';
import { IoCall } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Page = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission (send email, save message, etc.)
    };

    return (
        <div className='w-10/12 mx-auto pt-10'>
            <div className='flex justify-start items-center mb-4'>
                <IoCall />
                <h1 className='text-xl font-bold ms-2'> Hotline Number: +8801620674384</h1>
            </div>

            <div className='flex justify-start items-center'>
                <FaSquareFacebook className='text-4xl font-bold me-4 cursor-pointer' />
                <AiFillTwitterCircle className='text-4xl font-bold me-4 cursor-pointer' />
                <FaLinkedin className='text-4xl font-bold cursor-pointer' />
            </div>

            <div className='mt-6'>
                <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-600'>
                            Your Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            className='mt-1 p-2 border rounded-md w-full'
                            required
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-600'>
                            Your Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='mt-1 p-2 border rounded-md w-full'
                            required
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='message' className='block text-sm font-medium text-gray-600'>
                            Your Message
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            rows='4'
                            className='mt-1 p-2 border rounded-md w-full'
                            required
                        ></textarea>
                    </div>

                    <button
                        type='submit'
                        className='bg-black text-white px-4 py-2  hover:bg-white hover:text-black border border-black transition-all'
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
