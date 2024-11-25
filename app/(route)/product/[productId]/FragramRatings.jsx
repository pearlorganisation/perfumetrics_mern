"use client";

import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const FragramRatings = ({ data }) => {
  const { productId } = useParams();
  const [fragramsData, setFragramsData] = useState([]);

  const getFragrams = async (productId) => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/fragrams?perfumeId=${productId}`
    );
    setFragramsData(result?.data?.data);
    console.log(result?.data?.data, "fragramsData");
  };
  useEffect(() => {
    getFragrams(productId);
  }, []);

  console.log("Frgaram rating ", data);
  return (
    <>
      <div>
        <div className="flex flex-col items-center  md:space-y-8">
          <div className="grid place-items-center relative w-full mt-20 mb-0 md:mb-8">
            <h2 className="text-xl md:text-3xl font-medium px-8 py-3 bg-white z-40">
              Fragram Ratings
            </h2>
            <div className="absolute w-full h-[2px] bg-slate-500"></div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="relative">
                <svg
                  className="w-20 h-20 md:w-32 md:h-32"
                  viewBox="0 0 128 128"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle
                    className="text-gray-300"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="48"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-green-500"
                    strokeWidth="8"
                    strokeDasharray="301.6"
                    strokeDashoffset="75.4"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="48"
                    cx="64"
                    cy="64"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm md:text-2xl font-bold">
                  {data?.longitivity || 0}/10
                </div>
              </div>

              <h3 className="mt-2 font-semibold">Longevity</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative">
                <svg
                  className="w-20 h-20 md:w-32 md:h-32"
                  viewBox="0 0 128 128"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle
                    className="text-gray-300"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="48"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-orange-500"
                    strokeWidth="8"
                    strokeDasharray="301.6"
                    strokeDashoffset="60.3"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="48"
                    cx="64"
                    cy="64"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm md:text-2xl font-bold">
                  {data?.sillage || 0}/10
                </div>
              </div>

              <h3 className="mt-2 font-semibold">Sillage</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative">
                <svg
                  className="w-20 h-20 md:w-32 md:h-32"
                  viewBox="0 0 128 128"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle
                    className="text-gray-300"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="48"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-orange-500"
                    strokeWidth="8"
                    strokeDasharray="301.6"
                    strokeDashoffset="60.3"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="48"
                    cx="64"
                    cy="64"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm md:text-2xl font-bold">
                  {data?.sillage || 0}/10
                </div>
              </div>

              <h3 className="mt-2 font-semibold">Pricing</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative">
                <svg
                  className="w-20 h-20 md:w-32 md:h-32"
                  viewBox="0 0 128 128"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle
                    className="text-gray-300"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="48"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-red-500"
                    strokeWidth="8"
                    strokeDasharray="301.6"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="48"
                    cx="64"
                    cy="64"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm md:text-2xl font-bold">
                  {data?.gender === "M" && (
                    <UserIcon className="w-6 h-6 md:w-8 md:h-8" />
                  )}
                  {data?.gender !== "M" && (
                    <XIcon className="w-6 h-6 md:w-8 md:h-8" />
                  )}
                </div>
              </div>

              <h3 className="mt-2 font-semibold">Gender</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative">
                <svg
                  className="w-20 h-20 md:w-32 md:h-32"
                  viewBox="0 0 128 128"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle
                    className="text-gray-300"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="48"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-yellow-500"
                    strokeWidth="8"
                    strokeDasharray="301.6"
                    strokeDashoffset="45.2"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="48"
                    cx="64"
                    cy="64"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm md:text-2xl font-bold">
                  {data?.compliment || 0}/10
                </div>
              </div>

              <h3 className="mt-2 font-semibold">Compliment</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative">
                <svg
                  className="w-20 h-20 md:w-32 md:h-32"
                  viewBox="0 0 128 128"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle
                    className="text-gray-300"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="48"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-blue-500"
                    strokeWidth="8"
                    strokeDasharray="301.6"
                    strokeDashoffset="30.2"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="48"
                    cx="64"
                    cy="64"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm md:text-2xl font-bold">
                  {data?.overall || 0}/10
                </div>
              </div>

              <h3 className="mt-2 font-semibold">Overall</h3>
            </div>
          </div>
          <button className="px-6 py-2 mt-8 text-lg font-semibold text-white bg-pink-500 rounded-md">
            Rate Fragram
          </button>
        </div>
        {data && (
          <div className="space-y-4 mt-24">
            <div className="grid place-items-center relative w-full mb-16">
              <h2 className="text-xl md:text-3xl font-medium px-8 py-3 bg-white z-40">
                Fragrams
              </h2>
              <div className="absolute w-full h-[2px] bg-slate-500"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {fragramsData?.map((item) => {
                return (
                  <Link href={`${item?.link}`} target="_blank">
                    <div className="w-full bg-white shadowE cursor-pointer rounded-lg  overflow-hidden">
                      <div className="flex">
                        <div className="w-1/4">
                          <img
                            src={item?.banner}
                            alt="Image"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="w-3/4 p-4">
                          <div className="flex justify-between items-center">
                            <div className="flex gap-3">
                              <h3 className="text-lg font-semibold text-gray-900">
                                {item?.title}
                              </h3>
                              <div className="size-5 rounded-full bg-green-500 text-xs grid place-items-center">
                                {item?.rating}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">
                            by <span className="text-gray-800">{item?.postBy}</span>
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            {new Date(item?.createdAt).toLocaleString("en-US")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default FragramRatings;
