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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {fragramsData?.map((item, index) => {
        if (!item?.mapOfLinks[country]) return null;
        return (
          <Link
            key={index}
            href={
              item?.mapOfLinks[country] ||
              "https://uploads-eu-west-1.insided.com/typeform-en/attachment/7a7796a3-da3b-4ee4-95a4-c53540b53b7a.png"
            }
            target="_blank"
            className="grid grid-cols-[40%_auto] p-4 gap-3 shadow-lg rounded-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative border bg-neutral-100 rounded-md overflow-hidden">
              <img
                className="h-full object-contain absolute w-full"
                src={item?.banner}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between">
              <span className="line-clamp-1 text-base font-semibold">
                {item?.title}
              </span>
              <span className="text-sm text-gray-600">{item?.postBy}</span>
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
