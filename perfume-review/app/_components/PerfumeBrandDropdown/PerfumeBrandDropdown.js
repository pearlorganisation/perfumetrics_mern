import React, { useEffect, useState } from "react";

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [perfumeBrands, setPerfumeBrands] = useState([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (brand) => {
    setSelectedBrand(brand);
    setIsOpen(false);
  };

  async function getBrands() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand`
    );
    const data = await response.json();
    setPerfumeBrands(data?.data);
    console.log(data, "data");
    return data;
  }

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div className=" inline-block text-left ">
      <button
        className="hover:text-pink-500 cursor-pointer transition duration-300"
        onClick={handleToggle}
      >
        {selectedBrand ? selectedBrand : "PERFUMES"}
      </button>
      {isOpen && (
        <div className="absolute left-0 -bottom-[20.1rem] h-[20rem] overflow-auto bg-white shadow-lg w-full z-10 border-t-2">
          <div className="grid grid-cols-6 gap-4">
            {perfumeBrands.map((brand) => (
              <button
                key={brand.id}
                className="block w-full text-base text-left py-2 px-4 text-gray-800 hover:bg-gray-100"
                onClick={() => handleSelect("PERFUMES")}
              >
                {brand.brand}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
