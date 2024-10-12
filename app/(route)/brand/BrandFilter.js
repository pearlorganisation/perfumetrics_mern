import axios from "axios";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";

const BrandFilter = () => {
  const { brandId } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
      <div className="relative">
        <header className=" absolute left-[-1.5rem] top-[-3.8rem]">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </header>
        {/* Sidebar for desktop */}
        <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r border-gray-200 h-[80vh]  overflow-y-auto">
          <div className="px-4 py-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Brands</h2>
            <ul className="space-y-2 ">
              {brandsData?.map((brand) => (
                <Link href={`/brand/${brand?.brand}`} scroll={false}>
                  <li key={brand}>
                    <button
                      // onClick={() => setSelectedBrand(brand)}
                      className={`w-full text-left px-2 py-1 rounded-md ${
                        selectedBrand === brand?.brand
                          ? "bg-indigo-100 text-indigo-700"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {brand?.brand}
                    </button>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </aside>

        {/* Sidebar for mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 flex z-40 lg:hidden">
            <div
              className="fixed inset-0 bg-gray-600 bg-opacity-75"
              aria-hidden="true"
              onClick={() => setSidebarOpen(false)}
            ></div>
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <X className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="px-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Brands
                  </h2>
                  <ul className="space-y-2">
                    {brandsData?.map((brand) => (
                      <Link href={`/brand/${brand?.brand}`} scroll={false}>
                        <li key={brand}>
                          <button
                            onClick={() => {
                              // setSelectedBrand(brand);
                              setSidebarOpen(false);
                            }}
                            className={`w-full text-left px-2 py-1 rounded-md ${
                              selectedBrand === brand?.brand
                                ? "bg-indigo-100 text-indigo-700"
                                : "text-gray-600 hover:bg-gray-100"
                            }`}
                          >
                            {brand?.brand}
                          </button>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default memo(BrandFilter);
