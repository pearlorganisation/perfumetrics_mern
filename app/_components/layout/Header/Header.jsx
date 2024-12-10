"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../_assets/Images/Plogo.webp";
import Link from "next/link";
import { userStore } from "@/store/userStore";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import Dropdown from "../../Dropdown/Dropdown";
import ReviewDropdown from "../../Dropdown/ReviewDropdown";
import { IoMenuSharp } from "react-icons/io5";

export default function Example() {
  const { user, isUserLoggedIn, logout } = userStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setisSearchOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  const [perfumeDropDown, setPerfumeDropDown] = useState(false);
  const [reveiwDropDown, setReviewDropDown] = useState(false);

  const getAllBrands = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand/menu`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    setBrands(data?.data);
    // console.log(data, "data")
    return data;
  };

  useEffect(() => {
    console.log(user, "from header");
    console.log(isUserLoggedIn, "isUserLoggedIn");
  }, [isUserLoggedIn]);
  useEffect(() => {
    getAllBrands();
  }, [isUserLoggedIn]);

  return (
    <header className="block relative bg-white shadow-[0_1px_2px#d1d1d1]">
      <nav className="w-full relative flex sm:justify-center flex-col gap-0 pt-0">
        <div className="flex justify-end items-center  px-3">
          <div className="flex flex-col relative md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <IoMenuSharp size={36} className="" />
            </button>
            {isMenuOpen && (
              <div className="w-64 bg-gray-100 p-4 rounded-lg shadow-md absolute top-[2.3rem] z-10 -left-4">
                <ul className="space-y-2 !font-normal">
                  <li className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                    <div
                      onMouseEnter={() => {
                        setReviewDropDown(true);
                      }}
                      onMouseLeave={() => setReviewDropDown(false)}
                      className="hover:text-pink-500 text-gray-800 cursor-pointer transition duration-300 text-nowrap relative"
                    >
                      WRITE A REVIEW
                      {reveiwDropDown && <ReviewDropdown />}
                    </div>
                  </li>
                  <li className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                    <div
                      onMouseEnter={() => {
                        setPerfumeDropDown(true);
                      }}
                      onMouseLeave={() => setPerfumeDropDown(false)}
                      className="md:relative text-gray-800   cursor-pointer transition duration-300"
                    >
                      PERFUMES
                      {
                        perfumeDropDown && (
                          <Dropdown
                            brands={brands}
                            setPerfumeDropDown={setPerfumeDropDown}
                            perfumeDropDown={perfumeDropDown}
                          />
                        )
                        // perfumeDropDown && <MegaMenu data={brands} />
                      }
                    </div>
                  </li>
                  <li className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                    <Link
                      href="/sale/BEST SALES"
                      className="block text-lg  text-gray-800"
                    >
                      BEST SALES
                    </Link>
                  </li>
                  <li className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                    <Link
                      href="/category/MEN'S STYLE"
                      className="block text-lg  text-gray-800"
                    >
                      MEN'S STYLE
                    </Link>
                  </li>
                  <li className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                    <Link
                      href="/category/WOMEN'S STYLE"
                      className="block text-lg  text-gray-800"
                    >
                      WOMEN'S STYLE
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-3 w-full">
            {isUserLoggedIn ? (
              <div className="space-x-3 flex py-2">
                <span className="font-medium text-lg flex items-center gap-2">
                  <FaRegUserCircle size={25} />
                  {user?.userName}
                </span>
                <button
                  onClick={() => logout()}
                  type="button"
                  className="bg-pink-500 px-6 py-2 rounded-md text-white flex justify-center items-center space-x-1.5 p-1.5"
                >
                  <CiLogout /> <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  href="/login"
                  className="font-semibold hover:text-pink-500 cursor-pointer transition duration-300 flex justify-center items-center space-x-1.5 p-1.5"
                >
                  <AiOutlineLogin /> <span>Login</span>
                </Link>
                <Link
                  href="/signUp"
                  className=" font-semibold hover:text-pink-500 cursor-pointer transition duration-300 flex justify-center items-center space-x-1.5 p-1.5"
                >
                  <FaRegUser /> <span>Register</span>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="w-full bg-pink-300 px-4 py-1 relative">
          <div className=" mx-auto flex justify-between items-center lg:ml-96">
            <div className="flex items-center ml-[7rem] lg:ml-[25rem]">
              <Link href="/" className="">
                <Image src={logo} width={280} height={50} alt="img" />
              </Link>
            </div>
            <div className="w-72 lg:ml-96">
              <IoSearch size={30} className="flex md:hidden ms-auto text-white" onClick={() => setisSearchOpen((prev) => !prev)} />
              <input
                type="text"
                placeholder="Search reviews"
                className="w-full rounded-full p-4 h-[30px] focus:outline-none shadow-[0_0_1px_1px#d1d1d1] relative hidden md:block"
              />
            </div>
          </div>
          <div>
            {isSearchOpen && <input
              type="text"
              placeholder="Search reviews"
              className="w-full rounded-full p-4 h-[30px] focus:outline-none shadow-[0_0_1px_1px#d1d1d1] flex md:hidden absolute left-0 top-[2.5rem]"
            />}

          </div>
        </div>
        <div className="w-full hidden md:flex justify-center lg:justify-between items-center px-6">
          <div className="flex justify-center mx-auto gap-3 md:gap-8 lg:gap-12 font-semibold text-[10px] sm:text-base md:text-lg lg:text-xl">
            <div
              onMouseEnter={() => {
                setReviewDropDown(true);
              }}
              onMouseLeave={() => setReviewDropDown(false)}
              className="hover:text-pink-500 cursor-pointer transition duration-300 text-nowrap relative py-3 "
            >
              WRITE A REVIEW
              {reveiwDropDown && <ReviewDropdown />}
            </div>
            <div
              onMouseEnter={() => {
                setPerfumeDropDown(true);
              }}
              onMouseLeave={() => setPerfumeDropDown(false)}
              className="md:relative   cursor-pointer transition duration-300 py-3"
            >
              PERFUMES
              {
                perfumeDropDown && (
                  <Dropdown
                    brands={brands}
                    setPerfumeDropDown={setPerfumeDropDown}
                    perfumeDropDown={perfumeDropDown}
                  />
                )
                // perfumeDropDown && <MegaMenu data={brands} />
              }
            </div>

            <Link
              href="/sale/BEST SALES"
              className="hover:text-pink-500 cursor-pointer transition duration-300 py-3 text-nowrap"
            >
              BEST SALES
            </Link>
            <Link
              href="/category/MEN'S STYLE"
              className="hover:text-pink-500 cursor-pointer transition duration-300 py-3 text-nowrap"
            >
              MEN'S STYLE
            </Link>
            <Link
              href="/category/WOMEN'S STYLE"
              className="hover:text-pink-500 cursor-pointer transition duration-300 py-3 text-nowrap"
            >
              WOMEN'S STYLE
            </Link>
          </div>
        </div>
        {/* {isMenuOpen && (
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
        )} */}
      </nav>
    </header>
  );
}
