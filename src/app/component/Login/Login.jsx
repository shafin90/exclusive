'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { app } from '../../../../firebase.config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addUser } from '@/redux/userSlice/userSlice';
import { useRouter } from 'next/navigation';


const auth = getAuth(app);

const Login = () => {

    const router = useRouter() // Declaring useRouter hook to manage navigation 

    // Declaring state for this component===============================
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // =====================================================================


    // Retreving user from userSlice ====================================
    const userInfo = useSelector((state) => state.user.value)
    // ======================================================================


    // action dispatch =======================================================
    const dispatch = useDispatch()
    // ======================================================================


    // Function to perform login==============================================
    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch(addUser(user))

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    // =======================================================================



    // If useer logged in the, user will be redirected to Homepage ================
    if (userInfo) {
        router.push("/") 
        alert("successfully login!!!!!")
    }
    // ============================================================================


    console.log(userInfo)
    return (
        <div className=' flex justify-center items-center'>
            {/* Inner div */}
            <div className=' w-80'>

                {/* heading */}
                <h1 className=' text-4xl font-semibold mb-4'>Log in to Exclusive</h1>
                <p className=' mb-16'>Enter your details below</p>

                {/* Email */}
                <div className=' w-full border-b pb-2 mb-8'>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        placeholder='Email'
                        className=' outline-none w-full' />
                </div>

                {/* password */}
                <div className=' w-full border-b pb-2 mb-8'>

                    <input
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder='password'
                        className=' outline-none w-full' />
                </div>

                {/* Create account button */}
                <button
                    onClick={handleLogin}
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

                    <Link className='text-gray-500 text-sm ms-3' href="/allPages/registerPage">sign up</Link>
                </p>

            </div>

        </div>
    );
};

export default Login;