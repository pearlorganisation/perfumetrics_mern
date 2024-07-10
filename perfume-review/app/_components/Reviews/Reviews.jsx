import React from "react";
import CardsList from "../CardsList/CardsList";
import News from "./News";

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
    <div className="container mx-auto">
      <div className="w-full grid md:grid-cols-[auto_30rem] gap-x-12 px-20 py-10">
        <div className="space-y-4">
          <h2 class="text-2xl font-bold ">Reviews</h2>

          <div class=" space-y-4">
            <div class="w-full mx-auto bg-white p-4 border-2 border-pink-500  shadow-lg">
              <div class="grid place-items-center mb-6 relative">
                <div class="absolute w-16 h-16 -translate-y-4 rounded-full overflow-hidden border-2 border-pink-500">
                  <img src="https://via.placeholder.com/64" alt="Perfume Bottle" />
                </div>
              </div>
              <p class="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
              </p>
              <div class="flex justify-between mb-4">
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.545l6.57-.955L10 1l2.943 5.59 6.57.955-4.757 4.09L15.878 18z" />
                  </svg>
                  <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.545l6.57-.955L10 1l2.943 5.59 6.57.955-4.757 4.09L15.878 18z" />
                  </svg>
                  <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.545l6.57-.955L10 1l2.943 5.59 6.57.955-4.757 4.09L15.878 18z" />
                  </svg>
                  <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.545l6.57-.955L10 1l2.943 5.59 6.57.955-4.757 4.09L15.878 18z" />
                  </svg>
                  <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.545l6.57-.955L10 1l2.943 5.59 6.57.955-4.757 4.09L15.878 18z" />
                  </svg>
                </div>
                <p class="text-gray-900 font-bold text-3xl">By Rahul Rawat</p>
              </div>

            </div>

            {/* news */}
            <News />
          </div>
        </div>
        <div>
          <CardsList data={perfumeReviews} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
