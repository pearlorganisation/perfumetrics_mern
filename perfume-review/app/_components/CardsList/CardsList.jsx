import React from "react";
import { FaUser } from "react-icons/fa";
import style from './style.module.css'

const CardsList = ({ data }) => {
  return (
    <div className="w-full  p-2 flex flex-col gap-2 rounded-md bg">
      {data &&
        data?.map((item) => (
          <div className={`bg-white ${style.shadowE} flex justify-start items-center gap-3 cursor-pointer p-3`}>
            <img class="h-16 rounded" src={item.imgUrl} alt="" />
            <div className="">
              <span className="text-xl font-semibold">I Want Choo</span>
              <p className="text-xs line-clamp-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error voluptatem officia totam voluptas, facilis molestias mollitia cumque. Labore, fugit cum. Dicta fuga itaque </p>
              <div className="flex justify-end items-center gap-2 "><span className="text-yellow-700 font-medium ">By Rahul Rawat </span><div className="bg-pink-500 rounded-full size-8 grid place-items-center">
                <FaUser className="text-white" />
              </div></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardsList;

{/* <div className="bg-white w-fit p-2">
              
            </div>
            <span class="text-lg font-medium">{item?.name}</span>
          </div> */}
