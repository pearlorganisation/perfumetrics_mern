"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import Link from "next/link";
import perfumeMetaData from "@/store/perfumeMetaData";

const RelatedFragram = ({ country }) => {
  const { id: productId } = perfumeMetaData();
  const [isLoading, setIsLoading] = useState(true);
  const [perfumeData, setPerfumeData] = useState([]);

  const getRelatedFragram = useCallback(async (perfumeId) => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/relatedFragrams?perfumeId=${perfumeId}`
      );
      setPerfumeData(data?.data || []);
    } catch (error) {
      console.error("Error fetching related fragrances:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (productId) getRelatedFragram(productId);
  }, [productId, getRelatedFragram]);

  if (isLoading) return <p>Loading...</p>;
  if (!perfumeData.length) return <p>No related fragrances found.</p>;

  return (
    <div className="block mb-20 mt-5 ">
      <div className="text-center w-full ">
        <h1 className="text-xl md:text-3xl font-extrabold bg-white  pb-5">
          Related Fragrances
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   ">
          {perfumeData.slice(0, 8).map((item, index) => {
            const companiesList =
              item?.mapOfLinks?.[country] ??
              item?.mapOfLinks?.["US"] ??
              item?.mapOfLinks[Object.keys(item?.mapOfLinks)?.[0]] ?? "";

            if (!Object.keys(item?.mapOfLinks || {}).length) return null;

            return (
              <div className="flex items-center justify-center ">
                <Link key={index} href={companiesList} target="_blank">
                  <div className=" cursor-pointer p-1 w-[8rem] md:w-[10rem] hover:shadow-lg transition-all  flex flex-col items-center justify-around ">

                    <div className="md:w-[160px] md:h-[160px] w-[120px] h-[120px]   overflow-hidden">
                      <img
                        src={item.banner || "/placeholder.png"}
                        alt={item.perfumeName}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-center font-medium py-2">
                      <p className="line-clamp-1">{item.perfumeName}</p>
                      <p className="text-teal-500 line-clamp-1">{item?.brand?.brand}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedFragram;
