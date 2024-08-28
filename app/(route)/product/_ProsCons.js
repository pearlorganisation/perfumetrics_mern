import Image from "next/image";
import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaHeartBroken } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";

const ProsCons = ({ data }) => {
  return (
    <div>
      {/* <p className="text-4xl font-medium py-2 mt-20">Pros and Cons</p> */}

      <div className="grid grid-col-2  items-center bg-white md:p-6 border border-gray-200 rounded-lg shadow-md mt-12">
        <div className="grid lg:grid-cols-2 justify-center md:w-full sm:w-60">
          <div className=" md:p-4 lg:border-r border-gray-300 grid place-items-center bg-[#f0fff1]">
            <div className="mt-4">
              <div className="text-[#2e6e6a] font-semibold text-center   mx-auto w-[15rem] py-4  text-xl">
                <p className="border border-black flex justify-center items-center px-12 py-3 gap-3 ">
                  <FaCrown /> PROS
                </p>
              </div>
              <ul>
              {data?.pros.map((item, index) => (
               
                  <li
                    key={index}
                    className="flex items-center space-x-3   my-2"
                  >
                    <div className="flex gap-1">
                      <span className=" flex flex-col justify-center items-center">
                        <CiHeart size={24} className="text-pink-300" />
                        <span className="">{item.likes}</span>
                      </span>
                      <span className=" flex flex-col justify-center items-center">
                        <FaHeartBroken className="text-[#f34949]" />
                        <span className="">{item.dislikes}</span>
                      </span>
                    </div>
                    <span className="text-center block">
                    This is Dummy content...........................This is Dummy content...........................
                      {/* {item.pros}                 */}
                      </span>
                  </li>
             
              ))}
              </ul>
            </div>
          </div>

          <div className=" p-4  border-gray-300 grid  place-items-center bg-[#fff5f5]">
            <div className="mt-4">
              <div className="text-[#ec5151] font-semibold text-center   mx-auto w-[15rem] py-4  text-xl ">
                <p className="border border-black flex justify-center items-center px-12 py-3 gap-3 ">
                  {" "}
                  <svg
                    className="h-8 stroke-[2px]"
                    viewBox="0 0 128 128"
                    fill="currentColor"
                  >
                    <path
                      d="M109.2,18.8C84-6.3,43.6-6.3,18.8,18.8c-25.1,25.1-25.1,65.6,0,90.3c25.1,25.1,65.6,25.1,90.3,0
                            C134.3,84.4,134.3,43.6,109.2,18.8z M102.3,102.3c-20.9,20.9-55.4,21.3-76.2,0C5.2,81.5,5.2,47,26.1,25.7
                            c20.9-20.9,55.4-20.9,76.7,0C123.2,47,123.2,81,102.3,102.3z"
                    ></path>{" "}
                    <circle cx="46.5" cy="47" r="7.7"></circle>{" "}
                    <circle cx="81.5" cy="47" r="7.7"></circle>{" "}
                    <path
                      d="M90,94.3c-1.7,0.9-3.8,0-4.7-1.7c-3.4-8.1-11.8-13.2-20.7-13.2c-0.3,0-0.6,0-0.6,0
                            c-9,0-17.6,5.1-21,13.2c-0.9,1.7-3.1,2.6-4.8,1.7c-1.7-0.9-2.4-2.5-1.6-4.7c4.6-10.5,15.3-17,27.3-17c0,0,0.1,0,0.2,0
                            c12.4,0,22.9,6.4,27.6,17C92.6,91.8,91.7,93.5,90,94.3z"
                    ></path>
                  </svg>
                  CONS
                </p>
              </div>
              {data?.cons.map((item, index) => (
                <div>
                  <li key={index} className="flex items-center space-x-3  my-2">
                    <div className="flex gap-1">
                      <span className=" flex flex-col justify-center items-center">
                        <CiHeart
                          size={24}
                          className="text-pink-300 fill-pink-200"
                        />
                        <div></div>
                        <span className="">{item.likes}</span>
                      </span>
                      <span className=" flex flex-col justify-center items-center">
                        <FaHeartBroken className="text-[#f34949]" />
                        <span className="">{item.dislikes}</span>
                      </span>
                    </div>
                    <span className="text-center text-wrap ">
                      {/* {item.cons} */}
                      This is Dummy content...........................This is Dummy content...........................
                      </span>
                  </li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-left text-blue-600 text-base  mt-4">
        Note: The pros and cons listed on this page have been generated using
        the artificial intelligence system, which analyzes product reviews
        submitted by our members. While we strive to provide accurate and
        helpful information, we cannot guarantee the complete accuracy or
        reliability of the AI-generated pros and cons. Please read the full
        reviews and consider your own needs and preferences before making a
        purchasing decision.
      </p>
    </div>
  );
};

export default ProsCons;
