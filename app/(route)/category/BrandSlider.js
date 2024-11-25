import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import axios from "axios";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { memo, useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

// SwiperCore.use([Navigation]);

const BrandSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Refs for custom navigation buttons
  const swiperRef = useRef(null);
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
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
  useEffect(() => {
    console.log(brandsData?.length);
  }, [brandsData]);

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
    setSidebarOpen(false); // Close the sidebar only after brand selection
  }, 300);

  return (
    <div className="flex flex-col  md:hidden">
      <div className="text-lg font-medium">Filter:</div>
      <div className="relative w-full ">
        {/* Custom Left Button */}

        {activeIndex === 0 ? null : (
          <button
            onClick={() => {
              if (swiperRef.current && swiperRef.current.swiper) {
                setActiveIndex(swiperRef.current.swiper?.activeIndex);
                swiperRef.current.swiper.slidePrev();
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2  h-[2.8rem] bg-gradient-to-l to-white/30 backdrop-blur-[2px] from-white w-12 flex justify-center items-center text-gray-700  z-10"
          >
            &#10094;
          </button>
        )}

        {/* Custom Right Button */}
        {activeIndex === brandsData?.length - 5 ? null : (
          <button
            onClick={() => {
              if (swiperRef.current && swiperRef.current.swiper) {
                console.log(swiperRef.current.swiper);
                setActiveIndex(swiperRef.current.swiper?.activeIndex);
                swiperRef.current.swiper.slideNext();
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2   h-[2.8rem] bg-gradient-to-l to-white/30 backdrop-blur-[2px] from-white w-12 flex justify-center items-center text-gray-700  z-10"
          >
            &#10095;
          </button>
        )}

        <Swiper
          ref={swiperRef}
          className="py-4"
          spaceBetween={10}
          slidesPerView={5}
          modules={[Navigation]}
          navigation={true}
        >
          {brandsData?.map((brand, index) => (
            <SwiperSlide key={brand?._id} className=" !w-auto">
              <div
                onClick={() => {
                  setSelectedBrand(brand?._id);
                  handleBrands(brand?._id);
                }}
                className="border border-gray-300 rounded-lg text-nowrap w-auto px-4 py-2 text-center text-gray-600 hover:bg-gray-100 cursor-pointer transition"
              >
                {brand?.brand}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandSlider;
