"use client"
import React, { useRef, useState } from 'react';

import 'swiper/css';

import "swiper/css/navigation";



const PerfumePhotos = ({ data }) => {
    console.log(data, "data")
    return <div className='flex gap-1 flex-wrap'>
        {data
            ?.filter((ite, idx) => idx < 8)?.map((item) => {
                return (
                    <div className=' flex justify-center items-center size-[180px]'>
                        <img className=" object-contain" src={item?.path} alt="" />
                    </div>

                );
            })}

    </div>
}

export default PerfumePhotos
