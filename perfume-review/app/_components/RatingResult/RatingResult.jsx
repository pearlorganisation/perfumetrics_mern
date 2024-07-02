"use client"
import React, { useState } from 'react'

const RatingResult = () => {
    const [emoji, setEmoji] = useState(1)
    const ratingData = [
        {
            name: 'SILLAGE',
            results: [
                {
                    name: "Wrost",
                    icons: "😖",
                },
                {
                    name: "Not Good",
                    icons: "😟",
                },
                {
                    name: "Fine",
                    icons: "😐",
                },
                {
                    name: "Look Good",
                    icons: "😀",
                },
                {
                    name: "Very Good",
                    icons: "😍",
                },
            ],
            rating: 1,
            status: [
                {
                    name: 'Very Weak',
                    num: 36
                },
                {
                    name: 'Weak',
                    num: 30
                },
                {
                    name: 'moderate',
                    num: 36
                },
                {
                    name: 'long lasting',
                    num: 30
                },
                {
                    name: 'eternal',
                    num: 30
                }
            ]
        },
        {
            name: 'LONGEVITY',
            results: [
                {
                    name: "Wrost",
                    icons: "😖",
                },
                {
                    name: "Not Good",
                    icons: "😟",
                },
                {
                    name: "Fine",
                    icons: "😐",
                },
                {
                    name: "Look Good",
                    icons: "😀",
                },
                {
                    name: "Very Good",
                    icons: "😍",
                },
            ],
            rating: 2,
            status: [
                {
                    name: 'Intimate',
                    num: 36
                },
                {
                    name: 'Mild',
                    num: 30
                },
                {
                    name: 'Moderate',
                    num: 36
                },
                {
                    name: 'Strong',
                    num: 30
                },
                {
                    name: 'Enormous',
                    num: 30
                }
            ]
        },
        {
            name: 'PRICE VALUE',
            results: [
                {
                    name: "Wrost",
                    icons: "😖",
                },
                {
                    name: "Not Good",
                    icons: "😟",
                },
                {
                    name: "Fine",
                    icons: "😐",
                },
                {
                    name: "Look Good",
                    icons: "😀",
                },
                {
                    name: "Very Good",
                    icons: "😍",
                },
            ],
            rating: 4,
            status: [
                {
                    name: 'Way Overpriced',
                    num: 36
                },
                {
                    name: 'Overpriced',
                    num: 30
                },
                {
                    name: 'Ok',
                    num: 36
                },
                {
                    name: 'Good Value',
                    num: 30
                },
                {
                    name: 'Great Value',
                    num: 30
                }
            ]
        },
        {
            name: 'GENDER',
            results: [
                {
                    name: "Wrost",
                    icons: "😖",
                },
                {
                    name: "Not Good",
                    icons: "😟",
                },
                {
                    name: "Fine",
                    icons: "😐",
                },
                {
                    name: "Look Good",
                    icons: "😀",
                },
                {
                    name: "Very Good",
                    icons: "😍",
                },
            ],
            rating: 1,
            status: [
                {
                    name: 'Female',
                    num: 36
                },
                {
                    name: 'More Female',
                    num: 30
                },
                {
                    name: 'Unisex',
                    num: 36
                },
                {
                    name: 'More Male',
                    num: 30
                },
                {
                    name: 'Male',
                    num: 30
                }
            ]
        }
    ]
    return (
        <div className='grid md:grid-cols-2 gap-20  w-full'>
            {
                ratingData?.map(item => {
                    return <div className='grid'>
                        <div className="font-semibold text-lg py-2 text-[#2071B2]">{item?.name}</div>
                        <div className='flex justify-around gap-x-5'>
                            {
                                item.results.map((res, idx) => {
                                    return <div className="cursor-pointer grid place-items-center font-medium text-[#105955] relative">
                                        <div
                                            className={`absolute w-full h-full bg-transparent ${idx + 1 === item.rating
                                                ? "backdrop-grayscale-0"
                                                : "backdrop-grayscale"
                                                }  `}
                                        ></div>
                                        <div className="text-3xl">{res?.icons}</div>
                                        <div> {res?.name}</div>
                                    </div>
                                })
                            }
                        </div>
                        <input
                            className="w-full"
                            min={1}
                            max={5}
                            step={1}
                            type="range"
                            onChange={(e) => {
                                console.log(typeof e.target.value);
                                setEmoji(e.target.value);
                            }}
                            name=""
                            id=""
                        />
                        <div className="space-y-6">
                            {
                                item?.status.map(sta => {
                                    return <div className="grid grid-cols-[8rem_auto] gap-6">
                                        <span className="text-nowrap font-medium">{sta.name}</span>
                                        <div className=' w-full flex justify-start items-center gap-3'>
                                            <span>{sta.num}</span>
                                            <div className="bg-[#105955] h-3 rounded-3xl w-full"></div>
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