import Link from "next/link";
import { IoIosArrowRoundForward, IoMdStar, IoMdStarHalf } from "react-icons/io";

const ProductCards = ({ data }) => {
  return (
    <div className="flex gap-3 flex-wrap ">
      {data &&
        data.map((e) => (
          <Link
            href={`/product/${e?._id}`}
            className="w-full md:w-[30%] flex flex-col gap-2 rounded-md transition duration-300"
          >
            <img
              src={e.banner}
              width={"100%"}
              height={"200px"}
              className="shadow-[0_2px_30px_2px#cccccc] hover:shadow-[0_2px_10px_2px#f193c4]"
            />
            <div className="flex flex-col h-full gap-1 items-start pb-4">
              <div className="w-full text-sm text-left font-bold h-full">
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
            </div>
          </Link>
        ))}
    </div>
  )
}

export default ProductCards
