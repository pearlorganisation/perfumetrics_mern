"use client";

import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

async function PerfumeSection() {
  const { brandId } = useParams();
  const [brandsPerfume, setBrandsPerfume] = useState([]);

  const getBrandsPerfumes = async (brandName) => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand/single/${brandName}`
    );
    setBrandsPerfume(result?.data);
    console.log(result?.data, "brandsPerfume");
  };
  useEffect(() => {
    getBrandsPerfumes(brandId);
  }, [brandId]);

  return (
    <div className="container mx-auto py-5 min-h-screen">
      <div className="">
        <div className="grid place-items-center relative mb-8">
          <h1 className="text-3xl font-medium px-6 py-2 bg-white z-40 relative  text-center bottom-[.1rem]">
            {brandId?.split("%20").join(" ")}
          </h1>
          <div className="absolute w-full h-[2px] bg-slate-500"></div>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {brandsPerfume.length > 0 ? (
          brandsPerfume?.map((item) => {
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
          })
        ) : (
          <div className="text-center  w-full col-span-4">No Data Found</div>
        )}
      </div>
    </div>
  );
}

export default PerfumeSection;
