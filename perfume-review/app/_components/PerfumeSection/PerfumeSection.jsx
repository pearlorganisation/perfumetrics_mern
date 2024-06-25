import Link from "next/link";
import { IoIosArrowRoundForward, IoMdStar, IoMdStarHalf } from "react-icons/io";

function PerfumeSection() {
  const topPerfumes = [
    {
      imgUrl:
        "https://fimgs.net/mdimg/perfume/375x500.75909.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl:
        "https://fimgs.net/mdimg/perfume/375x500.63832.jpg",
      title: "Delina La Rosée Parfums de Marly for women",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl:
        "https://fimgs.net/mdimg/perfume/375x500.6458.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl:
        "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },

    {
      imgUrl:
        "https://fimgs.net/mdimg/perfume/375x500.90689.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl:
        "https://fimgs.net/mdimg/perfume/375x500.2355.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl:
        "https://fimgs.net/mdimg/perfume/375x500.35456.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl:
        "https://fimgs.net/mdimg/perfume/375x500.2355.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
    {
      imgUrl:
        "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
      title: "Pacific Rock Moss Goldfield & Banks Australia for women and men",
      rating: 5,
      reviewLink: "",
    },
  ];

  const perfumeReviews = [
    {

      imgUrl:
        "https://fimgs.net/mdimg/perfume/375x500.2355.jpg",
      name: "al haraman",
      brand: null,
    },
    {
      imgUrl:
        "https://fimgs.net/mdimg/perfume/375x500.90689.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
      imgUrl:
        "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
      imgUrl:
        "https://fimgs.net/mdimg/perfume/375x500.35456.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
      imgUrl:
        "https://fimgs.net/mdimg/perfume/375x500.90689.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
      imgUrl:
        "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
    {
      imgUrl:
        "https://fimgs.net/mdimg/perfume/375x500.35456.jpg",
      name: "Denver",
      brand: "Cereria Terenzi Evelino S.R.L.",
    },
  ];

  return (
    <>
      <div className="w-full flex flex-wrap justify-between px-20 py-10">
        <div className="w-full md:w-2/3 flex flex-col gap-10">
          <div className="shadow-[0_2px#ff1269] w-fit py-4">
            <span className="text-2xl md:text-3xl xl:text-4xl font-semibold ">
              Top Perfume
            </span>
          </div>
          <div className="flex gap-4 flex-wrap ">
            {topPerfumes &&
              topPerfumes.map((e) => (

                <Link href='/product/3243242' className="w-full md:w-[30%] flex flex-col gap-2 rounded-md shadow-[0_2px_30px_2px#cccccc] hover:shadow-[0_0_0_2px#c90061]  transition duration-300">
                  <img src={e.imgUrl} width={"100%"} height={"300px"} />
                  <div className="flex flex-col h-full gap-2 items-center px-4 pb-4">
                    <div className="w-full text-sm text-center font-semibold h-1/2">
                      {e.title}
                    </div>
                    <div className="flex text-pink-500 h-[50px]">
                      <IoMdStar size={28} />
                      <IoMdStar size={28} />
                      <IoMdStar size={28} />
                      <IoMdStar size={28} />
                      <IoMdStarHalf size={28} />
                    </div>
                    {/* put links below in read review currently it's a div */}
                    <div className="flex text-center text-pink-500 cursor-pointer">
                      <span className="flex flex-col justify-center">
                        <IoIosArrowRoundForward size={28} />
                      </span>
                      <span>Read review</span>
                    </div>
                  </div>
                </Link>

              ))}
          </div>
        </div>
        <div className="w-full md:w-[25%] flex flex-col gap-10">
          <div className="shadow-[0_2px#ff1269] w-fit py-4">
            <span className="text-2xl md:text-3xl xl:text-4xl font-semibold ">
              Perfume Reviews
            </span>
          </div>
          <div className="w-full flex flex-col gap-2 shadow-[0_2px_50px_2px#cccccc] rounded-md">
            {perfumeReviews &&
              perfumeReviews?.map((e) => (
                <div className="w-full flex p-2 shadow-sm group hover:bg-pink-500 cursor-pointer tranistion duration-300">
                  <div className="flex flex-col justify-center w-1/4">
                    <img src={e.imgUrl} width={"100%"} />
                  </div>
                  <div className="w-full flex flex-col justify-center items-center">
                    {e?.name && (
                      <div className="text-base font-semibold group-hover:text-white">
                        {e?.name}
                      </div>
                    )}
                    {e?.brand && (
                      <div className="text-sm font-semibold text-pink-500 group-hover:text-white">
                        {e?.brand}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PerfumeSection;
