import Banner from "./_components/Banner/Banner";
import Gallery from "./_components/Gallery/Gallery";
import PerfumeSection from "./_components/PerfumeSection/PerfumeSection";
import PopularBrands from "./_components/PopularBrands/PopularBrands";

export default function Home() {
  return (
    <div className="py-1 px-0">
      <Banner />
      <PopularBrands />
      <PerfumeSection />
      <Gallery />
    </div>
  );
}
