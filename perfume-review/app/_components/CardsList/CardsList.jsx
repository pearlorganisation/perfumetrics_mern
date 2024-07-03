import React from "react";

const CardsList = ({ data }) => {
  return (
    <div className="w-full flex flex-col gap-2 rounded-md">
      {data &&
        data?.map((item) => (
          <div className="bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex justify-start items-center gap-3 cursor-pointer p-4 hover:shadow-[0_2px_10px_2px#f193c4]">
            <div className="bg-white w-fit p-2">
              <img class="size-20 rounded" src={item.imgUrl} alt="" />
            </div>
            <span class="text-lg font-medium">{item?.name}</span>
          </div>
        ))}
    </div>
  );
};

export default CardsList;
