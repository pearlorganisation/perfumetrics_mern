import Link from "next/link";
import { IoIosArrowRoundForward, IoMdStar, IoMdStarHalf } from "react-icons/io";

const ProductCards = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 md:gap-x-8 md:gap-y-14  gap-x-4 gap-y-4 ">
      {data &&
        data.map((e) => (
          <Link
            // href={`/product/${e?._id}`}
            href={`/product/${e.perfumeId}`}
            // href={`/product/34232323`}

            className="w-full h-[180px]  md:h-[280px]  border-2 border-pink-500 grid place-items-center  gap-2 rounded-md transition duration-300"
          >
            <img
              src={e?.banner || e?.imgUrl}
              // src={e.banner}

              // width={"100%"}
              className="h-auto md:h-[280px] w-full   "
            />
            {/* <div className="flex flex-col h-full gap-1 items-start pb-4">
              <div className="w-full text-sm text-left font-bold ">
                {e.perfume}
              </div>
              <div className="flex gap-2">
                <div className="flex text-yellow-400 h-[20px]">
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                  <IoMdStar size={20} />
                  <IoMdStarHalf size={20} />
                </div>
                <div className="font-semibold text-sm">4.5</div>
              </div>
            </div> */}
          </Link>
        ))}
    </div>
  );
};

export default ProductCards;
