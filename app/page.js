import Banner from "./_components/Banner/Banner";
import BestPerfumes from "./_components/BestPerfumes/BestPerfumes";
import BestSale from "./_components/BestSale/BestSale";
import Gallery from "./_components/Gallery/Gallery";
import News from "./_components/News/News";
import PerfumeSection from "./_components/PerfumeSection/PerfumeSection";
import PopularBrands from "./_components/PopularBrands/PopularBrands";
import Reviews from "./_components/Reviews/Reviews";


export default function Home() {
  return (
    <div className="py-1 px-0">
      <Banner />
      <div className="flex justify-center ">
        <div className="container mx-auto ">
          <PopularBrands />
          <PerfumeSection />
          <Gallery />
          <Reviews />
          <BestSale />
          {/* <News /> */}
          {/* <BestPerfumes /> */}
        </div>
      </div>
    </div>
  );
}
