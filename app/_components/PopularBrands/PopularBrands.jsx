"use client";

import axios from 'axios';
import Link from 'next/link';
// import React, { useEffect, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import axios from "axios";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// // Import required modules
// import { Navigation, Pagination } from "swiper/modules";
// import style from "./style.module.css";
// import Link from "next/link";

// const PopularBrands = () => {
//   const [popularPerfumeData, setPopularPerfumeData] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/recent`, {
//         headers: {
//           "Content-Type": "application/json",
//           // Note: Adding `Access-Control-Allow-Origin` here does NOT solve CORS issues on the client side
//         },
//       })
//       .then((res) => {
//         setPopularPerfumeData(res.data.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <>
//       <div className="container mx-auto max-w-[100%] md:max-w-[90%] ">
//         <div className="p-5 my-0 md:my-10">
//           <div className="text-center">
//             {/* <div className="inline-block relative pb-5">
//               <h1 className="text-3xl font-medium">Popular Brands</h1>
//               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-[#F8306C]"></div>
//             </div> */}
//             <div className={`flex gap-x-7 md:gap-x-10 justify-start items-center overflow-x-auto py-2 md:py-8 px-2  w-full ${style.custom_scrollbar}`}>

//               {popularPerfumeData && popularPerfumeData.map((item, index) => {
//                 return (

//                   <section className=" h-[200px] w-[200px] md:h-[200px] md:w-[200px]  flex flex-col justify-center items-center ">
//                     <Link href={`/product/${item?._id}`}>
//                       <div className=" mx-auto h-[90px] w-[90px] xl:w-[150px] xl:h-[150px] lg:w-[150px] lg:h-[150px] grid place-items-center  rounded-full overflow-hidden shadow-[0_0_0_6px#f193c4] md:shadow-[0_0_0_6px#f193c4] ">
//                         <img
//                           src={item.banner}
//                           className="h-[90px] w-[90px] md:w-[110px] xl:h-[110px]  mx-auto object-contain "
//                         />
//                       </div>

//                       <div className="mt-4 line-clamp-1 text-center font-bold text-[16px]"><b>{item.perfume}</b><br />By {item?.brand?.brand || 'redo'}</div>
//                     </Link>
//                   </section>
//                 );
//               })}

//               {/* <div className="mt-4 line-clamp-2 text-center">
//                           <b>{item.perfume}</b>
//                           <br />
//                           By {item?.brand?.brand || "redo"}
//                         </div>
//                       </Link>
//                     </section>
//                   );
//                 })} */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import React, { useEffect, useState } from 'react';
import style from "./style.module.css";
const PopularBrands = () => {

  const [popularPerfumeData, setPopularPerfumeData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/recent`, {
        headers: {
          "Content-Type": "application/json",
          // Note: Adding `Access-Control-Allow-Origin` here does NOT solve CORS issues on the client side
        },
      })
      .then((res) => {
        setPopularPerfumeData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-full px-4 py-8">
      <h2 className="text-[#1F2937] text-base md:text-xl text-center font-semibold mb-4">
        NEW AND UPCOMING FRAGRANCES
      </h2>

      <div className="relative">
        <div className={`overflow-x-auto ${style.custom_scrollbar} pb-4`}>
          <div className="flex space-x-4 min-w-max gap-0 md:gap-6">
            {popularPerfumeData && popularPerfumeData.map((fragrance, index) => (
              <Link
                href={`/product/${fragrance?._id}`}
                key={index} className="flex-none w-[160px]">
                <div
                  className={`relative rounded-full p-1  border-[6px] border-pink-500 transition-transform duration-300 `}
                >
                  <div className="bg-neutral-200 rounded-full p-1">
                    <img
                      src={fragrance.banner}
                      alt={`${fragrance?.brand?.brand} by ${fragrance?.brand?.brand}`}
                      className="w-32 h-32 object-contain rounded-full"
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


