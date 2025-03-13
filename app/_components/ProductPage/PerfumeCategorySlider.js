import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PerfumeCategorySlider = ({ perfumeCategories, timeZoneCountry }) => {
  console.log(perfumeCategories, "perfumeCategories");
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
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      className="-translate-x-10"
    >
      {perfumeCategories?.map((item, index) => {
        const temp =
          item?.mapOfLinks?.[timeZoneCountry] ??
          item?.mapOfLinks?.["US"] ??
          (item?.mapOfLinks[Object.keys(item?.mapOfLinks)?.[0]] || []);
        if (Object.keys(item?.mapOfLinks)?.length == 0) return null;
        const { link, price, quantity } = temp;

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
                <div className="relative h-40 flex items-center justify-center p-1">
                  <img
                    className="!object-contain w-full h-full rounded-lg"
                    src={item?.banner}
                    alt={item?.perfumeName || "Perfume"}
                  />
                </div>
                <div className="text-center mt-3">
                  <h3 className="text-sm md:text-base font-semibold text-black-600 line-clamp-1">
                    {item?.perfumeName}
                  </h3>
                  <div className="mt-2">
                    <span className="text-sm md:text-lg font-bold text-gray-900">
                      {price || "0"}
                    </span>
                    <span className="!text-gray-600 ml-2">{quantity}ml</span>
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
