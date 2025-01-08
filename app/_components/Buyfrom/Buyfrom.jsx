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

    <div className="flex flex-col items-left justify-left bg-white text-left w-full">
      {
        links?.map(item => {
          return <div className="mt-4 flex items-center justify-start h-20  gap-3">
            <a
              href={`${item?.link}`}
              className="text-blue-500   hover:underline underline text-sm md:text-xl"
              target="_blank"
              rel="noreferrer"
            >
              {` Search on ${item?.company?.companyName}`}
            </a>

            <div className='pt-1'>

              <img className="h-14" src={item?.company?.imageUrl} alt={item?.company?.companyName} />
            </div>
            {item?.price}
          </div>

        })}


    </div>
  );
};

export default Buyfrom;


