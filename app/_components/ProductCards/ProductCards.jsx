import Link from "next/link";
import { IoIosArrowRoundForward, IoMdStar, IoMdStarHalf } from "react-icons/io";

const ProductCards = ({ data }) => {
  // console.log(data, "data:g")
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  gap-6 ">
      {data &&
        data.map((e, index) => (
          <Link
            target="_blank"
            href={`/product/${e?.slug}`}
            // href={`/product/${e.perfumeId}`}
            key={index} // Add key to avoid React warnings
          >
            <div
              className="relative  mx-auto border-2 border-pink-500 rounded-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={e?.banner || e?.imgUrl}
                alt={e?.mainImageAltAttribute}
                className="w-full h-[200px] sm:h-[150px] md:h-[20rem] object-contain max-w-xs mx-auto p-2"
              />

            </div>
          </Link>
        ))}
    </div>





  );
};

export default ProductCards;
