"use client";
import React, { useEffect, useState } from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { MdShare } from "react-icons/md";

async function Review({ commentsData, perfumeId }) {
  return (
    <div className="grid gap-3">
      <div className="text-3xl font-medium pl-1 relative grid place-items-center">
        {" "}
        <div className="absolute w-full border "></div>{" "}
        <div className="z-20 bg-white px-3 py-2">All Reviews By Date</div>
      </div>

      <div class="w-full  mx-auto space-y-4 py-4 ">
        {commentsData && commentsData?.length > 0 ? (
          commentsData.map((item) => {
            return (
              <div class="bg-[#fafaf6] shadow rounded-lg p-6 border border-[#83a6c4]">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                      <img src={item?.logo} />
                    </div>
                  </div>

                  <div class="flex-1">
                    <div class="flex justify-between items-center">
                      <h4 class="text-lg font-semibold text-[#008b92]">
                        {item?.title}
                      </h4>
                      <span class="text-sm text-gray-500">
                        {`${new Date(item?.updatedAt)?.toLocaleDateString()}`}
                        &nbsp;&nbsp;
                        {new Date(item?.updatedAt)?.toLocaleTimeString()}
                      </span>
                    </div>

                    <p class="mt-2 text-gray-700">{item?.description}</p>
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
            );
          })
        ) : (
          <div className="text-4xl font-medium">No Comments</div>
        )}
      </div>
    </div>
  );
}

export default Review;
