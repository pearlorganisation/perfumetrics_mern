"use client";

import Pagination from "@/app/_components/Pagination/Pagination";
import axios from "axios";
import Link from "next/link";

import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import {
  usePathname,
  useRouter,
  useParams,
  useSearchParams,
} from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

function PerfumeSection() {
  const { categoryName } = useParams();
  const [genderData, setGenderData] = useState([]);

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  const getGenderData = async (productId) => {
    const p = searchParams.get("page");
    const q = searchParams.get("query");
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/genderPerfumes/${
        categoryName === "WOMEN'S%20STYLE" ? "female" : "male"
      }?Page=${p || 1}&Search=${q || ""}&Limit=8&Select=banner perfume`
    );
    setGenderData(result?.data);
    console.log(result?.data, "genderData");
  };
  useEffect(() => {
    getGenderData();
  }, [searchParams]);

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
            <header className="mb-8">
              <div className="relative">
                <input
                  onChange={(e) => handleSearch(e.target.value)}
                  type="text"
                  placeholder="Search perfumes..."
                  className="w-full p-2 pl-10 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <BiSearch className="absolute left-3 top-2.5 text-gray-400" />
              </div>
            </header>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array.isArray(genderData?.data) &&
              genderData?.data?.length > 0 ? (
                genderData?.data?.map((item) => {
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
                <div className="text-xl text-center w-full col-span-4">
                  No Data Found
                </div>
              )}
            </div>
          </div>
          <Pagination totalPages={genderData?.totalPage} />
        </div>
      ) : (
        <div className="min-h-screen grid place-items-center">No Data</div>
      )}
    </>
  );
}

export default PerfumeSection;
