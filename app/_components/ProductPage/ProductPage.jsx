"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
// import PieChart from "../DoughnutGraph/DoughnutGraph";
import Buyfrom from "../Buyfrom/Buyfrom";
import VideoBox from "../VideoBox/VideoBox";
import Feedback from "../Feedback/Feedback";
import ProsCons from "@/app/(route)/product/_ProsCons";
import CardsList from "../CardsList/CardsList";
import PerfumePhotos from "../PerfumePhotos/PerfumePhotos";
import Image from "next/image";
import RelatedFragram from "@/app/(route)/product/[productId]/RelatedFragram";
import FragramRatings from "@/app/(route)/product/[productId]/FragramRatings";
// import RatingResult from "../RatingResult/RatingResult";
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
// import AddReview from "../AddReview/AddReview";
// import Review from '@/app/(route)/product/[productId]/Review';
import { FaQuoteLeft } from "react-icons/fa";
import { userStore } from "@/store/userStore";
import axios from "axios";
import { useRouter } from "next/navigation";
import ct from "countries-and-timezones";
import { userLikeDislikeHistoryStore } from "@/store/userLikeDislikeHistoryStore";
// import LikeDislikeComponent from "./LikeDislikeComponent";
import { Montserrat } from "next/font/google";
// import PerfumeCarousel from './PerfumeCarousel';
import PerfumeCategorySlider from "./PerfumeCategorySlider";
import LoginSignUp from "../LoginSignUp/LoginSignUp";
import dynamic from "next/dynamic";

const lora = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ProductPage = ({ data, sidebarReview, productId }) => {
  const { getUserLikeDisLikeHistory, userLikeDislikeHistory } =
    userLikeDislikeHistoryStore();
  const [purchaseLinks, setPurchaseLinks] = useState([]);
  const router = useRouter();

  const tmz = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    []
  );
  const timezone = useMemo(() => ct.getTimezone(tmz), [tmz]);
  const [timeZoneCountry, setTimeZoneCountry] = useState(
    timezone?.countries[0]
  );

  const [perfumeCategories, setPerfumeCategories] = useState([]);
  const [globalBanner, setGlobalBanner] = useState(null);
  const { user, isUserLoggedIn } = userStore();
  const [historyMap, setHistorMap] = useState(new Map()); // Initialize with an empty Map

  // Fetch perfume categories and global banner
  const fetchPerfumeData = useCallback(async (perfumeId) => {
    const [perfumeRes, bannerRes] = await Promise.all([
      axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfumeCategories?perfumeId=${perfumeId}`
      ),
      axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/globalData?itemType=banner`
      ),
    ]);

    setPerfumeCategories(perfumeRes?.data?.data || []);
    setGlobalBanner(bannerRes?.data?.data?.[0] || null);
  }, []);
  // Perfume user history
  const perfumeUserHistory = useCallback(async (userId) => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/userHistory/${userId}`
    );
    const { perfumeMarkedVoted } = result?.data?.data;

    if (perfumeMarkedVoted?.length > 0) {
      const userHistoryMap = new Map(
        perfumeMarkedVoted.map((item) => [item.perfumeId, item])
      );
      setHistorMap(userHistoryMap);
    }
  }, []);

  // Set purchase links when data changes
  useEffect(() => {
    const mapOfLinks = data?.data?.mapOfLinks || {};
    const companiesList = mapOfLinks[timeZoneCountry]?.companiesList || [];
    setPurchaseLinks(companiesList);
    console.log("timeZoneCountry", timeZoneCountry);
  }, [timeZoneCountry]);

  // Run effects only when dependencies change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (user) perfumeUserHistory(user._id);
  }, [user, perfumeUserHistory]);

  useEffect(() => {
    if (productId) fetchPerfumeData(productId);
  }, [productId, fetchPerfumeData]);

  // Like or dislike a perfume
  const likeDislike = useCallback(
    async (userVote) => {
      try {
        await axios.patch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/votePerfume`,
          {
            userId: user?._id,
            perfumeId: productId,
            userVote,
          }
        );
        router.refresh(); // Reload the page to update data
      } catch (error) {
        console.error(error);
      }
    },
    [user?._id, productId, router]
  );

  return (
    <div className="min-h-screen container mx-auto  py-6 px-4">
      <p className="text-4xl font-medium py-6 md:mb-16 mb-0 text-center">
        <h1
          className={`text-2xl md:w-[70%] md:text-left md:text-4xl font-medium ${lora.className}`}
        >
          {data?.data?.perfume?.split("for")[0]}{" "}
          <span className="text-pink-400 text-xl md:text-3xl font-normal">
            {data?.data?.perfume?.split("for").length > 1
              ? `for` + data?.data?.perfume?.split("for")[1]
              : ""}
          </span>
        </h1>
      </p>
      <div className=" gap-x-10 gap-y-14 grid lg:grid-cols-[auto_18rem]">
        <div className="grid md:grid-cols-[55%_45%]  ">
          <div className=" ">
            <div className="w-full  grid place-items-left ">
              <img
                src={data?.data?.banner}
                alt={`${data?.data?.mainImageAltAttribute}`}
                srcset=""
                loading="lazy"
              />
            </div>
            {
              <LikeDislikeComponent
                key={1}
                data={data}
                historyMap={historyMap}
                productId={productId}
                likeDislike={likeDislike}
              />
            }
          </div>

          <div className="flex flex-col items-center gap-4 ">
            <div className="  w-fit  py-6 md:py-0 size-14 px-12">
              <img
                className="w-full h-full object-contain"
                src={data?.data?.logo}
                alt={data?.data?.brandAltAttribute}
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap w-full justify-center">
              <PieChartComponent mainAccords={data?.data?.mainAccords} />
            </div>
          </div>
        </div>

        <div className=" space-y-14 hidden md:block">
          <LoginSignUp />
          {globalBanner && (
            <div className="h-[20rem]  border rounded-md overflow-hidden">
              <img
                className="h-full mx-auto"
                // src="https://img.pikbest.com/origin/06/25/40/84bpIkbEsTgk3.jpg!sw800"
                src={`${globalBanner?.item[0]?.path}`}
                loading="lazy"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      <div className=" gap-x-10 gap-y-14 grid  lg:grid-cols-[auto_18.3rem] py-8">
        <div className="space-y-8">
          <div className="grid md:grid-cols-[60%_40%] gap-y-4 md:gap-y-0">
            <div className="space-y-12 w-full flex flex-col justify-center items-center ">
              {purchaseLinks?.length > 0 && <Buyfrom links={purchaseLinks} />}
            </div>
            {data?.data?.video && <VideoBox videoD={data?.data?.video} />}
          </div>
          <Feedback />
          {/* detail start */}
          <div className="space-y-12  pt-3 ">
            <div className="text-base text-justify md:text-left text-[#6B859E]">
              {data?.data?.details}
            </div>

            <div className="relative border-t-2 pt-10 py-6">
              <div className="p-2 absolute -top-5 left-[50%] bg-white">
                <FaQuoteLeft size={20} className=" text-[#83a6c4]" />
              </div>
              <p className="text-justify md:text-left text-sm font-normal text-[#6B859E]/70">
                {data?.data?.description}
              </p>
            </div>
          </div>
          {/* detail ends */}

          {/* pros n cons */}
          {<ProsCons />}
          {/* pros n cons */}
        </div>
        <div className="hidden md:block">
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
      <div className="mt-4 md:py-14 ">
        <div className="w-full relative grid place-items-center mb-14">
          <div className="h-[2px] w-full bg-black absolute"></div>
          <h2 className="text-xl md:text-3xl font-medium bg-white px-4 z-30">
            Perfume Photos
          </h2>
        </div>
        <PerfumePhotos data={data?.data?.gallery} />
      </div>
      {/* Perfume Photos ends */}

      {/* Fragrance Notes starts */}
      <div className="mt-14">
        <div className="w-full relative grid place-items-center mb-6">
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
                    <p className="text-center font-bold text-xs md:text-base">
                      Top Notes
                    </p>
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
                                loading="lazy"
                                className="w-8 sm:w-12 h-8 sm:h-12 md:w-16 md:h-16"
                              />
                              <p className="text-xs sm:text-base md:text-lg">
                                {el.name}
                              </p>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 justify-center items-center flex-wrap">
                    <p className="text-center font-bold text-xs md:text-base">
                      Middle Notes
                    </p>
                    <div className="flex gap-3">
                      {data.data?.middleNote.map((el) => {
                        return (
                          <div
                            key={el._id}
                            className=" flex flex-col  justify-center items-center "
                          >
                            <img
                              loading="lazy"
                              src={el.image}
                              alt={el.name}
                              className="w-8 sm:w-12 h-8 sm:h-12 md:w-16 md:h-16"
                            />
                            <p className="text-xs sm:text-base md:text-lg">
                              {el.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 justify-center items-center flex-wrap">
                    <p className="text-center font-bold text-xs md:text-base">
                      Base Notes
                    </p>
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
                              loading="lazy"
                              className="w-8 sm:w-12 h-8 sm:h-12 md:w-16 md:h-16"
                            />
                            <p className="text-xs sm:text-base md:text-lg">
                              {el.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>{/* <CardsList data={perfumeReviews} /> */}</div>
        </div>
      </div>
      {/* Fragrance Notes ends */}

      {/* Releted Fragram starts */}
      <RelatedFragram country={timeZoneCountry} />
      {/* Related Fragram ends */}

      {/*Ya perfume categories starts */}
      <div className=" grid lg:grid-cols-[auto_18rem]">
        <div className="md:space-y-6 md:px-6">
          <h2 className="text-2xl md:text-3xl text-center md:text-left text-black-500 font-medium  mb-8">
            Yeah Perfume Categories
          </h2>
          <div></div>
          <div className="grid">
            <PerfumeCategorySlider
              perfumeCategories={perfumeCategories}
              timeZoneCountry={timeZoneCountry}
            />
          </div>
          {data && (
            <FragramRatings
              data={data.data?.ratingFragrams}
              country={timeZoneCountry}
            />
          )}
          <div className="grid gap-5 container ">
            <div className="grid place-items-center relative mt-12">
              <h2 className="text-xl md:text-3xl font-medium px-8 py-3 bg-white z-40">
                Rating/Results{" "}
              </h2>
              <div className="absolute w-full h-[2px] bg-slate-500"></div>
            </div>

            <RatingResult productId={productId} />
          </div>
          <div className="space-y-5">
            <AddReview />
          </div>
        </div>
        <div className="hidden md:block">
          <CardsList reviewData={sidebarReview} length={7} />
        </div>
      </div>
      {/*Ya perfume categories ends */}
    </div>
  );
};

export default ProductPage;
