"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const banners = [
  {
    title: "Best Fragrances",
    description:
      "Perfumer is the place where you can get high-quality fragrances from certified consultants who are not just professionals but also talented masters.",
    buttonText: "Click here",
    imageUrl:
      "https://media.theperfumeshop.com/api/v2/tpsgb/wp/blog/wp-content/uploads/2022/03/woman-spraying-body-mist-onto-wrist.jpg",
  },
  {
    title: "Exquisite Scents",
    description:
      "Discover a range of exquisite scents that captivate and enchant.",
    buttonText: "Explore now",
    imageUrl:
      "https://img.freepik.com/premium-photo/beautiful-girl-using-perfume-woman-with-bottle-perfume-woman-presents-perfumes-fragrance-perfume-bottle-woman-spray-aroma_293990-493.jpg",
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
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        navigation
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative rounded-lg shadow-lg flex items-center justify-center h-[50vh] md:h-[70vh] lg:h-[80vh] p-10 md:p-20 lg:p-32 text-white bg-cover bg-center"
              style={{ backgroundImage: `url(${banner.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
              <div className="relative z-10 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {banner.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-6">
                  {banner.description}
                </p>
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                  {banner.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
