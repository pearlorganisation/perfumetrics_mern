"use client";

import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";
import CardsList from "../CardsList/CardsList";
import axios from "axios";
import Link from "next/link";

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
  const [newArrival, setNewArrival] = useState([]);
  const [celebrityPerfume, setCelebrityPerfume] = useState([]);
  const getNewArrival = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/newArrival`
    );
    setNewArrival(result?.data?.data);
    console.log(result?.data?.data, "NewArrival");
  };
  const getCelebrityPerfume = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/celebrityPerfumes?limit=4`
    );
    setCelebrityPerfume(result?.data?.data);
    console.log(result?.data?.data, "Celebrity Perfume");
  };
  useEffect(() => {
    getNewArrival();
    getCelebrityPerfume();
  }, []);

  console.log(celebrityPerfume, "New Arrival");

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
                  {Array.isArray(newArrival) &&
                    newArrival.length > 0 &&
                    newArrival?.map((item, index) => {
                      return (
                        <SwiperSlide
                          key={index}
                          className="grid place-items-center p-2   md:!w-auto"
                        >
                          <a href={item?.link} target="_blank">
                            <div className="xl:w-[120px] xl:h-[120px] lg:w-[80px] lg:h-[80px] overflow-hidden">
                              <img
                                src={item?.banner || item.imgUrl}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex flex-col justify-center items-center font-medium py-2">
                              <span>{item?.perfumeName}</span>
                              <span className="text-teal-500">
                                {item?.brand?.brand}
                              </span>
                            </div>
                          </a>
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
            <div className="text-3xl text-center md:text-left md:text-5xl font-bold"></div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8">
              {celebrityPerfume?.map((item, index) => {
                return (
                 
                    <div
                      key={item?.title}
                      className="max-w-md bg-white rounded-lg overflow-hidden shadow-lg"
                    >
                       <Link href={`/celebrityPerfumeBlog/${item?._id}`}>
                      <img
                        src={item?.banner}
                        alt="Luxury Fashion"
                        className="w-full h-[20rem]"
                      />
                      <div className="p-6">
                        <h2 className="text-base md:text-lg lg:text-xl font-bold mb-4 line-clamp-3">
                          {item?.title}
                        </h2>
                        <p className="text-gray-700 text-sm md:text-base line-clamp-5">
                          {item?.content}
                        </p>
                      </div>
                      </Link>
                    </div>
                 
                );
              })}
            </div>
            <div className="text-center">
              <Link
                className="hover:underline text-lg hover:text-blue-600"
                href={`/celebrityPerfumeBlog`}
              >
                view more...
              </Link>
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
