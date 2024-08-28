"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";
import style from './style.module.css'

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

const PopularBrands = () => {
  return (
    <>
      <div className="container mx-auto max-w-[90%]">
        <div className="p-5 mt-10 mb-10">
          <div className="text-center">
            {/* <div className="inline-block relative pb-5">
              <h1 className="text-3xl font-medium">Popular Brands</h1>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-[#F8306C]"></div>
            </div> */}
            <div className={`flex gap-7 space-x-4 overflow-x-auto py-8 px-2  w-full ${style.custom_scrollbar}`}>

              {popularPerfumeData.map((item, index) => {
                return (

                  <section className=" h-[200px] w-[200px] md:h-[200px] md:w-[200px] xl:w-[240px] xl:h-[240px] lg:w-[240px] lg:h-[240px] ">
                    <div className="h-[80px] w-[80px] md:h-[120px] md:w-[120px] xl:w-[150px] xl:h-[150px] lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden shadow-[0_0_0_5px#f193c4] flex-shrink-0">
                    <img
                      src={item.imgUrl}
                      className="w-full h-full object-cover p-1 rounded-full hover:scale-125 ease-in duration-300"
                    />
                    </div>
                    
                    <div className="mt-4"><b>Mojave Ghost Absolu de Parfum</b><br/>Byredo</div>
                  </section>
                );
              })}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularBrands;
