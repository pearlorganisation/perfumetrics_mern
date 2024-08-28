import React from "react";
import LogoGrid from "./LogoGrid";
import Link from "next/link";

const BestSale = () => {
  return (
    <div>
      <div>
        <div className="grid lg:grid-cols-3 place-items-center gap-3 py-5">
          <div className="w-full flex flex-col justify-between ">
            <span className="text-2xl font-semibold pb-3 border-b-2">
              BEST SALES
            </span>

            {Array(3)
              .fill(true)
              .map((item) => {
                return (
                  <div class=" flex bg-white shadow-lg rounded-lg overflow-hidden p-2">
                    <div className="grid place-items-center">
                      <img
                        class="size-28 object-cover"
                        src="https://images.unsplash.com/photo-1588514912908-8f5891714f8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D"
                        alt="Euphoria Eau De Parful"
                      />
                    </div>
                    <div class="p-4">
                      <h2 class="text-gray-800 text-sm lg:text-lg font-semibold">
                        Euphoria Eau De Parful Ns 100ml
                      </h2>
                      <div class="flex items-center mt-2">
                        <svg
                          class="w-4 h-4 fill-current text-blue-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                        </svg>
                        <svg
                          class="w-4 h-4 fill-current text-blue-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                        </svg>
                        <svg
                          class="w-4 h-4 fill-current text-blue-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                        </svg>
                        <svg
                          class="w-4 h-4 fill-current text-blue-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                        </svg>
                        <svg
                          class="w-4 h-4 fill-current text-blue-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                        </svg>
                      </div>
                      <div class="mt-3">
                        <span class="text-gray-800 text-xl font-semibold">
                          £105.00
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="w-full relative  grid place-items-center">
            <img
              className="h-[100%] translate-y-0 w-full "
              src="https://images.unsplash.com/photo-1605619082574-e92eee603b95?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
              <h1 class="text-pink-500 text-xl md:text-2xl lg:text-3xl font-bold">
                DISCOVER
              </h1>
              <h2 class="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mt-2">
                WOMEN'S STYLE
              </h2>
              <button class="w-[8rem] py-2 rounded border border-pink-500 mt-8 text-white"><Link href="/login">SHOP NOW</Link></button>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full ">
            <span className="text-2xl font-semibold pb-3 border-b-2">
              SALE OFF
            </span>
            {Array(3)
              .fill(true)
              .map((item) => {
                return (
                  <div class=" flex bg-white shadow-lg rounded-lg overflow-hidden p-2">
                    <div className="grid place-items-center">
                      <img
                        class="size-28 object-cover"
                        src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
                        alt="Euphoria Eau De Parful"
                      />
                    </div>
                    <div class="p-4">
                      <h2 class="text-gray-800 text-lg font-semibold">
                        Euphoria Eau De Parful Ns 100ml
                      </h2>
                      <div class="flex items-center mt-2">
                        <svg
                          class="w-4 h-4 fill-current text-blue-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                        </svg>
                        <svg
                          class="w-4 h-4 fill-current text-blue-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                        </svg>
                        <svg
                          class="w-4 h-4 fill-current text-blue-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                        </svg>
                        <svg
                          class="w-4 h-4 fill-current text-blue-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                        </svg>
                        <svg
                          class="w-4 h-4 fill-current text-blue-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                        </svg>
                      </div>
                      <div class="mt-3">
                        <span class="text-gray-800 text-xl font-semibold">
                          £105.00
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex gap-4 w-full py-6">
          {Array(2)
            .fill(true)
            .map((item) => {
              return (
                <div className="w-full">
                  <div class="relative">
                    <img
                      class="w-full h-64 object-cover"
                      src="https://plus.unsplash.com/premium_photo-1667662655276-b3751fbbe107?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D"
                      alt="Best for Men's Style"
                    />
                    <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
                      <h1 class="text-pink-500 text-xl md:text-2xl lg:text-3xl font-bold">
                        DISCOVER
                      </h1>
                      <h2 class="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mt-2">
                        BEST FOR MEN'S STYLE
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <LogoGrid />
    </div>
  );
};

export default BestSale;
