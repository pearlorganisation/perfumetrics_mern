"use client"
import React, { useEffect, useState, useMemo, useCallback } from 'react'
import PieChart from '../DoughnutGraph/DoughnutGraph';
import Buyfrom from '../Buyfrom/Buyfrom';
import VideoBox from '../VideoBox/VideoBox';
import Feedback from '../Feedback/Feedback';
import ProsCons from '@/app/(route)/product/_ProsCons';
import CardsList from '../CardsList/CardsList';
import PerfumePhotos from '../PerfumePhotos/PerfumePhotos';
import Image from 'next/image';
import RelatedFragram from '@/app/(route)/product/[productId]/RelatedFragram';
import FragramRatings from '@/app/(route)/product/[productId]/FragramRatings';
import RatingResult from '../RatingResult/RatingResult';
import AddReview from '../AddReview/AddReview';
// import Review from '@/app/(route)/product/[productId]/Review';
import { GiFruitBowl } from "react-icons/gi";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import Link from 'next/link';
import { userStore } from '@/store/userStore';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { RiCentosLine } from 'react-icons/ri';
import ct from 'countries-and-timezones';
import { userLikeDislikeHistoryStore } from '@/store/userLikeDislikeHistoryStore';
import LikeDislikeComponent from './LikeDislikeComponent';


const ProductPage = ({ data, totalRatings, sidebarReview, productId }) => {
    const { getUserLikeDisLikeHistory, userLikeDislikeHistory } = userLikeDislikeHistoryStore();
    const [purchaseLinks, setPurchaseLinks] = useState([]);
    const router = useRouter();

    const tmz = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);
    const timezone = useMemo(() => ct.getTimezone(tmz), [tmz]);
    const [timeZoneCountry, setTimeZoneCountry] = useState(timezone?.countries[0]);

    const [perfumeCategories, setPerfumeCategories] = useState([]);
    const [globalBanner, setGlobalBanner] = useState(null);
    const { user, isUserLoggedIn } = userStore();
    const [historyMap, setHistorMap] = useState(new Map()); // Initialize with an empty Map

    // Fetch perfume categories and global banner
    const fetchPerfumeData = useCallback(async (perfumeId) => {
        const [perfumeRes, bannerRes] = await Promise.all([
            axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfumeCategories?perfumeId=${perfumeId}`),
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
        const companiesList = mapOfLinks[timeZoneCountry]?.companiesList || [];
        setPurchaseLinks(companiesList);
    }, [timeZoneCountry]);

    // Run effects only when dependencies change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (user) perfumeUserHistory(user._id);
    }, [user, perfumeUserHistory]);

    useEffect(() => {
        if (productId) fetchPerfumeData(productId);
    }, [productId, fetchPerfumeData]);

    // Like or dislike a perfume
    const likeDislike = useCallback(async (userVote) => {
        try {
            await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/votePerfume`, {
                userId: user?._id,
                perfumeId: productId,
                userVote
            });
            router.refresh(); // Reload the page to update data
        } catch (error) {
            console.error(error);
        }
    }, [user?._id, productId, router]);


    return (
        <div className="min-h-screen container mx-auto mt-10 md:py-20 px-4">
            <p className="text-4xl font-medium py-6 md:mb-16 mb-0 text-center">
                {/* {data?.data?.perfume}{" "} */}
                <h1 className="text-2xl md:text-4xl font-semibold ">{data?.data?.perfume}</h1>
            </p>
            <div className=" gap-x-10 gap-y-14 grid lg:grid-cols-[auto_18rem]">
                <div className="grid md:grid-cols-[55%_45%]  ">
                    <div className=" ">
                        {/* <img src={data?.data?.banner} alt="img" srcset="" /> */}
                        {/* <Image
                src="https://res.cloudinary.com/dnixhctcf/image/upload/v1721022071/Design%20Destination/nmviowb6pwjlhli0f3nz.png"
                width={500}
                height={300}
                alt="Description"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              /> */}
                        <div className="w-full  grid place-items-left ">
                            {/* <img
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTx9i5DBcQkjbErPnz2sW4ykIsR66GdgUbTwxahsuFDhg1o5Z1HQBanzufmDf605qhNqlrLF1eOti2Pd9IW1xsmFLuSQly7QSFrBAMrSEh8X-qxtvgNDn5x"
                  alt="img"
                  srcset=""
                /> */}
                            <img src={data?.data?.banner} alt={`${data?.data?.mainImageAltAttribute}`} srcset="" />
                        </div>
                        {
                            <LikeDislikeComponent key={1} data={data} historyMap={historyMap} productId={productId} likeDislike={likeDislike} />
                        }
                    </div>

                    <div className="flex flex-col items-center gap-4 ">
                        <div className="rounded-full overflow-hidden  w-fit">
                            <img className="size-52 md:size-60" src={data?.data?.logo} alt={data?.data?.brandAltAttribute} />
                        </div>
                        <div className="flex flex-wrap w-full justify-center">
                            <PieChart mainAccords={data?.data?.mainAccords} />
                        </div>
                    </div>
                </div>

                <div className=" space-y-14 hidden md:block">
                    {
                        !isUserLoggedIn ? <div className="border-2 border-pink-500 rounded grid place-items-center py-4 gap-2">
                            <div className="text-xl md:text-2xl font-semibold">Register</div>
                            <div className="space-x-4">
                                <button className="w-[8rem] py-2 rounded border border-pink-500">
                                    <Link href="/login">Login</Link>
                                </button>
                                <button className="w-[8rem] py-2 rounded border border-pink-500">
                                    <Link href="/signUp">Register</Link>
                                </button>
                            </div>
                            <button className="bg-[#1777F2] font-medium text-white px-4 py-2 rounded flex justify-center items-center gap-2">
                                {" "}
                                <FaFacebookF />
                                Login
                            </button>
                        </div> : <div></div>
                    }
                    {
                        globalBanner && <div className="h-[20rem]  border rounded-md overflow-hidden">

                            <img
                                className="h-full mx-auto"
                                // src="https://img.pikbest.com/origin/06/25/40/84bpIkbEsTgk3.jpg!sw800"
                                src={`${globalBanner?.item[0]?.path}`}
                                alt=""
                            />
                        </div>
                    }

                </div>
            </div>
            <div className=" gap-x-10 gap-y-14 grid  lg:grid-cols-[auto_18.3rem] py-8">
                <div className="space-y-8">
                    <div className="grid md:grid-cols-[60%_40%] gap-y-4 md:gap-y-0">
                        <div className="space-y-12 w-full flex flex-col justify-center items-center ">

                            {purchaseLinks?.length > 0 && <Buyfrom links={purchaseLinks} />}
                            {/* {[
                  {
                    title: "Buy From",
                    img: "https://s3-alpha-sig.figma.com/img/3659/5e0f/7eef1817ec204989391c3be6ac3d5499?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eez7RfvpVZaxP9V0eylwnnNzYiYt4TuntkPLYpOMc0S3YUIp8RIPE1xyjmzLAeRViSPvm-dPRCl3pfPNUSbLg7UV9hZ6qxDkyDOSdWchcLteNA9xCOhEri4RASZMQ0JObY2y~xNBZ~qq4e7dc3j58MxFGfkmTVMm0l0d~MzVt1x5ehYN3f6WqCD~KszzZYs0nRBoQaMQhVUrUbcrXw8WcW6fCMnHy0hEB86zzzGtbWBul1O7ThN2dmXiw6DhMRNSZkb0vyZhghFpItn5nKNHvkg-yQg~NPfh2mBUsJccqMKx9tjkcYifrGRQHtFine3LLUEDPTxaDLDIbc1jExIapg__",
                  },
                  {
                    title: "Buy From",
                    img: "https://s3-alpha-sig.figma.com/img/87cb/8e80/a974a28100d68d7f00b0634e69ff2269?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JMzwB1wBCMjHQF6cykxZ6EXQK8o8OEAhMpHNZ-5eCnRVr8QBz4A0vYZiMHSpLVm7-BAIlTf7tMemYQEkVu6sxqhEY-4NaEx-lR0Z0Po3Ev~FPQoN4P5UxUOI-dr-3IB1fOLYTeLm3Bs4ylcJedIN-w8B7i6S39INHu6dvie~4FMLZ0tqpM2krtvmZWGxohKjNUpuhZQTJTI3Yq9rkIgDd2c48--xWj7Fo9PyXJDlYlTvKIkO82P6myuikCHJXt9L2ds2qsT6oV1LVXTfSMN1mY6Ya1SvFTF-Vb1mwqATm8drsiKsDzdqtYBapIJJDHJ~5n86Eg84khZ6miAAVf~cDA__",
                  },
                ].map((item) => {
                  return (
                    <div className="flex gap-4 text-xl font-semibold justify-start items-center bg-[#FAF6FF] w-[20rem] px-6 py-2 rounded-xl">
                      <span>{item?.title}</span>
                      <img src={item?.img} alt="" />
                    </div>
                  );
                })} */}
                        </div>
                        {
                            data?.data?.video && <VideoBox videoD={data?.data?.video} />
                        }
                    </div>
                    <Feedback />
                    {/* detail start */}
                    <div className="space-y-3">
                        <div className="font-medium text-sm md:text-base text-justify md:text-left">{data?.data?.details}</div>

                        <div className="relative border-y-2 py-4">
                            <div className="p-2 absolute -top-5 left-[50%] bg-white">
                                <FaQuoteLeft size={20} className=" text-[#83a6c4]" />
                            </div>
                            <p className='text-justify md:text-left text-sm md:text-base'>

                                {data?.data?.description}
                            </p>
                        </div >
                        {/* <div className="relative border-b-2 py-4 text-[#138B92]">
                            <span className="text-[#A2ADC4]">
                                {" "}
                                Read about this perfume in other languages:
                            </span>{" "}
                            Deutsch, Español, Français, Čeština, Italiano, Русский, Polski,
                            Português, Ελληνικά, 汉语, Nederlands, Srpski, Română, العربية,
                            Українська, Монгол, עברית.
                        </div> */}
                    </div >
                    {/* detail ends */}

                    {/* pros n cons */}
                    {<ProsCons />}
                    {/* pros n cons */}
                </div >
                <div className='hidden md:block'>
                    <div className="w-full  flex flex-col gap-10">
                        <div className=" w-full text-center py-4 shadow-lg">
                            <h2 className="text-xl md:text-2xl  font-semibold ">
                                Perfume Reviews
                            </h2>
                        </div>
                        <CardsList reviewData={sidebarReview} length={7} />
                    </div>
                </div>
            </div>
            {/* Perfume Photos starts */}
            <div className="mt-4 md:py-14 md:mt-14">
                <div className="w-full relative grid place-items-center mb-14">
                    <div className="h-[2px] w-full bg-black absolute"></div>
                    <h2
                        className="text-xl md:text-3xl font-medium bg-white px-4 z-30">
                        Perfume Photos
                    </h2>
                </div>
                <PerfumePhotos data={data?.data?.gallery} />
            </div>
            {/* Perfume Photos ends */}

            {/* Fragrance Notes starts */}
            <div className="mt-20">
                <div className="w-full relative grid place-items-center mb-14">
                    <div className="h-[2px] w-[70%] bg-black absolute"></div>
                    <h2 className="text-xl  md:text-3xl font-medium bg-white px-2 md:px-4 z-30">
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

                            <div className="relative  grid place-items-center  w-fit">
                                <Image
                                    src={"/PerfumeBottle.svg"}
                                    height={400}
                                    width={450}
                                    alt=""
                                />
                                <div className="absolute   flex flex-col -translate-x-3 max-w-[20rem] md:max-w-[16rem] gap-1 md:gap-4">
                                    <div className="flex flex-col gap-3 justify-center items-center flex-wrap ">
                                        <p className="text-center font-bold text-xs md:text-base">Top Notes</p>
                                        <div className="flex gap-3 text-sm">
                                            {data?.data?.topNote &&
                                                data?.data?.topNote.map((el) => {
                                                    return (
                                                        <div
                                                            key={el._id}
                                                            className=" flex flex-col  justify-center items-center "
                                                        >
                                                            <img
                                                                src={el.image}
                                                                alt={el.name}
                                                                className="w-7 h-7 md:w-10 md:h-10"
                                                            />
                                                            <p className=' text-xs md:text-balance'>{el.name}</p>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 justify-center items-center flex-wrap">
                                        <p className="text-center font-bold text-xs md:text-base">Middle Notes</p>
                                        <div className="flex gap-3">
                                            {data.data?.middleNote.map((el) => {
                                                return (
                                                    <div
                                                        key={el._id}
                                                        className=" flex flex-col  justify-center items-center "
                                                    >
                                                        <img
                                                            src={el.image}
                                                            alt={el.name}
                                                            className="w-7 h-7 md:w-10 md:h-10"
                                                        />
                                                        <p className=' text-xs md:text-balance'>{el.name}</p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 justify-center items-center flex-wrap">
                                        <p className="text-center font-bold text-xs md:text-base">Base Notes</p>
                                        <div className="flex gap-3">
                                            {data.data?.baseNote.map((el) => {
                                                return (
                                                    <div
                                                        key={el._id}
                                                        className=" flex flex-col  justify-center items-center "
                                                    >
                                                        <img
                                                            src={el.image}
                                                            alt={el.name}
                                                            className="w-7 h-7 md:w-10 md:h-10"
                                                        />
                                                        <p className=' text-xs md:text-balance'>{el.name}</p>
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
            <RelatedFragram />
            {/* Related Fragram ends */}

            {/*Ya perfume categories starts */}
            <div className=" grid lg:grid-cols-[auto_18rem]">
                <div className="md:space-y-6 md:px-6">
                    <h2 className="text-xl md:text-3xl text-center md:text-left text-green-500 font-medium mt-10 mb-14">
                        Yeah Perfume Categories
                    </h2>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-14">
                        {perfumeCategories?.map((item) => {
                            return (
                                <Link href={item?.link} target='_blank'>
                                    <div className="max-w-xs mx-auto bg-white rounded-lg shadowE cursor-pointer p-2 overflow-hidden">
                                        <div className="h-48 bg-whtie flex items-center justify-center">
                                            <img
                                                className="h-48"
                                                src={item?.banner}
                                                alt=""
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-sm font-semibold text-blue-600">
                                                {item?.perfumeName}
                                            </h3>
                                            <div className="mt-2 space-x-2">
                                                <span className="text-xl font-bold text-gray-900">
                                                    ₹{item?.price}
                                                </span>
                                                <span className="text-gray-600">{item?.priceMl
                                                }</span>
                                            </div>
                                        </div>
                                    </div >
                                </Link >
                            );
                        })}
                    </div >
                    {data && <FragramRatings data={data.data?.ratingFragrams} />}
                    <div className="grid gap-5 container ">
                        <div className="grid place-items-center relative mt-24 mb-6">
                            <h2 className="text-xl md:text-3xl font-medium px-8 py-3 bg-white z-40">
                                Rating/Results{" "}
                            </h2>
                            <div className="absolute w-full h-[2px] bg-slate-500"></div>
                        </div>

                        {totalRatings?.data && (
                            <RatingResult perfumeRatings={totalRatings.data} />
                        )}
                    </div>
                    {/* <div className="space-y-5">
                        <AddReview />

                    </div> */}
                </div >
                <div className='hidden md:block'>
                    <CardsList reviewData={sidebarReview} length={7} />
                </div>
            </div>
            {/*Ya perfume categories ends */}
        </div >
    )
}

export default ProductPage