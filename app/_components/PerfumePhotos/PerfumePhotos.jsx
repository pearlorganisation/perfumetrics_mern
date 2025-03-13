"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PerfumePhotos = ({ data }) => {
  // console.log(data, "data");

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }}
      className=" !flex !gap-2 !space-x-0"
    >
      {data?.map((item, idx) => (
        <SwiperSlide key={idx} className="mb-8">
          <div className="flex justify-center items-center h-[250px] w-full border rounded-lg bg-neutral-100">
            <img
              className="!object-cover w-full h-full"
              src={item?.path}
              alt={`Perfume ${idx + 1}`}
            />
          </div>
        </SwiperSlide>
      ))}

    </Swiper>
  );
};

export default PerfumePhotos;

