"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PerfumePhotos = ({ data }) => {
  console.log(data, "data");

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        480: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {data?.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex justify-center items-center h-[180px] border rounded-lg bg-neutral-200">
            <img
              className="object-contain w-full h-full"
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

