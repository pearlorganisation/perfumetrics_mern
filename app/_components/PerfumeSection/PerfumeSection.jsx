async function getPerfumes() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/topRatedPerfume`,
    {
      cache: 'no-store'
    }
  )
  const data = await response.json()
  return data
}

async function getGlobalVideo() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/globalData?itemType=video`
  );
  const data = await response.json();
  console.log(data?.data[0], "globalData")
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
  const gVideo = await getGlobalVideo()

  // console.log(Array.isArray(data.data), "rwegtfuw", data);

  return (
    <>
      <div className="w-full grid lg:grid-cols-[auto_20rem] lg:gap-y-0 gap-1 gap-x-1 px-8 md:px-0 py-10">

        <div className="w-full  flex flex-col gap-4">
          <div className="grid place-items-center relative mb-8">
            <h1 className="text-lg md:text-3xl text-nowrap font-medium px-8 py-3 bg-white z-40 relative lg:left-[-11rem] w-full md:w-[20rem] text-center bottom-[.1rem]">
              Top Rated Fragrance
            </h1>
            <div className="absolute w-full h-[2px] bg-slate-500"></div>
          </div>
          {
            <ProductCards data={data}
            />
          }

        </div>
        <div className="space-y-4 mt-[6.6rem] ml-[31px] hidden md:block">
          <LoginSignUp />
          <div className="grid place-items-center border border-pink-500 h-40 overflow-hidden">

            {
              gVideo?.item && <div className="grid place-items-center relative bg-slate-100  md:h-[12rem] md:w-[90%] border overflow-hidden">

                <iframe
                  src={gVideo?.item[0]?.path}
                  width="100%"
                  height="100%"

                ></iframe>



              </div>
            }
          </div>
          <div className="w-full  flex flex-col gap-4">
            {/* <div className="border-0 border-pink-500 w-full text-center py-4">
              <span className="text-xl md:text-2xl  font-semibold ">
                Perfume Reviews
              </span>
            </div> */}
            <div className="grid place-items-center relative mb-2 mt-6">
              <h1 className="text-2xl text-nowrap font-medium bg-white z-40 relative lg:left-[0rem] w-[12rem] text-center bottom-[.1rem]"> Perfume Reviews</h1>
              <div className="absolute w-full h-[2px] bg-slate-500"></div></div>
            <CardsList reviewData={reviewSidebar} length={length} />
          </div>
        </div>

      </div>
    </>
  );
}

export default PerfumeSection;
