"use client";

import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

const categories = [
  "JavaScript",
  "AI",
  "Music",
  "Podcasts",
  "T-Series",
  "News",
  "Google",
  "Internet Marketing",
  "User interface design",
  "Live",
  "Business ideas",
  "Stocks",
  "Dramedy",
  "Arijit Singh",
  "Recently uploaded",
];

export default function BrandSlider() {
  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [selectedBrand, setSelectedBrand] = useState(
    searchParams.get("BrandId")
  );
  const [brandsData, setBrandsData] = useState([]);

  const getAllBrands = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand?Limit="infinite"`
    );
    setBrandsData(result?.data?.data);
  };

  useEffect(() => {
    getAllBrands();
  }, []);
  const handleBrands = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("BrandId", term);
    } else {
      params.delete("BrandId");
    }
    // Scroll option ensures page updates without full reload
    replace(`${pathname}?${params.toString()}`, { scroll: false });
    // setSidebarOpen(false); // Close the sidebar only after brand selection
  }, 300);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 100);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    checkScroll();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative bg-white flex flex-col  md:hidden">
      {showLeftButton && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 h-full px-2 bg-gradient-to-r from-white via-white to-transparent"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className={`flex gap-3 overflow-x-hidden px-4 py-3 cursor-grab select-none ${
          isDragging ? "cursor-grabbing" : ""
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {brandsData.map((brand) => (
          <button
            key={brand?.brand}
            onClick={() => {
              setSelectedBrand(brand?._id);
              handleBrands(brand?._id);
            }}
            className="flex-none px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm whitespace-nowrap transition-colors"
            onMouseDown={(e) => e.preventDefault()}
          >
            {brand?.brand}
          </button>
        ))}
      </div>

      {showRightButton && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 h-full px-2 bg-gradient-to-l from-white via-white to-transparent"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// // import required modules
// import { Navigation } from "swiper/modules";

// import axios from "axios";
// import {
//   useParams,
//   usePathname,
//   useRouter,
//   useSearchParams,
// } from "next/navigation";
// import React, { memo, useEffect, useRef, useState } from "react";
// import { useDebouncedCallback } from "use-debounce";

// // SwiperCore.use([Navigation]);

// const BrandSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Refs for custom navigation buttons
//   const swiperRef = useRef(null);
//   const { replace } = useRouter();
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
//   const [selectedBrand, setSelectedBrand] = useState(
//     searchParams.get("BrandId")
//   );
//   const [brandsData, setBrandsData] = useState([]);

//   const getAllBrands = async () => {
//     const result = await axios.get(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand?Limit="infinite"`
//     );
//     setBrandsData(result?.data?.data);
//   };

//   useEffect(() => {
//     getAllBrands();
//   }, []);

//   const handleBrands = useDebouncedCallback((term) => {
//     const params = new URLSearchParams(searchParams);
//     params.set("page", "1");

//     if (term) {
//       params.set("BrandId", term);
//     } else {
//       params.delete("BrandId");
//     }
//     // Scroll option ensures page updates without full reload
//     replace(`${pathname}?${params.toString()}`, { scroll: false });
//     setSidebarOpen(false); // Close the sidebar only after brand selection
//   }, 300);

//   return (
//     <div className="flex flex-col  md:hidden">
//       <div className="text-lg font-medium">Filter:</div>
//       <div className="relative w-full ">
//         {/* Custom Left Button */}

//         {activeIndex === 0 ? null : (
//           <button
//             onClick={() => {
//               if (swiperRef.current && swiperRef.current.swiper) {
//                 setActiveIndex(swiperRef.current.swiper?.activeIndex);
//                 swiperRef.current.swiper.slidePrev();
//               }
//             }}
//             className="absolute left-0 top-1/2 -translate-y-1/2  h-[2.8rem] bg-gradient-to-l to-white/30 backdrop-blur-[2px] from-white w-12 flex justify-center items-center text-gray-700  z-10"
//           >
//             &#10094;
//           </button>
//         )}

//         {/* Custom Right Button */}
//         {activeIndex === brandsData?.length - 5 ? null : (
//           <button
//             onClick={() => {
//               if (swiperRef.current && swiperRef.current.swiper) {
//                 console.log(swiperRef.current.swiper);
//                 setActiveIndex(swiperRef.current.swiper?.activeIndex);
//                 swiperRef.current.swiper.slideNext();
//               }
//             }}
//             className="absolute right-0 top-1/2 -translate-y-1/2   h-[2.8rem] bg-gradient-to-l to-white/30 backdrop-blur-[2px] from-white w-12 flex justify-center items-center text-gray-700  z-10"
//           >
//             &#10095;
//           </button>
//         )}

//         <Swiper
//           ref={swiperRef}
//           className="py-4"
//           spaceBetween={10}
//           slidesPerView={5}
//           modules={[Navigation]}
//           navigation={true}
//         >
//           {brandsData?.map((brand, index) => (
//             <SwiperSlide key={brand?._id} className=" !w-auto">
//               <div
//                 onClick={() => {
//                   setSelectedBrand(brand?._id);
//                   handleBrands(brand?._id);
//                 }}
//                 className="border border-gray-300 rounded-lg text-nowrap w-auto px-4 py-2 text-center text-gray-600 hover:bg-gray-100 cursor-pointer transition"
//               >
//                 {brand?.brand}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default BrandSlider;
