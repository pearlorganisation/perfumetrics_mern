import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-50">
      <div className="container mx-auto px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl font-extrabold leading-tight sm:text-6xl lg:text-7xl text-gray-800">
            Awaken Your Senses
          </h1>
          <p className="mt-6 text-base sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
            Dive into the world of luxurious perfumes, where timeless elegance
            meets captivating scents. Discover your perfect match today.
          </p>
          <div className="mt-8  hidden md:flex justify-center lg:justify-start space-x-4">
            <Link
              href={`/category/MEN'S STYLE`}
            >
              <button className=" px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition transform hover:scale-105">
                Explore Men's
              </button>
            </Link>
            <Link
              href={`/category/WOMEN'S STYLE`}
            >
              <button className="  px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-gray-300 transition transform hover:scale-105">
                Explore Women's
              </button>

            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center relative ">
          {/* Decorative Overlay */}
          <div className="absolute inset-0 w-[30rem] h-[30rem] bg-gradient-to-br from-purple-300 to-purple-100 rounded-full blur-3xl opacity-40"></div>
          <img
            src="https://res.cloudinary.com/dznz3eqe8/image/upload/v1733984224/static_hero_primary_Now_And_Then_2_aynsff.webp"
            alt="Hero Perfume Bottle"
            className="relative z-10 rounded-lg shadow-2xl  w-full max-w-md transition transform hover:scale-105"
          />
        </div>
        <div className="mt-8 w-full  flex md:hidden justify-center lg:justify-start space-x-4">
          <Link
            href={`/category/MEN'S STYLE`}
          >
            <button className=" w-full px-3 py-3 text-sm bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition transform hover:scale-105">
              Explore Men's
            </button>
          </Link>
          <Link
            href={`/category/WOMEN'S STYLE`}
          >
            <button className=" w-full  px-3 py-3 text-sm bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-gray-300 transition transform hover:scale-105">
              Explore Women's
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
