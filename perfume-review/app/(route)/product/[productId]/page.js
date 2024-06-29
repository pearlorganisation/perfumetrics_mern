"use client";
// import CircularProgress from "@/app/_components/CircularProgress/CircularProgress";
import React, { useRef, useState } from "react";
import { GiFruitBowl } from "react-icons/gi";
import ProsCons from "../_ProsCons";
import Image from "next/image";
import DoughnutGraph from "@/app/_components/DoughnutGraph/DoughnutGraph";
import Review from "./Review";
import "./style.css";
import RatingResult from "@/app/_components/RatingResult/RatingResult";
import CustomerFeedbackModal from "@/app/_components/Modals/FeedBackModal/CustomerFeedbackModal";
import Link from "next/link";
import CardsList from "@/app/_components/CardsList/CardsList";

const page = ({ params }) => {
  console.log(params, "params");
  const modalRef = useRef();
  const [emoji, setEmoji] = useState(1);

  function handleOpeningModal() {
    modalRef.current.open();
  }
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
  const topNews = [
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/3085/b5dd/2fd924e5e92798d98799c4f1191f5c68?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ckzyK3m2zGKfx5JMn0N1tP1LRHZA5vGDM3w1ZHqu80CXGeJmStkPWvDQQeudGPB5~nCee5hpwzQb234UGUptz7~F98yVIo3hGlZTUSx2FPjlIQrbwepcRyIWeyRfHM6xo-NqPQBDpgZUWhSO9gQ92l1rAR3cpZDs4KT9i21k-YFXi~ItDwgQjChLZlbiW4E6yUbdjCXhyU1mSkxNQo--LOMXZHY1-g3UHkpTiIBKWLnUz6VNJlhktfYjflIU83MC1jhSR9t2txD3rfWJ69pQCXB54K5Fkd8YBAxkYvw4LijSbAMXXCa~KG6u0etUkxod-nX--FuHQ1slBnLG4XgEhg__",
      name: `Why Tom Cruise prohibits eye contact on film set: Mira Nair shares insights`,
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/df1f/404a/9b1ff3b381cc476906b9dd77e391f606?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OS0M5ABbJuag2HGR6~0uDA47GfNKh52xFla3~mAFRsguxenAbidk3BFDLXmOrMhDCOQ6lGTxtNY-RsJLSjlgpJMqTnvz3PL33hwhz5uwb0fYBaFQf2xLHhgTkAvIbOf~OmSnFE1om54qji926fZAm~FlDC~DZL8vp0IdsV~UAh9r5~jBstd-W7B~wyjpRlFl6uMKoMxmo8kBMvKnJ01FrBc3AEPaG6LP6f0J~n~SNhe8J-kBP5ilfjrUMXxX6xzZwSRQMEBa7ZGLLiUmQbVJOI1F-7LPWnlZL-O17jya6NOJEGIuS~dRFigQzZE1wwuLbhTmKs-izov3tY1-gBtUXA__",
      name: `Zeenat Aman recalls introducing singer Nazia to Feroz Khan for 'Qurbani'`,
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/8dea/726b/f0f78fe106c9777226afc1d1a4277b2c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EIRSHYNECthsq5afIjRbwrB-xUlUnQ4cWiYp2U~BQ-gKmWfzs0e5XCfP5DqIIJYNevwNQaneVKqNWI~eLjpKunhtIDNx4hdqW6tFcTFj~ZcVuT86FRVzojBqSOLrcqXdwq6wjvrvgLGu73ovMIuwRTlbxKLAtLpi~O9KxpJMpNrtZQaRj4Hg3v3UsYCqyoV1TXlbW0U~Gcu2hBN2ETJsX8jROHhyOpnVzQtKannVSvmEc81hEEn4P9zRWP07L5YUY8FJuHs13wjnKkKxSSueR1HpbAIy~O6MJwX-rAzc6b0L2Dv4c94Nx-QpZZx8dcRaH-kfuCV~RHTBmwuSEIRtaQ__",
      name: `International Yoga Day 2024: Kiara Advani, Mohanlal others share post`,
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/31f1/f52a/9d261e5eefba2b7f87961798c5229ece?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isLVHjg48ZE3XOBoh6k20Mk-8vmxKh61LSMQdviPfA0w4T6fDDvYUi89fDJwVWaKo9XhYfKkOJGStkW-big3z2~RVEK2KUWNqhY8inannBe-kGhM2JdHCr9iMLJ1LRKxwCkxfOSNNVbo8tHOX~iHPM9WTOCYjOgXnCd19osFssLpiDs-QvAigxXICKrBsy2sZu8hVoFCnuk~76~gEOhZtZ8jCRYR7-7yfFvruMEQ-uaDjupzCVq2OodHZqdjdoZ~bMixyN0oP9yEdBAfSRzn9lS8Ujo8wso4gU4nX5LdiAyPpMRZrtOal42x07PkaEc5XeGDQ4Us--yKMsGCJ8-RNQ__",
      name: `Pashmina Roshan was 'enamoured' by Shahid Kapoor's dance in 'Ishq Vishk'`,
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/3085/b5dd/2fd924e5e92798d98799c4f1191f5c68?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ckzyK3m2zGKfx5JMn0N1tP1LRHZA5vGDM3w1ZHqu80CXGeJmStkPWvDQQeudGPB5~nCee5hpwzQb234UGUptz7~F98yVIo3hGlZTUSx2FPjlIQrbwepcRyIWeyRfHM6xo-NqPQBDpgZUWhSO9gQ92l1rAR3cpZDs4KT9i21k-YFXi~ItDwgQjChLZlbiW4E6yUbdjCXhyU1mSkxNQo--LOMXZHY1-g3UHkpTiIBKWLnUz6VNJlhktfYjflIU83MC1jhSR9t2txD3rfWJ69pQCXB54K5Fkd8YBAxkYvw4LijSbAMXXCa~KG6u0etUkxod-nX--FuHQ1slBnLG4XgEhg__",
      name: `Why Tom Cruise prohibits eye contact on film set: Mira Nair shares insights`,
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/e8a6/40e0/f80eb88f354c5f040cf2dbc74d08a1c8?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f7rboLJhOoPkGobL1wJhexWIZCNl7d5YRZKfLaxqy-oSPM5R7lDOWfb9h6guW4g6AOJMyqzK3sCQbGR8Ul60W6hDQTJTwiqAUiSLMLnvC2BrVX33lfb2bmIx-lS3z48wf3-Es5F5XaQyu-hrL5iJLEFewXWUPkzhQ0oOlEUkBwakrS1Y5sTDGmP3LP00uVbQ1FADSMeg~l1ptYrFMCPrDc6gx-rwG2bAGpcxCi91hlFEyuecWvi-O9A2XzD24aibdo-8ek3veeiUWe4V4b7L8EzDTgtqeAt8QREjV1j1ezy-uQO1PcZV~cB-7kQbgR9IHOZDKDUsta4mhb-Y36L8bw__",
      name: `Inside Sonakshi Sinha-Zaheer Iqbal's pre-wedding family feast with Shatrughan Sinha`,
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/31f1/f52a/9d261e5eefba2b7f87961798c5229ece?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isLVHjg48ZE3XOBoh6k20Mk-8vmxKh61LSMQdviPfA0w4T6fDDvYUi89fDJwVWaKo9XhYfKkOJGStkW-big3z2~RVEK2KUWNqhY8inannBe-kGhM2JdHCr9iMLJ1LRKxwCkxfOSNNVbo8tHOX~iHPM9WTOCYjOgXnCd19osFssLpiDs-QvAigxXICKrBsy2sZu8hVoFCnuk~76~gEOhZtZ8jCRYR7-7yfFvruMEQ-uaDjupzCVq2OodHZqdjdoZ~bMixyN0oP9yEdBAfSRzn9lS8Ujo8wso4gU4nX5LdiAyPpMRZrtOal42x07PkaEc5XeGDQ4Us--yKMsGCJ8-RNQ__",
      name: `Pashmina Roshan was 'enamoured' by Shahid Kapoor's dance in 'Ishq Vishk'`,
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/3085/b5dd/2fd924e5e92798d98799c4f1191f5c68?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ckzyK3m2zGKfx5JMn0N1tP1LRHZA5vGDM3w1ZHqu80CXGeJmStkPWvDQQeudGPB5~nCee5hpwzQb234UGUptz7~F98yVIo3hGlZTUSx2FPjlIQrbwepcRyIWeyRfHM6xo-NqPQBDpgZUWhSO9gQ92l1rAR3cpZDs4KT9i21k-YFXi~ItDwgQjChLZlbiW4E6yUbdjCXhyU1mSkxNQo--LOMXZHY1-g3UHkpTiIBKWLnUz6VNJlhktfYjflIU83MC1jhSR9t2txD3rfWJ69pQCXB54K5Fkd8YBAxkYvw4LijSbAMXXCa~KG6u0etUkxod-nX--FuHQ1slBnLG4XgEhg__",
      name: `Why Tom Cruise prohibits eye contact on film set: Mira Nair shares insights`,
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/3085/b5dd/2fd924e5e92798d98799c4f1191f5c68?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ckzyK3m2zGKfx5JMn0N1tP1LRHZA5vGDM3w1ZHqu80CXGeJmStkPWvDQQeudGPB5~nCee5hpwzQb234UGUptz7~F98yVIo3hGlZTUSx2FPjlIQrbwepcRyIWeyRfHM6xo-NqPQBDpgZUWhSO9gQ92l1rAR3cpZDs4KT9i21k-YFXi~ItDwgQjChLZlbiW4E6yUbdjCXhyU1mSkxNQo--LOMXZHY1-g3UHkpTiIBKWLnUz6VNJlhktfYjflIU83MC1jhSR9t2txD3rfWJ69pQCXB54K5Fkd8YBAxkYvw4LijSbAMXXCa~KG6u0etUkxod-nX--FuHQ1slBnLG4XgEhg__",
      name: `Why Tom Cruise prohibits eye contact on film set: Mira Nair shares insights`,
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/df1f/404a/9b1ff3b381cc476906b9dd77e391f606?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OS0M5ABbJuag2HGR6~0uDA47GfNKh52xFla3~mAFRsguxenAbidk3BFDLXmOrMhDCOQ6lGTxtNY-RsJLSjlgpJMqTnvz3PL33hwhz5uwb0fYBaFQf2xLHhgTkAvIbOf~OmSnFE1om54qji926fZAm~FlDC~DZL8vp0IdsV~UAh9r5~jBstd-W7B~wyjpRlFl6uMKoMxmo8kBMvKnJ01FrBc3AEPaG6LP6f0J~n~SNhe8J-kBP5ilfjrUMXxX6xzZwSRQMEBa7ZGLLiUmQbVJOI1F-7LPWnlZL-O17jya6NOJEGIuS~dRFigQzZE1wwuLbhTmKs-izov3tY1-gBtUXA__",
      name: `Zeenat Aman recalls introducing singer Nazia to Feroz Khan for 'Qurbani'`,
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/8dea/726b/f0f78fe106c9777226afc1d1a4277b2c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EIRSHYNECthsq5afIjRbwrB-xUlUnQ4cWiYp2U~BQ-gKmWfzs0e5XCfP5DqIIJYNevwNQaneVKqNWI~eLjpKunhtIDNx4hdqW6tFcTFj~ZcVuT86FRVzojBqSOLrcqXdwq6wjvrvgLGu73ovMIuwRTlbxKLAtLpi~O9KxpJMpNrtZQaRj4Hg3v3UsYCqyoV1TXlbW0U~Gcu2hBN2ETJsX8jROHhyOpnVzQtKannVSvmEc81hEEn4P9zRWP07L5YUY8FJuHs13wjnKkKxSSueR1HpbAIy~O6MJwX-rAzc6b0L2Dv4c94Nx-QpZZx8dcRaH-kfuCV~RHTBmwuSEIRtaQ__",
      name: `International Yoga Day 2024: Kiara Advani, Mohanlal others share post`,
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/31f1/f52a/9d261e5eefba2b7f87961798c5229ece?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isLVHjg48ZE3XOBoh6k20Mk-8vmxKh61LSMQdviPfA0w4T6fDDvYUi89fDJwVWaKo9XhYfKkOJGStkW-big3z2~RVEK2KUWNqhY8inannBe-kGhM2JdHCr9iMLJ1LRKxwCkxfOSNNVbo8tHOX~iHPM9WTOCYjOgXnCd19osFssLpiDs-QvAigxXICKrBsy2sZu8hVoFCnuk~76~gEOhZtZ8jCRYR7-7yfFvruMEQ-uaDjupzCVq2OodHZqdjdoZ~bMixyN0oP9yEdBAfSRzn9lS8Ujo8wso4gU4nX5LdiAyPpMRZrtOal42x07PkaEc5XeGDQ4Us--yKMsGCJ8-RNQ__",
      name: `Pashmina Roshan was 'enamoured' by Shahid Kapoor's dance in 'Ishq Vishk'`,
    },
  ];
  return (
    <>
      {/* feedback form  */}

      <CustomerFeedbackModal ref={modalRef} />

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
                  <div
                    onClick={handleOpeningModal}
                    className="cursor-pointer font-medium text-[#105955] relative"
                  >
                    <div className="absolute w-full h-full bg-transparent hover:backdrop-grayscale-0 backdrop-grayscale"></div>
                    <img className="h-10" src={item?.icons} alt="" />
                    {item?.name}
                  </div>
                );
              })}
            </div>
            <div>
              Seductive Blue by Guess is a Floral Fruity fragrance for women.
              This is a new fragrance. Seductive Blue was launched in 2023. Top
              notes are Pear and Bergamot; middle notes are Peony, Freesia, Rose
              Water and Cyclamen; base notes are Plum, Musk, Amber and
              Patchouli.A fresh and addictive fruity floral fragrance with notes
              of crisp Pear, Rosewater, and Patchouli.
              <br />
              INSPIRATION A bold perfume, an irresistible temptation, an allure
              of seduction... The confidence and charm of the GUESS woman
              inspires Seductive Blue.
              <br />
              FRAGRANCE Fresh and addictive, Seductive Blue perfume takes you on
              a journey to a haven of tranquility. Crisp Pear and Italian
              Bergamot open the fragrance before revealing a floral heart of
              dew-covered Peony Petals, Rosewater, and Blue Freesia. Base notes
              of Plum, Silky Musk, Amber, and Patchouli emphasize the fruity and
              floral trail. This perfume evokes sun-kissed seaside memories and
              invites you to escape to a bright paradise.
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
                <div className=" flex justify-start items-center gap-3 ">
                  <div className="rounded-full border-2 overflow-hidden shadow-xl p-1">
                    <img
                      className="h-24"
                      src="https://s3-alpha-sig.figma.com/img/429d/2016/8589e3e474bcc5e5b5150d0c5828750c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bpCdD7mgrfSwyDmgu5AMBCmAECUyQbHhMf6486si0bLfIxmIWB59fADCcjKG0N8Qo9P7lTMx0gkDfDWNQLIm5QsY6xLpYjYiU~TL6YljD3cvPC2K7BJ1UtqvfdegOAYnrqjT5Gq6UwyP6Rbq15cOuH55wUjhJFIP47xswiw1Bx4h90dw3FDcbKzzNuT9pO5DSq1UCrGzkYr-qr3fzBuU13AIMnBYm~QX1sYZVcTvWyLchG8ZHf0YeDnpPNoHv2NA7AFgqPlBO7MhVkvPUj7ttPS6Bx5YLLKPqgn0waxYR3VtLYqr7s6T22JIHxEC2eMD8dlhR3C52EISVD3Hv1yZ5g__"
                      alt=""
                    />
                  </div>
                  <div className="rounded-full border-2 overflow-hidden shadow-xl p-1">
                    <img
                      className="h-24"
                      src="https://s3-alpha-sig.figma.com/img/956c/ab95/a0f548182b7e2e6dd966510c8c2c789a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GM~lZPAvkwxXg3wHVcecHjs8-~LuXWK~1Q58mxUKdpUEMjr9Rw7agc-SdvkFxDyAqeOJge-gGUkPqQpnTX6h7~PIpNeKUWx1AWhhCP56YE-AcjYwWur1MLRkkz2thAKMmcwpcpoEUq6~fGVUKKwsE-Zyt5xL8JMdAGgOAMHtJXdlpSAWYkamgZ0RZpY69lZYGFTtv7L7iVMTrF-NbAS6xbwwV0frWoARCcf2p6wUksitxy5WuGWaqKdktABz0apsHfoNn2jBBRwHq9nZDy0C4Vx0ra8hbgnHnR7J0Vf~tTEdJ~OF~3Hs6fIhI84cYuftOfxfeOZFOkSdiO089MiW-Q__"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" flex justify-start items-center gap-3 ">
                  <div className="rounded-full border-2 overflow-hidden shadow-xl p-1">
                    <img
                      className="h-24"
                      src="https://s3-alpha-sig.figma.com/img/3f61/62b0/a6e0dc42cce537e25895057cb3621ef0?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SRSbzVKhZ4GLPEmDP~XCyt6O9F5dNgRkKZgrTq3imHl0JtfAUzB15BuLBykH0PSn0NhP2MKLSPPsiE9wdVaERvfjqUpgBX11aRkQ1DnxzgahdPjMjC3f9M~KaCuYzgfdrh9Ah-ainDUWsrVL3jpUHJAxXX2TbhImugWRcq2N0N~gNktv4-AfF35hfdmCT06iQDYwXYB7bxylRGO-f2uPzftckAmR8HZqMsMEVmeB8tjQKwUHwOpqKcX7YELoxn5xxfdpSJ9JNBDZpw9gUGnRddNIRs1uyJZBew4HVOLEyf1oWWG80HILZEdrDqEG1ynNfsFQ~OCA53jxgl~OZXeHuw__"
                      alt=""
                    />
                  </div>
                  <div className="rounded-full border-2 overflow-hidden shadow-xl p-1">
                    <img
                      className="h-24"
                      src="https://s3-alpha-sig.figma.com/img/983b/728b/af36e70f427aaac27b29a9d2aaf6391f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l1xf11Z1WX6EQhxK~gqZcW~wEe5Eu~4M~v2nCZMBvJAb0TPf0pBtRbV6W~swJpjgJ~cqRzogEBj1yAOSUX3e9-UtvXCBJxy-W~h4I6-~0YhBUFuzvFsr1fNXfsWqGEj3~-d~KQyBMP3brVt5dQGhAAhw1LtFRlsnw1OHAw~FJJ8bLp5v~MpKz142GlL9LOx0B-rkDDhCuMmZlzMSlbnLhJ54VN1ROtM196VvXEHw2U-0uZHCg1Rm3zfvAFw1td2t1gsU5PB74jX1aUsel9zq3uhRlZ~X8IKNg9BYmtyDR5ZCAt3i81IcJkcoiCAVPgMB6jb5y~kouBQSTreowOm-Ig__"
                      alt=""
                    />
                  </div>
                  <div className="rounded-full border-2 overflow-hidden shadow-xl p-1">
                    <img
                      className="h-24"
                      src="https://s3-alpha-sig.figma.com/img/9262/019e/8fd075ac0e9953cda71ab7fef12461d8?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J53fBgmMcwF-usE1jLlDCuYQUIfHZJ82WG5QCseppeme44T5pEjlQycElNa9Jo~yUxbUMp7V-PzJgCy~ZYGqeBlHJajEoXBgNQo27Gt6fDDJC4USxgup0xptMUBYej4iD~jEOVq0WV5xRXWtPa85wZ-ay29E2NnWviUeaRdF4ub2I6bWNpxMtS0j7aXe1bfkPiem~rL~OPUCnbzJAqsTLj1auCbWqRNYVZZUzPcdrS3fXaE4NgQFiZWN~VXjb~DVgfQBBRbLr352tE9NuzZmoRfyT9HiayBLcF-XcHaaMdGjVsx3xc4GjFGAeFWMVZ8qMSL1ookK5IHSnIy0~JFBfw__"
                      alt=""
                    />
                  </div>
                  <div className="rounded-full border-2 overflow-hidden shadow-xl p-1">
                    <img
                      className="h-24"
                      src="https://s3-alpha-sig.figma.com/img/ee39/5edb/f6c5b80024f71b927e161b7f9c557fda?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BUcU8UvldPeU7syMWJsSI8oJu3B7FfgAgZMu1rl0vqp0BcBqartl8rsQxLgmROcDhdELjjUuF3zObjWqxUxH4D8-gDbpGoqMLG8PVNQyIcFvEUqFvwh5CHL~jFYXjD1dvOOkJILVU-oSL4m1Up5TmV2qsfm6hzt6YNq2-8-kfXzIPUSfgY-otnUndflKpXCnCX4CjUOzEFsvX0iYFVhGCBIiZynuwXTlR5c7xySq-CmCql5W-fuX7Y6dROE7~wOFS0ELSJ-fqDOn6uda6arT--Gb3MZq6U75Brjm4ij~ii6EjH2EVxGMAx5khUwo8E~UmXPinam5uTWxIYCrhpizcg__"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" flex justify-start items-center gap-3 ">
                  <div className="rounded-full border-2 overflow-hidden shadow-xl p-1">
                    <img
                      className="h-24"
                      src="https://s3-alpha-sig.figma.com/img/c3f5/6f77/e11ff0bff3247d489e8be84be038a788?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oimSBz46Byx4cq3RJSmT3f63J-U-KGS0VLJbfcxPVtXsgvpq2izrt201Pmxr~rKdac7v0fWRV36kb19LSr~zTpw1DO2~yRkEqrRKySFvKY-l~n91EmAr700ikhVYn3ORBVLc973ukJP15iEv39nZzYLvOqg9nAy6yYqPS1lzy-0EdvF1-W-CoMfzoLs0AwUaqunkSz6N4WFiAiOrvxOlyb3c3mokK0CFPW2gIkhu6MdBVXhtmTSGq0EG3m0~q70yM2ZDnzIh1kkFQmhS7-8PPaipWiAsYSeOsv~zyw6tt~hE1KYEHOAcoBp6idGqLJFsY3Y0fhsP5FIocEO--BMNkg__"
                      alt=""
                    />
                  </div>
                  <div className="rounded-full border-2 overflow-hidden shadow-xl p-1">
                    <img
                      className="h-24"
                      src="https://s3-alpha-sig.figma.com/img/30cb/6aa9/c4c82dd4ce1b2413369af4f0a2e86566?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H5lDT8541ztBTCmNugvJ1MriGA6Vhrr6TGomWpyEdtZriWXNq13X6KECTN7l8NZr9Upoy9R49ckn6TomjaXMvzeVB12eF1bwEsnRD~pY69gPJdt1sDDD2CbGzzyweWQnPRDuGL1hKwQFnTer617BaCZugGaGyM21UacrLxfhHfjMBNf4wesmezJF-hyTHZSKD2CurBwiuxLHxlRjN3ho90LIeasQ6KAsY7iAOj5AjWnZ3wzJkQxKJYAvngUrSVZqnCsDujZdWvt9oe5BXvLTvBR3-kqalYlHZVGNNg8sLFWkQ3~p--izP9gWdLarh96AYFYlNO0UwMBftibq24XBRA__"
                      alt=""
                    />
                  </div>

                  <div className="rounded-full border-2 overflow-hidden shadow-xl p-1">
                    <img
                      className="h-24"
                      src="https://s3-alpha-sig.figma.com/img/fb06/e7fa/8a69271a0658568dacc24bea2b266d77?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YIVHq2oIPOorGJsT-yTBhXe2lIMiKkzdMyA7Zeu4KXojuVN-5KoYZbVUXIpukZQdlJbcw6HzAaV5V~9JtaqNbwolrnWiqpftLtVeUsf7IMR5kgBXBranvyv08rKZzFFVYv9RN~gVCyCKix~7YLJ2OPS~YKPYJkq7rR0WGfOfAUjl6Clr5T0D2UEB1xOvUVdw0C3nPc~lenxKe07wcFJ-fsovxwwKFYyHEp1aMDDTK~-p1Xf9UEI8~ar9Qc0FG2HbjtLSBVEVfHtQgPyigEIKuYCZCLCk1TEfk6qGgryIZ-dTOUtA2NkKaTCh6qhpuPOXlMXinTR7uF8QOSNKEsjQVQ__"
                      alt=""
                    />
                  </div>
                  <div className="rounded-full border-2 overflow-hidden shadow-xl p-1">
                    <img
                      className="h-24"
                      src="https://s3-alpha-sig.figma.com/img/5717/9106/ca17d446183af350a4245aeb5d75418d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INwHfDPVsL0YM335ySIdsCGmQIAjDFLDTEOLEmwCn8n-AnWj4kG-h3QJDxWnpDCn7MmHSG4db5zbTJmyBdFu~rI~hVXesrRqIXYZUxVA4I-YCOEIF-kC2Vk4q8ZsuqBGdyhhG0Mi969E40Nb-kwsgSkrg-6fc~vq0w~hLDHeA-z1BGP~u36IuE0c4k~mskt7CuN0myo~LX3K4BgMmLl1QuUFqCwtfYqDHTHLm5w5Qx~O8OsjCW5LSl7K6UzMsqGVe~G2nXyOLRlhUC6lS3zP6jxdJZLDi7X8qYOUHZ9kCJxPGs6BjHSElnP7XqacqiZe0TPAHYEUfENiJ2qgf0vBMA__"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 py-4">
              <p className="text-4xl font-medium">Top Perfumes</p>
              {/* perfume grid here */}
              <div className="grid place-items-center">
                <button className="px-8 py-2 font-medium border rounded-md">
                  SHOP MORE
                </button>
              </div>
            </div>

            <div className="space-y-8 py-4">
              <p className="text-4xl font-medium">Similar Perfumes</p>
              {/* perfume grid here */}
              <div className="grid place-items-center">
                <button className="px-8 py-2 font-medium border rounded-md">
                  SHOP MORE
                </button>
              </div>
            </div>

            <div className="grid gap-5 container ">
              <span className="font-medium text-3xl py-4">Rating/Results</span>

              <RatingResult />
            </div>
          </div>
          <div className="col-span-1">
            {/* right side section for perfume review listing */}
            <div className="px-4">
              <div className="flex justify-between items-center py-4 ">
                <span className="text-2xl font-semibold ">Perfume Reviews</span>{" "}
                <Link
                  href={`/write-a-review`}
                  className="text-pink-400 font-medium"
                >
                  Write a review
                </Link>
              </div>

              <CardsList data={perfumeReviews} />
            </div>
            <div className="px-4">
              <div className="flex justify-between items-center py-4">
                <span className="text-2xl font-semibold ">Trending News</span>{" "}
              </div>
              <CardsList data={topNews} />

            </div>
          </div>

          <Review />
        </div>
      </div>
    </>
  );
};

export default page;
