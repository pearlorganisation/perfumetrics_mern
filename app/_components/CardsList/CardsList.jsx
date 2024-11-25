import React from "react";
import { FaUser } from "react-icons/fa";
import style from './style.module.css'
import Link from "next/link";

const CardsList = ({ reviewData, length, data }) => {
  return (
    <div className="w-full  p-2 flex flex-col gap-2 rounded-md bg bg-[#ededed]">
      {Array.isArray(reviewData) && reviewData.length > 0 &&
        reviewData?.slice(0, length).map((item) => (
          <Link href={`/product/${item?.perfumeId}`}>
            <div className={`bg-white ${style.shadowE} flex justify-start items-center gap-3 cursor-pointer p-3`}>
              <div className="h-20 rounded w-[5rem]"><img className="object-cover w-16" src={item?.banner || item?.imgUrl} alt="" /></div>

              <div className="w-[12rem]">
                <h3 className="text-xl font-semibold">{item?.title}</h3>
                <p className="text-xs line-clamp-3">{item?.description}</p>
                <div className="flex justify-end items-center gap-2 "><span className="text-yellow-700 text-sm">{item?.reviewBy} </span>
                  <div className="bg-pink-500 rounded-full size-6 grid place-items-center">
                    <FaUser className="text-white" />
                  </div></div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default CardsList;


