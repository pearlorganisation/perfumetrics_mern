import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const BrandFilter = () => {
  const { brandId } = useParams();
  const [selectedBrand, setSelectedBrand] = useState(
    brandId?.split("%20").join(" ")
  );
  const [brandsData, setBrandsData] = useState([]);
  const getAllBrands = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand?Limit="infinite"`
    );
    setBrandsData(result?.data?.data);
    console.log(result?.data, "brands");
  };
  useEffect(() => {
    getAllBrands();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">
          {selectedBrand ? `${selectedBrand} Perfumes` : "All Perfumes"}
        </h2>
        {/* <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6" />
      ) : (
        <Moon className="h-6 w-6" />
      )}
    </button> */}
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {brandsData?.map((brand) => (
          <Link href={`/brand/${brand?.brand}`} scroll={false}>
            <button
              key={brand?.brand}
              //   onClick={() =>
              //     setSelectedBrand(
              //       brand?.brand === selectedBrand ? null : brand?.brand
              //     )
              //   }
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                selectedBrand === brand?.brand
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900"
              }`}
            >
              {brand?.brand}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BrandFilter;
