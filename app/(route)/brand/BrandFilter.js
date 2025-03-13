import axios from "axios";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const BrandFilter = () => {
  const { BrandId } = useParams();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const [selectedBrand, setSelectedBrand] = useState(
    searchParams.get("BrandId")
  );
  const [brandsData, setBrandsData] = useState([]);

  const getAllBrands = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand?Limit="infinite"`
    );
    setBrandsData(result?.data?.data);
  };

  useEffect(() => {
    getAllBrands();
  }, []);

  const handleBrands = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("BrandId", term);
    } else {
      params.delete("BrandId");
    }
    // Scroll option ensures page updates without full reload
    replace(`${pathname}?${params.toString()}`, { scroll: false });
    setSidebarOpen(false); // Close the sidebar only after brand selection
  }, 300);

  return (
    <>
      <div className="relative shadow-[0px_0px_8px_0px_#00000040] rounded-[16px] w-[343px] hidden md:block">
        {/* Menu button for mobile */}
        <header className="absolute left-[-1.5rem] top-[-1.8rem]">
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
        <aside className="hidden lg:flex lg:flex-col bg-white border-r border-gray-200 h-[80vh] w-full overflow-y-auto">
          <div className="px-4 py-6 w-full">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Brands</h2>
            <ul className="space-y-2">
              {brandsData?.map((brand, idx) => (
                <li key={brand?._id}>
                  <button
                    onClick={() => {
                      setSelectedBrand(brand?._id);
                      handleBrands(brand?.slug);
                    }}
                    className={`w-full text-left px-2 py-1 rounded-md ${
                      selectedBrand === brand?._id
                        ? "bg-indigo-100 text-indigo-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {brand?.brand}
                  </button>
                </li>
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
              {/* Close button */}
              <div className="absolute top-4 right-4">
                <button
                  className="h-10 w-10 rounded-full bg-gray-600 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Sidebar content */}
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="px-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Brands
                  </h2>
                  <ul className="space-y-2">
                    {brandsData?.map((brand) => (
                      <li key={brand?._id}>
                        <button
                          onClick={() => {
                            setSelectedBrand(brand?._id);
                            handleBrands(brand?._id); // Select brand and close sidebar
                          }}
                          className={`w-full text-left px-2 py-1 rounded-md ${
                            selectedBrand === brand?._id
                              ? "bg-indigo-100 text-indigo-700"
                              : "text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {brand?.brand}
                        </button>
                      </li>
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
