"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../_assets/Images/Plogo.png";
import Link from "next/link";
import { userStore } from "@/store/userStore";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

export default function Example() {
  const { user, isUserLoggedIn, logout } = userStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log(user, "from header");
    console.log(isUserLoggedIn, "isUserLoggedIn");
  }, [isUserLoggedIn]);

  return (
    <header className="block bg-white shadow-[0_1px_2px#d1d1d1]">
      <nav className="w-full py-4 flex flex-col gap-4">
        <div className="flex justify-end items-center px-6">
          <div className="flex items-center lg:hidden">
            <Link href="/">
              <Image src={logo} width={150} height={50} />
            </Link>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <HiMenu size={30} />
            </button>
          </div>
          <div className="hidden lg:flex items-center space-x-3">
            {isUserLoggedIn ? (
              <div className="space-x-3 flex">
                <span className="font-medium text-lg flex items-center gap-2">
                  <FaRegUserCircle size={25} />
                  {user?.userName}
                </span>
                <button
                  onClick={() => logout()}
                  type="button"
                  className="bg-pink-500 px-6 py-2 rounded-md text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-6">
                <Link
                  href="/login"
                  className="font-semibold hover:text-pink-500 cursor-pointer transition duration-300"
                >
                  Login
                </Link>
                <Link
                  href="/signUp"
                  className="text-gray-500 font-semibold hover:text-pink-500 cursor-pointer transition duration-300"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="w-full bg-pink-300 px-4 py-2">
          <div className="container mx-auto flex justify-center items-center">
            <div className="w-72">
              <input
                type="text"
                placeholder="Search reviews"
                className="w-full rounded-full p-4 h-[30px] focus:outline-none shadow-[0_0_1px_1px#d1d1d1]"
              />
            </div>
            <div className="hidden lg:flex items-center">
              <Link href="/">
                <Image src={logo} width={280} height={50} />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center lg:justify-between items-center px-6">
          <div className="hidden lg:flex justify-center mx-auto gap-14 font-semibold text-lg lg:text-2xl">
            <Link
              href="/types"
              className="hover:text-pink-500 cursor-pointer transition duration-300"
            >
              WRITE A REVIEW
            </Link>
            <Link
              href="/perfumes"
              className="hover:text-pink-500 cursor-pointer transition duration-300"
            >
              PERFUMES
            </Link>
            <Link
              href="/aboutus"
              className="hover:text-pink-500 cursor-pointer transition duration-300"
            >
              ABOUT US
            </Link>
            <Link
              href="/contactus"
              className="hover:text-pink-500 cursor-pointer transition duration-300"
            >
              CONTACT US
            </Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col gap-4 px-6">
            {isUserLoggedIn ? (
              <div className="flex flex-col items-center space-y-3">
                <span className="font-medium text-lg flex items-center gap-2">
                  <FaRegUserCircle size={25} />
                  {user?.userName}
                </span>
                <button
                  onClick={() => logout()}
                  type="button"
                  className="bg-pink-500 px-6 py-2 rounded-md text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <Link
                  href="/login"
                  className="font-semibold hover:text-pink-500 cursor-pointer transition duration-300"
                >
                  Login
                </Link>
                <Link
                  href="/signUp"
                  className="text-gray-500 font-semibold hover:text-pink-500 cursor-pointer transition duration-300"
                >
                  Register
                </Link>
              </div>
            )}
            <div className="flex flex-col items-center gap-4 font-semibold text-lg">
              <Link
                href="/types"
                className="hover:text-pink-500 cursor-pointer transition duration-300"
              >
                WRITE A REVIEW
              </Link>
              <Link
                href="/perfumes"
                className="hover:text-pink-500 cursor-pointer transition duration-300"
              >
                PERFUMES
              </Link>
              <Link
                href="/aboutus"
                className="hover:text-pink-500 cursor-pointer transition duration-300"
              >
                ABOUT US
              </Link>
              <Link
                href="/contactus"
                className="hover:text-pink-500 cursor-pointer transition duration-300"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
