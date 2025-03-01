"use client";

import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules

import axios from "axios";
import Link from "next/link";
import perfumeMetaData from "@/store/perfumeMetaData";





const
  RelatedFragram = ({ country }) => {

    const { id: productId, setId, clearId } = perfumeMetaData();
    const [isLoading, setIsLoading] = useState(false)
    const [perfumeData, setPerfumeData] = useState(null);
    const getRelatedFragram = (perfumeId) => {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/relatedFragrams?perfumeId=${perfumeId}`)
        .then((res) => {
          setPerfumeData(res?.data?.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
    useEffect(() => {
      if (productId) {
        getRelatedFragram(productId)
      }
    }, [productId])
    return (

      perfumeData?.length > 0 ? <div className="block mb-20">
        <div className="p-5">
          <div className="text-left">
            <div className="grid place-items-start relative pb-5">
              <h1
                className="text-xl md:text-3xl font-extrabold bg-white px-4 ">
                Related Fragram
              </h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4  relative">
              {perfumeData?.filter((it, idx) => idx < 8)?.map((item, index) => {

                if (!item.mapOfLinks[country])
                  return;
                return (
                  <Link href={item?.mapOfLinks[country] || 'https://uploads-eu-west-1.insided.com/typeform-en/attachment/7a7796a3-da3b-4ee4-95a4-c53540b53b7a.png'} target="_blank">
                    <div className="shadowE cursor-pointer ml-5 p-1 w-[10rem]">
                      <div className="xl:w-[120px] xl:h-[120px] lg:w-[80px] lg:h-[80px] overflow-hidden mx-auto">
                        <img
                          src={item.banner}
                          className="w-full size-36 !object-contain "
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center font-medium py-2">
                        <span className="line-clamp-1 text-center">{item?.perfumeName}</span>
                        <span className="text-teal-500 line-clamp-1">{item?.brand?.brand}</span>
                      </div>
                    </div>

                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div> : <>No Data</>

    );
  };

export default RelatedFragram;
