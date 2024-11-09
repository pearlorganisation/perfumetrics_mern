async function getPerfumeById(perfumeId) {
    const response = await fetch(
        `https://perfume-backend-1.onrender.com/api/v1/perfume/${perfumeId}`,
        {
            cache: "no-store",
        }
    );
    const data = await response.json();
    return data;
}

async function getPerfumes() {
    const response = await fetch(
        `https://perfume-backend-1.onrender.com/api/v1/perfume`
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

    const data = await getPerfumeById(productId);
    const perfumeData = await getPerfumes();
    console.log(data?.data, "data");
    const purchaseLinksData = data.data?.purchaseLinks;

    return (
        <>
            {/* feedback form  */}

            <div className="min-h-screen container mx-auto py-20">
                <div className="grid gap-x-10 gap-y-14 grid-cols-[auto_25rem]">
                    <div className="grid grid-cols-2">
                        <div>
                            <p className="text-3xl font-medium">
                                {/* {data?.data?.perfume}{" "} */}
                                <span className="text-4xl ">
                                    Yeah! Perfume Maison Alhambra for men
                                </span>
                            </p>
                            {/* <img src={data?.data?.banner} alt="img" srcset="" /> */}
                            <img
                                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTx9i5DBcQkjbErPnz2sW4ykIsR66GdgUbTwxahsuFDhg1o5Z1HQBanzufmDf605qhNqlrLF1eOti2Pd9IW1xsmFLuSQly7QSFrBAMrSEh8X-qxtvgNDn5x"
                                alt="img"
                                srcset=""
                            />
                        </div>

                        <div className="flex flex-col justify-center  items-center gap-4">
                            <div className="rounded-full overflow-hidden border w-fit">
                                <img className="h-40" src={data?.data?.logo} alt="" />
                            </div>
                            <div className="flex flex-wrap">
                                <PieChart mainAccords={data?.data?.mainAccords} />
                            </div>
                        </div>
                    </div>
                    {/* right side section for perfume review listing starts here */}
                    <div className="row-span-9">
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
                    </div>
                    {/* <div className=" flex gap-x-5 gap-y-4 flex-wrap max-w-2xl">
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
            </div> */}

                    <ToggleButton />
                    {/* <p className="text-lg">
              Guess Mens Seductive Blue Body Mist ...{" "}
              <span className="font-medium ">(10.99 USD)</span>
            </p> */}
                    <div className="space-y-3">
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

                    <div className="space-y-3">
                        <div className="font-medium">{data?.data.details}</div>

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

                    <ProsCons data={data?.data} />

                    <div>
                        <div>
                            <h1 className="text-center text-2xl font-bold px-6">
                                Fragrance Notes
                            </h1>
                        </div>

                        <div className="flex  items-center  gap-10">
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
                                    width={400}
                                    alt=""
                                />
                                <div className="absolute   flex flex-col -translate-x-3 max-w-[16rem] gap-4">
                                    <div className="flex flex-col gap-4 justify-center items-center overflow-auto ">
                                        <p className="text-center font-bold">Top Notes</p>
                                        <div className="flex gap-4 text-sm">
                                            {data.data.topNote &&
                                                data.data.topNote.map((el) => {
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

                    <div className="w-full col-span-2">
                        <p className="text-3xl font-medium">Perfume Photos</p>
                    </div>
                    <PerfumePhotos data={data?.data?.gallery} />

                    <div className="space-y-8 py-4">
                        <p className="text-4xl font-medium">Top Perfumes</p>
                        <ProductCards data={perfumeData?.data} />
                        <div className="grid place-items-center">
                            <button className="px-8 py-2 font-medium border rounded-md">
                                SHOP MORE
                            </button>
                        </div>
                    </div>

                    {/* right side section for perfume review listing starts here */}
                    <div className="row-span-9 ">
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
                    </div>

                    <div className="space-y-8 py-4">
                        <p className="text-4xl font-medium">Similar Perfumes</p>
                        <ProductCards data={perfumeData?.data} />
                        <div className="grid place-items-center">
                            <button className="px-8 py-2 font-medium border rounded-md">
                                SHOP MORE
                            </button>
                        </div>
                    </div>

                    <div className="grid gap-5 container">
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
            </div>
        </>
    );
};

export default page;
