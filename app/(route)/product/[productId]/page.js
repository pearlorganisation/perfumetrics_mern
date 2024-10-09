async function getPerfumeById(perfumeId) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/${perfumeId}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
}

async function getPerfumeRating(perfumeId) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/review/${perfumeId}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data.data;
}
async function getProsCons(perfumeId) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/prosCons/${perfumeId}`
  );
  const data = await response.json();
  return data;
}
async function getPerfumes() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume`
  );
  const data = await response.json();
  return data;
}

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

async function getTotalRatings(perfumeId) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/productReviewCount/${perfumeId}`
  );
  const data = await response.json();
  return data;
}

// import CircularProgress from "@/app/_components/CircularProgress/CircularProgress";

import { GiFruitBowl } from "react-icons/gi";
import { FaLongArrowAltUp } from "react-icons/fa";
import ProsCons from "../_ProsCons";
import Image from "next/image";
import Review from "./Review";
import "./style.css";
import RatingResult from "@/app/_components/RatingResult/RatingResult";

import Link from "next/link";
import CardsList from "@/app/_components/CardsList/CardsList";
import ProductCards from "@/app/_components/ProductCards/ProductCards";
import Feedback from "@/app/_components/Feedback/Feedback";
import PerfumePhotos from "@/app/_components/PerfumePhotos/PerfumePhotos";
import { FaQuoteLeft } from "react-icons/fa";

import ToggleButton from "@/app/_components/ToggleButton/ToggleButton";
import PieChart from "@/app/_components/DoughnutGraph/DoughnutGraph";
import { FaFacebookF } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import RelatedFragram from "./RelatedFragram";
import FragramRatings from "./FragramRatings";
import VideoBox from "@/app/_components/VideoBox/VideoBox";
import Buyfrom from "@/app/_components/Buyfrom/Buyfrom";
import AddReview from "@/app/_components/AddReview/AddReview";
import ProductPage from "@/app/_components/ProductPage/ProductPage";

const page = async ({ params }) => {
  const { productId } = params;

  const dataProsCons = await getProsCons(productId);
  const data = await getPerfumeById(productId);
  const perfumeData = await getPerfumes();
  const perfumeRatings = await getPerfumeRating(productId);
  const totalRatings = await getTotalRatings(productId);
  const sidebarReview = await getSiderbarReviews();

  console.log(data, "data");
  console.log(totalRatings, "Ratings perfumme !!!!");
  const purchaseLinksData = data.data?.purchaseLinks;

  return (
    <>
      {/* feedback form  */}
      <ProductPage
        data={data}
        totalRatings={totalRatings}
        dataProsCons={dataProsCons}
        sidebarReview={sidebarReview}
        productId={productId}
      />
    </>
  );
};

export default page;
