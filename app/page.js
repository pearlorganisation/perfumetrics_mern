async function getSiderbarReviews() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviewsSidebar`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  // console.log(data, "sidebar Review")
  return data?.data;
}
async function getGlobalVideo() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/globalData?itemType=video`
  );
  const data = await response.json();
  // console.log(data?.data[0], "globalData")
  return data?.data[0];
}

import Banner from "./_components/Banner/Banner";
import BestPerfumes from "./_components/BestPerfumes/BestPerfumes";
import BestSale from "./_components/BestSale/BestSale";
import CardsList from "./_components/CardsList/CardsList";
import Gallery from "./_components/Gallery/Gallery";
import LoginSignUp from "./_components/LoginSignUp/LoginSignUp";
import PerfumeSection from "./_components/PerfumeSection/PerfumeSection";
import PopularBrands from "./_components/PopularBrands/PopularBrands";
import Reviews from "./_components/Reviews/Reviews";

export default async function Home() {
  const sidebarReview = await getSiderbarReviews();
  const gVideo = await getGlobalVideo();

  return (
    <div className="py-1 px-0">
      <Banner />
      <div className="">
        <div className="">
          <PopularBrands />
          <div className="min-h-screen md:mx-auto md:py-6 md:px-4 2xl:w-[1200px] xl:w-[1024px]">
            <div className="w-full grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-[auto_20rem]  gap-8 ">
              <div>
                <PerfumeSection length={7} reviewSidebar={sidebarReview} />
                <Gallery />
                <Reviews length={14} reviewSidebar={sidebarReview} />
                <BestSale />
              </div>
              <div className="space-y-5 hidden md:block">
                <div className="space-y-4 mt-[8.9rem]  hidden md:block">
                  <LoginSignUp />
                  <div className="grid place-items-center border border-pink-500 h-40 overflow-hidden">
                    {gVideo?.item && (
                      <div className="grid place-items-center relative bg-slate-100  md:h-[12rem] md:w-[90%] border overflow-hidden">
                        <iframe
                          src={gVideo?.item[0]?.path || "IMNVALID"}
                          width="100%"
                          height="100%"
                        ></iframe>
                      </div>
                    )}
                  </div>
                  <div className="w-full  flex flex-col gap-4"></div>
                </div>
                <div className=" w-full text-left flex justify-between">
                  <h2 className="text-xl md:text-[18px]  font-medium pl-1 ">
                    Perfume Reviews
                  </h2>
                  <button
                    className="font-medium text-[14px] text-[#EA92B6]"
                    type="button"
                  >
                    Write a Review
                  </button>
                </div>
                <CardsList reviewData={sidebarReview} length={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
