import React from "react";
import CardsList from "../CardsList/CardsList";
import News from "./News";
import NewPerfumes from "../NewPerfumes/NewPerfumes";
import style from "./style.module.css";

const Reviews = () => {
  const perfumeReviews = [
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.2355.jpg",
      name: "al haraman",
      brand: null,
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.90689.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.35456.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.90689.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.35456.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
  ];
  return (
    <div className="container mx-auto mt-24">
      <div className="w-full grid lg:grid-cols-[auto_20rem] gap-x-4 px-6 md:px-10 py-3 md:py-10">
        <div className="w-full">
          <div class="grid place-items-center relative mb-10">
            <h1 class="text-3xl font-medium px-8 py-3 bg-white z-40">
              Reviews
            </h1>
            <div class="absolute w-full h-[2px] bg-slate-500"></div>
          </div>

          <div class=" space-y-4">
            <div
              className={`flex space-x-4 overflow-x-auto py-8 px-2 w-full ${style.custom_scrollbar} reviewScroll`}
            >

              {
                Array(3).fill().map((_, index) => {
                  return               <div key={index} className=" w-full grid sm:grid-cols-1 gap-4 border flex-shrink-0">
                  <div class="w-full  mx-auto bg-white p-4 border-2 border-pink-500  shadow-lg ">
                    <div class="grid place-items-center mb-6 relative">
                      <div class="absolute w-16 h-16 -translate-y-4 rounded-full overflow-hidden border-2 border-pink-500">
                        <img
                          src="https://media.istockphoto.com/id/1399637805/photo/top-view-flat-lay-of-a-set-of-perfume-bottles-on-a-beige-blank-background.webp?b=1&s=170667a&w=0&k=20&c=0uPvmw6qK4rE7gBdoJAhGtRDID0NX2yn2zyaiIpFX7A="
                          className="w-full h-full object-center"
                          alt="Perfume Bottle"
                        />
                      </div>
                    </div>
                    <p class="text-gray-700 mb-4 line-clamp-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                      aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                      nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                      aliquip ex ea commodo consequat. Duis autem vel eum iriure
                      dolor in hendrerit in vulputate velit esse
                    </p>
                    <div class="flex justify-between mb-4 flex-wrap">
                      <div class="flex items-center">
                        <svg
                          class="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.545l6.57-.955L10 1l2.943 5.59 6.57.955-4.757 4.09L15.878 18z" />
                        </svg>
                        <svg
                          class="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.545l6.57-.955L10 1l2.943 5.59 6.57.955-4.757 4.09L15.878 18z" />
                        </svg>
                        <svg
                          class="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.545l6.57-.955L10 1l2.943 5.59 6.57.955-4.757 4.09L15.878 18z" />
                        </svg>
                        <svg
                          class="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.545l6.57-.955L10 1l2.943 5.59 6.57.955-4.757 4.09L15.878 18z" />
                        </svg>
                        <svg
                          class="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.545l6.57-.955L10 1l2.943 5.59 6.57.955-4.757 4.09L15.878 18z" />
                        </svg>
                      </div>
                      <p class="text-gray-900 font-bold text-balance md:text-xl xl:text-3xl">
                        By Rahul Rawat
                      </p>
                    </div>
                  </div>
                </div>
                })
              }


         
            </div>

            {/* news */}
           <div className="!mt-[6rem]">
           <News />
           </div>
          </div>
        </div>
        <div>
         <div className="mt-[8.1rem] ml-[31px]">
         <CardsList data={perfumeReviews} />
         <CardsList data={perfumeReviews} />
         </div>
        </div>
      </div>
      <NewPerfumes />
    </div>
  );
};

export default Reviews;
