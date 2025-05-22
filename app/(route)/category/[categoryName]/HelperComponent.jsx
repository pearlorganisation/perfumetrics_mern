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
import Dummy from "./Dummy";

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
    const brandId = searchParams.get("BrandId");
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/genderPerfumes/${
        categoryName === "WOMEN'S%20STYLE" ? "female" : "male"
      }?Page=${p || 1}&Search=${
        q || ""
      }&Limit=10&Select=banner slug perfume updatedAt ${
        brandId ? `&Slug=${brandId}` : ""
      }`
    );
    setGenderData(result?.data);
    // console.log(result?.data, "genderData");
  };
  useEffect(() => {
    getGenderData();
  }, [searchParams]);

  return true ? (
    <>
      {["WOMEN'S-STYLE", "MEN'S-STYLE"].includes(
        categoryName.split("%20").join(" ")
      ) ? (
        <div className=" px-4 py-10 min-h-screen">
          <Dummy
            gender={categoryName?.split("%20")?.join(" ")}
            data={genderData?.data}
            totalPages={genderData?.totalPage}
          />
        </div>
      ) : (
        <div className="min-h-screen grid place-items-center">No Data</div>
      )}
    </>
  ) : (
    <>
      <Dummy
        gender={categoryName?.split("%20")?.join(" ")}
        data={genderData?.data}
      />
    </>
  );
}

export default PerfumeSection;
