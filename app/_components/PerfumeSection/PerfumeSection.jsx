async function getPerfumes() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/topRatedPerfume`,
    {
      cache: 'no-store'
    }
  )
  const data = await response.json()
  return data
}

async function getGlobalVideo() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/globalData?itemType=video`
  );
  const data = await response.json();
  console.log(data?.data[0], "globalData")
  return data?.data[0];
}



import Link from "next/link";
import CardsList from "../CardsList/CardsList";
import ProductCards from "../ProductCards/ProductCards";
import { FaFacebookF } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

async function PerfumeSection({ reviewSidebar, length }) {
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

  const data = await getPerfumes();
  const gVideo = await getGlobalVideo()

  // console.log(Array.isArray(data.data), "rwegtfuw", data);

  return (
    <>
      <div className="w-full  grid lg:grid-cols-[auto_20rem] lg:gap-y-0 gap-1 gap-x-1 px-8 md:px-0 py-10">

        <div className="w-full  flex flex-col gap-4">
          <div class="grid place-items-center relative mb-8">
            <h1 class="text-3xl font-medium px-8 py-3 bg-white z-40 relative lg:left-[-11rem] w-[20rem] text-center bottom-[.1rem]">
              Top Rated Fragrance
            </h1>
            <div class="absolute w-full h-[2px] bg-slate-500"></div>
          </div>
          {
            <ProductCards data={data}
            />
          }

        </div>
        <div className="space-y-10 mt-[6.6rem] ml-[31px]">
          <div className="border-2 border-pink-500 rounded grid place-items-center py-4 gap-8">

            <div className="text-xl md:text-2xl font-semibold">Register</div>
            <div className="space-x-4"><button className="w-[8rem] py-2 rounded border border-pink-500">
              <Link href='/login'>Login</Link>
            </button><button className="w-[8rem] py-2 rounded border border-pink-500"><Link href='/signUp'>Register</Link></button></div>
            <button className="bg-[#2f55a4] font-medium text-white px-4 py-2 rounded flex justify-center items-center gap-2"> <FaFacebookF />Login</button>
          </div>
          <div className="grid place-items-center border border-pink-500 h-40 overflow-hidden">

            {
              gVideo?.item && <div className="grid place-items-center relative bg-slate-100  md:h-[12rem] md:w-[90%] border overflow-hidden">

                <iframe
                  src={gVideo?.item[0]?.path}
                  width="100%"
                  height="100%"

                ></iframe>



              </div>
            }
          </div>
          <div className="w-full  flex flex-col gap-10">
            <div className="border border-pink-500 w-full text-center py-4 shadow-lg">
              <span className="text-xl md:text-2xl  font-semibold ">
                Perfume Reviews
              </span>
            </div>
            <CardsList reviewData={reviewSidebar} length={length} />
          </div>
        </div>

      </div>
    </>
  );
}

export default PerfumeSection;
