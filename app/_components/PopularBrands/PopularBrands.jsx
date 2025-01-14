"use client";

import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import style from "./style.module.css";
const PopularBrands = () => {

  const [popularPerfumeData, setPopularPerfumeData] = useState(null);
  const [loading, setLoading] = useState(true)

  const getRecentPerfumes = async () => {
    try {
      const { data } = await axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/recent`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
      setPopularPerfumeData(data.data);
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {

    getRecentPerfumes()
  }, []);

  return (
    <div className="max-w-full px-4 py-8">
      <h2 className="text-[#1F2937] text-base md:text-xl text-center font-semibold mb-4">
        NEW AND UPCOMING FRAGRANCES
      </h2>

      <div className="relative">
        <div className={`overflow-x-auto ${style.custom_scrollbar} pb-4`}>
          <div className="flex space-x-4 min-w-max gap-0 md:gap-6">
            {loading ? Array.from({ length: 8 }).map((item) => (
              <div key={item} className="flex flex-col items-center gap-2">
                {/* Circular container */}
                <div className="w-32 h-32 rounded-full bg-gray-200 animate-pulse" />

                {/* Brand name skeleton */}
                <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />

                {/* Product name skeleton - making it longer than brand name */}
                <div className="w-32 h-4 bg-gray-200 rounded animate-pulse" />
              </div>
            )) : popularPerfumeData && popularPerfumeData.map((fragrance, index) => (
              <Link
                href={`/product/${fragrance?.slug}`}
                key={index} className="flex-none w-[160px]">
                <div
                  className={`relative rounded-full p-1  border-[6px] border-pink-500 transition-transform duration-300 `}
                >
                  <div className="bg-neutral-200 rounded-full p-1">
                    <img
                      src={fragrance.banner}
                      alt={`${fragrance?.brand?.brand} by ${fragrance?.brand?.brand}`}
                      className="w-32 h-32 object-contain rounded-full bg-white mx-auto"
                    />
                  </div>
                </div>
                <h3 className="text-center font-medium text-gray-900 truncate">
                  {fragrance?.brand?.brand}
                </h3>
                <p className="text-center text-sm text-gray-600 truncate">
                  {fragrance.perfume}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default PopularBrands;


