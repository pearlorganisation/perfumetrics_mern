import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import CardsList from "../CardsList/CardsList";

const News = () => {
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
    <div className="max-w-7x container py-12 px-20  grid grid-cols-[auto_25rem] gap-10 mx-auto max:w-8xl">
      <div className="space-y-4">
        <div className="flex justify-between items-center text-lg md:text-3xl font-medium">
          News{" "}
          <button className="border rounded-md font-medium px-4 py-2 text-base">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {Array(1)
            .fill(true)
            .map((item) => {
              return (
                <div className="space-y-4 w-full">
                  <img
                    className="w-full h-[30rem] object-cover"
                    src="https://plus.unsplash.com/premium_photo-1661490025820-ce090e391627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkzfHxwZXJmdW1lfGVufDB8fDB8fHww"
                    alt=""
                  />
                  <div className="flex text-[#747474] justify-start items-center gap-3">
                    <span className="flex justify-start items-center gap-2">
                      {" "}
                      <FaCalendarAlt /> 24 Oct,2021{" "}
                    </span>{" "}
                    <span className="flex justify-start items-center gap-2">
                      {" "}
                      <FaRegComment />
                      136 COMMENTS
                    </span>
                  </div>
                  <span className="font-medium text-lg text-[#195A94]">
                    Is your perfume sustainble?
                  </span>
                  <p className="line-clamp-10">
                    Let’s get the bad news over with first. The moment a brand
                    exists, sustainability no longer exists. Even at its most
                    responsible, a brand creates waste in some form. And if
                    anyone harps about your carbon footprint—just a friendly
                    reminder that it’s a term coined by the marketing division
                    of British Petroleum, placing the blame of environmental
                    damage on consumers and not the companies drilling for
                    fossil fuel. And if anyone harps about your carbon
                    footprint—just a friendly reminder that it’s a term coined
                    by the marketing division of British Petroleum, placing the
                    blame of environmental damage on consumers and not the
                    companies drilling for fossil fuel. blame of environmental
                    damage on consumers and not the companies drilling for
                    fossil fuel.
                  </p>
                  <div className="flex justify-between items-center border-t-2 py-3">
                    <div className="flex justify-start items-center gap-3">
                      {" "}
                      <img
                        className="size-12 rounded-full"
                        src="https://s3-alpha-sig.figma.com/img/089a/2714/3331134f1016dba8ea3170d3c4d2005c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dHG0kCnfeD~GwR5qCtntoD6~baaQJoE6BXpP-Ln1i8ZH5-HJOVMG16KpZXjAzw5cbMZscGD3bpXznXw3N3n7z-rulhToW9cIFe2Uz4GCM3I0rrQ7R-QJQU9nQviWl3jx0H7asADus63xto~y8UAVBCWAyypVPri-DlboLsT9k9UvwPsaCX0AwfwPTdxK6FEuNdgFP2d76qKMdy1Hs81jL~rNcxEog166WjMOk-lMohLRIl3xO~aGbF~Z~UgsShxCQKe3aRFv0chByChkdb09MCqslaY0dRs8-FoExENgGg5~eaQZkqoxNmIO96n~NUsvbDULI8KArG7oAygl10-w2g__"
                        alt=""
                      />{" "}
                      <span>Windy Bond</span>
                    </div>
                    <button className="px-4 py-2 bg-[#195A94] text-white rounded-md">
                      Read More
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="border-">
        {/* <div className="font-medium text-lg md:text-3xl py-4">
          Latest Reviews
        </div> */}
        <CardsList data={perfumeReviews} />
        
      </div>
    </div>
  );
};

export default News;
