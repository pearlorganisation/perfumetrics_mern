"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";
import CardsList from "../CardsList/CardsList";

const popularPerfumeData = [
  {
    name: "",
    imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CyFDvVUd65LTAvzKrEka6VYN7Xz2ppKVrA&s`,
  },
  {
    name: "",
    imgUrl: `https://m.media-amazon.com/images/I/61TYei9ZnlL._AC_UF350,350_QL80_.jpg`,
  },
  {
    name: "",
    imgUrl: `https://m.media-amazon.com/images/I/61TYei9ZnlL._AC_UF350,350_QL80_.jpg`,
  },
  {
    name: "",
    imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFXYYzMqPbNEpAP_CKdJKj_bq0M59jjRRtQ&s`,
  },
  {
    name: "",
    imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCXHw3kJ7bOR4_ZlVsop3KW9wRTWFVmUAgjQ&s`,
  },
  {
    name: "",
    imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGjXw2yGO0rbbMxzuVaksO0rP6B3psR2MhVg&s`,
  },
  {
    name: "",
    imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CyFDvVUd65LTAvzKrEka6VYN7Xz2ppKVrA&s`,
  },
  {
    name: "",
    imgUrl: `https://m.media-amazon.com/images/I/61TYei9ZnlL._AC_UF350,350_QL80_.jpg`,
  },
  {
    name: "",
    imgUrl: `https://m.media-amazon.com/images/I/61TYei9ZnlL._AC_UF350,350_QL80_.jpg`,
  },
];

const perfumeReviews = [
  {
    imgUrl: "https://fimgs.net/mdimg/perfume/375x500.2355.jpg",
    name: "al haraman",
    brand: null,
  },
  {
    imgUrl: "https://fimgs.net/mdimg/perfume/375x500.90689.jpg",
    name: "Denver",
    brand: "Cereria Terenzi Evelino S.R.L.",
  },
  {
    imgUrl: "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
    name: "Denver",
    brand: "Cereria Terenzi Evelino S.R.L.",
  },
  {
    imgUrl: "https://fimgs.net/mdimg/perfume/375x500.35456.jpg",
    name: "Denver",
    brand: "Cereria Terenzi Evelino S.R.L.",
  },
  {
    imgUrl: "https://fimgs.net/mdimg/perfume/375x500.90689.jpg",
    name: "Denver",
    brand: "Cereria Terenzi Evelino S.R.L.",
  },
  {
    imgUrl: "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
    name: "Denver",
    brand: "Cereria Terenzi Evelino S.R.L.",
  },
  {
    imgUrl: "https://fimgs.net/mdimg/perfume/375x500.35456.jpg",
    name: "Denver",
    brand: "Cereria Terenzi Evelino S.R.L.",
  },
];

const NewPerfumes = () => {
  return (
    <>
      <div className="pb-12 container grid gap-x-12 lg:grid-cols-[70%_20%] w-full mt-8">
        <div className="hidden lg:block">
          <div className="p-5">
            <div className="text-center">
              <div className="grid place-items-center relative">
                <h1 className="text-3xl font-medium px-8 py-3 bg-white z-40">
                  New Perfumes
                </h1>
                <div className="absolute w-full h-[2px] bg-slate-500"></div>
              </div>
              <div className="p-10">
                <Swiper
                  slidesPerView={2}
                  breakpoints={{
                    640: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 5,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 6,
                      spaceBetween: 50,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {popularPerfumeData.map((item, index) => {
                    return (
                      <SwiperSlide
                        key={index}
                        className="grid place-items-center p-2   md:!w-auto"
                      >
                        <div className="xl:w-[120px] xl:h-[120px] lg:w-[80px] lg:h-[80px] overflow-hidden">
                          <img
                            src={item.imgUrl}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-center items-center font-medium py-2">
                          <span>Crazypills</span>
                          <span className="text-teal-500">Incolonge</span>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="space-y-3 px-3 mt-1888888888">
          <div class="grid place-items-center relative mt-8 mb-10">
            <h1 class="text-3xl font-medium px-8 py-3 bg-white z-40">
            Celebrity Perfumes
            </h1>
            <div class="absolute w-full h-[2px] bg-slate-500"></div>
          </div>
            <div className="text-3xl text-center md:text-left md:text-5xl font-bold">
              
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8">
              {Array(4)
                .fill(true)
                .map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="max-w-md bg-white rounded-lg overflow-hidden shadow-lg"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1623742310401-d8057c3c43c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Luxury Fashion"
                        className="w-full h-[20rem]"
                      />
                      <div className="p-6">
                        <h2 className="text-base md:text-lg lg:text-xl font-bold mb-4 line-clamp-3">
                          Come summer, luxury brands are turning to experiential
                          partnerships and collaborations
                        </h2>
                        <p className="text-gray-700 text-sm md:text-base line-clamp-5">
                          Luxury fashion houses are increasingly venturing
                          beyond traditional retail, embracing pop-up stores and
                          Luxury fashion houses are increasingly venturing
                          beyond traditional retail, embracing pop-up stores and
                          Luxury fashion houses are increasingly venturing
                          beyond traditional retail, embracing pop-up stores and
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="w-full">
          {/* <CardsList data={perfumeReviews} /> */}
        </div>
      </div>
    </>
  );
};

export default NewPerfumes;
