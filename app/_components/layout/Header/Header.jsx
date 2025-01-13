"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../_assets/Images/Plogo.webp";
import Link from "next/link";
import { userStore } from "@/store/userStore";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import Dropdown from "../../Dropdown/Dropdown";
import ReviewDropdown from "../../Dropdown/ReviewDropdown";
import { IoMenuSharp } from "react-icons/io5";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700'],
});
export default function Example() {

  const { user, isUserLoggedIn, logout } = userStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setisSearchOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  const [perfumeDropDown, setPerfumeDropDown] = useState(false);
  const [reveiwDropDown, setReviewDropDown] = useState(false);

  const [showEmail, setShowEmail] = useState(false);

  const getInitials = (name) => {
    return name.slice(0, 2).toUpperCase();
  };

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

  // useEffect(() => {
  //   console.log(user, "from header");
  //   console.log(isUserLoggedIn, "isUserLoggedIn");
  // }, [isUserLoggedIn]);
  useEffect(() => {
    getAllBrands();
  }, [isUserLoggedIn]);

  return (
    <header className={`${nunito.className} block relative bg-white shadow-[0_1px_2px#d1d1d1]`}>
      <nav className="w-full relative flex sm:justify-center flex-col gap-0 pt-0">
        <div className="flex justify-end items-center  px-3">



        </div>
        <div className="w-full bg-pink-300 px-4 py-2 relative">
          <div className=" mx-auto grid grid-cols-3 place-items-center  ">
            <div className="size-full flex justify-start items-center">
              <div className="flex flex-col relative md:hidden">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  <IoMenuSharp size={36} className="" />
                </button>
                {isMenuOpen && (
                  <div className="w-64 bg-gray-100 p-4 rounded-lg shadow-md absolute top-[2.3rem] z-10 -left-4">
                    <ul className="space-y-2 !font-extrabold !text-[20px] !italic">
                      <li className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                        <div
                          onMouseEnter={() => {
                            setReviewDropDown(true);
                          }}

                          onMouseLeave={() => setReviewDropDown(false)}
                          className="hover:text-pink-500 text-gray-800 cursor-pointer transition duration-300 text-nowrap relative"
                        >
                          WRITE A REVIEW
                          {reveiwDropDown && <ReviewDropdown setIsMenuOpen={setIsMenuOpen} />}
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
                      <li
                        onClick={() => {
                          setIsMenuOpen(!isMenuOpen);
                        }}
                        className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer"
                      >
                        <Link
                          href="/category/MEN'S STYLE"
                          className="block   text-gray-800"
                        >
                          MEN'S STYLE
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          setIsMenuOpen(!isMenuOpen);
                        }}
                        className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer"
                      >
                        <Link
                          href="/category/WOMEN'S STYLE"
                          className="block   text-gray-800"
                        >
                          WOMEN'S STYLE
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center ">
              <Link href="/" className="">

                <Image src='/PerfumetricsLogo.png' className="w-40 md:w-[90%]" width={280} height={150} alt="img" />
              </Link>
            </div>
            <div className="flex justify-end space-x-3 w-full">
              {isUserLoggedIn ? (
                <div className="space-x-3 flex py-2">
                  <div className="flex items-center space-x-3 relative">
                    <div
                      className="w-10 h-10 relative  rounded-full bg-pink-500 flex items-center justify-center text-white font-bold cursor-pointer transition-all duration-300 ease-in-out"
                      onMouseEnter={() => setShowEmail(true)}
                      onMouseLeave={() => setShowEmail(false)}
                    >
                      {user ? getInitials(user.userName) : "GU"}
                      {showEmail && user && (
                        <div className=" bg-black/70 text-nowrap font-normal absolute -bottom-[2.8rem]  p-2 rounded-md shadow-lg z-10 transition-opacity duration-300 ease-in-out">
                          {user.userName}
                        </div>
                      )}
                    </div>

                    {/* <span className="font-medium text-sm md:text-lg text-gray-800">
                    {user?.userName || 'Guest'}
                  </span> */}
                  </div>
                  <button
                    onClick={logout}
                    type="button"
                    className="bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md transition duration-300 ease-in-out flex items-center space-x-2 px-3 py-2 md:px-2 md:py-1"
                  >
                    <CiLogout className="w-4 h-4 md:w-5 md:h-5" />
                    {/* <span className="hidden sm:inline">Logout</span> */}
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
            {/* <div className="w-72 lg:ml-96">
              <IoSearch
                size={30}
                className="flex md:hidden ms-auto text-white"
                onClick={() => setisSearchOpen((prev) => !prev)}
              />
              <input
                type="text"
                placeholder="Search reviews"
                className="w-full rounded-full p-4 h-[30px] focus:outline-none shadow-[0_0_1px_1px#d1d1d1] relative hidden md:block"
              />
            </div> */}
          </div>

        </div>
        <div className="w-full hidden md:flex justify-center lg:justify-between items-center px-6">
          <div className="flex justify-center mx-auto gap-3 md:gap-8 lg:gap-12  !font-extrabold !text-[20px] !italic">
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
      </nav>
    </header>
  );
}
