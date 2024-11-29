async function getPerfumeById(perfumeId) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/${perfumeId}`,
    {
      cache: "no-cache",
    }
  );
  const data = await response.json();

  return data;
}

async function getProsCons(perfumeId) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/prosCons/${perfumeId}`,
    {
      cache: "no-cache",
    }
  );
  const data = await response.json();
  return data;
}

async function getSiderbarReviews() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviewsSidebar`,
    {
      cache: "no-cache",
    }
  );
  const data = await response.json();
  // console.log(data, "sidebar Review")
  return data?.data;
}

import { lazy, Suspense } from "react";
import "./style.css";

// import ProductPage from "@/app/_components/ProductPage/ProductPage";
import dynamic from "next/dynamic";
import Loader from "@/app/_components/Loader/Loader";

// Client Components:

const ProductPage = lazy(() =>
  import("@/app/_components/ProductPage/ProductPage")
);

const page = async ({ params }) => {
  const { productId } = params;

  const dataProsCons = await getProsCons(productId);
  const data = await getPerfumeById(productId);

  const sidebarReview = await getSiderbarReviews();

  console.log(data, "data");
  // console.log(totalRatings, "Ratings perfumme !!!!");

  return (
    <>
      {/* feedback form  */}
      <Suspense
        fallback={
          <div className="">
            {" "}
            <Loader />
          </div>
        }
      >
        <ProductPage
          data={data}
          dataProsCons={dataProsCons}
          sidebarReview={sidebarReview}
          productId={productId}
        />
      </Suspense>
    </>
  );
};

export default page;
