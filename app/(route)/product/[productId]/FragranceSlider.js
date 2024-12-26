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
    <div className="flex flex-wrap gap-3">
      {fragramsData?.map((item, index) => {
        console.log(item, "item");
        if (!item?.mapOfLinks[country]) return null;
        return (
          <div className="max-w-sm  bg-white rounded-lg ">
            <div className="flex items-start gap-4">
              {/* Product Images */}
              <div className="flex gap-1">
                <div className="w-12 h-16 bg-black rounded-md">
                  <img
                    className="size-full object-contain"
                    src={item?.banner}
                    alt=""
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-medium">Fogg</h2>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>

                <div className="flex flex-col text-sm text-gray-500">
                  <span>by {item?.postBy}</span>
                  <time className="text-xs">
                    {formatDateToShort(item?.updatedAt)}
                  </time>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FragranceSlider;
