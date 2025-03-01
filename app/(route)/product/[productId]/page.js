async function getPerfumeById(perfumeId) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/slug/${perfumeId}`,
      {
        headers: {
          "Cache-Control": "no-cache",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log("Data Not Found !!", err);
  }
}

import { lazy, Suspense } from "react";
import "./style.css";

// import ProductPage from "@/app/_components/ProductPage/ProductPage";
import Loader from "@/app/_components/Loader/Loader";
import axios from "axios";
import ScrollToTop from "@/app/_components/ScrollToTop/ScrollToTop";
import dynamic from "next/dynamic";

// Client Components:

const ProductPage = dynamic(
  () => import("@/app/_components/ProductPage/ProductPage"),
  {
    ssr: false,
  }
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
  // const data = await getPerfumeById(productId);
  return (
    <div className="">
      <Suspense fallback={<>Loading....</>}>
        <ProductPage productId={productId} />
      </Suspense>
    </div>
  );
};

export default page;
