"use client";

import { useEffect, useState } from "react";
// import {
//   ChevronDownIcon,
// } from "@heroicons/react/20/solid";
import Image from "next/image";
import logo from "../../../_assets/Images/Plogo.png";
import Link from "next/link";
import { userStore } from "@/store/userStore";
import { FaRegUserCircle } from "react-icons/fa";

export default function Example() {

  const { user, isUserLoggedIn, logout } = userStore();
  useEffect(() => {
    console.log(user, "from header")
    console.log(isUserLoggedIn, "isUserLoggedIn")


  }, [isUserLoggedIn])




  return (
    <header className="md:block hidden bg-white shadow-[0_1px_2px#d1d1d1]">
      <nav className="w-full py-4  flex flex-col gap-4">
        <div className="flex flex-col justify-end items-end px-6">
          {
            isUserLoggedIn ? <div className="space-x-3 flex">
              <span className="font-medium text-lg flex justify-start items-center gap-2"> <FaRegUserCircle size={25} />{user?.userName}</span>
              <button onClick={() => logout()} type="button" className="bg-pink-500 px-6 py-2 rounded-md text-white">Logout</button>
            </div> : <div className="flex gap-6 justify-center">
              <Link
                href="/login"
                className=" font-semibold hover:text-pink-500 cursor-pointer transition duration-300"
              >
                Login
              </Link>
              <Link
                href="/signUp"
                className="text-[d1d1d1] font-semibold hover:text-pink-500 cursor-pointer transition duration-300"
              >
                Register
              </Link>
            </div>
          }
        </div>
        <div className="w-full flex justify-start bg-pink-300 px-4 py-2">
          <div className="container mx-auto flex justify-start">
            <div className="flex flex-col justify-center w-72 ">
              <input
                type="text"
                placeholder="Search reviews"
                className="rounded-full p-4  h-[30px] focus:outline-none  shadow-[0_0_1px_1px#d1d1d1]"
              />
            </div>
            <div className="flex flex-col justify-center items-center w-1/3">
              <Link href={'/'}>
                <Image src={logo} width={280} />
              </Link>
            </div>
          </div>

        </div>
        <div className="w-full flex justify-center ">
          <div className=" flex justify-center gap-14 font-semibold md:text-2xl">
            <Link
              href="/types"
              className="  hover:text-pink-500 cursor-pointer transition duration-300"
            >
              WRITE A REVIEWS
            </Link>
            <Link
              href="/perfumes"
              className="  hover:text-pink-500 cursor-pointer transition duration-300"
            >
              PERFUMES
            </Link>
            <Link
              href="/aboutus"
              className="  hover:text-pink-500 cursor-pointer transition duration-300"
            >
              ABOUT US
            </Link>
            <Link
              href="/contactus"
              className="  hover:text-pink-500 cursor-pointer transition duration-300"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
