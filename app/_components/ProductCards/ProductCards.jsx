import Link from "next/link";
import { IoIosArrowRoundForward, IoMdStar, IoMdStarHalf } from "react-icons/io";

const ProductCards = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  gap-6">
      {data &&
        data.map((e, index) => (
          <Link
            href={`/product/${e.perfumeId}`}
            key={index} // Add key to avoid React warnings
          >
            <div
              className="relative w-full max-w-[200px] sm:max-w-[240px] h-[280px] sm:h-[320px] mx-auto border-2 border-pink-500 rounded-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={e?.banner || e?.imgUrl}
                alt="Product Image"
                className="absolute h-full w-full object-cover"
              />
            </div>
          </Link>
        ))}
    </div>





  );
};

export default ProductCards;
