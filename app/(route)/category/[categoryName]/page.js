async function getPerfumes() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
}

import Link from "next/link";

import { FaFacebookF } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import CardsList from "@/app/_components/CardsList/CardsList";
import ProductCards from "@/app/_components/ProductCards/ProductCards";

async function PerfumeSection({ params }) {
  console.log(params, "params");
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
  ];

  const data = await getPerfumes();
  console.log(Array.isArray(data.data));

  return (
    <>
      {["WOMEN'S STYLE", "MEN'S STYLE"].includes(
        params?.categoryName.split("%20").join(" ")
      ) ? (
        <div className="container mx-auto px-4 py-10 min-h-screen">
          <div className="w-full flex flex-col gap-8">
            <div className="grid place-items-center relative mb-8">
              <h1 className="text-3xl font-medium px-6 py-2 bg-white z-40 relative  text-center bottom-[.1rem]">
                {params?.categoryName?.split("%20")?.join(" ")}
              </h1>
              <div className="absolute w-full h-[2px] bg-slate-500"></div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                {
                  brand: "DIOR",
                  url: "https://img.freepik.com/free-vector/luxury-perfume-logo-concept_23-2148476347.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725321600&semt=ais_hybrid",
                },
                {
                  brand: "PRADA",
                  url: "https://img.freepik.com/premium-vector/letter-u-perfume-logo-design-elegant-luxury-scent-initial-logo_680355-1119.jpg?w=360",
                },
                {
                  brand: "GUESS",
                  url: "https://img.pikbest.com/origin/10/12/78/39upIkbEsTgcE.jpg!w700wp",
                },
                {
                  brand: "CHLOE",
                  url: "https://t3.ftcdn.net/jpg/04/01/72/28/360_F_401722870_Xio5WyZiS2Z0mwHzIll2R4mocKUWLnKj.jpg",
                },
              ].map((item) => {
                return (
                  <div className="group transition-all flex flex-col overflow-hidden">
                    <a
                      className="relative flex h-60 sm:h-72 md:h-80 overflow-hidden  rounded-md border-2 border-pink-400 bg-white "
                      href="#"
                    >
                      <img
                        className="absolute right-0 top-0 h-full w-full object-cover"
                        src={item?.url}
                        alt="product image"
                      />
                    </a>
                    <div className="mt-4">
                      <a href="#">
                        <h5 className="text-center font-semibold tracking-tight text-black">
                          {item?.brand}
                        </h5>
                      </a>
                      {/* <div className="mb-5 flex justify-center">
                        <p>
                          <span className="text-sm font-bold text-gray-900">
                            $179
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            $499
                          </span>
                        </p>
                      </div> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen grid place-items-center">No Data</div>
      )}
    </>
  );
}

export default PerfumeSection;
