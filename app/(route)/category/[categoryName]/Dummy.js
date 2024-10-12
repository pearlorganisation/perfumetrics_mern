import Link from "next/link";
import React from "react";

// Sample data for the fragrances

const Dummy = ({ data, gender }) => {
  function isDataNew(updatedAt) {
    // Convert updatedAt string to a Date object
    const updatedDate = new Date(updatedAt);

    // Get the current date
    const currentDate = new Date();

    // Compare year, month, and day
    const isSameDay =
      updatedDate.getFullYear() === currentDate.getFullYear() &&
      updatedDate.getMonth() === currentDate.getMonth() &&
      updatedDate.getDate() === currentDate.getDate();

    // Return true if it's the same day, otherwise false
    return isSameDay ? true : false;
  }
  return (
    <div className="bg-white  ">
      <div className=" w-full h-[32rem]">
        <img
          className="w-full h-full"
          src="https://as2.ftcdn.net/v2/jpg/03/62/51/01/1000_F_362510186_nbRqru6Jdiuf1rS6O42CqUi5mLQPG6Mu.jpg"
          alt=""
          srcset=""
        />
      </div>

      <div className="container mx-auto py-12 space-y-16 ">
        <h1 className="text-center uppercase text-xl md:text-3xl lg:text-4xl font-serif mb-8">
          Fragrances for {gender}
        </h1>

        {/* Grid layout for responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 container mx-auto">
          {data?.map((fragrance, index) =>
            index === 4 ? (
              <div className=" sm:col-span-2">
                <img
                  src="https://us.parfums-de-marly.com/cdn/shop/files/web_en.png?v=1726041468"
                  alt=""
                />
              </div>
            ) : (
              <div
                key={index}
                className="text-center flex flex-col gap-3 justify-between"
              >
                <img
                  src={fragrance?.banner}
                  alt={fragrance?.perfume}
                  className="w-full h-[20rem] max-w-xs mx-auto"
                />
                <div className="flex justify-center gap-3 items-center flex-col">
                  {isDataNew(fragrance?.updatedAt) && (
                    <span className="block text-gray-600 text-sm mt-2 uppercase">
                      New
                    </span>
                  )}

                  <h2 className="text-lg mt-2 font-serif line-clamp-1">
                    {fragrance?.perfume}
                  </h2>
                  <p className="text-gray-500 mt-1">{fragrance?.price}</p>
                  <Link href={`/product/${fragrance?._id}`}>
                    <button class="group relative group overflow-hidden  border border-black bg-white px-6 py-2 text-black">
                      <span class="relative z-10 group-hover:text-white ">
                        Read More
                      </span>
                      <div class="absolute inset-0 -translate-x-full transform bg-black transition-transform duration-500 ease-out group-hover:translate-x-0"></div>
                    </button>
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dummy;
