// import React, { useCallback, useRef } from "react";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const PerfumeCategorySlider = ({ perfumeCategories, timeZoneCountry }) => {
//   console.log(perfumeCategories, "perfumeCategories");

//   // const sliderRef = useRef(null);

//   // const handlePrev = useCallback(() => {
//   //   if (!sliderRef.current) return;
//   //   sliderRef.current.swiper.slidePrev();
//   // }, []);

//   // const handleNext = useCallback(() => {
//   //   if (!sliderRef.current) return;
//   //   sliderRef.current.swiper.slideNext();
//   // }, []);

//   return (
//     <Swiper
//       // ref={sliderRef}
//       modules={[Pagination, Navigation]}
//       spaceBetween={10}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       breakpoints={{
//         480: {
//           slidesPerView: 1,
//           spaceBetween: 20,
//         },
//         640: {
//           slidesPerView: 2,
//           spaceBetween: 10,
//         },
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 10,
//         },
//         1024: {
//           slidesPerView: 4,
//           spaceBetween: 10,
//         },
//       }}
//       // className="!px-10"
//     >
//       {perfumeCategories?.map((item, index) => {
//         const temp =
//           item?.mapOfLinks?.[timeZoneCountry] ??
//           item?.mapOfLinks?.["US"] ??
//           (item?.mapOfLinks[Object.keys(item?.mapOfLinks)?.[0]] || []);
//         if (Object.keys(item?.mapOfLinks)?.length == 0) return null;
//         const { link, price, quantity } = temp;

//         return (
//           <SwiperSlide
//             className="!max-w-full !w-[300px] sm:max-w-60  !h-[18rem]"
//             key={index}
//           >
//             <Link
//               href={
//                 link ||
//                 "https://uploads-eu-west-1.insided.com/typeform-en/attachment/7a7796a3-da3b-4ee4-95a4-c53540b53b7a.png"
//               }
//               target="_blank"
//               className="!w-full sm:max-w-60  !h-[18rem] block"
//             >
//               <div className="!w-full !h-full sm:max-w-60  bg-white rounded-lg cursor-pointer p-4 ">
//                 <div className="relative w-full h-full sm:max-w-52 sm:max-h-52  flex items-center justify-center p-1 ">
//                   <img
//                     className="!object-contain w-full h-full rounded-lg"
//                     src={item?.banner}
//                     alt={item?.perfumeName || "Perfume"}
//                   />
//                 </div>
//                 <div className="text-center mt-3">
//                   <h3 className="text-sm md:text-base font-semibold text-black-600 line-clamp-1">
//                     {item?.perfumeName}
//                   </h3>
//                   <div className="mt-2">
//                     <span className="text-sm md:text-lg font-bold text-gray-900">
//                       {price || "0"}
//                     </span>
//                     <span className="!text-gray-600 ml-2">{quantity}ml</span>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </SwiperSlide>
//         );
//       })}
//     </Swiper>
//   );
// };

// export default PerfumeCategorySlider;

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PerfumeCategorySlider = ({ perfumeCategories, timeZoneCountry }) => {
  console.log(perfumeCategories, "perfumeCategories");

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={10}
      slidesPerView={1} // default to 1 slide per view
      navigation
      // pagination={{ clickable: true }}
      pagination={{ clickable: true, el: ".custom-pagination" }}
      breakpoints={{
        480: {
          slidesPerView: 1, // For small screens, 1 item per view
          spaceBetween: 10, // Space between slides
        },

        540: {
          slidesPerView: 2, // For medium screens, 2 items per view
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2, // For larger screens, 2 items per view
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4, // For even larger screens, 4 items per view
          spaceBetween: 10,
        },
      }}
      className="!px-0 sm:px-10  " // Remove padding for full width on small screens
    >
      {perfumeCategories?.map((item, index) => {
        const temp =
          item?.mapOfLinks?.[timeZoneCountry] ??
          item?.mapOfLinks?.["US"] ??
          (item?.mapOfLinks[Object.keys(item?.mapOfLinks)?.[0]] || []);
        if (Object.keys(item?.mapOfLinks)?.length === 0) return null;
        const { link, price, quantity } = temp;

        return (
          <SwiperSlide
            // className=" !max-w-full w-[300px] md:w-[300px]  sm:max-w-60 !h-[18rem] flex justify-center " // Center the items
            className=" !max-w-full w-[250px] md:w-[250px]  sm:max-w-52 !h-[16rem] flex justify-center " // Center the items
            key={index}
          >
            <Link
              href={
                link ||
                "https://uploads-eu-west-1.insided.com/typeform-en/attachment/7a7796a3-da3b-4ee4-95a4-c53540b53b7a.png"
              }
              target="_blank"
              // className="!w-full sm:max-w-60 !h-[18rem] block"
              className="!w-full sm:max-w-52 !h-[16rem] block"
            >
              <div className="!w-full !h-full sm:max-w-60 bg-white rounded-lg cursor-pointer p-4">
                <div className="relative w-full h-full sm:max-w-52 sm:max-h-52 flex items-center justify-center p-1">
                  <img
                    className="!object-contain w-full h-full rounded-lg"
                    src={item?.banner}
                    alt={item?.perfumeName || "Perfume"}
                  />
                </div>
                <div className="text-center mt-3">
                  <h3 className="text-sm md:text-base font-semibold text-black-600 line-clamp-1">
                    {item?.perfumeName}
                  </h3>
                  <div className="mt-2">
                    <span className="text-sm md:text-lg font-bold text-gray-900">
                      {price || "0"}
                    </span>
                    <span className="!text-gray-600 ml-2">{quantity}ml</span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}

      <div className="custom-pagination"></div>
    </Swiper>
  );
};

export default PerfumeCategorySlider;
