async function getPerfumeById(perfumeId) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/slug/${perfumeId}`,
      {
        headers: {
          "Cache-Control": "no-store",
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
import axios from "axios";
import ScrollToTop from "@/app/_components/ScrollToTop/ScrollToTop";
import dynamic from "next/dynamic";
import Head from "next/head";
import { load } from "cheerio";
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
      description:
        load(details)?.text() ||
        "Explore our collection of exclusive perfumes.",
      keywords:
        keywords?.toString()?.replace(/,/g, " ") ||
        "Something Went Wrong With Keywords !!",
      openGraph: {
        title: perfume || "Perfume Details",
        description:
          load(details)?.text() ||
          "Explore our collection of exclusive perfumes.",
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

const page = async ({ params, metadata }) => {
  const { productId } = params;
  const res = await getPerfumeById(params?.productId);
  const { perfume, details, brand, banner } = res.data;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: perfume,
    image: banner,
    description: load(details)?.text(),
    brand: {
      "@type": "Brand",
      name: brand?.brand || "Brand Not Found",
    },
  };

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>

      <Suspense fallback={<>Loading....</>}>
        <ProductPage productId={productId} />
      </Suspense>
    </>
  );
};

export default page;
