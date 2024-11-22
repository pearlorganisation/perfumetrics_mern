"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

// import './styles.css';

// import required modules
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
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Keyboard, Navigation]}
            className="mySwiper"
        >

            {/* <div className="flex gap-4 relative"> */}

            {data
                ?.map((item) => {
                    return (
                        <SwiperSlide className='border '>
                            <img className="size-24 object-cover" src={item?.path} alt="" />
                        </SwiperSlide>

                    );
                })}
            {/* </div> */}

        </Swiper>

        //     <Swiper
        //     spaceBetween={50}
        //     slidesPerView={3}
        //     onSlideChange={() => console.log('slide change')}
        //     onSwiper={(swiper) => console.log(swiper)}
        //   >
        //     <SwiperSlide>Slide 1</SwiperSlide>
        //     <SwiperSlide>Slide 2</SwiperSlide>
        //     <SwiperSlide>Slide 3</SwiperSlide>
        //     <SwiperSlide>Slide 4</SwiperSlide>
        //     ...
        //   </Swiper>



    )
}

export default PerfumePhotos