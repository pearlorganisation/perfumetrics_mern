"use client";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function InteractivePerfumePage() {
  const { brandId } = useParams();
  const [brandsPerfume, setBrandsPerfume] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Memoized function to prevent unnecessary re-renders
  const getBrandsPerfumes = useCallback(async (brandName) => {
    setIsLoading(true);
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand/slug/${brandName}`
      );
      setBrandsPerfume(result?.data);
    } catch (error) {
      console.error("Error fetching perfumes:", error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getBrandsPerfumes(brandId);
  }, [brandId, getBrandsPerfumes]);

  //-------------------------//
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        {/* Hero Section */}
        <section
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dznz3eqe8/image/upload/v1730184227/rosemarb_jlyt2z.jpg)",
            backgroundSize: "cover", // this makes sure the image covers the entire div
            backgroundPosition: "center", // centers the image
          }}
          className=" bg-cover  overflow-hidden grid place-items-center w-full bg-no-repeat h-fit"
        >
          <img
            className="object-contain mix-blend-darken md:h-[28rem]"
            src="https://res.cloudinary.com/dznz3eqe8/image/upload/v1730184109/Group_913_uupksl.png"
            alt=""
          />
        </section>

        {/* Main Content */}
        <div className="text-center pt-8 text-base font-medium sm:text-2xl md:text-4xl uppercase">
          {brandId.split("%20").join(" ")}
        </div>
        <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow flex md:gap-12 ">
          {/* BrandFilter component wrapped in memo to avoid re-render */}
          {/* <BrandFilter /> */}

          {/* Perfume Grid */}
          <div className="grid grid-cols-2 md::grid-cols-3 lg:grid-cols-4 gap-6 min-h-[80vh] w-full container mx-auto">
            {isLoading ? (
              Array.from({ length: 6 }).map((item, ind) => {
                return (
                  <div key={ind} class="animate-pulse">
                    <div class="bg-gray-200  rounded-lg shadow-md overflow-hidden transition-transform cursor-pointer">
                      <div class="relative">
                        <div class="w-full h-64 bg-gray-300/90"></div>
                      </div>
                      <div class="p-4">
                        <div class="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
                        <div class="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : Array.isArray(brandsPerfume?.perfumes) &&
              brandsPerfume?.perfumes?.length ? (
              brandsPerfume?.perfumes?.map((perfume) => (
                <Link key={perfume.id} href={`/product/${perfume?.slug}`}>
                  <div className="space-y-2 min-h-[10rem] ">
                    <div className="text-center flex flex-col gap-3 p-4 justify-between shadow-[0px_0px_8px_0px_#00000040] rounded-[16px] overflow-hidden">
                      <img
                        src={perfume?.banner}
                        alt={perfume?.perfume}
                        className="w-full h-[150px] sm:h-[150px] md:h-[20rem] object-contain max-w-xs mx-auto"
                      />
                    </div>
                    <div className="flex justify-center gap-3 items-center flex-col">
                      <h2 className="text-base sm:text-lg mt-2 font-serif line-clamp-1 px-2">
                        {perfume?.perfume}
                      </h2>
                      <p className="text-gray-600 text-base sm:text-lg dark:text-gray-400 mb-2">
                        {perfume.brand?.brand}
                      </p>
                    </div>
                    <div className="grid place-items-center">
                      <button className="group shadow-[0px_0px_8px_0px_#00000040] mx-auto rounded-[16px] relative group overflow-hidden bg-white px-3 py-1 text-black">
                        <span className="relative z-10">Read More</span>
                      </button>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="flex flex-col justify-center items-center col-span-4">
                <Image
                  src="/NoPerfume.png"
                  alt="image"
                  width={300}
                  height={300}
                />
                <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
                  No Perfume Found
                </h1>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
