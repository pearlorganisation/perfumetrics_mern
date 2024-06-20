"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";

const PopularBrands = () => {
  return (
    <>
      <div className="container mx-auto max-w-6xl">
        <div className="p-5">
          <div className="text-center">
            <div className="inline-block relative pb-5">
              <h1 className="text-3xl font-medium">Popular Brands</h1>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-[#F8306C]"></div>
            </div>
            <div className="p-10">
              <Swiper
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CyFDvVUd65LTAvzKrEka6VYN7Xz2ppKVrA&s" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[120px] h-[120px] rounded-full overflow-hidden ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROf0x9WhAhYtMI5QeXL4OfDsYUaOXN7upMfQ&s" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-[120px] h-[120px] rounded-full overflow-hidden ">
                    <img src="https://m.media-amazon.com/images/I/61TYei9ZnlL._AC_UF350,350_QL80_.jpg" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFXYYzMqPbNEpAP_CKdJKj_bq0M59jjRRtQ&s" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCXHw3kJ7bOR4_ZlVsop3KW9wRTWFVmUAgjQ&s" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGjXw2yGO0rbbMxzuVaksO0rP6B3psR2MhVg&s" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularBrands;
