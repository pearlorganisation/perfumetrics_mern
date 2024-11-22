async function comments() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviewsSidebar`
  );
  const data = await response.json();
  console.log(data, "sidebar Review")
  return data?.data;
}
import React from "react";
import CardsList from "../CardsList/CardsList";
// import News from "./News";
import NewPerfumes from "../NewPerfumes/NewPerfumes";
import style from "./style.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";

const News = dynamic(
  () => import("./News"),
  {
    ssr: false,
    loading: () => <div class="animate-pulse grid grid-cols-1 gap-6 py-6 pt-0">
      <div class="space-y-4 w-full">
        <div class="w-full h-[30rem] bg-gray-200"></div>
        <div class="h-6 bg-gray-200 w-3/5"></div>
        <div class="h-4 bg-gray-200 w-1/2"></div>
        <div class="h-16 bg-gray-200"></div>
      </div>
    </div>,
  }
)

const Reviews = async ({ reviewSidebar, length }) => {
  const commentsData = await comments()

  return (
    <div className="container mx-auto mt-24">
      <div className="w-full grid lg:grid-cols-[auto_20rem] gap-x-4 px-6 md:px-10 py-3 md:py-10">
        <div className="w-full">
          <div class="grid place-items-center relative mb-10">
            <h1 class="text-lg md:text-3xl font-medium px-8 py-3 bg-white z-40">
              Reviews
            </h1>
            <div class="absolute w-full h-[2px] bg-slate-500"></div>
          </div>

          <div class=" space-y-4 w-full">
            <div
              className={`flex justify-start items-center space-x-4 overflow-x-auto py-8 px-2 w-full  mx-auto ${style.custom_scrollbar} reviewScroll`}
            >

              {
                commentsData?.map((_, index) => {
                  return <Link href={`/product/${_?.perfumeId}`} key={index} className="w-[45vw] md:w-full grid grid-cols-1 sm:grid-cols-1 gap-4 border flex-shrink-0">
                    <div className="w-full  mx-auto bg-white p-4 border-2 border-pink-500  shadow-lg ">
                      <div className="grid place-items-center mb-6 relative">
                        <div className="absolute w-16 h-16 -translate-y-4 rounded-full overflow-hidden border-2 border-pink-500">
                          <img
                            src={_?.banner}
                            className="w-full h-full object-center"
                            alt="Perfume Bottle"
                          />
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 line-clamp-5">
                        {_?.description}
                      </p>
                      <div className="flex justify-between mb-0 md:mb-4 flex-wrap">
                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.545l6.57-.955L10 1l2.943 5.59 6.57.955-4.757 4.09L15.878 18z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.545l6.57-.955L10 1l2.943 5.59 6.57.955-4.757 4.09L15.878 18z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.545l6.57-.955L10 1l2.943 5.59 6.57.955-4.757 4.09L15.878 18z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.545l6.57-.955L10 1l2.943 5.59 6.57.955-4.757 4.09L15.878 18z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.545l6.57-.955L10 1l2.943 5.59 6.57.955-4.757 4.09L15.878 18z" />
                          </svg>
                        </div>
                        <p className="text-gray-900 font-bold text-balance md:text-xl xl:text-3xl">
                          {_?.reviewBy}
                        </p>
                      </div>
                    </div>
                  </Link>
                })
              }



            </div>

            {/* news */}
            <div className="!mt-[6rem]">
              <News />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="mt-[8.1rem] ml-[31px]">
            <CardsList reviewData={reviewSidebar} length={length} />
          </div>
        </div>
      </div>
      <NewPerfumes />
    </div>
  );
};

export default Reviews;
