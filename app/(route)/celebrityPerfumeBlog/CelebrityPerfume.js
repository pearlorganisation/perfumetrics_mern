"use client";

import Image from "next/image";
import parse from "html-react-parser";
import CardsList from "@/app/_components/CardsList/CardsList";
import { RiFacebookBoxFill } from "react-icons/ri";
import Link from "next/link";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";

export default function CelebrityPerfume() {
  const params = useParams();
  const [newsData, setNewsData] = useState({});
  const [sideBarData, setSideBarData] = useState({});
  const [newsLoading, setNewsLoading] = useState(false);
  const [sideBarLoading, setSideBarLoading] = useState(false);

  const getSingleNews = async () => {
    setNewsLoading(true);
    try {
      const post = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/celebrityPerfumes/${params.celebrityPerfumeId}`
      );
      setNewsData(post?.data);
      setNewsLoading(false);
    } catch (error) {
      // console.log(error);
      setNewsLoading(false);
    }
  };
  async function getSiderbarReviews() {
    setSideBarLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviewsSidebar`
      );
      setSideBarData(response?.data?.data);
      setSideBarLoading(false);
    } catch (error) {
      // console.log(error);
      setSideBarLoading(false);
    }
  }

  useEffect(() => {
    getSingleNews();
    getSiderbarReviews();
  }, []);
  // useEffect(() => {
  //   console.log(newsData, "sideBarData");
  //   console.log(sideBarData, "sideBarData");
  // }, [newsData, sideBarData]);

  function formatDate(isoDateString) {
    const date = new Date(isoDateString);
    date.setDate(date.getDate() + 1);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  const myRef = useRef(null);
  const btnRef = useRef(null);
  useEffect(() => {
    btnRef?.current?.click();
    console.log("clicked");
  }, []);

  return (
    <div ref={myRef} className="min-h-screen py-4 px-2 lg:px-0">
      {/* Blog Post */}
      <div className="container mx-auto grid lg:grid-cols-[auto_20rem] gap-4">
        <div className="font-bold text-3xl lg:text-4xl leading-[3rem] lg:leading-[4rem] mb-4 pl-4 lg:col-span-2">
          Celebrity Perfume Blog
        </div>
        {newsLoading ? (
          <div class="animate-pulse grid grid-cols-1 gap-6 py-6 pt-0">
            <div class="space-y-4 w-full">
              <div class="w-full h-[30rem] bg-gray-200"></div>
              <div class="h-6 bg-gray-200 w-3/5"></div>
              <div class="h-4 bg-gray-200 w-1/2"></div>
              <div class="h-16 bg-gray-200"></div>
            </div>
          </div>
        ) : (
          <main className="bg-white rounded-lg p-4 text-wrap">
            <article>
              <Image
                src={newsData?.data?.banner}
                width={400}
                height={400}
                alt={newsData?.data?.imageAttribute}
                className="w-fit lg:max-w-4xl  lg:h-[30rem] rounded-lg mb-6 object-contain"
              />
              <h2 className="text-2xl font-bold mb-4">
                {newsData?.data?.title}
              </h2>
              <p className="text-gray-600 mb-2">
                By <span className="font-semibold">{newsData?.data?.user}</span>{" "}
                on{" "}
                <span className="text-gray-400">
                  {formatDate(newsData?.data?.updatedAt)}
                </span>
              </p>
              <h1 className="text-gray-500">Description :</h1>
              <p className="mb-4 font-medium">{newsData?.data?.details}</p>
            </article>

            <section className="bg-gray-50 rounded-lg ">
              <div className="text-wrap">
                {parse(newsData?.data?.content || "")}
              </div>
            </section>
          </main>
        )}

        <aside className="lg:col-start-2">
          <div className="max-w-xs lg:max-w-full bg-white rounded-lg p-4 text-center mx-auto lg:mx-0 mb-4">
            <h2 className="text-lg font-semibold mb-2">Perfume Encyclopedia</h2>
            <div className="border-t border-b py-2 text-left">
              <p className="text-sm">
                Perfumes: <span className="font-bold">97,158</span>
              </p>
              <p className="text-sm">
                Fragrance Reviews: <span className="font-bold">1,901,166</span>
              </p>
              <p className="text-sm">
                Perfume lovers: <span className="font-bold">1,361,339</span>
              </p>
            </div>

            <div className="flex justify-around mt-4 gap-2">
              <Link
                href="/login"
                className="px-4 grid place-items-center bg-teal-600 text-white rounded hover:bg-teal-700 w-full text-center"
              >
                Log in
              </Link>
              <button
                className="border-2 p-1 invisible rounded w-full flex justify-center items-center"
                type="button"
              >
                <div className="bg-[#4267B2] rounded-sm text-base font-medium px-2 py-[0.15rem] text-white flex items-center">
                  <RiFacebookBoxFill className="text-lg mr-1" /> Login
                </div>
              </button>
              <Link
                href="/signUp"
                className="px-4 grid place-items-center bg-teal-600 text-white rounded hover:bg-teal-700 w-full text-center"
              >
                Register
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-col gap-5">
            <div className="w-full text-center py-4 relative grid place-items-center">
              <hr className="border absolute w-full" />
              <div className="text-xl md:text-2xl font-semibold bg-white z-10 px-3">
                Perfume Reviews
              </div>
            </div>
            <CardsList reviewData={sideBarData} length={14} bg="white" />
          </div>
        </aside>
      </div>
      <button
        className="hidden"
        ref={btnRef}
        onClick={() => myRef.current?.scrollIntoView()}
      >
        Jump to My Section
      </button>
    </div>
  );
}
