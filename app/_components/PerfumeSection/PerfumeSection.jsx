async function getPerfumes() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/topRatedPerfume`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch perfumes:", error);
    throw error;
  }
}

async function getGlobalVideo() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/globalData?itemType=video`
  );
  const data = await response.json();
  // console.log(data?.data[0], "globalData")
  return data?.data[0];
}

import Link from "next/link";
import CardsList from "../CardsList/CardsList";
import ProductCards from "../ProductCards/ProductCards";
import { FaFacebookF } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import LoginSignUp from "../LoginSignUp/LoginSignUp";

async function PerfumeSection({ reviewSidebar, length }) {
  const data = await getPerfumes();
  const gVideo = await getGlobalVideo();

  // console.log(Array.isArray(data.data), "rwegtfuw", data);

  return (
    <>
      <div className="w-full grid  lg:gap-y-0 gap-8 px-8 md:px-0 py-10">
        <div className="w-full  flex flex-col gap-4">
          <div className="grid place-items-center relative mb-8">
            <h1 className="text-lg md:text-[36px] text-nowrap font-bold px-8 py-3 bg-white z-40 relative   text-center ">
              Top Rated Fragrance
            </h1>
            <div className="absolute w-full h-[2px] "></div>
          </div>
          {<ProductCards data={data} />}
        </div>

      </div>
    </>
  );
}

export default PerfumeSection;
