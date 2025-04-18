import { Poppins, Protest_Strike } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// const protest_strike = Protest_Strike({
//   subsets: ['latin'],
//   weight: ['400'],
// });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
});

const HeroSection = () => {
  // ${protest_strike?.className}
  return (
    <div className={`relative bg-gray-50 `}>
      <div className="container mx-auto px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-center ">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left ">
          <h1 className="!font-normal leading-tight text-3xl lg:text-[60px] text-gray-800">
            Awaken Your Senses with Luxury Perfumes
          </h1>
          <p className={`${poppins.className} mt-6 text-base sm:text-[20px] font-normal text-gray-600 max-w-lg mx-auto lg:mx-0`}>
            Discover the world of luxurious fragrances with the Best Prices & explore the expert's Fragrance Reviews to find you perfect choice!.....  & Perfume News.
          </p>
          <div className="mt-8  hidden md:flex justify-center lg:justify-start space-x-4">
            {/* <Link
              href={`/category/MEN'S STYLE`}
            >
              <button className={`${poppins.className} px-8 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition transform hover:scale-105`}>
                Explore Men's
              </button>
            </Link>
            <Link
              href={`/category/WOMEN'S STYLE`}
            >
              <button className={`${poppins.className}  px-8 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-300 transition transform hover:scale-105`}>
                Explore Women's
              </button>

            </Link> */}

            <Link href={`/category/MEN'S-STYLE`}>
              <button className={`${poppins.className} px-8 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition transform hover:scale-105`}>
                Explore Men's
              </button>
            </Link>

            <Link href={`category/WOMEN'S-STYLE`}>
              <button className={`${poppins.className} px-8 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-300 transition transform hover:scale-105`}>
                Explore Women's
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center relative ">
          {/* Decorative Overlay */}
          <div className="absolute inset-0 w-full h-[30rem] bg-gradient-to-br from-purple-300 to-purple-100 rounded-full blur-3xl opacity-40"></div>
          <Image
            width={400}
            height={400}
            priority
            fetchPriority="high"
            src="https://res.cloudinary.com/dznz3eqe8/image/upload/q_auto,f_auto/v1733984224/static_hero_primary_Now_And_Then_2_aynsff.webp"
            alt="Hero Perfume Bottle"
            className="relative z-0 rounded-lg shadow-2xl  md:w-full w-72 md:max-w-lg transition transform hover:scale-105"
          />
        </div>
        <div className="mt-8 w-full  flex md:hidden justify-center lg:justify-start space-x-4 text-base font-light">
          <Link
            href={`/category/MEN'S-STYLE`}
          >
            <button className=" w-[8.5rem] px-3 py-3 text-[12px] bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition transform hover:scale-105">
              Explore Men's
            </button>
          </Link>
          <Link
            href={`/category/WOMEN'S-STYLE`}
          >
            <button className=" w-[8.5rem] px-3 py-3 text-[12px] bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-300 transition transform hover:scale-105">
              Explore Women's
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
