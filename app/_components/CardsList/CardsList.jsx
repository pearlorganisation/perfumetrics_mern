import React from "react";
import { FaUser } from "react-icons/fa";
import style from './style.module.css'
import Link from "next/link";

const CardsList = ({ reviewData, length, data }) => {
  return (
    <div className="w-full flex flex-col gap-2 rounded-md  ">
      {Array.isArray(reviewData) && reviewData.length > 0 &&
        reviewData?.slice(0, length).map((item) => (
          <Link target="_blank" className={` ${style.shadowE} bg-[#FBFBFB] p-1 w-full`} href={`${item?.productUrl}`}>
            <div className={` flex justify-start gap-3 items-center  cursor-pointer`}>
              <div className=" rounded size-[64px] "><img className="object-cover size-full" src={item?.banner || item?.imgUrl} alt="" /></div>

              <div className="w-[12rem] flex flex-col justify-center ">
                <h3 className="!text-[16px] !font-semibold">{item?.title}</h3>
                <p className="!text-[13px] !font-normal line-clamp-3">{item?.description}</p>
              </div>
            </div>
            <div className="flex justify-end items-center gap-2 "><span className="text-[#1A1A1A] text-[13px]">{item?.reviewBy} </span>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default CardsList;


