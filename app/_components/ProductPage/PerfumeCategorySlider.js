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
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        480: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
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
        if (!item?.mapOfLinks[timeZoneCountry]) return null;
        const { link, price, quantity } = item?.mapOfLinks[timeZoneCountry];

        return (
          <SwiperSlide className="!max-w-full p-10" key={index}>
            <Link
              href={
                link ||
                "https://uploads-eu-west-1.insided.com/typeform-en/attachment/7a7796a3-da3b-4ee4-95a4-c53540b53b7a.png"
              }
              target="_blank"
            >
              <div className="max-w-xs mx-auto bg-white rounded-lg cursor-pointer p-4">
                <div className="relative h-40 md:h-52 flex items-center justify-center p-1">
                  <img
                    className="!object-contain w-full h-full rounded-lg"
                    src={item?.banner}
                    alt={item?.perfumeName || "Perfume"}
                  />
                </div>
                <div className="text-center mt-3">
                  <h3 className="text-sm md:text-base font-semibold text-blue-600 line-clamp-1">
                    {item?.perfumeName}
                  </h3>
                  <div className="mt-2">
                    <span className="text-sm md:text-lg font-bold text-gray-900">
                      {price || "0"}
                    </span>
                    <span className="text-gray-600 ml-2">
                      {quantity || "90ml"}
                    </span>
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
