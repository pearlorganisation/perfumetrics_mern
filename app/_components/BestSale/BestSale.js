"use client";
import React, { useEffect, useMemo, useState } from "react";
import LogoGrid from "./LogoGrid";
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

  const imageLinks = [
    {
      id: 1,
      imgUrl: "",
      linkTo: "",
    },
  ];

  return (
    <div className="px-4">
      <div>
        <div class="grid place-items-center relative w-full ">
          <h1 class="text-3xl md:text-[36px] -translate-y-1 font-bold px-6 md:px-8 pt-3 bg-white z-40">
            SALES OFF
          </h1>
          <div class="absolute w-full h-[2px] bg-slate-500"></div>
        </div>
        <div className="grid lg:grid-cols-3 place-items-center gap-3 py-5 ">
          <div className="w-full flex flex-col justify-between ">
            {salesData?.slice(0, 3).map((item) => {
              // console.log(item);
              const temp =
                item?.mapOfLinks?.[timeZoneCountry] ??
                item?.mapOfLinks?.["US"] ??
                (item?.mapOfLinks[Object.keys(item?.mapOfLinks)?.[0]] || []);
              if (Object.keys(item?.mapOfLinks)?.length == 0) return null;
              const { link, price, quantity } = temp;
              // if (!item?.mapOfLinks[timeZoneCountry]) return;
              // const { link, price, quantity } =
              //   item?.mapOfLinks[timeZoneCountry];
              return (
                <Link href={link}>
                  <div className=" flex bg-white shadow-lg rounded-lg overflow-hidden p-2">
                    <div className="">
                      <img
                        className="min-h-32 max-h-32 min-w-32 md:w-32 lg:min-w-24 lg:max-w-24  max-w-32 object-cover"
                        src={item?.banner}
                        alt="Euphoria Eau De Parful"
                      />
                    </div>
                    <div className="px-4">
                      <h2 className="text-gray-800 text-[16px] md:text-[12px] lg:text-[12px] font-bold line-clamp-2">
                        {item?.title} {quantity}
                      </h2>

                      <div className="mt-3">
                        <span className="text-gray-800 text-[24px] md:text-[16px] font-extrabold ">
                          {price}
                        </span>
                      </div>

                      <div className="flex items-center mt-2">
                        {Array.from({ length: Number(item?.rating) })?.map(
                          (item) => {
                            return (
                              <svg
                                className="w-6 h-6  md:w-6 md:h-6 lg:h-4 lg:w-4 fill-current text-yellow-700"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                              </svg>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="w-full relative  grid place-items-center border ">
            <Image
              width={200}
              height={200}
              className="h-[100%] translate-y-0 w-full "
              src="https://res.cloudinary.com/dznz3eqe8/image/upload/q_auto,f_auto/v1734002362/DiscoverW_u0ifc6.jpg"
              alt="Best Sale"
            />
          </div>

          {/* NEW */}

          {/* <div className="w-full flex flex-col justify-between ">
            {salesData?.slice(3, 6).map((item) => {
              // console.log(item);
              const temp =
                item?.mapOfLinks?.[timeZoneCountry] ??
                item?.mapOfLinks?.["US"] ??
                (item?.mapOfLinks[Object.keys(item?.mapOfLinks)?.[0]] || []);
              if (Object.keys(item?.mapOfLinks)?.length == 0) return null;
              const { link, price, quantity } = temp;
              // if (!item?.mapOfLinks[timeZoneCountry]) return;
              // const { link, price, quantity } =
              //   item?.mapOfLinks[timeZoneCountry];
              return (
                <Link href={link}>
                  <div className=" flex bg-white shadow-lg rounded-lg overflow-hidden p-2">
                    <div className="">
                      <img
                        className="min-h-40 max-h-40 min-w-32 max-w-32 object-cover"
                        src={item?.banner}
                        alt="Euphoria Eau De Parful"
                      />
                    </div>
                    <div className="px-4">
                      <h2 className="text-gray-800 text-[16px] lg:text-[12px] font-bold line-clamp-3">
                        {item?.title} {quantity}
                      </h2>

                      <div className="mt-3">
                        <span className="text-gray-800 text-[24px] lg:text-[12px] font-extrabold ">
                          {price}
                        </span>
                      </div>

                      <div className="flex items-center mt-2">
                        {Array.from({ length: Number(item?.rating) })?.map(
                          (item) => {
                            return (
                              <svg
                                className="w-6 h-6 fill-current text-yellow-700"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                              </svg>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div> */}
          <div className="w-full flex flex-col justify-between ">
            {salesData?.slice(3, 6).map((item) => {
              // console.log(item);
              const temp =
                item?.mapOfLinks?.[timeZoneCountry] ??
                item?.mapOfLinks?.["US"] ??
                (item?.mapOfLinks[Object.keys(item?.mapOfLinks)?.[0]] || []);
              if (Object.keys(item?.mapOfLinks)?.length == 0) return null;
              const { link, price, quantity } = temp;
              // if (!item?.mapOfLinks[timeZoneCountry]) return;
              // const { link, price, quantity } =
              //   item?.mapOfLinks[timeZoneCountry];
              return (
                <Link href={link}>
                  <div className=" flex bg-white shadow-lg rounded-lg overflow-hidden p-2">
                    <div className="">
                      <img
                        className="min-h-32 max-h-32 min-w-32 md:w-32 lg:min-w-24 lg:max-w-24  max-w-32 object-cover"
                        src={item?.banner}
                        alt="Euphoria Eau De Parful"
                      />
                    </div>
                    <div className="px-4">
                      <h2 className="text-gray-800 text-[16px] md:text-[12px] lg:text-[12px] font-bold line-clamp-2">
                        {item?.title} {quantity}
                      </h2>

                      <div className="mt-3">
                        <span className="text-gray-800 text-[24px] md:text-[16px] font-extrabold ">
                          {price}
                        </span>
                      </div>

                      <div className="flex items-center mt-2">
                        {Array.from({ length: Number(item?.rating) })?.map(
                          (item) => {
                            return (
                              <svg
                                className="w-6 h-6  md:w-6 md:h-6 lg:h-4 lg:w-4 fill-current text-yellow-700"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                              </svg>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          

          {/* OLD */}
          {/* <div className="w-full flex flex-col justify-between ">
            {salesData?.slice(3, 6).map((item) => {
              // console.log(item);
              const temp =
                item?.mapOfLinks?.[timeZoneCountry] ??
                item?.mapOfLinks?.["US"] ??
                (item?.mapOfLinks[Object.keys(item?.mapOfLinks)?.[0]] || []);
              if (Object.keys(item?.mapOfLinks)?.length == 0) return null;
              const { link, price, quantity } = temp;
              // if (!item?.mapOfLinks[timeZoneCountry]) return;
              // const { link, price, quantity } =
              //   item?.mapOfLinks[timeZoneCountry];
              return (
                <Link href={link}>
                  <div className=" flex bg-white shadow-lg rounded-lg overflow-hidden p-2">
                    <div className="grid place-items-center">
                      <img
                        className="min-h-28 max-h-28 min-w-28 max-w-28 object-cover"
                        src={item?.banner}
                        alt="Euphoria Eau De Parful"
                      />
                    </div>
                    <div className="px-4 ">
                      <h2 className="text-gray-800 text-sm lg:text-[16px] font-bold line-clamp-1">
                        {item?.title} {quantity}
                      </h2>
                      <div className="flex items-center mt-2">
                        {Array.from({ length: Number(item?.rating) })?.map(
                          (item) => {
                            return (
                              <svg
                                className="w-6 h-6 fill-current text-yellow-700"
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
          </div> */}
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full py-6 px-5 md:px-0 mt md:mt-0">
          {[
            "https://res.cloudinary.com/dznz3eqe8/image/upload/q_auto,f_auto/v1732796272/20241122_123618_0000_lchvdf.jpg",
            `https://res.cloudinary.com/dznz3eqe8/image/upload/q_auto,f_auto/v1732796285/20241122_123618_0001_ypzx1b.jpg`,
          ].map((item, idx) => {
            return (
              <div className="w-full">
                <div className="relative">
                  <Link
                    href={`${
                      idx === 0
                        ? `${process.env.NEXT_PUBLIC_FRONTEND_URL}/category/MEN'S-STYLE`
                        : `${process.env.NEXT_PUBLIC_FRONTEND_URL}/category/WOMEN'S-STYLE`
                    }`}
                  >
                    <Image
                      width={500}
                      height={500}
                      loading="lazy"
                      className="w-full h-64 object-fit"
                      src={item}
                      alt="Best for Men's Style"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <LogoGrid />
    </div>
  );
};

export default BestSale;
