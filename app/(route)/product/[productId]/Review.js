"use client";
import React, { useEffect, useState } from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { MdShare } from "react-icons/md";
import CommentLikeDisLike from "./CommentLikeDisLike";
import { userStore } from "@/store/userStore";

async function getUserHistories(userId)
{
  try{
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/userHistory/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },

      }
    );

    if (!response.ok) {
      throw new Error("Failed to submit vote");
    }

    return response.json();
  }catch(err)
  {
    toast.error("Something Went Wrong !!",err);
  }
}

async function Review({ commentsData, perfumeId }) {
  const {user} = userStore();
  
  const [userHistoryMap,setUserHistoryMap] = useState(null);
 
  // if(user)
  // {
  //   const {data} = await getUserHistories(user._id);
  //   const {commentsData} = data;
  //   console.log("commentsData",commentsData);
  // }
  

  return (
    <div className="grid gap-3">
      <div className="text-3xl font-medium pl-1 relative grid place-items-center">
        {" "}
        <div className="absolute w-full border "></div>{" "}
        <div className="z-20 bg-white px-3 py-2 hidden md:block">
          All Reviews By Date
        </div>
      </div>

      <div className="w-full  mx-auto space-y-4 py-4  ">
        {commentsData && commentsData?.length > 0 ? (
          commentsData.map((item) => {
            return (
              <div className="bg-[#fafaf6] shadow rounded-lg p-6 border border-[#83a6c4]">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                      <img src={item?.logo} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-semibold text-[#008b92]">
                        {item?.title}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {`${new Date(item?.updatedAt)?.toLocaleDateString()}`}
                        &nbsp;&nbsp;
                        {new Date(item?.updatedAt)?.toLocaleTimeString()}
                      </span>
                    </div>

                    <p className="mt-2 text-gray-700">{item?.description}</p>
                    {/* <div className="mt-4 flex space-x-4">
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                        <SlLike className="text-pink-500" />
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                        <SlDislike />
                      </button> */}

                      {/* <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                        <MdShare />
                        <span>Share</span>
                      </button> */}
                    {/* </div> */}
                    
                    <CommentLikeDisLike item = {item}/>

                  </div>

                </div>
              </div>
            );
          })
        ) : (
          <div className="text-4xl font-medium hidden md:block">
            No Comments
          </div>
        )}
      </div>
    </div>
  );
}

export default Review;
