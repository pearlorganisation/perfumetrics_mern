import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/module";

const PerfumeCarousel = ({ perfumeCategories, timeZoneCountry }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        // Adjust slides based on screen size
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      {perfumeCategories?.map((item, index) => {
        if (!item?.mapOfLinks[timeZoneCountry]) return null;

        const { link, price, quantity } = item?.mapOfLinks[timeZoneCountry];

        return (
          <SwiperSlide key={index}>
            <Link
              href={
                link ||
                "https://uploads-eu-west-1.insided.com/typeform-en/attachment/7a7796a3-da3b-4ee4-95a4-c53540b53b7a.png"
              }
              target="_blank"
            >
              <div className="max-w-xs mx-auto bg-white rounded-lg shadowE cursor-pointer p-2 overflow-hidden">
                <div className="h-48 bg-white flex items-center justify-center">
                  <img
                    className="h-48"
                    src={item?.banner}
                    alt={item?.perfumeName || ""}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-blue-600">
                    {item?.perfumeName}
                  </h3>
                  <div className="mt-2 space-x-2">
                    <span className="text-xl font-bold text-gray-900">
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

export default PerfumeCarousel;
