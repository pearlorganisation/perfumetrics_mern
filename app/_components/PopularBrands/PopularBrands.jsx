"use client";

import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";
import style from './style.module.css'
import Link from "next/link";

const PopularBrands = () => {
  const [popularPerfumeData, setPopularPerfumeData] = useState(null)

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/recent`, {
      headers: {
        'Content-Type': 'application/json',
        // Note: Adding `Access-Control-Allow-Origin` here does NOT solve CORS issues on the client side
      },
    }).then((res) => {
      setPopularPerfumeData(res.data.data)
    }).catch((err) => console.log(err))
  }, [])


  useEffect(() => {
    console.log("popularPerfumeData", popularPerfumeData);
  }, [popularPerfumeData])

  console.log("PopularBrands component rendered", popularPerfumeData);

  return (
    <>
      <div className="container mx-auto max-w-[100%] md:max-w-[90%]">
        <div className="p-5 my-0 md:my-10">
          <div className="text-center">
            {/* <div className="inline-block relative pb-5">
              <h1 className="text-3xl font-medium">Popular Brands</h1>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-[#F8306C]"></div>
            </div> */}
            <div className={`flex gap overflow-x-auto py-2 md:py-8 px-2  w-full ${style.custom_scrollbar}`}>

              {popularPerfumeData && popularPerfumeData.map((item, index) => {
                return (

                  <section className=" h-[200px] w-[200px] md:h-[200px] md:w-[200px] xl:w-[240px] xl:h-[240px] lg:w-[240px] lg:h-[240px] flex flex-col justify-center items-center ">
                    <Link href={`/product/${item?._id}`}>
                      <div className=" mx-auto h-[120px] w-[120px] xl:w-[150px] xl:h-[150px] lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden shadow-[0_0_0_2px#f193c4] md:shadow-[0_0_0_4px#f193c4] flex-shrink-0">
                        <img
                          src={item.banner}
                          className="w-full h-full object-cover p-1 rounded-full "
                        />
                      </div>

                      <div className="mt-4 line-clamp-2 text-center"><b>{item.perfume}</b><br />By {item?.brand?.brand || 'redo'}</div>
                    </Link>
                  </section>
                );
              })}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularBrands;