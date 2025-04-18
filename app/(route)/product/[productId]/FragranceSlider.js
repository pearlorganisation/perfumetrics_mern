import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FragranceSlider = ({ fragramsData, country }) => {
  function formatDateToShort(dateString) {
    const date = new Date(dateString);

    // Get day, month, and year
    const day = date.getUTCDate().toString().padStart(2, "0"); // Ensure 2 digits
    const month = date.toLocaleString("en-US", { month: "short" }); // Abbreviated month
    const year = date.getUTCFullYear().toString().slice(-2); // Last 2 digits of the year

    // Return in the desired format
    return `${day}-${month}-${year}`;
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {fragramsData?.map((item, index) => {
        console.log(item, "travis thulla");

        const companiesList =
          item?.mapOfLinks?.[country] ??
          item?.mapOfLinks?.["US"] ??
          (item?.mapOfLinks[Object.keys(item?.mapOfLinks)?.[0]] || []);

        if (!Object.keys(item.mapOfLinks).length) return null;

        return (
          <Link
            key={index}
            href={
              companiesList ||
              "https://uploads-eu-west-1.insided.com/typeform-en/attachment/7a7796a3-da3b-4ee4-95a4-c53540b53b7a.png"
            }
            target="_blank"
            className="flex flex-col p-2  rounded-xl  hover:shadow-xl transition-all duration-200 transform hover:scale-[1.03]"
          >
            {/* Image Container */}
            <div className="relative w-full h-32 rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src={item?.banner}
                alt="Banner"
              />
            </div>

            {/* Content */}
            <div className="mt-4 flex flex-col justify-center text-center">
              <span className="text-lg font-semibold text-gray-900 line-clamp-1">
                {item?.title}
              </span>
              <span className="text-sm text-gray-600 line-clamp-1">
                {item?.postBy}
              </span>
              <time className="text-xs text-gray-500">
                {formatDateToShort(item?.updatedAt)}
              </time>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default FragranceSlider;
