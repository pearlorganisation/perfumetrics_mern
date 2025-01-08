"use client";

import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function BrandSlider() {
  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [startTouchX, setStartTouchX] = useState(0);

  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
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

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 100);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    checkScroll();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Add touch event handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartTouchX(e.touches[0].pageX);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = (x - startTouchX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    checkScroll();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative bg-white flex flex-col md:hidden">
      {showLeftButton && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 h-full px-2 bg-gradient-to-r from-white via-white to-transparent"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className={`flex gap-3 overflow-x-hidden px-4 py-3 cursor-grab select-none ${
          isDragging ? "cursor-grabbing" : ""
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {brandsData.map((brand, idx) => (
          <button
            key={brand?.brand}
            onClick={() => {
              setSelectedBrand(brand?._id);
              handleBrands(brand?._id);
            }}
            className="flex-none px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm whitespace-nowrap transition-colors"
            onMouseDown={(e) => e.preventDefault()}
          >
            {brand?.brand}
          </button>
        ))}
      </div>

      {showRightButton && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 h-full px-2 bg-gradient-to-l from-white via-white to-transparent"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
