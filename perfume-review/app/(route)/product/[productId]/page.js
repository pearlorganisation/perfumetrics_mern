"use client";
import CircularProgress from "@/app/_components/CircularProgress/CircularProgress";
import React from "react";
import { GiFruitBowl } from "react-icons/gi";
import ProsCons from "../_ProsCons";
import Pyramid from "@/public/Pyramid.png";
import Image from "next/image";
import DoughnutGraph from "@/app/_components/DoughnutGraph/DoughnutGraph";
import Review from "./Review";

const page = ({ params }) => {
  console.log(params, "params");
  const perfumeReviews = [
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.2355.jpg",
      name: "al haraman",
      brand: null,
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.90689.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.35456.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.90689.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.35456.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
  ];
  return (
    <div className="min-h-screen container mx-auto py-20">
      <div className="grid gap-5 grid-cols-[auto_30rem]">
        <div className=" space-y-6">
          <div className="grid grid-cols-2">
            <div>
              <p className="text-3xl font-medium">
                Seductive Blue Guess{" "}
                <span className="text-2xl text-[#5899CA]">for women</span>
              </p>
              <img
                src="https://s3-alpha-sig.figma.com/img/bf88/421d/7615fcf2be9240299895d960bf349076?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vw6gbYm7xhC-digwWvF6VLcp-VGE-RDl1nUS1gkW09A22VNriwszpQa8O4BMFY2SdOvge8akhxTop1oFqjOA5V6l~KrmczQhnRacD55H~O4FEbbBCe-iclE5xeseePktraRQ2sqnJTKma6E8ASAZYaIlWua8TQdaEva3-NHx1ABPWNKIiE14UsSCSojCXpHNgZ2Frpl35N2jrt83fmqv12An~biK9cbhm1o4lyWNzTDGxQfr4Apf8QcGFCix6sAv2ejFVdGuQ9icUkwD-D6CrilqR5swloZjvAXdCmF3l19dB7BDHOs~ywFSmfDv3KGOi3mRgY6g8zxsIgelrCqm6A__"
                alt=""
                srcset=""
              />
            </div>
            <div className="flex flex-col justify-center  items-center gap-4">
              <div className="rounded-full overflow-hidden border w-fit">
                <img
                  className="h-40"
                  src={`https://static.vecteezy.com/system/resources/previews/009/003/747/non_2x/luxury-perfume-bottle-logo-design-illustration-for-cosmetics-beauty-salon-company-products-free-vector.jpg`}
                  alt=""
                />
              </div>
              <div className="flex flex-wrap">
                {/* {[
                  { text: "Sweet", hex: "#4A90E2", percent: 33 },
                  { text: "Sweet", hex: "#50E3C2", percent: 53 },
                  { text: "Sweet", hex: "#9013FE", percent: 66 },
                  { text: "Sweet", hex: "#B8E986", percent: 71 },
                  { text: "Sweet", hex: "#F5A623", percent: 85 },
                  { text: "Sweet", hex: "#D0021B", percent: 55 },
                  { text: "Sweet", hex: "#8B572A", percent: 91 },
                ].map((item) => {
                  return (
                    <div className="grid place-items-center">
                  
                      <CircularProgress
                        strokeWidth={10}
                        strokeColor={item.hex}
                        percent={item?.percent}
                        className="h-[6rem] w-[6rem]"
                      />
                      <div>{item?.text}</div>
                    </div>
                  );
                })} */}
                <DoughnutGraph />
              </div>
            </div>
          </div>
          <div className=" flex gap-x-5 gap-y-4 flex-wrap max-w-2xl">
            {[
              `Fruity`,
              `Fresh`,
              `Sweet`,
              `Powdery`,
              `Floral`,
              `Mens`,
              `Women's`,
              `Citrus`,
            ]?.map((item) => {
              return (
                <div className="flex  justify-start items-center gap-2 font-medium text-lg">
                  <GiFruitBowl className="text-gray-500" />
                  {item}
                </div>
              );
            })}
          </div>
          <div className="flex gap-3">
            {[`I have it`, `I had it`, `I want it`].map((item) => {
              return (
                <div className="bg-[#FCF1F5] cursor-pointer rounded-3xl px-6 py-3 font-medium">
                  {item}
                </div>
              );
            })}
          </div>
          <p className="text-lg">
            Guess Mens Seductive Blue Body Mist ...{" "}
            <span className="font-medium ">(10.99 USD)</span>
          </p>
          <div>
            {[
              {
                title: "Buy From",
                img: "https://s3-alpha-sig.figma.com/img/3659/5e0f/7eef1817ec204989391c3be6ac3d5499?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eez7RfvpVZaxP9V0eylwnnNzYiYt4TuntkPLYpOMc0S3YUIp8RIPE1xyjmzLAeRViSPvm-dPRCl3pfPNUSbLg7UV9hZ6qxDkyDOSdWchcLteNA9xCOhEri4RASZMQ0JObY2y~xNBZ~qq4e7dc3j58MxFGfkmTVMm0l0d~MzVt1x5ehYN3f6WqCD~KszzZYs0nRBoQaMQhVUrUbcrXw8WcW6fCMnHy0hEB86zzzGtbWBul1O7ThN2dmXiw6DhMRNSZkb0vyZhghFpItn5nKNHvkg-yQg~NPfh2mBUsJccqMKx9tjkcYifrGRQHtFine3LLUEDPTxaDLDIbc1jExIapg__",
              },
              {
                title: "Buy From",
                img: "https://s3-alpha-sig.figma.com/img/87cb/8e80/a974a28100d68d7f00b0634e69ff2269?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JMzwB1wBCMjHQF6cykxZ6EXQK8o8OEAhMpHNZ-5eCnRVr8QBz4A0vYZiMHSpLVm7-BAIlTf7tMemYQEkVu6sxqhEY-4NaEx-lR0Z0Po3Ev~FPQoN4P5UxUOI-dr-3IB1fOLYTeLm3Bs4ylcJedIN-w8B7i6S39INHu6dvie~4FMLZ0tqpM2krtvmZWGxohKjNUpuhZQTJTI3Yq9rkIgDd2c48--xWj7Fo9PyXJDlYlTvKIkO82P6myuikCHJXt9L2ds2qsT6oV1LVXTfSMN1mY6Ya1SvFTF-Vb1mwqATm8drsiKsDzdqtYBapIJJDHJ~5n86Eg84khZ6miAAVf~cDA__",
              },
            ].map((item) => {
              return (
                <div className="flex gap-4 text-xl font-semibold justify-start items-center bg-[#FAF6FF] w-[20rem] px-6 py-2 rounded-xl">
                  <span>{item?.title}</span>
                  <img src={item?.img} alt="" />
                </div>
              );
            })}
          </div>
          <div className="flex gap-x-10">
            {[
              {
                name: "Wrost",
                icons: "https://cdn-icons-png.flaticon.com/128/743/743345.png",
              },
              {
                name: "Wrost",
                icons: "https://cdn-icons-png.flaticon.com/128/743/743345.png",
              },
              {
                name: "Wrost",
                icons: "https://cdn-icons-png.flaticon.com/128/743/743345.png",
              },
              {
                name: "Wrost",
                icons: "https://cdn-icons-png.flaticon.com/128/743/743345.png",
              },
              {
                name: "Wrost",
                icons: "https://cdn-icons-png.flaticon.com/128/743/743345.png",
              },
              {
                name: "Wrost",
                icons: "https://cdn-icons-png.flaticon.com/128/743/743345.png",
              },
              {
                name: "Wrost",
                icons: "https://cdn-icons-png.flaticon.com/128/743/743345.png",
              },
              {
                name: "Wrost",
                icons: "https://cdn-icons-png.flaticon.com/128/743/743345.png",
              },
            ]?.map((item) => {
              return (
                <div className="cursor-pointer font-medium text-[#105955] relative">
                  <div className="absolute w-full h-full bg-transparent hover:backdrop-grayscale-0 backdrop-grayscale"></div>
                  <img className="h-10" src={item?.icons} alt="" />
                  {item?.name}
                </div>
              );
            })}
          </div>
          <div>
            Seductive Blue by Guess is a Floral Fruity fragrance for women. This
            is a new fragrance. Seductive Blue was launched in 2023. Top notes
            are Pear and Bergamot; middle notes are Peony, Freesia, Rose Water
            and Cyclamen; base notes are Plum, Musk, Amber and Patchouli.A fresh
            and addictive fruity floral fragrance with notes of crisp Pear,
            Rosewater, and Patchouli.
            <br />
            INSPIRATION A bold perfume, an irresistible temptation, an allure of
            seduction... The confidence and charm of the GUESS woman inspires
            Seductive Blue.
            <br />
            FRAGRANCE Fresh and addictive, Seductive Blue perfume takes you on a
            journey to a haven of tranquility. Crisp Pear and Italian Bergamot
            open the fragrance before revealing a floral heart of dew-covered
            Peony Petals, Rosewater, and Blue Freesia. Base notes of Plum, Silky
            Musk, Amber, and Patchouli emphasize the fruity and floral trail.
            This perfume evokes sun-kissed seaside memories and invites you to
            escape to a bright paradise.
            <br />
            BOTTLE In a refreshing blue hue, the Seductive Blue bottle
            transports us to a dreamy getaway. A captivating, feminine vessel
            adorned with the iconic GUESS triangular logo on a golden plaque.
          </div>

          <ProsCons />

          <div className="space-y-2">
            <p className="text-3xl font-medium">Perfume Photos</p>
            <div className="flex gap-4">
              {[
                `https://images.unsplash.com/photo-1595425959632-34f2822322ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D`,
                `https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D`,
                `https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D`,
                `https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D`,
              ]?.map((item) => {
                return (
                  <img className="size-52 object-cover" src={item} alt="" />
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            <div>
              <Image
                src="/Pyramid.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="img"
              />
            </div>
            {/* <img
              className="border-2 border-red-500"
              src="./Pyramid.png"
              alt=""
            /> */}
            <div className="grid grid-rows-3 h-full">
              {Array(3)
                .fill()
                ?.map((item) => {
                  return (
                    <div className=" flex justify-around items-center gap-3 ">
                      <img
                        className="h-32"
                        src="https://s3-alpha-sig.figma.com/img/3f61/62b0/a6e0dc42cce537e25895057cb3621ef0?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SRSbzVKhZ4GLPEmDP~XCyt6O9F5dNgRkKZgrTq3imHl0JtfAUzB15BuLBykH0PSn0NhP2MKLSPPsiE9wdVaERvfjqUpgBX11aRkQ1DnxzgahdPjMjC3f9M~KaCuYzgfdrh9Ah-ainDUWsrVL3jpUHJAxXX2TbhImugWRcq2N0N~gNktv4-AfF35hfdmCT06iQDYwXYB7bxylRGO-f2uPzftckAmR8HZqMsMEVmeB8tjQKwUHwOpqKcX7YELoxn5xxfdpSJ9JNBDZpw9gUGnRddNIRs1uyJZBew4HVOLEyf1oWWG80HILZEdrDqEG1ynNfsFQ~OCA53jxgl~OZXeHuw__"
                        alt=""
                      />
                      <img
                        className="h-32"
                        src="https://s3-alpha-sig.figma.com/img/3f61/62b0/a6e0dc42cce537e25895057cb3621ef0?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SRSbzVKhZ4GLPEmDP~XCyt6O9F5dNgRkKZgrTq3imHl0JtfAUzB15BuLBykH0PSn0NhP2MKLSPPsiE9wdVaERvfjqUpgBX11aRkQ1DnxzgahdPjMjC3f9M~KaCuYzgfdrh9Ah-ainDUWsrVL3jpUHJAxXX2TbhImugWRcq2N0N~gNktv4-AfF35hfdmCT06iQDYwXYB7bxylRGO-f2uPzftckAmR8HZqMsMEVmeB8tjQKwUHwOpqKcX7YELoxn5xxfdpSJ9JNBDZpw9gUGnRddNIRs1uyJZBew4HVOLEyf1oWWG80HILZEdrDqEG1ynNfsFQ~OCA53jxgl~OZXeHuw__"
                        alt=""
                      />
                      <img
                        className="h-32"
                        src="https://s3-alpha-sig.figma.com/img/3f61/62b0/a6e0dc42cce537e25895057cb3621ef0?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SRSbzVKhZ4GLPEmDP~XCyt6O9F5dNgRkKZgrTq3imHl0JtfAUzB15BuLBykH0PSn0NhP2MKLSPPsiE9wdVaERvfjqUpgBX11aRkQ1DnxzgahdPjMjC3f9M~KaCuYzgfdrh9Ah-ainDUWsrVL3jpUHJAxXX2TbhImugWRcq2N0N~gNktv4-AfF35hfdmCT06iQDYwXYB7bxylRGO-f2uPzftckAmR8HZqMsMEVmeB8tjQKwUHwOpqKcX7YELoxn5xxfdpSJ9JNBDZpw9gUGnRddNIRs1uyJZBew4HVOLEyf1oWWG80HILZEdrDqEG1ynNfsFQ~OCA53jxgl~OZXeHuw__"
                        alt=""
                      />
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-4xl font-medium">Top Perfumes</p>
            <div className="grid md:grid-cols-3 gap-y-4 gap-x-4">
              {Array(10)
                .fill(true)
                .map((item) => {
                  return (
                    <div className="space-y-1 p-2 shadow-md hover:cursor-pointer border-4 border-transparent hover:border-gray-400/30">
                      <img
                        className="h-[25rem] w-full mb-2"
                        src={`https://images.unsplash.com/photo-1588177925144-2fd3e4e7ce57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D`}
                        alt=""
                      />
                      <span className="font-medium text-xl">
                        Giorgio Armani{" "}
                      </span>
                      <div class="text-yellow-500 flex justify-start items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 inline-block"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.691h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.535 9.386c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.691l1.286-3.958z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 inline-block"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.691h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.535 9.386c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.691l1.286-3.958z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 inline-block"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.691h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.535 9.386c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.691l1.286-3.958z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 inline-block"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.691h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.535 9.386c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.691l1.286-3.958z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 inline-block"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.691h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.535 9.386c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.691l1.286-3.958z" />
                        </svg>
                        <span className="text-black translate-y-[0.10rem]">
                          4.7
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="grid gap-5 max-w-lg ">
            <span className="font-medium text-3xl py-4">Rating/Results</span>
            <span className="font-medium text-lg">SILLAGE</span>
            <div className="flex justify-around gap-x-5">
              {[
                {
                  name: "Wrost",
                  icons:
                    "https://cdn-icons-png.flaticon.com/128/743/743345.png",
                },
                {
                  name: "Wrost",
                  icons:
                    "https://cdn-icons-png.flaticon.com/128/743/743345.png",
                },
                {
                  name: "Wrost",
                  icons:
                    "https://cdn-icons-png.flaticon.com/128/743/743345.png",
                },
                {
                  name: "Wrost",
                  icons:
                    "https://cdn-icons-png.flaticon.com/128/743/743345.png",
                },
                {
                  name: "Wrost",
                  icons:
                    "https://cdn-icons-png.flaticon.com/128/743/743345.png",
                },
              ]?.map((item) => {
                return (
                  <div className="cursor-pointer font-medium text-[#105955] relative">
                    <div className="absolute w-full h-full bg-transparent hover:backdrop-grayscale-0 backdrop-grayscale"></div>
                    <img className="h-8" src={item?.icons} alt="" />
                    {item?.name}
                  </div>
                );
              })}
            </div>
            <input className="w-full" type="range" name="" id="" />
            <div className="space-y-6">
              <div className="flex justify-start items-center gap-6">
                <span className="text-nowrap font-medium">Way Overpriced</span>
                <span>39</span>
                <div className="bg-[#105955] h-3 rounded-3xl w-full"></div>
              </div>
              <div className="flex justify-start items-center gap-6">
                <span className="text-nowrap font-medium">Way Overpriced</span>
                <span>39</span>
                <div className="bg-[#105955] h-3 rounded-3xl w-full"></div>
              </div>
              <div className="flex justify-start items-center gap-6">
                <span className="text-nowrap font-medium">Way Overpriced</span>
                <span>39</span>
                <div className="bg-[#105955] h-3 rounded-3xl w-full"></div>
              </div>
              <div className="flex justify-start items-center gap-6">
                <span className="text-nowrap font-medium">Way Overpriced</span>
                <span>39</span>
                <div className="bg-[#105955] h-3 rounded-3xl w-full"></div>
              </div>
              <div className="flex justify-start items-center gap-6">
                <span className="text-nowrap font-medium">Way Overpriced</span>
                <span>39</span>
                <div className="bg-[#105955] h-3 rounded-3xl w-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-">
          <div className="flex justify-between items-center py-4">
            <span className="text-2xl font-semibold ">Perfume Reviews</span>{" "}
            <span className="text-pink-400 font-medium">Write a review</span>
          </div>
          <div className="w-full flex flex-col gap-2 shadow-[0_2px_50px_2px#cccccc] rounded-md">
            {perfumeReviews &&
              perfumeReviews?.map((e) => (
                <div className="w-full flex p-2 shadow-sm group  hover:bg-slate-300/30 cursor-pointer tranistion duration-300">
                  <div className="flex flex-col justify-center w-1/4">
                    <img src={e.imgUrl} width={"100%"} />
                  </div>
                  <div className="w-full flex flex-col justify-center items-center">
                    {e?.name && (
                      <div className="text-base font-semibold group-hover:text-whit">
                        {e?.name}
                      </div>
                    )}
                    {e?.brand && (
                      <div className="text-sm font-semibold text-pink-500 group-hover:text-whit">
                        {e?.brand}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <Review />
      </div>
    </div>
  );
};

export default page;
