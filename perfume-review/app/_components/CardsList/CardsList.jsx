import React from "react";

const CardsList = ({data}) => {
  return (
    <div className="w-full flex flex-col gap-2 rounded-md">
      {data &&
        data?.map((item) => (
          <div className="bg-[#F5F5F5] flex justify-start items-center gap-3 cursor-pointer p-4">
            <div className="bg-white w-fit p-2">
              <img class="size-20 rounded" src={item.imgUrl} alt="" />
            </div>
            <span class="text-lg font-medium">{item?.name}</span>
          </div>
        ))}
      <div className="grid place-items-center">
        <button type="button" className="text-pink-500 font-medium px-6 py-3">
          More
        </button>
      </div>
    </div>
  );
};

export default CardsList;
