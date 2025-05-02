"use client";
import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";
import Buyfrom from "../Buyfrom/Buyfrom";
import VideoBox from "../VideoBox/VideoBox";
import Feedback from "../Feedback/Feedback";
import ProsCons from "@/app/(route)/product/_ProsCons";
import CardsList from "../CardsList/CardsList";
import PerfumePhotos from "../PerfumePhotos/PerfumePhotos";
import Image from "next/image";
import RelatedFragram from "@/app/(route)/product/[productId]/RelatedFragram";
import FragramRatings from "@/app/(route)/product/[productId]/FragramRatings";
import parse from 'html-react-parser';

const RatingResult = dynamic(() => import("../RatingResult/RatingResult"), {
    loading: () => <p>Loading Rating</p>,
});
const PieChartComponent = dynamic(
    () => import("../DoughnutGraph/DoughnutGraph"),
    {
        loading: () => <p>Loading Rating</p>,
    }
);
const AddReview = dynamic(() => import("../AddReview/AddReview"), {
    loading: () => <p>Loading Review</p>,
});
const LikeDislikeComponent = dynamic(() => import("./LikeDislikeComponent"), {
    loading: () => <p>Loading Likes Dislikes</p>,
});
import { userStore } from "@/store/userStore";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import ct from "countries-and-timezones";
import { Roboto } from "next/font/google";
import PerfumeCategorySlider from "./PerfumeCategorySlider";
import LoginSignUp from "../LoginSignUp/LoginSignUp";
import dynamic from "next/dynamic";
import { FaQuoteLeft } from "react-icons/fa6";
import perfumeMetaData from "@/store/perfumeMetaData";


const lora = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700'],
});


const ProductPage = ({ productId }) => {



    const { id, setId, clearId } = perfumeMetaData();
    const [purchaseLinks, setPurchaseLinks] = useState([]);
    const [sidebarReview, setSidebarReview] = useState(null);
    const [data, setData] = useState(null);
    const [galleryData, setGalleryData] = useState(null);
    const router = useRouter();

    const tmz = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);
    const timezone = useMemo(() => ct.getTimezone(tmz), [tmz]);
    const [timeZoneCountry, setTimeZoneCountry] = useState(timezone?.countries[0]);

    const [perfumeCategories, setPerfumeCategories] = useState([]);
    const [globalBanner, setGlobalBanner] = useState(null);
    const { user, isUserLoggedIn } = userStore();
    const [historyMap, setHistorMap] = useState(new Map()); // Initialize with an empty Map
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function getPerfumeById(perfumeId) {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/slug/${perfumeId}`,

                );
                setLoading(false)
                setData(response.data)
                const sortedGallery = (response.data.data.gallery).sort((a, b) => (a?.position || 0) - (b?.position || 0))
                setGalleryData(sortedGallery);

            } catch (err) {
                setLoading(false)
                console.log("Data Not Found !!", err);
            }
        }

        async function getSiderbarReviews() {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviewsSidebar`,

            );
            // console.log(data, "sidebar Review")
            setSidebarReview(response?.data?.data)

        }
        getPerfumeById(productId)
        getSiderbarReviews()
    }, [])
    // Fetch perfume categories and global banner
    const fetchPerfumeData = useCallback(async (id) => {
        const [perfumeRes, bannerRes] = await Promise.all([
            axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfumeCategories?perfumeId=${id}`),
            axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/globalData?itemType=banner`)
        ]);

        setPerfumeCategories(perfumeRes?.data?.data || []);
        setGlobalBanner(bannerRes?.data?.data?.[0] || null);
    }, []);
    // Perfume user history
    const perfumeUserHistory = useCallback(async (userId) => {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/userHistory/${userId}`);
        const { perfumeMarkedVoted } = result?.data?.data;

        if (perfumeMarkedVoted?.length > 0) {
            const userHistoryMap = new Map(perfumeMarkedVoted.map((item) => [item.perfumeId, item]));
            setHistorMap(userHistoryMap);
        }
    }, []);

    // Set purchase links when data changes
    useEffect(() => {
        const mapOfLinks = data?.data?.mapOfLinks || {};
        const companiesList = mapOfLinks?.[timeZoneCountry] ?? mapOfLinks?.['US'] ?? (mapOfLinks[Object.keys(mapOfLinks)?.[0]] || []);
        setPurchaseLinks(companiesList);
    }, [timeZoneCountry, data]);

    // Run effects only when dependencies change
    useEffect(() => {
        if (user) perfumeUserHistory(user._id);
    }, [user, perfumeUserHistory]);

    useEffect(() => {
        if (id) {
            fetchPerfumeData(id);
        }
    }, [id]);

    // Like or dislike a perfume
    const likeDislike = useCallback(async (userVote) => {
        try {
            await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/votePerfume`, {
                userId: user?._id,
                perfumeId: id,
                userVote
            });
            router.refresh(); // Reload the page to update data
        } catch (error) {
            console.error(error);
        }
    }, [user?._id, id, router]);


    useEffect(() => {
        setId(data?.data?._id)
        return () => {
            setId(null)
        }
    }, [data?.data?._id])

    const isHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);

    const myRef = useRef(null);
    const btnRef = useRef(null);
    useEffect(() => {
        btnRef?.current?.click()
        console.log("clicked")
    }, [])



    return (
        <>


            <div ref={myRef} className="">
                {
                    loading ? <div className="min-h-screen max-w-7xl mx-auto rounded-md my-4 "></div> : <div className="min-h-screen mx-auto py-6  2xl:w-[1200px] xl:w-[1024px]">
                        <p className="text-4xl font-medium py-6  mb-0 text-center px-6">
                            <h1 className={`text-2xl text-left md:w-[70%] md:text-left md:text-[40px] leading-[48px] font-medium ${lora.className}`}>{data?.data?.perfume?.split('for')[0]} <span className='text-pink-400 text-xl md:text-3xl font-normal'>
                                {data?.data?.perfume?.split('for').length > 1 ? `for` + data?.data?.perfume?.split('for')[1] : ''}
                            </span></h1>
                        </p>
                        <div className=" gap-x-10 gap-y-14 grid gap-4 lg:grid-cols-[auto_18rem] mt-8 px-6 ">
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-[40%_60%]  ">
                                    <div className=" ">
                                        <div className="w-full  grid place-items-left ">
                                            <img className='h-[20rem] md:h-[28rem]  md:w-full mx-auto object-contain ' src={data?.data?.banner} alt={`${data?.data?.mainImageAltAttribute}`} srcset="" />
                                        </div>
                                        {
                                            <LikeDislikeComponent key={1} data={data} historyMap={historyMap} productId={id} likeDislike={likeDislike} />
                                        }
                                    </div>

                                    <div className="flex flex-col items-center gap-3 ">
                                        <div className="  w-fit  md:mb-0  md:mt-0 md:py-0   px-12">
                                            <img className="w-full  size-20  md:size-40 object-contain" src={data?.data?.logo} alt={data?.data?.brandAltAttribute} />
                                        </div>
                                        <div className="flex flex-wrap w-full justify-center overflow-visible pb-8">
                                            {/* <PieChart mainAccords={data?.data?.mainAccords} /> */}
                                            <PieChartComponent mainAccords={data?.data?.mainAccords} />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="grid md:grid-cols-[60%_40%] gap-y-4 md:gap-y-0">
                                        <div className="space-y-12 w-full flex flex-col justify-center items-center ">

                                            {purchaseLinks?.length > 0 && <Buyfrom links={purchaseLinks} />}
                                        </div>
                                        {/* <iframe width="300" height="250" frameborder="0" scrolling="no" src="//www.highperformanceformat.com/df28eb1517c02c14a6a6190dbd9690a9/invoke.js"></iframe> */}
                                        {/* 
                                        <div dangerouslySetInnerHTML={<script
                                            type="text/javascript"
                                            src="//www.highperformanceformat.com/df28eb1517c02c14a6a6190dbd9690a9/invoke.js"
                                            strategy="afterInteractive"
                                            onError={(e) => console.error('Script error:', e)}
                                            onLoad={() => console.log('Script loaded successfully')}
                                        />}>

                                        </div> */}

                                        {/* {
                                        data?.data?.video && <VideoBox videoD={data?.data?.video} />
                                    } */}
                                    </div>
                                    <Feedback />
                                    {/* detail start */}
                                    <div className="space-y-7  pt-3 ">
                                        <div className="!text-[16px] !leading-[25px] !font-normal text-justify md:text-left text-black">
                                            {isHTML(data?.data?.details) ? (
                                                // Parse and render HTML content
                                                <div>{parse(data?.data?.details)}</div>
                                            ) : (
                                                // Render plain text
                                                <p>{data?.data?.details}</p>
                                            )}
                                            {/* {data?.data?.details} */}

                                        </div>

                                        <div className="relative border-y-2 pt-7 py-6">
                                            <div className="p-2 absolute -top-5 left-[50%] bg-white">
                                                <FaQuoteLeft size={20} className=" text-[#83a6c4] " />
                                            </div>
                                            <p className='text-justify md:text-left !text-[16px] !leading-[25px] !font-normal  text-black'>
                                                {isHTML(data?.data?.description) ? (
                                                    // Parse and render HTML content
                                                    <div>{parse(data?.data?.description)}</div>
                                                ) : (
                                                    // Render plain text
                                                    <p>{data?.data?.description}</p>
                                                )}
                                                {/* {data?.data?.description} */}
                                            </p>
                                        </div >

                                    </div >
                                    {/* detail ends */}

                                    {/* pros n cons */}
                                    {<ProsCons />}
                                    {/* pros n cons */}
                                </div >
                            </div>

                            <div className=" space-y-3">
                                <div className=" space-y-8 hidden md:block">
                                    <LoginSignUp />
                                    {
                                        globalBanner && <div className="h-[20rem] flex justify-start items-start  rounded-md overflow-hidden">

                                            <img
                                                className="h-full w-full object-contain"
                                                // src="https://img.pikbest.com/origin/06/25/40/84bpIkbEsTgk3.jpg!sw800"
                                                src={`${globalBanner?.item[0]?.path}`}
                                                alt=""
                                            />
                                        </div>
                                    }

                                </div>
                                <div className='hidden md:block'>
                                    <div className="w-full  flex flex-col gap-5   ">
                                        <div className=" w-full text-left flex justify-between">
                                            <h2 className="text-xl md:text-[18px]  font-medium pl-1 ">
                                                Perfume Reviews
                                            </h2>
                                            <button className='font-medium text-[14px] text-[#EA92B6]' type="button">Write a Review</button>
                                        </div>
                                        <CardsList reviewData={sidebarReview} length={7} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className=" gap-x-10 gap-y-14 grid gap-4  lg:grid-cols-[auto_18rem] py-8">


    </div> */}
                        {/* Perfume Photos starts */}
                        <div className="md:py-14 px-6">
                            <div className="w-full relative grid place-items-center mb-10">
                                <h2
                                    className="text-xl md:text-3xl font-extrabold bg-white px-4 ">
                                    Perfume Photos
                                </h2>
                            </div>
                            {galleryData && <PerfumePhotos data={galleryData} />}
                        </div>
                        {/* Perfume Photos ends */}

                        {/* Fragrance Notes starts */}
                        <div className="mt-14">
                            <div className="w-full relative grid place-items-center mb-6">
                                <h2
                                    className="text-xl md:text-3xl font-extrabold bg-white px-4 ">
                                    Fragrance Notes
                                </h2>
                            </div>
                            <div className="grid lg:grid-cols-[auto_18rem]">
                                <div className="flex items-start justify-center lg:translate-x-6   gap-10 ">
                                    <div className="flex items-center gap-1  ">
                                        <div className="p-4 relative left-5 hidden md:block">
                                            <p className="px-20 font-bold">High</p>
                                            <div className="">
                                                <svg
                                                    version="1.0"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="35.000000pt"
                                                    height="300.000000pt"
                                                    viewBox="0 0 35.000000 300.000000"
                                                    preserveAspectRatio="xMidYMid meet"
                                                >
                                                    {" "}
                                                    <g
                                                        transform="translate(0.000000,300.000000) scale(0.050000,-0.050000)"
                                                        fill="#000000"
                                                        stroke="none"
                                                    >
                                                        {" "}
                                                        <path d="M327 5859 c-47 -117 -138 -288 -211 -394 -66 -97 -58 -101 89 -45 58 22 112 40 120 40 8 0 15 -1224 15 -2720 0 -2404 3 -2720 30 -2720 27 0 30 316 30 2721 l0 2722 45 -14 c25 -8 88 -30 140 -50 114 -42 113 -44 25 78 -38 54 -110 181 -158 284 l-89 187 -36 -89z" />{" "}
                                                    </g>{" "}
                                                </svg>
                                            </div>
                                            <p className="px-20 font-bold">Low</p>
                                        </div>

                                        <div className="relative  grid place-items-center">
                                            <Image
                                                src={"/PerfumeBottle3.svg"}
                                                height={550}
                                                width={650}
                                                alt=""
                                                className="object-cover"

                                            />
                                            <div className="absolute   flex flex-col -translate-x-3 max-w-[20rem] md:max-w-[16rem] gap-4">
                                                <div className="flex flex-col gap-3 justify-center items-center flex-wrap ">
                                                    <p className="text-center font-bold text-xs md:text-sm">Top Notes</p>
                                                    <div className="flex gap-3 flex-wrap justify-center">
                                                        {data?.data?.topNote &&
                                                            data?.data?.topNote.map((el) => {
                                                                return (
                                                                    <div
                                                                        key={el._id}
                                                                        className=" flex flex-col justify-center items-center "
                                                                    >
                                                                        <img
                                                                            src={el.image}
                                                                            alt={el.name}
                                                                            className="w-8 sm:w-12 md:h-12"
                                                                        />
                                                                        <p className='text-xs '>{el.name?.slice(0, 5)}...</p>
                                                                    </div>
                                                                );
                                                            })}
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-3 justify-center items-center flex-wrap">
                                                    <p className="text-center font-bold text-xs md:text-base">Middle Notes</p>
                                                    <div className="flex gap-3 flex-wrap justify-center">
                                                        {data && data.data?.middleNote.map((el) => {
                                                            return (
                                                                <div
                                                                    key={el._id}
                                                                    className=" flex flex-col  justify-center items-center "
                                                                >
                                                                    <img
                                                                        src={el.image}
                                                                        alt={el.name}
                                                                        className="w-8 sm:w-12 md:h-12"
                                                                    />
                                                                    <p className='text-xs '>{el.name?.slice(0, 5)}...</p>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-3 justify-center items-center flex-wrap">
                                                    <p className="text-center font-bold text-xs md:text-base">Base Notes</p>
                                                    <div className="flex gap-3 flex-wrap justify-center">
                                                        {data?.data?.baseNote.map((el) => {
                                                            return (
                                                                <div
                                                                    key={el._id}
                                                                    className=" flex flex-col  justify-center items-center "
                                                                >
                                                                    <img
                                                                        src={el.image}
                                                                        alt={el.name}
                                                                        className="w-8 sm:w-12 md:h-12"
                                                                    />
                                                                    <p className='text-xs '>{el.name?.slice(0, 5)}...</p>
                                                                </div>
                                                            );
                                                        })}


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div >
                                </div >
                                <div>{/* <CardsList data={perfumeReviews} /> */}</div>
                            </div >
                        </div >
                        {/* Fragrance Notes ends */}

                        {/* Releted Fragram starts */}
                        <div className="flex justify-center md:w-fit px-10 py-2 ">
                            <RelatedFragram country={timeZoneCountry} />
                        </div>
                        {/* Related Fragram ends */}

                        {/*Ya perfume categories starts */}
                        <div className="flex justify-start">
                            <div className=" w-11/12 md:w-3/4 lg:w-2/3">
                                <div className="flex items-center justify-center">
                                <h2 className="text-xl md:text-3xl font-extrabold bg-white">Yeah Perfume Categories</h2>
                                </div>
                                {/* <div className="grid h-[18rem]"> */}
                                <div className="flex flex-row h-[18rem]">
                                <PerfumeCategorySlider perfumeCategories={perfumeCategories} timeZoneCountry={timeZoneCountry} />
                                </div>
                            </div>
                        </div>
                         {/*Ya perfume categories ends */}
                        
                        {/*Ya perfume categories starts */}
                        <div className=" md:px-24 grid gap-4 lg:grid-cols-[auto_18re] ">
                            <div className="space-y-8 md:space-y-6 md:px-2  items-center justify-center">
                                {/* <div className="bg-red-500">
                                    <div className="flex items-center justify-center">
                                        <h2
                                            className="text-xl md:text-3xl font-extrabold bg-white ">
                                            Yeah Perfume Categories
                                        </h2>
                                    </div>
                                    <div>

                                    </div>
                                    <div className="grid h-[20rem]">
                                        <PerfumeCategorySlider perfumeCategories={perfumeCategories} timeZoneCountry={timeZoneCountry} />

                                    </div >
                                </div> */}
                                {data && <FragramRatings data={data.data?.ratingFragrams} country={timeZoneCountry} />}
                                <div className="grid gap-5 container ">
                                    <div className="grid place-items-center relative mt-12">
                                        <h2
                                            className="text-xl md:text-3xl font-extrabold bg-white px-4 ">
                                            Rating Results{" "}
                                        </h2>
                                    </div>
                                    <RatingResult productId={id} />

                                </div>
                                <div className="">
                                    <AddReview />

                                </div>
                            </div >

                        </div>
                        {/*Ya perfume categories ends */}
                    </div >
                }
                <button className="hidden" ref={btnRef} onClick={() => myRef.current?.scrollIntoView()}>
                    Jump to My Section
                </button>
            </div>


        </>

    )
}

export default ProductPage