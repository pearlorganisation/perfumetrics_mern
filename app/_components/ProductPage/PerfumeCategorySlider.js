import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PerfumeCategorySlider = ({ perfumeCategories, timeZoneCountry }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      // pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className=""
    >
      {perfumeCategories?.map((item, index) => {
        if (!item?.mapOfLinks[timeZoneCountry]) return;
        const { link, price, quantity } = item?.mapOfLinks[timeZoneCountry];

        return (
          <SwiperSlide className=" !size-52" key={index}>
            <Link
              href={
                link ||
                "https://uploads-eu-west-1.insided.com/typeform-en/attachment/7a7796a3-da3b-4ee4-95a4-c53540b53b7a.png"
              }
              target="_blank"
            >
              <div className="max-w-xs mx-auto bg-white rounded-lg  cursor-pointer space-y-2">
                <div className="relative h-32 md:h-48 bg-whtie flex items-center justify-center p-1">
                  <img
                    className=" !object-contain absolute  w-full h-full"
                    src={item?.banner}
                    alt=""
                  />
                </div>
                <div className="">
                  <h3 className="text-xs md:text-base font-semibold text-blue-600 line-clamp-1">
                    {item?.perfumeName}
                  </h3>
                  <div className="space-y-3">
                    <span className=" text-sm md:text-xl font-bold text-gray-900">
                      {price || 0}
                    </span>
                    <span className="text-gray-600">{quantity || "90ml"}</span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PerfumeCategorySlider;
