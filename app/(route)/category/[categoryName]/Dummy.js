import Link from "next/link";
import React from "react";
import BrandFilter from "../../brand/BrandFilter";
import Pagination from "@/app/_components/Pagination/Pagination";
import Image from "next/image";
import BrandSlider from "../BrandSlider";

const Dummy = ({ data, gender, totalPages }) => {
  function isDataNew(updatedAt) {
    const updatedDate = new Date(updatedAt);
    const currentDate = new Date();
    return (
      updatedDate.getFullYear() === currentDate.getFullYear() &&
      updatedDate.getMonth() === currentDate.getMonth() &&
      updatedDate.getDate() === currentDate.getDate()
    );
  }

  return (
    <div className="bg-white">
      {/* Top Banner Section */}
      <div className="w-full  relative">
        <h1 className="text-center block md:hidden  uppercase text-lg md:text-2xl lg:text-4xl font-serif mb-6">
          Fragrances for {gender}
        </h1>
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="https://res.cloudinary.com/dnixhctcf/image/upload/h_320,w_640/v1729577242/perfumeBanner_ihazup.avif"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="https://res.cloudinary.com/dnixhctcf/image/upload/h_480,w_1024/v1729577242/perfumeBanner_ihazup.avif"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="https://res.cloudinary.com/dnixhctcf/image/upload/h_620,w_1920/v1729577242/perfumeBanner_ihazup.avif"
          />
          <Image
            className="object-cover mx-auto"
            src="https://res.cloudinary.com/dnixhctcf/image/upload/h_620,w_1920/v1729577242/perfumeBanner_ihazup.avif"
            alt="Banner"
            layout="responsive"
            width={1920}
            height={620}
          />
        </picture>
      </div>

      <div className="max-w-[1580px] w-full mx-auto py-8 md:py-12 space-y-8">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Left Section (Filters and Image) */}
          <div className="space-y-5">
            <BrandFilter />
            <BrandSlider />
            <div className="w-fit rounded-[16px] hidden lg:block overflow-hidden">
              <img
                className="w-[343px] h-[307px] object-cover"
                src="https://us.parfums-de-marly.com/cdn/shop/files/web_en.png?v=1726041468"
                alt="Promo"
              />
            </div>
          </div>

          {/* Right Section (Fragrance Grid) */}
          <div className="p-4 md:p-8 rounded-[16px] container mx-auto w-full min-h-screen shadow-[0px_0px_20.9px_1px_#00000040">
            <h1 className="text-center hidden md:block uppercase text-lg md:text-2xl lg:text-4xl font-serif mb-6">
              Fragrances for {gender}
            </h1>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-6 md:gap-8">
              {Array.isArray(data) && data?.length > 0 ? (
                data?.map((fragrance, index) => (
                  <div key={index} className="space-y-2 min-h-[10rem] ">
                    <div className="text-center flex flex-col gap-3 p-4 justify-between shadow-[0px_0px_8px_0px_#00000040] rounded-[16px] overflow-hidden">
                      <img
                        src={fragrance?.banner}
                        alt={fragrance?.perfume}
                        className="w-full h-[150px] sm:h-[150px] md:h-[20rem] object-fill max-w-xs mx-auto"
                      />
                    </div>
                    <div className="flex justify-center gap-3 items-center flex-col">
                      {/* {isDataNew(fragrance?.updatedAt) && (
                        <span className="block text-gray-600 text-sm mt-2 uppercase">
                          New
                        </span>
                      )} */}
                      <h2 className="text-lg mt-2 font-serif line-clamp-1">
                        {fragrance?.perfume}
                      </h2>
                      <p className="text-gray-500 mt-1">{fragrance?.price}</p>
                    </div>
                    <div className="grid place-items-center">
                      <Link href={`/product/${fragrance?._id}`}>
                        <button className="group shadow-[0px_0px_8px_0px_#00000040] mx-auto rounded-[16px] relative group overflow-hidden bg-white px-3 py-1 text-black">
                          <span className="relative z-10">Read More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full h-full text-center col-span-4">
                  No Data Found
                </div>
              )}
            </div>
            <Pagination totalPages={totalPages} />
            <div className="w-full rounded-[16px] mt-4 block overflow-hidden md:hidden">
              <img
                className="w-full h-[307px] object-cover"
                src="https://us.parfums-de-marly.com/cdn/shop/files/web_en.png?v=1726041468"
                alt="Promo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dummy;
