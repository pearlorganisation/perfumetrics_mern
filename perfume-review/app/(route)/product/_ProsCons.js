import Image from "next/image";
import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaHeartBroken } from "react-icons/fa";

const ProsCons = ({ data }) => {
  return (
    <div>
      <p className="text-4xl font-medium py-2">Pros and Cons</p>

      <div className="grid grid-col-2  items-center bg-white p-6 border border-gray-200 rounded-lg shadow-md">
        <div className="flex justify-center w-full">
          <div className=" p-4 border-r border-gray-300 grid place-items-center">
            <div className="mt-4">
              <div className="text-[#2e6e6a] font-semibold text-center px-28 py-4  text-xl">
                <p className="border ">PROS</p>
              </div>
              {data?.pros.map((item, index) => (
                <div className="">
                  <li
                    key={index}
                    className="flex items-center space-x-3   my-2"
                  >
                    <div className="flex gap-5">
                      <span className=" flex flex-col justify-center items-center">
                        <CiHeart size={24} className="text-pink-300" />
                        <span className="">{item.likes}</span>
                      </span>
                      <span className=" flex flex-col justify-center items-center">
                        <FaHeartBroken className="text-[#f34949]" />
                        <span className="">{item.dislikes}</span>
                      </span>
                    </div>
                    <span className="text-center text-wrap ">{item.pros} </span>
                  </li>
                </div>
              ))}
            </div>
          </div>

          <div className=" p-4  border-gray-300 grid  place-items-center">
            <div className="mt-4">
              <div className="text-[#ec5151] font-semibold text-center px-28 py-4  text-xl">
                <p className="border ">CONS</p>
              </div>
              {data?.cons.map((item, index) => (
                <div>
                  <li key={index} className="flex items-center space-x-3  my-2">
                    <div className="flex gap-5">
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
                    <span className="text-center text-wrap ">{item.cons}</span>
                  </li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm  mt-4">
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
