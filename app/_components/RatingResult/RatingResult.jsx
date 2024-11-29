"use client"
import React, { useEffect, useState } from 'react'
import { IoIosTimer } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";
import { IoMaleFemale } from "react-icons/io5";
import { userStore } from '@/store/userStore';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from "use-debounce";


const RatingResult = ({ productId }) => {
    const { user } = userStore();
    const [result, setResult] = useState([])
    const [perfumeRatings, setPerfumeRatings] = useState([])
    const [rateData, setRateData] = useState({})
    console.log("dsa", user);
    async function getTotalRatings(perfumeId) {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/productReviewCount/${perfumeId}`)
        console.log(result)
        setPerfumeRatings(result?.data?.data)
    }
    useEffect(() => {
        getTotalRatings(productId)
    }, [])



    const getReviewByUserId = async () => {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/review/user/${user?._id}`)
        console.log(result, "Reslt")
        setResult(result?.data?.data[0])
    }
    const updateReviewByUserId = async (payload) => {
        console.log(productId, "productid")
        console.log(payload, "payload")
        const result = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/productReviewCount/${productId}`, { ...payload })
        getReviewByUserId()
        getTotalRatings(productId)
        console.log(result, "Reslt")
    }
    const [emoji, setEmoji] = useState(1)
    const modifyStr = (str) => {
        return str?.replace(/([A-Z])/g, ' $1')
            .replace(/^./, function (match) { return match.toUpperCase(); })
            .trim()
    }

    const toCamelCase = (str) => {
        if (!str) return ""; // Handle empty or undefined input
        return str
            .toLowerCase() // Convert the string to lowercase
            .split(" ") // Split the string by spaces
            .map((word, index) =>
                index === 0
                    ? word // Keep the first word lowercase
                    : word.charAt(0).toUpperCase() + word.slice(1) // Capitalize the first letter of subsequent words
            )
            .join(""); // Join the array into a single string
    };
    // const updateRating = (p1, p2) => {
    //     if (user?._id) {
    //         console.log(user, "user")
    //         let obj = {}
    //         obj[toCamelCase(p1?.name)] = toCamelCase(p2?.name)
    //         console.log(obj, "obj")
    //         updateReviewByUserId({ userId: user?._id, ...obj })
    //         setRateData(prev => {
    //             return { userId: user?._id, ...obj }
    //         })
    //     } else {
    //         toast.info("Please Login First...")
    //     }

    // }


    const updateRating = useDebouncedCallback((p1, p2) => {
        if (user?._id) {
            console.log(user, "user")
            let obj = {}
            obj[toCamelCase(p1?.name)] = toCamelCase(p2?.name)
            console.log(obj, "obj")
            updateReviewByUserId({ userId: user?._id, ...obj })
            setRateData(prev => {
                return { userId: user?._id, ...obj }
            })
        } else {
            toast.info("Please Login First...")
        }
    }, 300);
    const results = [
        {
            name: "Very Good",
            icons: <svg className='h-8 stroke-[2px]' viewBox="0 0 128 128" fill="currentColor"><path d="M109.2,18.8C84-6.3,43.6-6.3,18.8,18.8c-25.1,25.1-25.1,65.6,0,90.3c25.1,25.1,65.6,25.1,90.3,0
            C134.3,84.4,134.3,43.6,109.2,18.8z M102.3,102.3c-20.9,20.9-55.4,21.3-76.2,0C5.2,81.5,5.2,47,26.1,25.7
            c20.9-20.9,55.4-20.9,76.7,0C123.2,47,123.2,81,102.3,102.3z"></path> <path d="M90,72.5c-1.7-0.9-3.8,0-4.7,1.7c-3.4,8.1-11.8,13.2-20.7,13.2c-0.3,0-0.6,0-0.6,0
            c-9,0-17.6-5.1-21-13.2c-0.9-1.7-3.1-2.6-4.8-1.7c-1.7,0.9-2.4,2.8-1.6,4.9C41.3,87.9,52,94.7,64,94.7c0,0,0.1,0,0.2,0
            c12.4,0,22.9-6.6,27.6-17.3C92.6,75.3,91.7,73.4,90,72.5z"></path> <path d="M44,60.5l2.1,2.1l2.1-2.1c8.1-7.2,13.2-11.9,13.2-17.5c0-4.7-3.8-8.5-8.5-8.5c-2.6,0-5.1,1.3-6.8,3.4
            c-1.7-2.1-4.3-3.4-6.8-3.4c-4.7,0-8.5,3.8-8.5,8.5C30.8,49,35.9,53.7,44,60.5z"></path> <path d="M88.7,34.5c-2.6,0-5.1,1.3-6.8,3.4c-1.7-2.1-4.3-3.4-6.8-3.4c-4.7,0-8.5,3.8-8.5,8.5
            c0,6,5.1,10.6,13.2,17.5l2.1,2.1l2.1-2.1c8.1-7.2,13.2-11.9,13.2-17.5C97.2,38.4,93.4,34.5,88.7,34.5z"></path></svg>,
        },
        {
            name: "Look Good",
            icons: <svg className='h-8 stroke-[2px]' viewBox="0 0 128 128" fill="currentColor"><path d="M109.2,18.8C84-6.3,43.6-6.3,18.8,18.8c-25.1,25.1-25.1,65.6,0,90.3c25.1,25.1,65.6,25.1,90.3,0
            C134.3,84.4,134.3,43.6,109.2,18.8z M102.3,102.3c-20.9,20.9-55.4,21.3-76.2,0C5.2,81.5,5.2,47,26.1,25.7
            c20.9-20.9,55.4-20.9,76.7,0C123.2,47,123.2,81,102.3,102.3z"></path> <circle cx="46.5" cy="47" r="7.7"></circle> <circle cx="81.5" cy="47" r="7.7"></circle> <path d="M90,72.5c-1.7-0.9-3.8,0-4.7,1.7c-3.4,8.1-11.8,13.2-20.7,13.2c-0.3,0-0.6,0-0.6,0
            c-9,0-17.6-5.1-21-13.2c-0.9-1.7-3.1-2.6-4.8-1.7c-1.7,0.9-2.4,2.8-1.6,4.9C41.3,87.9,52,94.7,64,94.7c0,0,0.1,0,0.2,0
            c12.4,0,22.9-6.6,27.6-17.3C92.6,75.3,91.7,73.4,90,72.5z"></path></svg>,
        },
        {
            name: "Fine",
            icons: <svg className='h-8 stroke-[2px]' viewBox="0 0 128 128" fill="currentColor"><path d="M109.2,18.8C84-6.3,43.6-6.3,18.8,18.8c-25.1,25.1-25.1,65.6,0,90.3c25.1,25.1,65.6,25.1,90.3,0
            C134.3,84.4,134.3,43.6,109.2,18.8z M102.3,102.3c-20.9,20.9-55.4,21.3-76.2,0C5.2,81.5,5.2,47,26.1,25.7
            c20.9-20.9,55.4-20.9,76.7,0C123.2,47,123.2,81,102.3,102.3z"></path> <circle cx="46.5" cy="47" r="7.7"></circle> <circle cx="81.5" cy="47" r="7.7"></circle> <path d="M36.7,85.7c0,2.3,1.9,4.2,4.2,4.2h46.2c2.3,0,4.2-1.9,4.2-4.2c0-2.3-1.9-4.2-4.2-4.2H40.9
            C38.6,81.5,36.7,83.4,36.7,85.7L36.7,85.7z"></path></svg>,
        },
        {
            name: "Not Good",
            icons: <svg className='h-8 stroke-[2px]' viewBox="0 0 128 128" fill="currentColor"><path d="M109.2,18.8C84-6.3,43.6-6.3,18.8,18.8c-25.1,25.1-25.1,65.6,0,90.3c25.1,25.1,65.6,25.1,90.3,0
            C134.3,84.4,134.3,43.6,109.2,18.8z M102.3,102.3c-20.9,20.9-55.4,21.3-76.2,0C5.2,81.5,5.2,47,26.1,25.7
            c20.9-20.9,55.4-20.9,76.7,0C123.2,47,123.2,81,102.3,102.3z"></path> <circle cx="46.5" cy="47" r="7.7"></circle> <circle cx="81.5" cy="47" r="7.7"></circle> <path d="M90,94.3c-1.7,0.9-3.8,0-4.7-1.7c-3.4-8.1-11.8-13.2-20.7-13.2c-0.3,0-0.6,0-0.6,0
            c-9,0-17.6,5.1-21,13.2c-0.9,1.7-3.1,2.6-4.8,1.7c-1.7-0.9-2.4-2.5-1.6-4.7c4.6-10.5,15.3-17,27.3-17c0,0,0.1,0,0.2,0
            c12.4,0,22.9,6.4,27.6,17C92.6,91.8,91.7,93.5,90,94.3z"></path></svg>,
        },
        {
            name: "Wrost",
            icons: <svg className='h-8 stroke-[2px]' viewBox="0 0 128 128" fill="currentColor"><path d="M109.2,18.8C84-6.3,43.6-6.3,18.8,18.8c-25.1,25.1-25.1,65.6,0,90.3c25.1,25.1,65.6,25.1,90.3,0
            C134.3,84.4,134.3,43.6,109.2,18.8z M102.3,102.3c-20.9,20.9-55.4,21.3-76.2,0C5.2,81.5,5.2,47,26.1,25.7
            c20.9-20.9,55.4-20.9,76.7,0C123.2,47,123.2,81,102.3,102.3z"></path> <path d="M64.2,72.7c-0.1,0-0.2,0-0.2,0c-12,0-22.7,6.5-27.3,17c-0.9,2.1-0.1,3.8,1.6,4.7c1.7,0.9,3.9,0,4.8-1.7
            c3.4-8.1,12-13.2,21-13.2c0,0,0.3,0,0.6,0c8.9,0,17.3,5.1,20.7,13.2c0.9,1.7,3,2.6,4.7,1.7c1.7-0.9,2.6-2.5,1.8-4.7
            C87.1,79,76.5,72.7,64.2,72.7z"></path> <path d="M92.2,32.1c-0.2,0-4.3,1.1-8.5,3.2c-4.4,2.2-9.6,6-9.9,11.7c0,0.1,0,0.3,0,0.4c0,4.3,3.5,7.7,7.7,7.7
            c4.3,0,7.7-3.5,7.7-7.7c0-2-0.8-3.9-2.1-5.3c2.2-1.1,4.8-2,6.9-2.6c2.1-0.5,3.3-2.6,2.8-4.7C96.4,32.8,94.3,31.5,92.2,32.1z"></path> <path d="M38.7,47.4c0,4.3,3.5,7.7,7.7,7.7c4.3,0,7.7-3.5,7.7-7.7c0-0.1,0-0.3,0-0.4c-0.2-5.7-5.5-9.5-9.9-11.7
            c-4.2-2.1-8.3-3.1-8.5-3.2c-2.1-0.5-4.2,0.7-4.7,2.8c-0.5,2.1,0.7,4.2,2.8,4.7c2.1,0.5,4.6,1.5,6.9,2.6
            C39.5,43.5,38.7,45.4,38.7,47.4z"></path></svg>,
        },



    ]
    const ratingData = [
        {
            name: 'LONGEVITY',
            icon: <IoIosTimer className='text-slate-400' size={32} />,
            results: results,
            rating: 1,
            status: [
                {
                    name: 'Very Weak',
                    isUserSelected: modifyStr(result?.longevity) === 'Very Weak',
                    num: perfumeRatings?.longevity?.veryWeak,
                    icon: (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M10 2L10 18" stroke="#ccc" stroke-width="2" />
                            <circle cx="10" cy="10" r="4" fill="#ccc" />
                        </svg>
                    )
                },
                {
                    name: 'Weak',
                    isUserSelected: modifyStr(result?.longevity) === 'Weak',
                    num: perfumeRatings?.longevity?.weak,
                    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10 4L10 16" stroke="#aaa" stroke-width="2" />
                        <circle cx="10" cy="10" r="5" fill="#aaa" />
                    </svg>)
                },
                {
                    name: 'Moderate',
                    isUserSelected: modifyStr(result?.longevity) === 'Moderate',
                    num: perfumeRatings?.longevity?.moderate,
                    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10 4L10 16" stroke="#aaa" stroke-width="2" />
                        <circle cx="10" cy="10" r="5" fill="#aaa" />
                    </svg>)
                },
                {
                    name: 'Long Lasting',
                    isUserSelected: modifyStr(result?.longevity) === 'Long Lasting',
                    num: perfumeRatings?.longevity?.longLasting,
                    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10 8L10 12" stroke="#555" stroke-width="2" />
                        <circle cx="10" cy="10" r="7" fill="#555" />
                        <path d="M8 10L12 10" stroke="#555" stroke-width="2" />
                    </svg>)
                },
                {
                    name: 'Eternal',
                    isUserSelected: modifyStr(result?.longevity) === 'Eternal',
                    num: perfumeRatings?.longevity?.eternal,
                    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10 10L10 10" stroke="#333" stroke-width="2" />
                        <circle cx="10" cy="10" r="8" fill="#333" />
                        <path d="M5 10L15 10" stroke="#333" stroke-width="2" />
                        <path d="M10 5L10 15" stroke="#333" stroke-width="2" />
                    </svg>)
                }
            ]
        },
        {
            name: 'SILLAGE',
            icon: <FaUser className='text-slate-400' size={32} />,
            results: results,
            rating: 2,
            status: [
                {
                    name: 'Intimate',
                    isUserSelected: modifyStr(result?.sillage) === 'Intimate',
                    num: perfumeRatings?.sillage?.intimate
                },
                {
                    name: 'No Vote',
                    isUserSelected: modifyStr(result?.sillage) === 'No Vote',
                    num: perfumeRatings?.sillage?.noVote
                },

                {
                    name: 'Moderate',
                    isUserSelected: modifyStr(result?.sillage) === 'Moderate',
                    num: perfumeRatings?.sillage?.moderate
                },
                {
                    name: 'Strong',
                    isUserSelected: modifyStr(result?.sillage) === 'Strong',
                    num: perfumeRatings?.sillage?.strong
                },
                {
                    name: 'Enormous',
                    isUserSelected: modifyStr(result?.sillage) === 'Enormous',
                    num: perfumeRatings?.sillage?.enormous
                }
            ]
        },
        {
            name: 'PRICE VALUE',
            icon: <BiSolidDollarCircle className='text-slate-400' size={32} />,
            results: results,
            rating: 4,
            status: [
                {
                    name: 'Way Overpriced',
                    isUserSelected: modifyStr(result?.priceValue) === 'Way Overpriced',
                    num: perfumeRatings?.priceValue?.wayOverPriced
                },
                {
                    name: 'Over Priced',
                    isUserSelected: modifyStr(result?.priceValue) === 'Over Priced',

                    num: perfumeRatings?.priceValue?.overPriced
                },
                {
                    name: 'Ok',
                    isUserSelected: modifyStr(result?.priceValue) === 'Ok',

                    num: perfumeRatings?.priceValue?.ok
                },
                {
                    name: 'Good Value',
                    isUserSelected: modifyStr(result?.priceValue) === 'Good Value',

                    num: perfumeRatings?.priceValue?.goodValue
                },
                {
                    name: 'Great Value',
                    isUserSelected: modifyStr(result?.priceValue) === 'Great Value',

                    num: perfumeRatings?.priceValue?.greatValue
                }
            ]
        },
        {
            name: 'GENDER ',
            icon: <IoMaleFemale className='text-slate-400' size={32} />,

            results: results,
            rating: 1,
            status: [
                {
                    name: 'Female',
                    isUserSelected: modifyStr(result?.gender) === 'Female',
                    num: perfumeRatings?.gender?.female
                },
                {
                    name: 'More Female',
                    isUserSelected: modifyStr(result?.gender) === 'More Female',

                    num: perfumeRatings?.gender?.moreMale
                },
                {
                    name: 'Unisex',
                    isUserSelected: modifyStr(result?.gender) === 'Unisex',

                    num: perfumeRatings?.gender?.unisex
                },
                {
                    name: 'More Male',
                    isUserSelected: modifyStr(result?.gender) === 'More Male',

                    num: perfumeRatings?.gender?.moreMale
                },
                {
                    name: 'Male',
                    isUserSelected: modifyStr(result?.gender) === 'Male',

                    num: perfumeRatings?.gender?.male

                }
            ]
        }
    ]

    useEffect(() => {
        if (user?._id) {
            getReviewByUserId()
        }
    }, [user])



    return (
        <div className='grid md:grid-cols-2 gap-10 md:gap-20  w-full'>
            {
                ratingData?.map(item => {
                    return <div className='grid'>
                        <div className="font-semibold grid place-items-center text-sm sm:text-lg py-2 text-[#2071B2] capitalize">
                            <span>{item?.icon}</span>
                            <h3 className='text-black'>{item?.name}</h3>
                        </div>
                        <div className='flex justify-around md:gap-x-5'>
                            {
                                item.status.map((stats, idx) => {

                                    return <div className="cursor-pointer grid place-items-center font-medium relative capitalize">
                                        <div
                                            className={`absolute w-full h-full bg-transparent   `}
                                        ></div>
                                        {/* {stats?.icon} */}
                                        <div className={` ${stats?.isUserSelected
                                            ? "text-pink-400"
                                            : "backdrop-grayscale"
                                            } text-xs sm:text-base `}> {stats?.name}</div>
                                    </div>
                                })
                            }
                        </div>
                        <input
                            className="w-full h-[10px]"
                            min={1}
                            max={5}
                            step={1}
                            // disabled
                            type="range"
                            onChange={(e) => {
                                updateRating(item, item.status[e.target.value - 1])
                                setEmoji(e.target.value);
                            }}
                            name=""
                            id=""
                        />
                        <div className="space-y-2">
                            {
                                item?.status.map(sta => {
                                    return <div className="grid grid-cols-[7rem_auto] gap-1">
                                        <span className="text-nowrap font-medium capitalize w-[6rem] text-sm sm:text-base">{sta.name}</span>
                                        <div className=' w-full flex justify-start items-center gap-3'>
                                            <span>{sta.num}</span>
                                            <div className='bg-slate-300 relative w-full rounded-3xl md:h-[7px] h-[5px]'>
                                                <div style={{ width: `${sta.num}%` }} className="bg-pink-300 absolute h-3 rounded-3xl w-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }




                        </div>
                    </div>
                })
            }
        </div>
    )
}


export default RatingResult
