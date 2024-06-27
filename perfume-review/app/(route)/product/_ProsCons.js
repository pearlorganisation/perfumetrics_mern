import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const data = {
  pros: [
    { text: "Long-lasting with good projection", likes: 253, dislikes: 11 },
    {
      text: "Refined scent with depth and character",
      likes: 184,
      dislikes: 10,
    },
    { text: "Considered a work of art by many", likes: 277, dislikes: 23 },
    { text: "Impressive strength and dimensions", likes: 277, dislikes: 30 },
    { text: "Great for winter occasions", likes: 184, dislikes: 10 },
    {
      text: "High-quality ingredients and smoothness",
      likes: 175,
      dislikes: 11,
    },
    {
      text: "Creates a dark and brooding atmosphere",
      likes: 174,
      dislikes: 11,
    },
    {
      text: "Approachable and lovable unisex fragrance",
      likes: 70,
      dislikes: 91,
    },
  ],
  cons: [
    { text: "Expensive price point", likes: 253, dislikes: 11 },
    {
      text: "Not suitable for those who prefer lighter scents",
      likes: 184,
      dislikes: 10,
    },
    { text: "May be too loud or harsh for some", likes: 277, dislikes: 23 },
    {
      text: "Not a fragrance for clean-cut or conservative individuals",
      likes: 184,
      dislikes: 10,
    },
    {
      text: "May cause allergies or headaches in sensitive individuals",
      likes: 175,
      dislikes: 11,
    },
    {
      text: "Refill juice may not be consistent with original formula",
      likes: 174,
      dislikes: 11,
    },
  ],
};

const ProsCons = () => {
  return (
    <>
      <p className="text-4xl font-medium">Pros and Cons</p>
      <div className="flex flex-col  items-center bg-white p-6 border border-gray-200 rounded-lg shadow-md">
        <div className="flex justify-center w-full">
          <div className="w-1/2 p-4 border-r border-gray-300 grid place-items-center">
            <div className="mt-4">
              <h1 className="text-[#2e6e6a] text-center text-xl">Pros</h1>
              {data.pros.map((item, index) => (
                <div>
                  <li key={index} className="flex items-center space-x-3  my-2">
                    <div className="flex gap-5">
                      <span className=" flex flex-col justify-center items-center">
                        <FaThumbsUp className="text-[#a5e0dd]" />
                        <span className="">{item.likes}</span>
                      </span>
                      <span className=" flex flex-col justify-center items-center">
                        <FaThumbsDown className="text-[#a5e0dd]" />
                        <span className="">{item.dislikes}</span>
                      </span>
                    </div>
                    <span className="text-center ">{item.text}</span>
                  </li>
                </div>
              ))}
            </div>
          </div>

          <div className="w-1/2 p-4  border-gray-300 grid  place-items-center">
            <div className="mt-4">
              <h1 className="text-[#e23f5f] text-center text-xl">Cons</h1>
              {data.pros.map((item, index) => (
                <div>
                  <li key={index} className="flex items-center space-x-3  my-2">
                    <div className="flex gap-5">
                      <span className=" flex flex-col justify-center items-center">
                        <FaThumbsUp className="text-[#a5e0dd]" />
                        <span className="">{item.likes}</span>
                      </span>
                      <span className=" flex flex-col justify-center items-center">
                        <FaThumbsDown className="text-[#a5e0dd]" />
                        <span className="">{item.dislikes}</span>
                      </span>
                    </div>
                    <span className="text-center ">{item.text}</span>
                  </li>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm  mt-4">
          Note: The pros and cons listed on this page have been generated using
          the artificial intelligence system, which analyzes product reviews
          submitted by our members. While we strive to provide accurate and
          helpful information, we cannot guarantee the complete accuracy or
          reliability of the AI-generated pros and cons. Please read the full
          reviews and consider your own needs and preferences before making a
          purchasing decision.
        </p>
      </div>

      {/* <div className=" bg-white p-6 border border-gray-200 rounded-lg shadow-md ">
    
    
</div> */}
    </>
  );
};

export default ProsCons;
