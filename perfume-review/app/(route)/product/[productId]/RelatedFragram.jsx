"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";

const popularPerfumeData = [
    {
        name: "",
        imgUrl: `https://media.istockphoto.com/id/1616896569/vector/clear-glass-perfume-bottle-mockup-with-silver-spray.jpg?s=612x612&w=0&k=20&c=U8xzacdlxnphLtxD8cKIzoCShpOVa_p6Yxw-Pb8dgdc=`,
    },
    {
        name: "",
        imgUrl: `https://media.istockphoto.com/id/1616896569/vector/clear-glass-perfume-bottle-mockup-with-silver-spray.jpg?s=612x612&w=0&k=20&c=U8xzacdlxnphLtxD8cKIzoCShpOVa_p6Yxw-Pb8dgdc=`,
    },
    {
        name: "",
        imgUrl: `https://media.istockphoto.com/id/1616896569/vector/clear-glass-perfume-bottle-mockup-with-silver-spray.jpg?s=612x612&w=0&k=20&c=U8xzacdlxnphLtxD8cKIzoCShpOVa_p6Yxw-Pb8dgdc=`,
    },
    {
        name: "",
        imgUrl: `https://media.istockphoto.com/id/1616896569/vector/clear-glass-perfume-bottle-mockup-with-silver-spray.jpg?s=612x612&w=0&k=20&c=U8xzacdlxnphLtxD8cKIzoCShpOVa_p6Yxw-Pb8dgdc=`,
    },
    {
        name: "",
        imgUrl: `https://media.istockphoto.com/id/1616896569/vector/clear-glass-perfume-bottle-mockup-with-silver-spray.jpg?s=612x612&w=0&k=20&c=U8xzacdlxnphLtxD8cKIzoCShpOVa_p6Yxw-Pb8dgdc=`,
    },
    {
        name: "",
        imgUrl: `https://media.istockphoto.com/id/1616896569/vector/clear-glass-perfume-bottle-mockup-with-silver-spray.jpg?s=612x612&w=0&k=20&c=U8xzacdlxnphLtxD8cKIzoCShpOVa_p6Yxw-Pb8dgdc=`,
    },
    {
        name: "",
        imgUrl: `https://media.istockphoto.com/id/1616896569/vector/clear-glass-perfume-bottle-mockup-with-silver-spray.jpg?s=612x612&w=0&k=20&c=U8xzacdlxnphLtxD8cKIzoCShpOVa_p6Yxw-Pb8dgdc=`,
    },
    {
        name: "",
        imgUrl: `https://media.istockphoto.com/id/1616896569/vector/clear-glass-perfume-bottle-mockup-with-silver-spray.jpg?s=612x612&w=0&k=20&c=U8xzacdlxnphLtxD8cKIzoCShpOVa_p6Yxw-Pb8dgdc=`,
    },
    {
        name: "",
        imgUrl: `https://media.istockphoto.com/id/1616896569/vector/clear-glass-perfume-bottle-mockup-with-silver-spray.jpg?s=612x612&w=0&k=20&c=U8xzacdlxnphLtxD8cKIzoCShpOVa_p6Yxw-Pb8dgdc=`,
    },
];

const perfumeReviews = [
    {
        imgUrl: "https://fimgs.net/mdimg/perfume/375x500.2355.jpg",
        name: "al haraman",
        brand: null,
    },
    {
        imgUrl: "https://fimgs.net/mdimg/perfume/375x500.90689.jpg",
        name: "Denver",
        brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
        imgUrl: "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
        name: "Denver",
        brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
        imgUrl: "https://fimgs.net/mdimg/perfume/375x500.35456.jpg",
        name: "Denver",
        brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
        imgUrl: "https://fimgs.net/mdimg/perfume/375x500.90689.jpg",
        name: "Denver",
        brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
        imgUrl: "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
        name: "Denver",
        brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
        imgUrl: "https://fimgs.net/mdimg/perfume/375x500.35456.jpg",
        name: "Denver",
        brand: "Cereria Terenzi Evelino S.R.L.",
    },
];

const RelatedFragram = () => {
    return (
        <>
            <div className="hidden lg:block">
                <div className="p-5">
                    <div className="text-center">
                        <div className="grid place-items-center relative">
                            <h1 className="text-3xl font-medium px-8 py-3 bg-white z-40">
                                Related Fragram
                            </h1>
                            <div className="absolute w-full h-[2px] bg-slate-500"></div>
                        </div>
                        <div className="p-10">
                            <Swiper
                                slidesPerView={2}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 5,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 6,
                                        spaceBetween: 50,
                                    },
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {popularPerfumeData.map((item, index) => {
                                    return (
                                        <SwiperSlide
                                            key={index}
                                            className="grid place-items-center p-2 py-6  md:!w-auto"
                                        >
                                            <div className="shadowE cursor-pointer">
                                                <div className="xl:w-[120px] xl:h-[120px] lg:w-[80px] lg:h-[80px] overflow-hidden">
                                                    <img
                                                        src={item.imgUrl}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex flex-col justify-center items-center font-medium py-2">
                                                    <span>Crazypills</span>
                                                    <span className="text-teal-500">Incolonge</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};



export default RelatedFragram