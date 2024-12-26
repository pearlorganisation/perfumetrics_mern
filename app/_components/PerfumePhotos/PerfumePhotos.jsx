"use client"
import React, { useRef, useState } from 'react';

const PerfumePhotos = ({ data }) => {
  console.log(data, "data")
  return <div className='flex flex-wrap gap-4'>
    {data
      ?.filter((ite, idx) => idx < 8)?.map((item) => {
        return (
          <div className=' flex justify-center items-center size-[180px] border'>
            <img className=" object-contain size-full bg-neutral-200" src={item?.path} alt="" />
          </div>

        );
      })}

  </div>
}

export default PerfumePhotos
