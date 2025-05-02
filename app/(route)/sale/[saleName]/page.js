"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import axios from "axios";
import ct from "countries-and-timezones";
import Image from "next/image";

const BestSale = () => {
  const [salesData, setSalesData] = useState([]);
  const tmz = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    []
  );
  const timezone = useMemo(() => ct.getTimezone(tmz), [tmz]);
  const [timeZoneCountry, setTimeZoneCountry] = useState(
    timezone?.countries[0]
  );

  const getSalesOff = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/salesOff`
    );
    setSalesData(result?.data?.data);
    // console.log(result?.data?.data, "result");
  };
  useEffect(() => {
    getSalesOff();
  }, []);

  return (
    <div className="container mx-auto h-screen grid place-items-start pt-16">
      <div className="">
        <div class="grid place-items-center relative w-full ">
          <h1 class="text-xl md:text-[36px] -translate-y-1 font-bold px-6 md:px-8 pt-3 bg-white z-40">
            SALES OFF
          </h1>
          <div class="absolute w-full h-[2px] bg-slate-500"></div>
        </div>
        <div className="grid lg:grid-cols-3 place-items-center gap-3 py-5 ">
          <div className="w-full flex flex-col justify-between ">
            {salesData?.slice(0, 3).map((item) => {
              // console.log(item);
              if (!item?.mapOfLinks[timeZoneCountry]) return;
              const { link, price, quantity } =
                item?.mapOfLinks[timeZoneCountry];
              return (
                <Link href={link}>
                  <div className=" flex bg-white shadow-lg rounded-lg overflow-hidden p-2">
                    <div className="grid place-items-center">
                      <img
                        className="size-28 object-cover"
                        src={item?.banner}
                        alt="Euphoria Eau De Parful"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-gray-800 text-sm lg:text-[16px] font-normal line-clamp-1">
                        {item?.title} {quantity}
                      </h2>
                      <div className="flex items-center mt-2">
                        {Array.from({ length: Number(item?.rating) })?.map(
                          (item) => {
                            return (
                              <svg
                                className="w-4 h-4 fill-current text-blue-500"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                              </svg>
                            );
                          }
                        )}
                      </div>
                      <div className="mt-3">
                        <span className="text-gray-800 text-[12px] font-normal ">
                          {price}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="w-full relative  grid place-items-center border">
            <Image
              width={500}
              height={500}
              className="h-[100%] translate-y-0 w-full "
              src="https://res.cloudinary.com/dznz3eqe8/image/upload/q_auto,f_auto/v1734002362/DiscoverW_u0ifc6.jpg"
              alt="Sales Section"
            />
          </div>
          <div className="w-full flex flex-col justify-between ">
            {salesData?.slice(3, 6).map((item) => {
              // console.log(item);
              if (!item?.mapOfLinks[timeZoneCountry]) return;
              const { link, price, quantity } =
                item?.mapOfLinks[timeZoneCountry];
              return (
                <Link href={link}>
                  <div className=" flex bg-white shadow-lg rounded-lg overflow-hidden p-2">
                    <div className="grid place-items-center">
                      <Image
                        width={28}
                        height={28}
                        className="size-28 object-cover"
                        src={item?.banner}
                        alt="Euphoria Eau De Parful"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-gray-800 text-sm lg:text-[16px] font-normal line-clamp-1 ">
                        {item?.title} {quantity}
                      </h2>
                      <div className="flex items-center mt-2">
                        {Array.from({ length: Number(item?.rating) })?.map(
                          (item) => {
                            return (
                              <svg
                                className="w-4 h-4 fill-current text-blue-500"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                              </svg>
                            );
                          }
                        )}
                      </div>
                      <div className="mt-3">
                        <span className="text-gray-800 text-[12px] font-normal ">
                          {price}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSale;
