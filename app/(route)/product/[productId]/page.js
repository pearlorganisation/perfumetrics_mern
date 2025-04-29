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

const getComments = async (perfumeId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/comment/${perfumeId}`,
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
  const data = await response.json();

  return data ? data : null;
};

import { lazy, Suspense } from "react";
import "./style.css";

// import ProductPage from "@/app/_components/ProductPage/ProductPage";
import axios from "axios";
import dynamic from "next/dynamic";
import { load } from "cheerio";
const ProductPage = dynamic(
  () => import("@/app/_components/ProductPage/ProductPage"),
  {
    ssr: false,
  }
);

export async function generateMetadata({ params }) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
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
        canonical: `${baseUrl}/product/${slug}`,
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

  const {
    perfume,
    details,
    brand,
    banner,
    mapOfLinks,
    ratingFragrams,
    _id: perfumeId,
  } = res.data;
  const { data: commentsDataRes } = await getComments(perfumeId);
  let offerToInclude = [];

  if (mapOfLinks?.US && mapOfLinks.US?.length > 0) {
    offerToInclude = mapOfLinks.US.map((curr) => {
      return {
        "@type": "Offer",
        priceCurrency: "US",
        price: curr?.price,
        image: curr?.company?.imageUrl,
        url: curr?.link,
      };
    });
  }

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
    offers: offerToInclude,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingFragrams?.overall || 4,
    },
  };

  const commentsDataSchema = {
    comments:
      commentsDataRes?.map((el) => {
        return {
          "@type": "Comment",
          author: {
            "@type": "Person",
            name: el?.userId?.userName || el?.title || "Anonymous", // Use dynamic name
          },
          datePublished: el?.datePublished || new Date().toISOString(), // Use actual date
          text: el?.description || "No comment text provided.", // Use actual comment
        };
      }) || [],
  };

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(commentsDataSchema),
          }}
        />
      </head>

      <Suspense fallback={<>Loading....</>}>
        <ProductPage productId={productId} />
      </Suspense>
    </>
  );
};

export default page;
