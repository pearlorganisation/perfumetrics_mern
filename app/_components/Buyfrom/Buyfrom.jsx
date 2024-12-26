"use client"; // This is a client component 
import { useState } from 'react';
import Amazon_India_logo from '@/public/Amazon_India_logo.png'
import right_now_ebay from '@/public/right_now_ebay.png'
import Image from 'next/image';

const Buyfrom = ({ links }) => {
  const [selectedTab, setSelectedTab] = useState('amazon');
  console.log(links, "links")

  console.log("Amazon_India_logo", links);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex flex-col items-left justify-left bg-white text-left w-full">
      {
        links?.map(item => {
          return <div className="mt-4 md:flex justify-start h-20  gap-3">
            <a
              href={`${item?.link}`}
              className="text-blue-500   hover:underline underline text-sm md:text-xl"
              target="_blank"
              rel="noreferrer"
            >

              {` Search on ${item?.company}`}
            </a>

            <div className='pt-1'>

              999
            </div>

          </div>
        })
      }



    </div>
  );
}

export default Buyfrom;
