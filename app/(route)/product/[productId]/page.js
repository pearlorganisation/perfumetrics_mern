async function getAllPerfume() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume`,
    {
      cache: "no-cache",
    }
  );
  const data = await response.json();
  return data;
}
async function getPerfumeById(perfumeId) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/slug/${perfumeId}`,
      {
        cache: "no-cache",
      }
    );

    if (!response.ok) {
      throw new Error("Data Not Found");
    }
    const data = await response.json();

    return data;
  } catch (err) {
    // throw new Error("Data Not Found");
    console.log("Data Not Found !!");
  }
}
async function getPerfumeBySlug(slug) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/slug?slug=${slug || ""}`,
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
import chalk from "chalk";
import ScrollToTop from "@/app/_components/ScrollToTop/ScrollToTop";

// Client Components:

const ProductPage = lazy(() =>
  import("@/app/_components/ProductPage/ProductPage")
);

export async function generateMetadata({ params }) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await getPerfumeById(params?.productId);

    if (!res || !res.data || Object.keys(res.data).length === 0) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };
    }

    const { perfume, details, banner, slug, gallery, keywords } = res.data;

    const gallerImages =
      gallery.length == 0 ? [] : gallery?.map((img) => img.path);

    return {
      metadataBase: new URL(`${baseUrl}`),
      alternates: {
        canonical: `${baseUrl}/api/v1/perfume/${slug}`,
        languages: {
          "en-US": "/en-US",
          "de-DE": "/de-DE",
        },
      },
      title: perfume || "Perfume Details",
      description: details || "Explore our collection of exclusive perfumes.",
      keywords:
        keywords?.toString()?.replace(/,/g, " ") ||
        "Something Went Wrong With Keywords !!",
      openGraph: {
        title: perfume || "Perfume Details",
        description: details || "Explore our collection of exclusive perfumes.",
        images: [banner, ...gallerImages] || [],
      },
    };
  } catch (err) {
    console.error("Error Occurred in Metadata Generation:", err);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }
}

const page = async ({ params }) => {
  const { productId } = params;

  const dataProsCons = await getProsCons(productId);
  const data = await getPerfumeById(productId);

  const sidebarReview = await getSiderbarReviews();

  return (
    <>
      {/* feedback form  */}
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="">
            {" "}
            <Loader />
          </div>
        }
      >
        {data && (
          <ProductPage
            data={data}
            dataProsCons={dataProsCons}
            sidebarReview={sidebarReview}
            productId={productId}
          />
        )}
      </Suspense>
    </>
  );
};

export default page;
