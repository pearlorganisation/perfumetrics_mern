"use client";

import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import banner1 from "../../_assets/Images/1.png";
import banner2 from "../../_assets/Images/2.png";

import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";


console.log("banner1", banner1);

const banners = [
  {
    title: "Best Fragrances",
    description:
      "Perfumer is the place where you can get high-quality fragrances from certified consultants who are not just professionals but also talented masters.",
    buttonText: "Click here",
    imageUrl: banner1.src,
  },
  {
    title: "Exquisite Scents",
    description:
      "Discover a range of exquisite scents that captivate and enchant.",
    buttonText: "Explore now",
    imageUrl: banner2.src,
  },
  {
    title: "Luxury Perfumes",
    description: "Indulge in luxury perfumes crafted by expert perfumers.",
    buttonText: "Shop now",
    imageUrl:
      "https://img.freepik.com/premium-photo/womans-with--bottle--girl-using-perfume-woman-with-bottle-perfume-perfume-bottle-woman-spray-aroma-woman-holding-perfumes-bottle-woman-presents-perfumes-fragrance_293990-3830.jpg",
  },
  {
    title: "Aromatic Bliss",
    description: "Experience aromatic bliss with our exclusive collection.",
    buttonText: "Buy now",
    imageUrl:
      "https://i.pinimg.com/736x/57/14/c5/5714c5431d7f3657c2b1f906ac7e4ba0.jpg",
  },
];

const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <div className="py-10 px-5 lg:px-40 xl:px-60 flex justify-center h-[380px]">
        <div className="flex flex-col h-[90%] justify-center">
          <div >
          <GoChevronLeft ref={prevRef} size={32} className="text-gray-800 z-10 cursor-pointer" />
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 5000 }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            // Make sure Swiper knows about the custom navigation elements
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;

              // Re-initialize navigation
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center w-full h-[320px] rounded-lg text-white bg-cover bg-center shadow-lg">
                <div className=" w-[100%] h-[260px] shadow-[2px_0_10px#000000] ">
                  <img
                    src={banner.imageUrl}
                    className="rounded-sm w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col h-[90%] justify-center">
          <div ref={nextRef} className="z-10 cursor-pointer">
          <GoChevronRight ref={nextRef} size={32} className="text-gray-800 z-10 cursor-pointer"/>

          </div>
        </div>

        {/* Custom navigation buttons */}
      </div>
    </>
  );
};

export default Banner;
