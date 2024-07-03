"use client";

import { useEffect, useState } from "react";
// import {
//   ChevronDownIcon,
// } from "@heroicons/react/20/solid";
import Image from "next/image";
import logo from "../../../_assets/Images/Plogo.png";
import Link from "next/link";

export default function Example() {
  const [uesrData, setUesrData] = useState({})
  useEffect(() => {
    const isUserExist = localStorage.getItem('perfumeUD') || null
    if (isUserExist) {
      setUesrData(isUserExist)
    }
  }, [])

  return (
    <header className="bg-white shadow-[0_1px_2px#d1d1d1]">
      <nav className="w-full py-4 px-2 flex flex-col gap-4">
        <div className="w-full flex justify-between px-4">
          <div className="flex flex-col justify-center w-1/3">
            <input
              type="text"
              placeholder="Search reviews"
              className="rounded-full px-2 h-[30px] w-full  shadow-[0_0_1px_1px#d1d1d1]"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-1/3">
            <Link href={'/'}>
              <Image src={logo} width={180} />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-end w-1/3">
            <div className="flex gap-6 justify-center">
              <Link
                href="/login"
                className="text-[d1d1d1] font-semibold hover:text-pink-500 cursor-pointer transition duration-300"
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
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-2/5 flex justify-center gap-5">
            <Link
              href="/types"
              className="text-[d1d1d1] font-light hover:text-pink-500 cursor-pointer transition duration-300"
            >
              TYPES
            </Link>
            <Link
              href="/perfumes"
              className="text-[d1d1d1] font-light hover:text-pink-500 cursor-pointer transition duration-300"
            >
              PERFUMES
            </Link>
            <Link
              href="/aboutus"
              className="text-[d1d1d1] font-light hover:text-pink-500 cursor-pointer transition duration-300"
            >
              ABOUT US
            </Link>
            <Link
              href="/contactus"
              className="text-[d1d1d1] font-light hover:text-pink-500 cursor-pointer transition duration-300"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
