"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../../_assets/Images/Plogo.webp";
import Link from "next/link";
import { userStore } from "@/store/userStore";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import Dropdown from "../../Dropdown/Dropdown";
import ReviewDropdown from "../../Dropdown/ReviewDropdown";
import { IoMenuSharp, IoSearchOutline } from "react-icons/io5";
import { Nunito } from "next/font/google";
import axios from "axios";
import GlobalSearchBar from "../../GlobalSearch/GlobalSearch";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700'],
});
export default function Example() {

  const { user, isUserLoggedIn, logout } = userStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setisSearchOpen] = useState(true);
  const [brands, setBrands] = useState([]);
  const [perfumeDropDown, setPerfumeDropDown] = useState(false);
  const [reveiwDropDown, setReviewDropDown] = useState(false);

  const [showEmail, setShowEmail] = useState(false);

  const menuRef = useRef(null);
  const menuContainerRef = useRef(null); // Ref for the entire menu (both mobile and desktop)

  const getInitials = (name) => {
    return name.slice(0, 2).toUpperCase();
  };

  const getAllBrands = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand/menu`,
      );

      const data = response.data; // Axios automatically parses JSON responses
      setBrands(data?.data || []);
      return data;
    } catch (error) {
      console.error("Error fetching brands:", error);
      setBrands([]); // Optionally reset the state in case of error
      return null; // Return null to indicate failure
    }
  };

  useEffect(() => {
    getAllBrands();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the menu container or mobile menu
      if (
        menuContainerRef.current && !menuContainerRef?.current?.contains(event.target) &&
        !menuRef?.current?.contains(event.target)
      ) {
        setIsMenuOpen(false);  // Close the menu
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`${nunito.className} block relative bg-white shadow-[0_1px_2px#d1d1d1]`}>
      <nav className="w-full relative flex sm:justify-center flex-col gap-0 pt-0">

        {/*  Mobile  */}
        <div className="w-full bg-pink-300 px-4 relative">
          <div className=" mx-auto grid grid-cols-3 place-items-center">
            <div className="size-full flex justify-start items-center">
              <div className="flex flex-col relative md:hidden">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  <IoMenuSharp size={36} className="" />
                </button>
                {isMenuOpen && (
                  <div ref={menuContainerRef} className="w-64 bg-gray-100 p-4 rounded-lg shadow-md absolute top-[2.3rem] z-10 -left-4">
                    <ul className="space-y-2 !font-extrabold !text-[20px] !italic">
                      <li className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                        <div
                          onMouseEnter={() => { setReviewDropDown(true); }}
                          onMouseLeave={() => setReviewDropDown(false)}
                          className="hover:text-pink-500 text-gray-800 cursor-pointer transition duration-300 text-nowrap relative"
                        >
                          WRITE A REVIEW
                          {reveiwDropDown && <ReviewDropdown setIsMenuOpen={setIsMenuOpen} />}
                        </div>
                      </li>
                      <li className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                        <div
                          onMouseEnter={() => { setPerfumeDropDown(true); }}
                          onMouseLeave={() => setPerfumeDropDown(false)}
                          className="md:relative text-gray-800 cursor-pointer transition duration-300"
                        >
                          PERFUMES
                          {perfumeDropDown && (
                            <Dropdown
                              brands={brands}
                              setPerfumeDropDown={setPerfumeDropDown}
                              perfumeDropDown={perfumeDropDown}
                            />
                          )}
                        </div>
                      </li>
                      <li
                        onClick={() => { setIsMenuOpen(!isMenuOpen); }}
                        className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer"
                      >
                        <Link href="/category/MEN'S-STYLE" className="block text-gray-800">MEN'S STYLE</Link>
                      </li>
                      <li
                        onClick={() => { setIsMenuOpen(!isMenuOpen); }}
                        className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer"
                      >
                        <Link href="/category/WOMEN'S-STYLE" className="block text-gray-800">WOMEN'S STYLE</Link>
                      </li>
                      <li
                        onClick={() => { setIsMenuOpen(!isMenuOpen); }}
                        className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer"
                      >
                        <Link href="https://blog.perfumetrics.com/" className="block text-gray-800">Blogs</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center ">
              <Link href="/" className="">
                <Image src='/PerfumetricsLogo.png' className="w-40 md:w-[60%]" width={280} height={150} alt="img" />
              </Link>
            </div>
            <div className="flex justify-end space-x-3 w-full">
              {isUserLoggedIn ? (
                <div className="space-x-3 flex py-2">
                  <div className="flex items-center space-x-3 relative">
                    <div
                      className="size-8 md:w-10 md:h-10 relative rounded-full bg-pink-500 flex items-center justify-center text-white font-bold cursor-pointer transition-all duration-300 ease-in-out"
                      onMouseEnter={() => setShowEmail(true)}
                      onMouseLeave={() => setShowEmail(false)}
                    >
                      {user ? getInitials(user.userName) : "GU"}
                      {showEmail && user && (
                        <div className="bg-black/70 text-nowrap font-normal absolute -bottom-[2.8rem] p-2 rounded-md shadow-lg z-10 transition-opacity duration-300 ease-in-out">
                          {user.userName}
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={logout}
                    type="button"
                    className="bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md transition duration-300 ease-in-out flex items-center space-x-2 px-3 py-2 md:px-2 md:py-1"
                  >
                    <CiLogout className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Link
                    href="/login"
                    className="font-semibold text-xs md:text-base hover:text-pink-500 cursor-pointer transition duration-300 flex justify-center items-center space-x-1.5"
                  >
                    <AiOutlineLogin className="hidden md:block" /> <span>Login</span>
                  </Link>
                  <Link
                    href="/signUp"
                    className=" font-semibold text-xs md:text-base hover:text-pink-500 cursor-pointer transition duration-300 flex justify-center items-center space-x-1.5"
                  >
                    <FaRegUser className="hidden md:block" /> <span>Register</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/*  Medium and Large */}
        <div className="w-full hidden md:flex justify-center lg:justify-between items-center px-6">
          <div className="flex  justify-center mx-auto gap-3 md:gap-8 lg:gap-12 !font-extrabold !text-[20px] !italic">
            <div
              onMouseEnter={() => { setReviewDropDown(true); }}
              onMouseLeave={() => setReviewDropDown(false)}
              className="hover:text-pink-500 cursor-pointer transition duration-300 text-nowrap relative py-3"
            >
              WRITE A REVIEW
              {reveiwDropDown && <ReviewDropdown />}
            </div>
            <div
              onMouseEnter={() => { setPerfumeDropDown(true); }}
              onMouseLeave={() => setPerfumeDropDown(false)}
              className="md:relative cursor-pointer transition duration-300 py-3"
            >
              PERFUMES
              {perfumeDropDown && (
                <Dropdown
                  brands={brands}
                  setPerfumeDropDown={setPerfumeDropDown}
                  perfumeDropDown={perfumeDropDown}
                />
              )}
            </div>

            <Link
              href="/category/MEN'S-STYLE"
              className="hover:text-pink-500 cursor-pointer transition duration-300 py-3 text-nowrap"
            >
              MEN'S STYLE
            </Link>
            <Link
              href="/category/WOMEN'S-STYLE"
              className="hover:text-pink-500 cursor-pointer transition duration-300 py-3 text-nowrap"
            >
              WOMEN'S STYLE
            </Link>
            <Link
              href="https://blog.perfumetrics.com"
              className="hover:text-pink-500 cursor-pointer transition duration-300 py-3 text-nowrap"
            >
              BLOGS
            </Link>
          </div>

          {/* <div>
          { isSearchOpen &&  (<div className="flex flex-row items-center justify-center">
            <button
              onClick={() => setisSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              <IoSearchOutline size={24} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isSearchOpen ? "w-64 h-32 opacity-100 ml-2" : "w-0 h-0 opacity-0"
              }`}
            >
              <GlobalSearchBar />
              
            </div>
          </div>)}
          </div> */}

          <div className="relative min-w-72 max-w-72 flex items-center justify-end">
           
            <button
              onClick={() => setisSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              <IoSearchOutline size={24} />
            </button>
            <div
              className={` transition-all duration-300 ease-in-out ${
                isSearchOpen ? "w-64 z-100   opacity-100 ml-2" : "w-0 h-0 opacity-0"
              }`}
            >
              {isSearchOpen && <GlobalSearchBar />}
              
            </div>
          </div>
        </div>


      </nav>
    </header>
  );
}

