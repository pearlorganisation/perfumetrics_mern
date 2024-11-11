"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';
import Link from "next/link";

const News = () => {
  const [newsData, setNewsData] = useState([])
  const [newsMapData, setNewsMapData] = useState(null)
  const getNews = async () => {
    const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/news`)
    setNewsData(result?.data?.data)
    console.log(result?.data?.data, "result News")
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
    <div className="space-y-4">
      <div className="grid place-items-center relative mb-6">
        <h1 className="text-3xl font-medium px-8 py-3 bg-white z-40">News </h1>
        <div className="absolute w-full h-[2px] bg-slate-500"></div>
      </div>
      <div className="flex justify-between items-center text-lg md:text-4xl font-medium"></div>
      <Link href={`/news/${newsMapData?.get(1)?._id}`} className="grid grid-cols-1 gap-6 py-6 pt-0">

        <div className="space-y-4 w-full">
          <img
            className="w-full h-[30rem] object-cover"

            src={newsMapData?.get(1)?.image || 'https://plus.unsplash.com/premium_photo-1661490025820-ce090e391627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkzfHxwZXJmdW1lfGVufDB8fDB8fHww'}
            alt=""
          />

          <div className="font-medium text-3xl text-black">
            {newsMapData?.get(1)?.title}

          </div>
          <div className="font-medium">By {newsMapData?.get(1)?.user} :</div>
          <p className="line-clamp-4">
            {newsMapData?.get(1)?.details}
            {/* {
                    parse(newsMapData?.get(1)?.description || '')
                  } */}
            {/* Let’s get the bad news over with first. The moment a brand
                  exists, sustainability no longer exists. Even at its most
                  responsible, a brand creates waste in some form. And if anyone
                  harps about your carbon footprint—just a friendly reminder
                  that it’s a term coined by the marketing division of British
                  Petroleum, placing the blame of environmental damage on
                  consumers and not the companies drilling for fossil fuel. And
                  if anyone harps about your carbon footprint—just a friendly
                  reminder that it’s a term coined by the marketing division of
                  British Petroleum, placing the blame of environmental damage
                  on consumers and not the companies drilling for fossil
                  fuel. blame of environmental damage on consumers and not the
                  companies drilling for fossil fuel. */}
          </p>
        </div>

      </Link>
      <div className="grid gap-6 md:grid-cols-[18rem_auto] py-6 ">
        <div>
          <Link href={`/news/${newsMapData?.get(2)?._id}`} className="mb-8">
            <img
              className="w-full rounded-md h-[13.5rem]"
              src={newsMapData?.get(2)?.image || 'https://plus.unsplash.com/premium_photo-1661490025820-ce090e391627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkzfHxwZXJmdW1lfGVufDB8fDB8fHww'}
              alt=""
            />
            <div className="font-bold pt-2 text-black text-xl">
              {newsMapData?.get(2)?.title}

            </div>
            <div className="font-semibold ">{newsMapData?.get(2)?.user}</div>
            <p className="font-medium line-clamp-4">
              {newsMapData?.get(2)?.details}{" "}
            </p>
          </Link>
          <Link href={`/news/${newsMapData?.get(3)?._id}`} className="mb-8">
            <img
              className="w-full rounded-md h-[13.5rem]"
              src={newsMapData?.get(3)?.image || 'https://plus.unsplash.com/premium_photo-1661490025820-ce090e391627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkzfHxwZXJmdW1lfGVufDB8fDB8fHww'}
              alt=""
            />
            <div className="font-bold pt-2 text-black text-xl">
              {newsMapData?.get(3)?.title}

            </div>
            <div className="font-semibold "> {newsMapData?.get(3)?.user}</div>
            <p className="font-medium line-clamp-4">
              {newsMapData?.get(3)?.details}{" "}
              {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              qui quis animi id nisi doloribus, quibusdam tenetur maiores sit
              nihil assumenda sed{" "} */}
            </p>
          </Link>
        </div>
        <Link href={`/news/${newsMapData?.get(4)?._id}`} className=" space-y-3">
          <img
            className="w-full rounded-md h-[20rem]"
            src={newsMapData?.get(4)?.image || 'https://plus.unsplash.com/premium_photo-1661490025820-ce090e391627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkzfHxwZXJmdW1lfGVufDB8fDB8fHww'}
            alt=""
          />
          <div className="font-semibold text-xl"> {newsMapData?.get(4)?.title}</div>
          <div className="font-semibold"> {newsMapData?.get(4)?.user}</div>
          <p className="font-medium line-clamp-3">
            {newsMapData?.get(4)?.details}{" "}
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              qui quis animi id nisi doloribus, quibusdam tenetur maiores sit
              nihil assumenda sed{" "} */}
          </p>
        </Link>
      </div>
      <Link href={`/news/${newsMapData?.get(5)?._id}`} className="grid md:grid-cols-[40%_auto] gap-3 border-y-2 py-8 border-gray-400">
        <div>
          <div className="font-bold pt-2 text-black text-xl">
            {newsMapData?.get(5)?.title}

          </div>
          <span className="font-semibold text-lg"> {newsMapData?.get(5)?.user}{" "}</span>
          <p className="font-medium line-clamp-4">
            {newsMapData?.get(5)?.details}{" "}
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              qui quis animi id nisi doloribus, quibusdam tenetur maiores sit
              nihil assumenda sed{" "} */}
          </p>
        </div>
        <img
          className="w-full h-[20rem] object-cover"
          src={newsMapData?.get(5)?.image || 'https://plus.unsplash.com/premium_photo-1661490025820-ce090e391627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkzfHxwZXJmdW1lfGVufDB8fDB8fHww'}
          alt=""
        />
      </Link>

      {/* News */}
      <div className="grid grid-cols-1 gap-6 py-6">


        <Link href={`/news/${newsMapData?.get(6)?._id}`} className="space-y-4 w-full">
          <img
            className="w-full h-[30rem] object-cover"
            src={newsMapData?.get(6)?.image || 'https://plus.unsplash.com/premium_photo-1661490025820-ce090e391627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkzfHxwZXJmdW1lfGVufDB8fDB8fHww'}
            alt=""
          />

          <div className="font-medium text-3xl text-black ">
            {
              newsMapData?.get(6)?.title

            }
          </div>
          <div className="font-medium">By {
            newsMapData?.get(6)?.user

          }:</div>
          <p className="line-clamp-4">
            {
              newsMapData?.get(6)?.
                details

            }

          </p>
        </Link>

      </div>
      <div className="grid grid-cols-1 gap-6 py-6">

        <Link href={`/news/${newsMapData?.get(7)?._id}`} className="space-y-4 w-full">
          <img
            className="w-full h-[30rem] object-cover"
            src={newsMapData?.get(7)?.image || 'https://plus.unsplash.com/premium_photo-1661490025820-ce090e391627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkzfHxwZXJmdW1lfGVufDB8fDB8fHww'}
            alt=""
          />

          <div className="font-medium text-3xl text-black">

            {
              newsMapData?.get(7)?.
                title

            }
          </div>
          <div className="font-medium">By
            {
              newsMapData?.get(7)?.
                user

            }:</div>
          <p className="line-clamp-4">

            {
              newsMapData?.get(7)?.
                details

            }
          </p>
        </Link>

      </div>
    </div>
  );
};

export default News;
