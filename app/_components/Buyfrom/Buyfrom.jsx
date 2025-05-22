"use client"; // This is a client component
import { useState } from "react";
import Amazon_India_logo from "@/public/Amazon_India_logo.png";
import right_now_ebay from "@/public/right_now_ebay.png";
import Image from "next/image";

const Buyfrom = ({ links }) => {
  const [selectedTab, setSelectedTab] = useState("amazon");
  // console.log(links, "links")

  // console.log("Amazon_India_logo", links);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (

    <div className="flex flex-col w-full space-y-6">
      {links?.map((item) => {
        return (
          <div key={item?.company?.companyName} className="flex flex-col pt-6 py-3 border-b border-gray-100">
            {/* First row - Image */}
            <div className="w-full flex justify-start mb-3">
              <img
                className="max-h-18 min-h-18 min-w-40 max-w-40 object-contain"
                src={item?.company?.imageUrl || "/placeholder.svg"}
                alt={item?.company?.companyName}
              />
            </div>

            {/* Second row - Link and Price */}
            <div className="flex  justify-start gap-6 items-start">
              <a
                href={`${item?.link}`}
                className="text-blue-500 hover:underline underline text-sm md:text-lg"
                target="_blank"
                rel="noreferrer"
              >
                {` Search on ${item?.company?.companyName}`}
              </a>

              <div className="text-sm md:text-base font-medium">{item?.price}</div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Buyfrom;


