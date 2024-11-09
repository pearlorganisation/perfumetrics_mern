"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const PerfumePhotos = ({ data }) => {
    console.log(data, "data")
    return (



        <Swiper
            slidesPerView={8}
            spaceBetween={20}
            navigation={true}

            modules={[Navigation]}
            className="col-span-2 w-[100%] relative border-2"
        >

            <div className="flex gap-4 relative">

                {data
                    ?.map((item) => {
                        return (
                            <SwiperSlide className='border'>
                                <img className="size-52 object-cover" src={item?.path} alt="" />
                            </SwiperSlide>

                        );
                    })}
            </div>

        </Swiper>



    )
}

export default PerfumePhotos