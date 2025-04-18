"use client";

import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import FragramSlider from "./FragranceSlider";
import FragranceSlider from "./FragranceSlider";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import { IoMaleFemale } from "react-icons/io5";
import perfumeMetaData from "@/store/perfumeMetaData";
import { userStore } from "@/store/userStore";
import CustomerFeedbackModal from "@/app/_components/Modals/FeedBackModal/CustomerFeedbackModal";

const FragramRatings = ({ data, country }) => {
  const { id, setId, clearId } = perfumeMetaData();
  const { isUserLoggedIn } = userStore();

  const { productId } = useParams();
  const [fragramsData, setFragramsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getFragrams = async (productId) => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/fragrams?perfumeId=${productId}`
    );
    setFragramsData(result?.data?.data);
    // console.log(result?.data?.data, "fragramsData");
  };
  useEffect(() => {
    if (id) {
      getFragrams(id);

    }
  }, [id]);

  function handleOpeningModal() {
    if (!isUserLoggedIn) {
      toast.info('Please Login First...')
      router.push(`/login?returnUrl=pd`);
    }
    else setIsModalOpen(true);
  }



  // console.log("Frgaram rating ", data);
  return (
    <div className="">
      {
        isModalOpen && createPortal(<CustomerFeedbackModal onClose={() => { setIsModalOpen(false) }} />, document.body)
      }
      <div>
        <div className="flex flex-col items-center  md:space-y-8">
          <div className="grid place-items-center relative w-full mt-20 mb-0 md:mb-8">
            <h2
              className="text-xl md:text-3xl font-extrabold bg-white px-4 ">
              Fragram Ratings
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-8 px-2 mt-1">
            <div className="flex flex-col items-center ">
              <div className="relative ">
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
                    className="text-amber-500"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="48"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-amber-500"
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
                    <IoMdMale className="w-6 h-6 md:w-8 md:h-8" />
                  )}
                  {data?.gender === "F" && (
                    <IoMdFemale className="w-6 h-6 md:w-8 md:h-8" />
                  )}
                  {data?.gender === "O" && (
                    <IoMaleFemale />
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
          <button
            onClick={handleOpeningModal}
            className="px-6 py-2 mt-8 text-lg font-semibold text-white bg-pink-500 rounded-md">
            Rate Fragram
          </button>
        </div>
        {data && (
          <div className=" mt-16 space-y-8">
            <div className="grid  relative w-full">

              <div className="flex items-center justify-center text-center">
                <h2
                  className="text-xl md:text-3xl font-extrabold bg-white">
                  Fragrams
                </h2>
              </div>
            </div>

            <div className="grid  gap-8">
              <FragranceSlider fragramsData={fragramsData} country={country} />

            </div>
          </div>
        )}
      </div>
    </div>
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
