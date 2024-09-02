async function getPerfumes() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
}

import Link from "next/link";

import { FaFacebookF } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import CardsList from "@/app/_components/CardsList/CardsList";
import ProductCards from "@/app/_components/ProductCards/ProductCards";

async function PerfumeSection({ params }) {
  console.log(params, "params");
  const topPerfumes = [
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.75909.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.63832.jpg",
      title: "Delina La Rosée Parfums de Marly for women",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.6458.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },

    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.90689.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.2355.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.35456.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.2355.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.75909.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.63832.jpg",
      title: "Delina La Rosée Parfums de Marly for women",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.6458.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
  ];

  const data = await getPerfumes();
  console.log(Array.isArray(data.data));

  return (
    <>
      {["WOMEN'S STYLE", "MEN'S STYLE"].includes(
        params?.categoryName.split("%20").join(" ")
      ) ? (
        <div className="w-full  container mx-auto lg:gap-y-0 gap-1 gap-x-1 px-8 md:px-0 py-10">
          <div className="w-full  flex flex-col gap-4">
            <div class="grid place-items-center relative mb-8">
              <h1 class="text-3xl font-medium px-8 py-3 bg-white z-40 relative lg:left-[-11rem] w-[20rem] text-center bottom-[.1rem]">
                {params?.categoryName?.split("%20")?.join(" ")}
              </h1>
              <div class="absolute w-full h-[2px] bg-slate-500"></div>
            </div>
            <ProductCards
              // data={data?.data}
              data={topPerfumes}
            />
          </div>
        </div>
      ) : (
        <div className="min-h-screen grid place-items-center">No Data</div>
      )}
    </>
  );
}

export default PerfumeSection;
