"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import 'swiper/css/navigation';


import { Keyboard, Navigation, Pagination } from 'swiper/modules';

const PerfumePhotos = ({ data }) => {
    console.log(data, "data")
    return (



        <Swiper
            slidesPerView={4}
            spaceBetween={0}
            grabCursor={true}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                769: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 5
                },
                310: {
                    slidesPerView: 2,
                    spaceBetween: 1
                },
            }}

            navigation={true}

            modules={[Keyboard, Navigation]}
            className="mySwiper"
        >



            {data
                ?.map((item) => {
                    return (
                        <SwiperSlide className=' '>
                            <div className=' flex justify-center items-center'>
                                <img className=" object-contain" src={item?.path} alt="" />
                            </div>
                        </SwiperSlide>

                    );
                })}

        </Swiper>





    )
}

export default PerfumePhotos