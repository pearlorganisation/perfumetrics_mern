"use client";

import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import parse from "html-react-parser";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";
import CardsList from "../CardsList/CardsList";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

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
    // console.log(result?.data?.data, "NewArrival");
  };
  const getCelebrityPerfume = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/celebrityPerfumes?limit=4`
    );
    setCelebrityPerfume(result?.data?.data);
    // console.log(result?.data?.data, "Celebrity Perfume");
  };
  useEffect(() => {
    getNewArrival();
    getCelebrityPerfume();
  }, []);

  return (
    <>
      <div className="pb-12  container grid gap-x-12 lg:grid-cols-1 w-full px-2 ">
        <div className="block space-y-5">
          <div className="text-center space-y-6">
            <div className="grid place-items-center relative">
              <h1 class="text-3xl md:text-[36px] font-bold px-2 md:px-8 pt-3 bg-white z-40">
                New Perfumes
              </h1>
              <div className="absolute w-[90%] h-[2px] bg-slate-500"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 pt-6 px-2 gap-2 ">
              {Array.isArray(newArrival) &&
                newArrival.length > 0 &&
                newArrival?.slice(0, 4)?.map((item, index) => {
                  return (
                    <a href={item?.link} target="_blank">
                      <div className="  mx-auto">
                        <img
                          src={item?.banner || item.imgUrl}
                          className="w-full h-36 object-contain "
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center font-medium py-2">
                        <span className="line-clamp-1 text-[16px] font-medium">
                          {item?.perfumeName}
                        </span>
                        <span className="text-teal-500 text-[16px] font-medium ">
                          {item?.brand?.brand}
                        </span>
                      </div>
                    </a>
                  );
                })}
            </div>
          </div>
          <div className="space-y-6 px-2 !mt-12  md:mt-0">
            <div className="grid place-items-center relative">
              <h1 class="text-xl md:text-[36px] font-bold px-2 md:px-8 pt-3 bg-white z-40">
                Celebrity Perfumes
              </h1>
              <div className="absolute w-[90%] h-[2px] bg-slate-500"></div>
            </div>
            <div className="text-3xl text-center md:text-left md:text-5xl font-bold"></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6  pt-6">
              {celebrityPerfume?.map((blog, index) => {
                return (
                  <Link
                    key={index}
                    href={`/celebrityPerfumeBlog/${blog?.slug}`}
                  >
                    <div
                      key={index}
                      className=" rounded-lg shadow-md overflow-hidden "
                    >
                      <Image
                        width={600}
                        height={600}
                        src={blog?.banner}
                        //  src={`https://res.cloudinary.com/dznz3eqe8/image/upload/q_auto,f_auto/v1731992687/Design%20Destination/1_d6b8844f-c519-4e09-9d55-84696a702ce3%20%281%29.webp`}
                        // src={`https://res.cloudinary.com/dznz3eqe8/image/upload/q_auto,f_auto/v1737555437/Design%20Destination/y5dspve6alo2pz749xht.jpg`}
                        loading="lazy"
                        // src="https://placehold.com/175x192"
                        alt={blog?.imageAttribute}
                        className="w-full h-36 md:h-44 md:object-center object-contain md:object-contain border"
                      />

                      {/* <div className="w-full bg-yellow-700">
                        <img
                          src={blog?.banner}
                          className=" min-w-40 h-24 object-contain "
                        />
                      </div> */}
                      <div className="p-4">
                        <h3 className="text-[16px] font-bold text-center mb-2 text-gray-800 line-clamp-1">
                          {blog?.title}
                        </h3>
                        {/* <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                          {parse(blog?.content || "")}
                          {blog?.content}
                        </p> */}
                        <button className="w-full hover:text-blue-800 text-xs md:text-base  text-black py-2 px-4 rounded  transition duration-300">
                          Read More
                        </button>
                      </div>
                    </div>
                  </Link>
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
