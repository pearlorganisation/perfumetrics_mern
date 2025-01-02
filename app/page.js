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

import Banner from "./_components/Banner/Banner";
import BestPerfumes from "./_components/BestPerfumes/BestPerfumes";
import BestSale from "./_components/BestSale/BestSale";
import CardsList from "./_components/CardsList/CardsList";
import Gallery from "./_components/Gallery/Gallery";
import News from "./_components/News/News";
import PerfumeSection from "./_components/PerfumeSection/PerfumeSection";
import PopularBrands from "./_components/PopularBrands/PopularBrands";
import Reviews from "./_components/Reviews/Reviews";

export default async function Home() {
  const sidebarReview = await getSiderbarReviews();

  return (
    <div className="py-1 px-0">
      <Banner />
      <div className="flex justify-center ">
        <div className="lg:w-[55% container mx-auto ">
          <PopularBrands />
          <PerfumeSection length={7} reviewSidebar={sidebarReview} />
          <div className="w-full grid lg:grid-cols-[auto_20rem] ">
            <div>
              <Gallery />
              <Reviews length={14} reviewSidebar={sidebarReview} />
              <BestSale />
            </div>
            <div className="space-y-5 hidden md:block">
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
  );
}
