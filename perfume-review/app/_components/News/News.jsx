import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

const News = () => {
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
        <div className='max-w-7x container py-12  grid grid-cols-[auto_25rem] gap-10 mx-auto max:w-8xl'>
            <div className='space-y-4'>
                <div className='flex justify-between items-center text-4xl font-medium'>News <button className='border rounded-md font-medium px-4 py-2 text-base'>View All</button></div>
                <div className='grid grid-cols-2 gap-6'>
                    {
                        Array(2).fill(true).map(item => {
                            return <div className='space-y-4'>
                                <img className='w-full h-[14rem] object-cover' src="https://s3-alpha-sig.figma.com/img/ed5e/cc4f/7ea3051d8812c9e6bcb0a141806c7328?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BUnY81YdvsItxwlRUlea0kwtalUGRlO0V6M20PTEdAK9q-BizcHlXiCZR2pgdtbGgNlXR0Wd~vOInqD2zTJstVHwRf5o2aoxzvCKdv8fklSTj4yiyrbfgPUF0TudtI6E-dDeASk8nWa0~PiB4HMpqFu8BzPqY9nl646u4ppCZjC5aXwBtGI9iAE~jaysYJ~POWUeXD0LNsWYlUTXozJ4crPD84s48x~mOEjlnoSsF39YoPjsVthMqgdB48z5Fl1ROPnHc4ANLxfoQI6wh~Mysh-X3-OBSCiX1hIeL7agJGzwfMms2j7SRVEfrCon9ReHzkf64LHbOe2ej6JHvScDLA__" alt="" />
                                <div className='flex text-[#747474] justify-start items-center gap-3'>
                                    <span className='flex justify-start items-center gap-2'> <FaCalendarAlt /> 24 Oct,2021 </span> <span className='flex justify-start items-center gap-2'> <FaRegComment />136 COMMENTS</span>
                                </div>
                                <span className='font-medium text-lg text-[#195A94]'>Is your perfume sustainble?</span>
                                <p className='line-clamp-4'>Let’s get the bad news over with first. The moment a brand exists, sustainability no longer exists. Even at its most responsible, a brand creates waste in some form. And if anyone harps about your carbon footprint—just a friendly reminder that it’s a term coined by the marketing division of British Petroleum, placing the blame of environmental damage on consumers and not the companies drilling for fossil fuel. </p>
                                <div className='flex justify-between items-center border-t-2 py-3'>
                                    <div className='flex justify-start items-center gap-3'> <img className='size-12 rounded-full' src="https://s3-alpha-sig.figma.com/img/089a/2714/3331134f1016dba8ea3170d3c4d2005c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dHG0kCnfeD~GwR5qCtntoD6~baaQJoE6BXpP-Ln1i8ZH5-HJOVMG16KpZXjAzw5cbMZscGD3bpXznXw3N3n7z-rulhToW9cIFe2Uz4GCM3I0rrQ7R-QJQU9nQviWl3jx0H7asADus63xto~y8UAVBCWAyypVPri-DlboLsT9k9UvwPsaCX0AwfwPTdxK6FEuNdgFP2d76qKMdy1Hs81jL~rNcxEog166WjMOk-lMohLRIl3xO~aGbF~Z~UgsShxCQKe3aRFv0chByChkdb09MCqslaY0dRs8-FoExENgGg5~eaQZkqoxNmIO96n~NUsvbDULI8KArG7oAygl10-w2g__" alt="" /> <span>Windy Bond</span></div>
                                    <button className='px-4 py-2 bg-[#195A94] text-white rounded-md'>Read More</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='border-'>
                <div className='font-medium text-lg py-4'>Latest Reviews</div>
                <div className="w-full flex flex-col gap-2 shadow-[0_2px_50px_2px#cccccc] rounded-md">
                    {perfumeReviews &&
                        perfumeReviews?.map((e) => (
                            <div className="w-full flex p-5 shadow-sm group hover:bg-pink-500 cursor-pointer tranistion duration-300">
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
    )
}

export default News