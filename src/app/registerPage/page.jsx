'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '@/redux/userSlice/userSlice'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../../firebase.config';

const auth = getAuth(app);

const page = () => {
    // state declaration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(email, password )

    // action dispatch
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.value)

    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                dispatch(addUser({ name, email, password }))
                console.log("done")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });
    }

    console.log(user)
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
                    <h1 className=' text-4xl font-semibold mb-4'>Create an account</h1>
                    <p className=' mb-16'>Enter your details below</p>

                    {/* Name */}
                    <div className=' w-full border-b pb-2 mb-8'>
                        <input onChange={e => setName(e.target.value)} type="text" placeholder='Name' className=' outline-none w-full' />
                    </div>

                    {/* Email */}
                    <div className=' w-full border-b pb-2 mb-8'>
                        <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' className=' outline-none w-full' />
                    </div>

                    {/* password */}
                    <div className=' w-full border-b pb-2 mb-8'>
                        <input onChange={e => setPassword(e.target.value)} type="password" placeholder='password' className=' outline-none w-full' />
                    </div>

                    {/* Create account button */}
                    <button
                        style={{ border: "1px solid black" }}
                        className=' py-4 w-full bg-black text-white transition-all hover:bg-white hover:text-black cursor-pointer mb-5'>Create Account</button>

                    {/*  sign up with  google */}
                    <button
                        onClick={ handleSubmit}
                        style={{ border: "1px solid black" }}
                        className=' py-4 w-full bg-white text-black transition-all hover:bg-black hover:text-white cursor-pointer flex justify-center items-center'>
                        <FaGoogle className=' me-2 text-xl' />
                        Sign up with google</button>



                    {/* already have an account? */}
                    <p className=' flex justify-start items-center text-gray-500 text-sm mt-10'>
                        Already have account?

                        <Link className='text-gray-500 text-sm ms-2' href="/loginPage">Login</Link>
                    </p>


                </div>


            </div>
        </div>
    );
};

export default page;