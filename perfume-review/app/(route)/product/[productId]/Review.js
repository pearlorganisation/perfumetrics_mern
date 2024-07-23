import React from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { MdShare } from "react-icons/md";
const Review = () => {
  return (
    <div className="grid gap-3">
      <div className="text-3xl font-medium pl-1 relative grid place-items-center">
        {" "}
        <div className="absolute w-full border "></div>{" "}
        <div className="z-20 bg-white px-3 py-2">All Reviews By Date</div>
      </div>

      <div class="w-full  mx-auto ">
        <div class="bg-[#fafaf6] shadow rounded-lg p-6 mb-4 border border-[#83a6c4]">
          <div class="flex items-start space-x-5">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTNRxAKdj1QyM_mpJdf0fUxxrvimMB-ADAQ&s" />
              </div>
            </div>

            <div class="flex-1">
              <div class="flex justify-between items-center">
                <h4 class="text-lg font-semibold text-[#008b92]">
                  Skinscents4Fusspots
                </h4>
                <span class="text-sm text-gray-500">5 minutes ago</span>
              </div>

              <p class="mt-2 text-gray-700">
                This is nice enough but it really doesn't smell like Ocean di
                Gioia at all to my nose. It bears absolutely no resemblance to
                White Tea. This is more like an Escada Summer perfume. Very easy
                to wear fruity perfume with subtle florals, more like a body
                wash than a sharp shampoo. The plum and pear come across as a
                fresh and sweet cocktail but the flowers give a soft perfumy
                touch - without turning screechy - and then there's just a hint
                of patchouli in the base that feels a tiny bit earthy, woody and
                green. The patch is minimal though as it doesn't bother me and I
                don't like patchouli generally speaking.
                <br />
                Unlike the original, Red and Noir, this really isn't what I'd
                call Seductive - it would've made much more sense in the Guess
                Girl range!
              </p>

              <div class="mt-4 flex space-x-4">
                <button class="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                  <SlLike />
                </button>
                <button class="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                  <SlDislike />
                </button>
                <button class="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                  <MdShare />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#fafaf6] shadow rounded-lg p-6 border border-[#83a6c4]">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                <img src="https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg" />
              </div>
            </div>

            <div class="flex-1">
              <div class="flex justify-between items-center">
                <h4 class="text-lg font-semibold text-[#008b92]">Malani</h4>
                <span class="text-sm text-gray-500">05/18/24 17:30</span>
              </div>

              <p class="mt-2 text-gray-700">
                Okay, so I blind bought this one. I'm always tempted by cheap
                fragrance to do this. Unfortunately this is not a hidden
                treasure. Smells like tropical shampoo and does not last. It's
                not bad but not much to it.
              </p>
              <div class="mt-4 flex space-x-4">
                <button class="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                  <SlLike />
                </button>
                <button class="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                  <SlDislike />
                </button>

                <button class="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                  <MdShare />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
