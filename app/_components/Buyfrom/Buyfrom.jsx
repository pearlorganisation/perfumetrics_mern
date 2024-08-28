"use client"; // This is a client component 
import { useState } from 'react';
import Amazon_India_logo from '@/public/Amazon_India_logo.png'
import right_now_ebay from '@/public/right_now_ebay.png'
import Image from 'next/image';

const Buyfrom = () => {
  const [selectedTab, setSelectedTab] = useState('amazon');

  console.log("Amazon_India_logo",Amazon_India_logo.src);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex flex-col items-left justify-left bg-white text-left w-full">
      <div className="mt-4 md:flex md:items-left md:justify-left h-20">
        <a
          href="https://www.amazon.in"
          className="text-blue-500 hover:underline underline text-2xl w-40"
          target="_blank"
          rel="noopener noreferrer"
        >
          Search on
        </a>
        <br/>
        <div className='relative w-full'><Image
          src={Amazon_India_logo.src}
          alt="Amazon"
          className=" ml-2"
            priority
            width={220}
            height={180}
        /></div>
        
      </div>

      <div className="my-4">or</div>

      <div className="mb-4 mb:flex mb:items-left mb:justify-left h-20 grid grid-cols-2">
        <a
          href="https://www.ebay.com"
          className="text-blue-500 hover:underline text-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy it online{' '}
          <span className="text-blue-700 font-bold">15 items</span> on
        </a>
        <Image
          src={right_now_ebay.src}
          alt="Emay"
          className=" ml-2"
            priority
            width={110}
            height={180}
        />
      </div>

      <div className="text-gray-500">Sponsored</div>
    </div>
  );
}

export default Buyfrom;
