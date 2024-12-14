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

const ProsCons = () => {
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
      getProsCons(productId);
      fetchUserHistory(user?._id);
    } catch (error) {
      console.error("Error submitting vote:", error);
    }
  };

  useEffect(() => {
    if (productId && user?._id) {
      getProsCons(productId);
      fetchUserHistory(user._id);
    }
  }, [getProsCons, fetchUserHistory, productId, user]);
  useEffect(() => {
    if (productId) {
      getProsCons(productId);
    }
  }, [productId]);

  return (
    <>
      <div className="grid grid-col-2 items-center bg-white md:p-6 border border-gray-200 rounded-lg shadow-md mt-12">
        <div className="grid md:grid-cols-2 py-3 gap-10 justify-center  w-full md:px-0 px-10 ">
          <div className="md:p-4 lg:border-r border-gray-300 grid bg-[#f0fff1]">
            <div className=" w-full   ">
              <div className="text-[#2e6e6a] font-semibold text-center mx-auto w-[15rem] py-4 text-xl">
                <p className="border border-black flex justify-center items-center px-12 py-3 gap-3">
                  <FaCrown /> PROS
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
                        className={`${
                          historyMap.get(item._id)?.vote === 1
                            ? "ring-4 ring-pink-500/70 rounded-full"
                            : ""
                        } flex flex-col justify-center items-center `}
                      >
                        <CiHeart size={20} className="text-pink-300" />
                        <span className="text-sm">{item.likesVote}</span>
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
                        className={`${
                          historyMap.get(item._id)?.vote === -1
                            ? "ring-4 ring-pink-500/70 rounded-full"
                            : ""
                        } flex flex-col justify-center items-center`}
                      >
                        <FaHeartBroken className="text-[#f34949]" />
                        <span className="text-sm">{item.disLikesVote}</span>
                      </span>
                    </div>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 grid  bg-[#fff5f5]">
            <div className="">
              <div className="text-[#ec5151] font-semibold text-center mx-auto w-[15rem] py-4 text-xl">
                <p className="border border-black flex justify-center items-center px-12 py-3 gap-3">
                  <FaCrown /> CONS
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
                        className={`${
                          historyMap.get(item._id)?.vote === 1
                            ? "ring-4 ring-pink-500/70 rounded-full"
                            : ""
                        } flex flex-col justify-center items-center`}
                      >
                        <CiHeart size={20} className="text-pink-300" />
                        <span className="text-sm">{item.likesVote}</span>
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
                        className={`${
                          historyMap.get(item._id)?.vote === -1
                            ? "ring-4 ring-pink-500/70 rounded-full"
                            : ""
                        } flex flex-col justify-center items-center`}
                      >
                        <FaHeartBroken className="text-[#f34949]" />
                        <span className="text-sm">{item.disLikesVote}</span>
                      </span>
                    </div>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <p className="md:text-left  text-sm text-blue-500 italic text-justify font-normal">
        <span className="font-semibold text-base text-black"> Note:</span> The
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
