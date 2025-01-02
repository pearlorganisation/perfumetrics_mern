"use client"
import { userStore } from '@/store/userStore';
import Link from 'next/link';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";

const LoginSignUp = () => {
    const { user, isUserLoggedIn } = userStore();
    return (

        !isUserLoggedIn ? <div className="border-2 border-pink-500 rounded grid place-items-center py-4 gap-2">
            <div className="text-xl md:text-2xl font-semibold">Register</div>
            <div className="space-x-4">
                <button className="w-[8rem] py-2 rounded border border-pink-500">
                    <Link href="/login">Login</Link>
                </button>
                <button className="w-[8rem] py-2 rounded border border-pink-500">
                    <Link href="/signUp">Register</Link>
                </button>
            </div>
            <button className="bg-[#1777F2] font-medium text-white px-4 py-2 rounded flex justify-center items-center gap-2">
                {" "}
                <FaFacebookF />
                Login
            </button>
        </div> : <div></div>

    )
}

export default LoginSignUp