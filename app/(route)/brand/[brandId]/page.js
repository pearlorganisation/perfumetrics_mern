"use client";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import BrandFilter from "../BrandFilter";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function InteractivePerfumePage() {
  const { brandId } = useParams();
  const [brandsPerfume, setBrandsPerfume] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Memoized function to prevent unnecessary re-renders
  const getBrandsPerfumes = useCallback(async (brandName) => {
    setIsLoading(true);
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand/single/${brandName}`
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
        <section className="relative h-96 bg-gradient-to-r from-purple-500 to-pink-500 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Discover Your Signature Scent
              </h1>
              <p className="text-xl text-white mb-8">
                Explore our curated collection of luxury perfumes
              </p>
              <button
                onClick={() => setSelectedBrand(null)}
                className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors duration-300"
              >
                Shop All Perfumes
              </button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow flex md:gap-12 ">
          {/* BrandFilter component wrapped in memo to avoid re-render */}
          <BrandFilter />

          {/* Perfume Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-[80vh] w-full">
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
                <Link key={perfume?._id} href={`/product/${perfume?._id}`}>
                  <div
                    key={perfume.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                  >
                    <div className="relative">
                      <img
                        src={perfume?.banner}
                        alt={perfume?.perfume}
                        className="w-full h-64 object-contain "
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                        <span className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold">
                          Quick View
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1 line-clamp-1">
                        {perfume?.perfume}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {perfume.brand?.brand}
                      </p>
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
