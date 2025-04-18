"use client";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaHeartBroken,
  FaCrown,
} from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { userLikeDislikeHistoryStore } from "@/store/userLikeDislikeHistoryStore";
import { userStore } from "@/store/userStore";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import { toast } from "sonner";
import { FaQuoteLeft } from "react-icons/fa";
import perfumeMetaData from "@/store/perfumeMetaData";

const ProsCons = () => {
  const { id, setId, clearId } = perfumeMetaData();
  const router = useRouter();
  const [historyMap, setHistoryMap] = useState(new Map());
  const [prosNconsData, setProsNconsData] = useState(null);

  const { productId } = useParams();
  const { user } = userStore();

  const getProsCons = useCallback(async (perfumeId) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/prosCons/${perfumeId}`
      );
      setProsNconsData(response.data.data);
    } catch (error) {
      console.error("Error fetching pros and cons:", error);
    }
  }, []);

  const fetchUserHistory = useCallback(async (userId) => {
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/userHistory/${userId}`
      );
      const { cons, pros } = result.data.data;

      const userHistoryMap = new Map();
      cons?.forEach((item) => userHistoryMap.set(item.consId, item));
      pros?.forEach((item) => userHistoryMap.set(item.prosId, item));

      setHistoryMap(userHistoryMap);
    } catch (error) {
      console.error("Error fetching user history:", error);
    }
  }, []);

  const handleVote = async (voteData) => {
    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/voteProsCons`,
        voteData
      );
      getProsCons(id);
      fetchUserHistory(user?._id);
    } catch (error) {
      console.error("Error submitting vote:", error);
    }
  };

  useEffect(() => {
    if (id && user?._id) {
      getProsCons(id);
      fetchUserHistory(user._id);
    }
  }, [getProsCons, fetchUserHistory, id, user]);
  useEffect(() => {
    if (id) {
      getProsCons(id);
    }
  }, [id]);

  return (
    <>
      <div className="grid grid-col-2 items-center bg-white py-6 md:py-0 md:p-6 border border-gray-200 rounded-lg shadow-md mt-12">
        <div className="grid md:grid-cols-2  gap-10 justify-center  w-full py-0 md:py-5 md:px-0 px-10  ">
          <div className=" lg:border-r border-gray-300 grid">
            <div className=" w-full  ">
              <div className="text-center mx-auto w-[70%] md:w-[15rem] text-xl mb-10 ">
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>

                <p className="border mt-1 bg-[#1BBE98] border-black font-normal text-white flex justify-center items-center px-12 py-3 gap-3">
                  PROS
                </p>
              </div>
              <ul>
                {prosNconsData?.pros?.map((item) => (
                  <li
                    key={item._id}
                    className="flex items-start space-x-3 my-2"
                  >
                    <div className="flex gap-3 ">
                      <span
                        onClick={() =>
                          user?._id
                            ? handleVote({
                                prosConsId: prosNconsData._id,
                                userId: user?._id,
                                userVote: 1,
                                pros: item._id,
                              })
                            : toast.info("Please Login First...")
                        }
                        className={` flex flex-col justify-center items-center `}
                      >
                        <div
                          className={`
                          ${
                            historyMap.get(item._id)?.vote === 1
                              ? "ring-4 ring-pink-500/70 rounded-full"
                              : ""
                          }
                          `}
                        >
                          <img className="size-4" src="/Like.png" alt="" />
                        </div>
                        <span className="text-xs">{item.likesVote}</span>
                      </span>
                      <span
                        onClick={() =>
                          user?._id
                            ? handleVote({
                                prosConsId: prosNconsData._id,
                                userId: user?._id,
                                userVote: -1,
                                pros: item._id,
                              })
                            : toast.info("Please Login First...")
                        }
                        className={` flex flex-col justify-center items-center`}
                      >
                        <div
                          className={`
                          ${
                            historyMap.get(item._id)?.vote === -1
                              ? "ring-4 ring-pink-500/70 rounded-full"
                              : ""
                          }
                          p-[2px]`}
                        >
                          <img className="size-4" src="/DisLike.png" alt="" />
                        </div>
                        <span className="text-xs">{item.disLikesVote}</span>
                      </span>
                    </div>
                    <span className="font-normal text-[12px] text-wrap w-full">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className=" grid ">
            <div className="">
              <div className="  text-center mx-auto w-[70%] md:w-[15rem]  text-xl mb-10">
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <p className="border mt-1 border-black bg-[#E96D6D] text-white font-normal text-[20px] flex justify-center items-center px-12 py-3 gap-3">
                  CONS
                </p>
              </div>
              <ul>
                {prosNconsData?.cons?.map((item) => (
                  <li
                    key={item._id}
                    className="flex items-center space-x-3 my-2"
                  >
                    <div className="flex gap-3">
                      <span
                        onClick={() =>
                          user?._id
                            ? handleVote({
                                prosConsId: prosNconsData._id,
                                userId: user?._id,
                                userVote: 1,
                                cons: item._id,
                              })
                            : toast.info("Please Login First...")
                        }
                        className={` flex flex-col justify-center items-center`}
                      >
                        <div
                          className={`
                          ${
                            historyMap.get(item._id)?.vote === 1
                              ? "ring-4 ring-pink-500/70 rounded-full"
                              : ""
                          }
                          `}
                        >
                          <img className="size-4" src="/Like.png" alt="" />
                        </div>

                        <span className="text-xs">{item.likesVote}</span>
                      </span>
                      <span
                        onClick={() =>
                          user?._id
                            ? handleVote({
                                prosConsId: prosNconsData._id,
                                userId: user?._id,
                                userVote: -1,
                                cons: item._id,
                              })
                            : toast.info("Please Login First...")
                        }
                        className={` flex flex-col justify-center items-center`}
                      >
                        <div
                          className={`
                          ${
                            historyMap.get(item._id)?.vote === -1
                              ? "ring-4 ring-pink-500/70 rounded-full"
                              : ""
                          }
                          p-[2px]`}
                        >
                          <img className="size-4" src="/DisLike.png" alt="" />
                        </div>
                        <span className="text-xs">{item.disLikesVote}</span>
                      </span>
                    </div>
                    <span className="font-normal text-[12px] text-wrap w-full">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <p className="md:text-left  text-xs text-[#51799C] italic text-justify font-normal ">
        <span className="font-bold text-[14px] text-[#0A0A0A]"> Note:</span> The
        pros and cons listed on this page have been generated using the
        artificial intelligence system, which analyzes product reviews submitted
        by our members. While we strive to provide accurate and helpful
        information, we cannot guarantee the complete accuracy or reliability of
        the AI-generated pros and cons. Please read the full reviews and
        consider your own needs and preferences before making a purchasing
        decision.
      </p>
    </>
  );
};

export default ProsCons;
