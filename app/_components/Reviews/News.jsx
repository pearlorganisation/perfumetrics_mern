"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';
import Link from "next/link";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700'],
});

const News = () => {
  const [newsData, setNewsData] = useState([])
  const [newsMapData, setNewsMapData] = useState(null)
  const getNews = async () => {
    const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/news`)
    setNewsData(result?.data?.data)
    // console.log(result?.data?.data, "result News")
  }
  useEffect(() => {
    getNews()
  }, [])
  useEffect(() => {
    if (newsData) {
      const dataMap = new Map(newsData?.map((item, index) => [index + 1, item]));
      setNewsMapData(dataMap)
    }
  }, [newsData])

  return (
    <div className={`space-y-4 ${poppins?.className}`}>
      <div class="grid place-items-center relative mb-6">
        <h1 class="text-3xl font-medium px-8 py-3 bg-white z-40">News </h1>
        <div class="absolute w-full h-[2px] bg-slate-500"></div>
      </div>
      <div className="flex justify-between  items-center text-lg md:text-4xl font-medium"></div>
      {
        newsMapData ? <Link href={`/news/${newsMapData?.get(1)?.slug}`} className="grid grid-cols-1 gap-6 py-6 pt-0">

          <div className="space-y-2 w-full ">
            <img
              className="w-full h-[18rem] md:h-[30rem] object-fit md:object-cover mt-1 mb-1"

              src={newsMapData?.get(1)?.image}
              alt=""
            />

            <div className="font-semibold mt-2 text-2xl md:text-3xl text-black">
              {newsMapData?.get(1)?.title}

            </div>
            <div className="text-[14px] font-light text-[#1777F2]">By {newsMapData?.get(1)?.user} :</div>
            <p className="line-clamp-4 text-[16px] font-normal">
              {newsMapData?.get(1)?.details}

            </p>
          </div>

        </Link> : <div class="grid grid-cols-1 gap-6 py-6 pt-0 animate-pulse">
          <div class="space-y-4 w-full">
            <div class="w-full h-[14rem] md:h-[30rem] bg-gray-200"></div>
            <div class="h-12 bg-gray-200 w-3/4"></div>
            <div class="h-6 bg-gray-200 w-1/2"></div>
            <div class="h-16 bg-gray-200 w-full"></div>
          </div>
        </div>
      }

      <div className="grid gap-6 md:grid-cols-[18rem_auto] py-6  ">
        <div className="space-y-12">
          {
            newsMapData ? <Link href={`/news/${newsMapData?.get(2)?.slug}`} className="space-y-1">
              <img
                className="w-full rounded-md h-[14rem] mt-1 mb-1 md:h-[13.5rem] object-fit md:object-cover"
                src={newsMapData?.get(2)?.image}
                alt=""
              />
              <div className="font-semibold pt-2 text-black text-xl">
                {newsMapData?.get(2)?.title}

              </div>
              <div className="text-[14px] font-light text-[#1777F2] ">{newsMapData?.get(2)?.user}</div>
              <p className="line-clamp-4 text-[16px] font-normal">
                {newsMapData?.get(2)?.details}{" "}
              </p>
            </Link> : <div class="mb-8 animate-pulse space-y-2">
              <div class="w-full rounded-md h-[13.5rem] bg-gray-200"></div>
              <div class="font-bold pt-2 text-black text-xl h-6 bg-gray-200 rounded w-3/4"></div>
              <div class="font-semibold h-4 bg-gray-200 rounded w-1/2"></div>
              <div class="font-medium h-20 bg-gray-200 rounded w-full"></div>
            </div>
          }
          {
            newsMapData ? <div className=" mt-8">
              <Link href={`/news/${newsMapData?.get(3)?.slug}`} className="mb-8 space-y-1">
                <img
                  className="w-full rounded-md h-[14rem] md:h-[13.5rem] mt-1 mb-1 object-fit md:object-cover"
                  src={newsMapData?.get(3)?.image}
                  alt=""
                />
                <div className="font-bold pt-2 text-black text-xl">
                  {newsMapData?.get(3)?.title}

                </div>
                <div className="text-[14px] font-light text-[#1777F2] "> {newsMapData?.get(3)?.user}</div>
                <p className="line-clamp-4 text-[16px] font-normal">
                  {newsMapData?.get(3)?.details}{" "}
                  {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              qui quis animi id nisi doloribus, quibusdam tenetur maiores sit
              nihil assumenda sed{" "} */}
                </p>
              </Link>
            </div> : <div class="mb-8 animate-pulse space-y-2">
              <div class="w-full rounded-md h-[13.5rem] bg-gray-200"></div>
              <div class="font-bold pt-2 text-black text-xl">
                <div class="h-4 bg-gray-200 w-3/4"></div>
              </div>
              <div class="font-semibold">
                <div class="h-4 bg-gray-200 w-1/2"></div>
              </div>
              <p class="font-medium line-clamp-4">
                <div class="h-4 bg-gray-200 mb-2 w-full"></div>
                <div class="h-4 bg-gray-200 mb-2 w-4/5"></div>
                <div class="h-4 bg-gray-200 mb-2 w-3/4"></div>
                <div class="h-4 bg-gray-200 mb-2 w-2/3"></div>
              </p>
            </div>
          }

        </div>
        {
          newsMapData ? <Link href={`/news/${newsMapData?.get(4)?.slug}`} className=" space-y-1   md:top-0 ">
            <img
              className="w-full rounded-md h-[14rem] md:h-[20rem] mt-1 mb-1 object-fit  md:object-cover"
              src={newsMapData?.get(4)?.image}
              alt=""
            />
            <div className="font-semibold text-xl"> {newsMapData?.get(4)?.title}</div>
            <div className="text-[14px] font-light text-[#1777F2]"> {newsMapData?.get(4)?.user}</div>
            <p className="line-clamp-4 text-[16px] font-normal">
              {newsMapData?.get(4)?.details}{" "}
              {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              qui quis animi id nisi doloribus, quibusdam tenetur maiores sit
              nihil assumenda sed{" "} */}
            </p>
          </Link> : <div class="animate-pulse space-y-3">
            <div class="w-full rounded-md h-80 bg-gray-200"></div>
            <div class="font-semibold text-xl h-5 bg-gray-200"></div>
            <div class="font-semibold h-5 bg-gray-200"></div>
            <div class="font-medium h-10 bg-gray-200"></div>
          </div>
        }

      </div>
      {
        newsMapData ? <Link href={`/news/${newsMapData?.get(5)?.slug}`} className="grid md:grid-cols-[40%_auto] gap-3 border-y-2 py-8   border-gray-400">
          <div>
            <div className="font-bold pt-2 text-black text-xl">
              {newsMapData?.get(5)?.title}

            </div>
            <span className="text-[14px] font-light text-[#1777F2]"> {newsMapData?.get(5)?.user}{" "}</span>
            <p className="line-clamp-4 text-[16px] font-normal">
              {newsMapData?.get(5)?.details}{" "}

            </p>
          </div>
          <img
            className="w-full  h-[14rem]  md:h-[20rem] md:mt-0 object-fit  md:object-cover "
            src={newsMapData?.get(5)?.image}
            alt=""
          />
        </Link> : <div class="animate-pulse">
          <div class="grid md:grid-cols-[40%_auto] gap-3 border-y-2 py-8 border-gray-400">
            <div>
              <div class="h-6 bg-gray-200 rounded w-1/2 my-2"></div>
              <div class="h-5 bg-gray-200 rounded w-1/3 my-2"></div>
              <div class="h-16 bg-gray-200 rounded w-full my-2"></div>
            </div>
            <div class="w-full h-[20rem] bg-gray-200 rounded"></div>
          </div>
        </div>
      }


      {/* News */}
      <div className="grid grid-cols-1 gap-6 py-6">
        {
          newsMapData ? <Link href={`/news/${newsMapData?.get(6)?.slug}`} className="space-y-1 w-full">
            <img
              className="w-full h-[14rem] md:h-[30rem] mt-1 object-fit  md:object-cover mb-3"
              src={newsMapData?.get(6)?.image}
              alt=""
            />

            <div className="font-medium text-3xl text-black ">
              {
                newsMapData?.get(6)?.title

              }
            </div>
            <div className="text-[14px] font-light text-[#1777F2]">By {
              newsMapData?.get(6)?.user

            }:</div>
            <p className="line-clamp-4 text-[16px] font-normal">
              {
                newsMapData?.get(6)?.
                  details

              }

            </p>
          </Link> : <div class="space-y-4 w-full animate-pulse">
            <div class="w-full h-[30rem] bg-gray-200"></div>
            <div class="font-medium text-3xl text-black h-12 bg-gray-200"></div>
            <div class="h-6 bg-gray-200"></div>
            <div class="line-clamp-4 h-24 bg-gray-200"></div>
          </div>
        }



      </div>
      <div className="grid grid-cols-1 gap-6 py-6">
        {
          newsMapData ? <Link href={`/news/${newsMapData?.get(7)?.slug}`} className="space-y-1 w-full">
            <img
              className="w-full h-[15rem]  md:h-[30rem] object-fit mt-1 md:object-cover mb-3"
              src={newsMapData?.get(7)?.image}
              alt=""
            />

            <div className="font-medium text-3xl text-black">

              {
                newsMapData?.get(7)?.
                  title

              }
            </div>
            <div className="text-[14px] font-light text-[#1777F2]">By
              {
                newsMapData?.get(7)?.
                  user

              }:</div>
            <p className="line-clamp-4 text-[16px] font-normal">

              {
                newsMapData?.get(7)?.
                  details

              }
            </p>
          </Link> : <div class="space-y-4 w-full animate-pulse">
            <div class="w-full h-[30rem] bg-gray-200"></div>
            <div class="font-medium text-3xl text-black h-12 bg-gray-200"></div>
            <div class="h-6 bg-gray-200"></div>
            <div class="line-clamp-4 h-24 bg-gray-200"></div>
          </div>
        }


      </div>
    </div>
  );
};

export default News;
