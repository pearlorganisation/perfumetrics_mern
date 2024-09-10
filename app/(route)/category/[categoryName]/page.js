"use client";

import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

async function PerfumeSection() {
  const { categoryName } = useParams();
  const [genderData, setGenderData] = useState([]);
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
  const getGenderData = async (productId) => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/genderPerfumes/${
        categoryName === "WOMEN'S%20STYLE" ? "female" : "male"
      }`
    );
    setGenderData(result?.data?.data);
    console.log(result?.data?.data, "genderData");
  };
  useEffect(() => {
    getGenderData();
  }, []);

  return (
    <>
      {["WOMEN'S STYLE", "MEN'S STYLE"].includes(
        categoryName.split("%20").join(" ")
      ) ? (
        <div className="container mx-auto px-4 py-10 min-h-screen">
          <div className="w-full flex flex-col gap-8">
            <div className="grid place-items-center relative mb-8">
              <h1 className="text-3xl font-medium px-6 py-2 bg-white z-40 relative  text-center bottom-[.1rem]">
                {categoryName?.split("%20")?.join(" ")}
              </h1>
              <div className="absolute w-full h-[2px] bg-slate-500"></div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {genderData?.map((item) => {
                return (
                  <Link href={`/product/${item?._id}`}>
                    <div className="group transition-all flex flex-col overflow-hidden">
                      <a
                        className="relative flex h-60 sm:h-72 md:h-80 overflow-hidden  rounded-md border-2 border-pink-400 bg-white "
                        href="#"
                      >
                        <img
                          className="absolute right-0 top-0 h-full w-full object-cover"
                          src={item?.banner}
                          alt="product image"
                        />
                      </a>
                      <div className="mt-4">
                        <a href="#">
                          <h5 className="text-center font-semibold tracking-tight text-black">
                            {item?.perfume}
                          </h5>
                        </a>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen grid place-items-center">No Data</div>
      )}
    </>
  );
}

export default PerfumeSection;
