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
import Gallery from "./_components/Gallery/Gallery";
import News from "./_components/News/News";
import PerfumeSection from "./_components/PerfumeSection/PerfumeSection";
import PopularBrands from "./_components/PopularBrands/PopularBrands";
import Reviews from "./_components/Reviews/Reviews";

export default async function Home() {
  const sidebarReview = await getSiderbarReviews();

  return (
    <div className="py-0 px-0">
      <Banner />
      <div className="flex justify-center ">
        <div className="container mx-auto ">
          <PopularBrands />
          <PerfumeSection length={7} reviewSidebar={sidebarReview} />
          <Gallery />
          <Reviews length={14} reviewSidebar={sidebarReview} />
          <BestSale />
          {/* <News /> */}
          {/* <BestPerfumes /> */}
        </div>
      </div>
    </div>
  );
}
