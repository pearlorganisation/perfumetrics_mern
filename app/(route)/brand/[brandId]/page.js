"use client";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import BrandFilter from "../BrandFilter";
import Image from "next/image";
// import { X, Moon, Sun } from "lucide-react";

export default function InteractivePerfumePage() {
  const { brandId } = useParams();
  const [brandsPerfume, setBrandsPerfume] = useState([]);
  const [brandsData, setBrandsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getBrandsPerfumes = async (brandName) => {
    setIsLoading(true);
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand/single/${brandName}`
    );
    setBrandsPerfume(result?.data);
    setIsLoading(false);
    console.log(result?.data, "brandsPerfume");
  };

  const getAllBrands = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand`
    );
    setBrandsData(result?.data?.data);
    console.log(result?.data, "brands");
  };
  useEffect(() => {
    getBrandsPerfumes(brandId);
  }, [brandId]);
  //-------------------------//
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedPerfume, setSelectedPerfume] = useState(null);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-purple-500 to-pink-500 overflow-hidden">
          {/* <img
            src="https://st3.depositphotos.com/5299014/17243/v/450/depositphotos_172439584-stock-illustration-perfume-bottle-and-bouquet-of.jpg"
            alt="Featured Perfume"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          /> */}
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
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <BrandFilter />

          {/* Perfume Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-[80vh]">
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
            ) : Array.isArray(brandsPerfume) && brandsPerfume?.length ? (
              brandsPerfume?.map((perfume) => (
                <Link href={`/product/${perfume?._id}`}>
                  <div
                    key={perfume.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                  >
                    <div className="relative">
                      <img
                        src={perfume?.banner}
                        alt={perfume?.perfume}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                        <span className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold">
                          Quick View
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1">
                        {perfume?.perfume}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {perfume.brand?.brand}
                      </p>
                      {/* <span className="text-purple-600 dark:text-purple-400 font-bold">
                    ${perfume.price}
                  </span> */}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="flex flex-col justify-center items-center col-span-4">
                <Image
                  src="/NoPerfume.png"
                  alt="image"
                  width={400}
                  height={400}
                />
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold">
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

// "use client";

// import axios from "axios";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// async function PerfumeSection() {
//   const { brandId } = useParams();
//   const [brandsPerfume, setBrandsPerfume] = useState([]);

//   const getBrandsPerfumes = async (brandName) => {
//     const result = await axios.get(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand/single/${brandName}`
//     );
//     setBrandsPerfume(result?.data);
//     console.log(result?.data, "brandsPerfume");
//   };
//   useEffect(() => {
//     getBrandsPerfumes(brandId);
//   }, [brandId]);

//   return (
//     <div className="container mx-auto py-5 min-h-screen">
//       <div className="">
//         <div className="grid place-items-center relative mb-8">
//           <h1 className="text-3xl font-medium px-6 py-2 bg-white z-40 relative  text-center bottom-[.1rem]">
//             {brandId?.split("%20").join(" ")}
//           </h1>
//           <div className="absolute w-full h-[2px] bg-slate-500"></div>
//         </div>
//       </div>
//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {brandsPerfume.length > 0 ? (
//           brandsPerfume?.map((item) => {
//             return (
//               <Link href={`/product/${item?._id}`}>
//                 <div className="group transition-all flex flex-col overflow-hidden">
//                   <a
//                     className="relative flex h-60 sm:h-72 md:h-80 overflow-hidden  rounded-md border-2 border-pink-400 bg-white "
//                     href="#"
//                   >
//                     <img
//                       className="absolute right-0 top-0 h-full w-full object-cover"
//                       src={item?.banner}
//                       alt="product image"
//                     />
//                   </a>
//                   <div className="mt-4">
//                     <a href="#">
//                       <h5 className="text-center font-semibold tracking-tight text-black line-clamp-2">
//                         {item?.perfume}
//                       </h5>
//                     </a>
//                   </div>
//                 </div>
//               </Link>
//             );
//           })
//         ) : (
//           <div className="text-center  w-full col-span-4">No Data Found</div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default PerfumeSection;
