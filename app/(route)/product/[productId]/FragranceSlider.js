import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FragranceSlider = ({ fragramsData, country }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
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
    >
      {fragramsData?.map((item, index) => {
        if (!item?.mapOfLinks[country]) return null;
        return (
          <SwiperSlide
            className=" !flex !justify-center !items-center"
            key={index}
          >
            <Link
              href={
                item?.mapOfLinks[country] ||
                "https://uploads-eu-west-1.insided.com/typeform-en/attachment/7a7796a3-da3b-4ee4-95a4-c53540b53b7a.png"
              }
              target="_blank"
            >
              <div className="w-full text-left bg-white shadow-md cursor-pointer rounded-lg overflow-hidden">
                <div className="flex">
                  <div className="w-1/4">
                    <img
                      src={item?.banner}
                      alt="Fragrance Image"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="w-3/4 p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item?.title}
                        </h3>
                        <div className="size-5 rounded-full bg-green-500 text-xs grid place-items-center text-white">
                          {item?.rating}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      by <span className="text-gray-800">{item?.postBy}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(item?.createdAt).toLocaleString("en-US")}
                    </p>
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

export default FragranceSlider;
