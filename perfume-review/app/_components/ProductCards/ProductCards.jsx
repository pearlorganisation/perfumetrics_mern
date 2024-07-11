import Link from "next/link";
import { IoIosArrowRoundForward, IoMdStar, IoMdStarHalf } from "react-icons/io";

const ProductCards = ({ data }) => {
  return (
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-14  ">
      {data &&
        data.map((e) => (
          <Link
            href={`/product/${e?._id}`}
            className="w-full  shadow-[0_2px_30px_2px#cccccc]  h-[500px] bg-[#FFFFFF]  border-2 border-pink-500 grid place-items-center  gap-2 rounded-md transition duration-300"
          >
            <img
              // src={e.banner}
              src={e.imgUrl}

              // width={"100%"}
              className=" h-[280px] w-full   "
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
