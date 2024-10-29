async function getPerfumeById(perfumeId) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/${perfumeId}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
}

async function getPerfumes() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume`
  );
  const data = await response.json();
  return data;
}

// import CircularProgress from "@/app/_components/CircularProgress/CircularProgress";

import { GiFruitBowl } from "react-icons/gi";
import { FaLongArrowAltUp } from "react-icons/fa";
import ProsCons from "../_ProsCons";
import Image from "next/image";
import Review from "./Review";
import "./style.css";
import RatingResult from "@/app/_components/RatingResult/RatingResult";

import Link from "next/link";
import CardsList from "@/app/_components/CardsList/CardsList";
import ProductCards from "@/app/_components/ProductCards/ProductCards";
import Feedback from "@/app/_components/Feedback/Feedback";
import PerfumePhotos from "@/app/_components/PerfumePhotos/PerfumePhotos";
import { FaQuoteLeft } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import ToggleButton from "@/app/_components/ToggleButton/ToggleButton";
import PieChart from "@/app/_components/DoughnutGraph/DoughnutGraph";
import { FaFacebookF } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import RelatedFragram from "./RelatedFragram";
import FragramRatings from "./FragramRatings";
import VideoBox from "@/app/_components/VideoBox/VideoBox";

const page = async ({ params }) => {
  const { productId } = params;

  const topPerfumes = [
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.75909.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.63832.jpg",
      title: "Delina La Rosée Parfums de Marly for women",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.6458.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },

    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.90689.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.2355.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.35456.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.2355.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl: "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
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

  const data = await getPerfumeById(productId);
  const perfumeData = await getPerfumes();
  console.log(data?.data, "data");
  const purchaseLinksData = data.data?.purchaseLinks;

  return (
    <>
      {/* feedback form  */}

      <div className="min-h-screen container mx-auto py-20 px-4">
        <p className="text-4xl font-medium py-6">
          {/* {data?.data?.perfume}{" "} */}
          <span className="text-4xl font-semibold ">
            Yeah! Perfume Maison Alhambra for men
          </span>
        </p>
        <div className=" gap-x-10 gap-y-14 grid lg:grid-cols-[auto_25rem]">
          <div className="grid grid-cols-[55%_45%]  ">
            <div className=" ">
              <img src={data?.data?.banner} alt="img" srcset="" />
              {/* <Image
                src="https://res.cloudinary.com/dnixhctcf/image/upload/v1721022071/Design%20Destination/nmviowb6pwjlhli0f3nz.png"
                width={500}
                height={300}
                alt="Description"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              /> */}
              {/* <div className="w-full  grid place-items-center ">
                <img
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTx9i5DBcQkjbErPnz2sW4ykIsR66GdgUbTwxahsuFDhg1o5Z1HQBanzufmDf605qhNqlrLF1eOti2Pd9IW1xsmFLuSQly7QSFrBAMrSEh8X-qxtvgNDn5x"
                  alt="img"
                  srcset=""
                />
              </div> */}
              <div className="flex justify-around px-14  py-8 md:mt-6">
                <div className="w-fit grid place-items-center gap-1">
                  <IoHeart
                    className="border-2 size-12 border-black rounded-full p-1 text-pink-300"
                    size={38}
                  />
                  <div className="h-1 w-full bg-pink-400"></div>
                  <span>17 Dislikes</span>
                </div>

                <div className="w-fit grid place-items-center gap-1">
                  <Image
                    className="border-2 size-12 border-black rounded-full"
                    src="/likes.svg"
                    width={50}
                    height={50}
                    alt=""
                  />
                  <div className="h-1 w-full bg-pink-400"></div>
                  <span>17 Dislikes</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center  items-center gap-4 ">
              <div className="rounded-full overflow-hidden  w-fit">
                <img className="size-40" src={data?.data?.logo} alt="" />
              </div>
              <div className="flex flex-wrap w-full">
                <PieChart mainAccords={data?.data?.mainAccords} />
              </div>
            </div>
          </div>

          <div className=" space-y-14">
            <div className="border-2 border-pink-500 rounded grid place-items-center py-4 gap-8">
              <div className="text-xl md:text-2xl font-semibold">Register</div>
              <div className="space-x-4 flex">
                <Link
                  href="/login"
                  className="w-[8rem] rounded border border-pink-500"
                >
                  <button className="  py-2  w-full">Login</button>
                </Link>
                <Link
                  href="/signUp"
                  className="w-[8rem] rounded border border-pink-500"
                >
                  <button className=" py-2 w-full">Register</button>
                </Link>
              </div>
              <button className="bg-[#1777F2] font-medium text-white px-4 py-2 rounded flex justify-center items-center gap-2">
                {" "}
                <FaFacebookF />
                Login
              </button>
            </div>
            <div className="h-[33rem]  border rounded-md overflow-hidden">
              <img
                className="h-full mx-auto"
                src="https://img.pikbest.com/origin/06/25/40/84bpIkbEsTgk3.jpg!sw800"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" gap-x-10 gap-y-14 grid  lg:grid-cols-[auto_20rem] py-8">
          <div className="space-y-8">
            <div className="grid md:grid-cols-[60%_40%] gap-y-4 md:gap-y-0 h-fit">
              <div className="space-y-12 w-full flex flex-col justify-center items-center ">
                {data?.data?.purchaseLinks?.map((item) => {
                  return (
                    <Link href={item?.link} target="_blank">
                      <div className="flex gap-4 text-xl font-semibold justify-start items-center bg-[#FAF6FF] w-[20rem] px-6 py-2 rounded-xl">
                        <span>{item?.company}</span>
                        {/* <img src={item?.img} alt="" /> */}
                      </div>
                    </Link>
                  );
                })}
              </div>
              <VideoBox />
            </div>
            <Feedback />
            {/* detail start */}
            <div className="space-y-3">
              <div className="font-medium">{data?.data?.details}</div>

              <div className="relative border-y-2 py-4">
                <div className="p-2 absolute -top-5 left-[50%] bg-white">
                  <FaQuoteLeft size={20} className=" text-[#83a6c4]" />
                </div>
                {data?.data?.description}
              </div>
              <div className="relative border-b-2 py-4 text-[#138B92]">
                <span className="text-[#A2ADC4]">
                  {" "}
                  Read about this perfume in other languages:
                </span>{" "}
                Deutsch, Español, Français, Čeština, Italiano, Русский, Polski,
                Português, Ελληνικά, 汉语, Nederlands, Srpski, Română, العربية,
                Українська, Монгол, עברית.
              </div>
            </div>
            {/* detail ends */}

            {/* pros n cons */}
            <ProsCons data={data?.data} />
            {/* pros n cons */}
          </div>
          <div>
            <div className="w-full  flex flex-col gap-10">
              <div className=" w-full text-center py-4 shadow-lg">
                <span className="text-xl md:text-2xl  font-semibold ">
                  Perfume Reviews
                </span>
              </div>
              <CardsList data={perfumeReviews} />
            </div>
          </div>
        </div>
        {/* Perfume Photos starts */}
        <div className="py-14">
          <div className="w-full relative grid place-items-center mb-6">
            <div className="h-[2px] w-full bg-black absolute"></div>
            <p className="text-3xl font-medium bg-white px-4 z-30">
              Perfume Photos
            </p>
          </div>
          <PerfumePhotos data={data?.data?.gallery} />
        </div>
        {/* Perfume Photos ends */}

        {/* Fragrance Notes starts */}
        <div>
          <div className="w-full relative grid place-items-center mb-6">
            <div className="h-[2px] w-[70%] bg-black absolute"></div>
            <p className="text-3xl font-medium bg-white px-4 z-30">
              Fragrance Notes
            </p>
          </div>
          <div className="grid lg:grid-cols-[auto_20rem]">
            <div className="flex items-start justify-center lg:translate-x-6   gap-10 ">
              <div className="flex items-center gap-12  ">
                <div className="p-4 ">
                  <p className="px-20 font-bold">High</p>
                  <div className="">
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="35.000000pt"
                      height="300.000000pt"
                      viewBox="0 0 35.000000 300.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      {" "}
                      <g
                        transform="translate(0.000000,300.000000) scale(0.050000,-0.050000)"
                        fill="#000000"
                        stroke="none"
                      >
                        {" "}
                        <path d="M327 5859 c-47 -117 -138 -288 -211 -394 -66 -97 -58 -101 89 -45 58 22 112 40 120 40 8 0 15 -1224 15 -2720 0 -2404 3 -2720 30 -2720 27 0 30 316 30 2721 l0 2722 45 -14 c25 -8 88 -30 140 -50 114 -42 113 -44 25 78 -38 54 -110 181 -158 284 l-89 187 -36 -89z" />{" "}
                      </g>{" "}
                    </svg>
                  </div>
                  <p className="px-20 font-bold">Low</p>
                </div>

                <div className="relative  grid place-items-center  w-fit">
                  <Image
                    src={"/PerfumeBottle.svg"}
                    height={400}
                    width={450}
                    alt=""
                  />
                  <div className="absolute   flex flex-col -translate-x-3 max-w-[16rem] gap-4">
                    <div className="flex flex-col gap-4 justify-center items-center overflow-auto ">
                      <p className="text-center font-bold">Top Notes</p>
                      <div className="flex gap-4 text-sm">
                        {data?.data?.topNote &&
                          data?.data?.topNote.map((el) => {
                            return (
                              <div
                                key={el._id}
                                className=" flex flex-col  justify-center items-center "
                              >
                                <img
                                  src={el.image}
                                  alt={el.name}
                                  className="w-10 h-10"
                                />
                                <p>{el.name}</p>
                              </div>
                            );
                          })}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 justify-center items-center overflow-auto">
                      <p className="text-center font-bold">Middle Notes</p>
                      <div className="flex gap-4">
                        {data.data?.middleNote.map((el) => {
                          return (
                            <div
                              key={el._id}
                              className=" flex flex-col  justify-center items-center "
                            >
                              <img
                                src={el.image}
                                alt={el.name}
                                className="w-10 h-10"
                              />
                              <p>{el.name}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 justify-center items-center overflow-auto">
                      <p className="text-center font-bold">Base Notes</p>
                      <div className="flex gap-4">
                        {data.data?.baseNote.map((el) => {
                          return (
                            <div
                              key={el._id}
                              className=" flex flex-col  justify-center items-center "
                            >
                              <img
                                src={el.image}
                                alt={el.name}
                                className="w-10 h-10"
                              />
                              <p>{el.name}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <CardsList data={perfumeReviews} />
            </div>
          </div>
        </div>
        {/* Fragrance Notes ends */}

        {/* Releted Fragram starts */}
        <RelatedFragram />
        {/* Related Fragram ends */}

        {/*Ya perfume categories starts */}
        <div className=" grid lg:grid-cols-[auto_20rem]">
          <div className="space-y-6 px-6">
            <div className="text-3xl text-center md:text-left text-green-500 font-medium">
              Yeah Perfume Categories
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-14">
              {Array.from({ length: 6 }).map((item) => {
                return (
                  <div class="max-w-xs mx-auto bg-white rounded-lg shadowE cursor-pointer p-2 overflow-hidden">
                    <div class="h-48 bg-whtie flex items-center justify-center">
                      <img
                        className="h-48"
                        src="https://i.pinimg.com/736x/6f/a5/02/6fa502656a0d48ee31a5d2f8ed36e80f.jpg"
                        alt=""
                      />
                    </div>
                    <div class="p-4">
                      <h2 class="text-sm font-semibold text-blue-600">
                        Versace Dylan Blue Eau De Toilette, 100ml for Men
                      </h2>
                      <div class="mt-2">
                        <span class="text-xl font-bold text-gray-900">
                          ₹7,680.00
                        </span>
                        <span class="text-gray-600">(₹76.80 / millilitre)</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <FragramRatings />
            <div className="grid gap-5 container ">
              <span className="font-medium text-3xl py-4">Rating/Results</span>

              <RatingResult />
            </div>
            <div className="space-y-5">
              <div className="grid gap-2">
                <span className="text-3xl font-medium">Add Your Review</span>
                <textarea
                  className="resize-none border-2 px-3 py-2 outline-none rounded-md border-gray-400"
                  name=""
                  placeholder="Add Your Review..."
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <div>
                  <label
                    className="flex px-6 font-medium py-3 bg-gray-300 w-fit rounded-md justify-center items-center gap-3"
                    htmlFor="image"
                  >
                    Upload Images <IoMdAdd size={25} />
                  </label>
                  <input
                    multiple
                    className="hidden"
                    type="file"
                    name="image"
                    id="image"
                  />
                </div>
              </div>
              <Review />
            </div>
          </div>
          <div>
            <CardsList data={perfumeReviews} />
            <CardsList data={perfumeReviews} />
          </div>
        </div>
        {/*Ya perfume categories ends */}
      </div>
    </>
  );
};

export default page;
