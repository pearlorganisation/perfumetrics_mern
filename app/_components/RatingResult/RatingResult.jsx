"use client"
import React, { startTransition, useEffect, useOptimistic, useState } from 'react'
import { IoIosTimer } from "react-icons/io";
import { BiSolidDollarCircle } from "react-icons/bi";
import { IoMaleFemale } from "react-icons/io5";
import { userStore } from '@/store/userStore';
import axios from 'axios';
import { toast } from 'sonner';
import { useDebouncedCallback } from "use-debounce";
import { RiWindyFill } from 'react-icons/ri';
import perfumeMetaData from '@/store/perfumeMetaData';
import { CustomRangeSlider } from '../RangeSlider/RangeSlider';


const RatingResult = ({ productId }) => {
    const { user } = userStore();
    const { id, setId, clearId } = perfumeMetaData();
    const [result, setResult] = useState([])
    const [perfumeRatings, setPerfumeRatings] = useState([])
    const [rateData, setRateData] = useState({});
    const [perfumeAnalytics, setPerfumeAnalytics] = useState(null);
    const [brightness, setBrightness] = useState(75);

    console.log("Fetched User !!", user);
    async function getTotalRatings(perfumeId) {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/productReviewCount/${perfumeId}`)
        console.log(result)
        setPerfumeRatings(result?.data?.data)
    }
    async function getTotalRatingsAnalyst(perfumeId) {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/review-analytics/${perfumeId}`)
        console.log("getTotalRatingsAnalyst", result.data)
        setPerfumeAnalytics(result?.data?.data)
    }
    useEffect(() => {
        if (productId) {
            getTotalRatings(productId);
            getTotalRatingsAnalyst(productId);
        }
    }, [productId])



    const getReviewByUserId = async () => {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/review/user/${user?._id}?productId=${productId}`)
        console.log(result, "Reslt")
        setResult(result?.data?.data)
    }
    const updateReviewByUserId = async (payload) => {
        console.log(productId, "productid")
        console.log(payload, "payload")
        const result = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/productReviewCount/${productId}`, { ...payload })
        getReviewByUserId()
        getTotalRatings(productId)
        getTotalRatingsAnalyst(productId)
        console.log(result, "Reslt")
    }
    const [emoji, setEmoji] = useState(1)
    const modifyStr = (str) => {
        const camelCaseValue = str
            ?.toLowerCase()
            ?.replace(/ (\w)/g, (match, letter) => letter?.toUpperCase());

        return camelCaseValue
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



    const updateRating = (p1, p2) => {
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
    }
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
                    isUserSelected: user
                        ? (modifyStr(result?.longevity?.toLowerCase()) === 'veryweak' ? true : false)
                        : modifyStr(perfumeAnalytics?.longevity?.k)?.toLowerCase() === 'veryweak' ? true : false,
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
                    isUserSelected: user
                        ? (modifyStr(result?.longevity?.toLowerCase()) === 'weak' ? true : false)
                        : modifyStr(perfumeAnalytics?.longevity?.k)?.toLowerCase() === 'weak' ? true : false,
                    num: perfumeRatings?.longevity?.weak,
                    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10 4L10 16" stroke="#aaa" stroke-width="2" />
                        <circle cx="10" cy="10" r="5" fill="#aaa" />
                    </svg>)
                },
                {
                    name: 'Moderate',
                    isUserSelected: user
                        ? (modifyStr(result?.longevity?.toLowerCase()) === 'moderate' ? true : false)
                        : modifyStr(perfumeAnalytics?.longevity?.k)?.toLowerCase() === 'moderate' ? true : false,
                    num: perfumeRatings?.longevity?.moderate,
                    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10 4L10 16" stroke="#aaa" stroke-width="2" />
                        <circle cx="10" cy="10" r="5" fill="#aaa" />
                    </svg>)
                },
                {
                    name: 'Long Lasting',
                    isUserSelected: user
                        ? (modifyStr(result?.longevity?.toLowerCase()) === 'longlasting' ? true : false)
                        : modifyStr(perfumeAnalytics?.longevity?.k)?.toLowerCase() === 'longlasting' ? true : false,
                    num: perfumeRatings?.longevity?.longLasting,
                    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10 8L10 12" stroke="#555" stroke-width="2" />
                        <circle cx="10" cy="10" r="7" fill="#555" />
                        <path d="M8 10L12 10" stroke="#555" stroke-width="2" />
                    </svg>)
                },
                {
                    name: 'Eternal',
                    isUserSelected: user?._id
                        ? (modifyStr(result?.longevity?.toLowerCase()) === 'eternal' ? true : false)
                        : (modifyStr(perfumeAnalytics?.longevity?.k)?.toLowerCase() === 'eternal' ? true : false),
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
            icon: <RiWindyFill className='text-slate-400' size={32} />,
            results: results,
            rating: 2,
            status: [
                {
                    name: 'Intimate',
                    isUserSelected: user
                        ? (modifyStr(result?.sillage?.toLowerCase()) === 'intimate' ? true : false)
                        : modifyStr(perfumeAnalytics?.sillage?.k)?.toLowerCase() === 'intimate' ? true : false,
                    num: perfumeRatings?.sillage?.intimate
                },
                {
                    name: 'No Vote',
                    isUserSelected: user
                        ? (modifyStr(result?.sillage?.toLowerCase()) === 'novote' ? true : false)
                        : modifyStr(perfumeAnalytics?.sillage?.k)?.toLowerCase() === 'novote' ? true : false,
                    num: perfumeRatings?.sillage?.noVote,
                },

                {
                    name: 'Moderate',
                    isUserSelected: user
                        ? (modifyStr(result?.sillage?.toLowerCase()) === 'moderate' ? true : false)
                        : modifyStr(perfumeAnalytics?.sillage?.k)?.toLowerCase() === 'moderate' ? true : false,
                    num: perfumeRatings?.sillage?.moderate
                },
                {
                    name: 'Strong',
                    isUserSelected: user
                        ? (modifyStr(result?.sillage?.toLowerCase()) === 'strong' ? true : false)
                        : modifyStr(perfumeAnalytics?.sillage?.k)?.toLowerCase() === 'strong' ? true : false,
                    num: perfumeRatings?.sillage?.strong
                },
                {
                    name: 'Enormous',
                    isUserSelected: user
                        ? (modifyStr(result?.sillage?.toLowerCase()) === 'enormous' ? true : false)
                        : modifyStr(perfumeAnalytics?.sillage?.k)?.toLowerCase() === 'enormous' ? true : false,
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
                    name: 'Way Over Priced',
                    isUserSelected: user
                        ? (modifyStr(result?.priceValue?.toLowerCase()) === 'wayoverpriced' ? true : false)
                        : modifyStr(perfumeAnalytics?.priceValue?.k)?.toLowerCase() === 'wayoverpriced' ? true : false,
                    num: perfumeRatings?.priceValue?.wayOverPriced
                },
                {
                    name: 'Over Priced',
                    isUserSelected: user
                        ? (modifyStr(result?.priceValue?.toLowerCase()) === 'overpriced' ? true : false)
                        : modifyStr(perfumeAnalytics?.priceValue?.k)?.toLowerCase() === 'overpriced' ? true : false,
                    num: perfumeRatings?.priceValue?.overPriced
                },
                {
                    name: 'Ok',
                    isUserSelected: user
                        ? (modifyStr(result?.priceValue?.toLowerCase()) === 'ok' ? true : false)
                        : modifyStr(perfumeAnalytics?.priceValue?.k)?.toLowerCase() === 'ok' ? true : false,
                    num: perfumeRatings?.priceValue?.ok
                },
                {
                    name: 'Good Value',
                    isUserSelected: user
                        ? (modifyStr(result?.priceValue?.toLowerCase()) === 'goodvalue' ? true : false)
                        : modifyStr(perfumeAnalytics?.priceValue?.k)?.toLowerCase() === 'goodvalue' ? true : false,
                    num: perfumeRatings?.priceValue?.goodValue
                },
                {
                    name: 'Great Value',
                    isUserSelected: user
                        ? (modifyStr(result?.priceValue?.toLowerCase()) === 'greatvalue' ? true : false)
                        : modifyStr(perfumeAnalytics?.priceValue?.k)?.toLowerCase() === 'greatvalue' ? true : false,
                    num: perfumeRatings?.priceValue?.greatValue
                }
            ]
        },
        {
            name: 'GENDER',
            icon: <IoMaleFemale className='text-slate-400' size={32} />,

            results: results,
            rating: 1,
            status: [
                {
                    name: 'Female',
                    // isUserSelected: modifyStr(result?.gender) === 'female',
                    isUserSelected: user
                        ? (modifyStr(result?.gender?.toLowerCase()) === 'female' ? true : false)
                        : modifyStr(perfumeAnalytics?.gender?.k)?.toLowerCase() === 'female' ? true : false,
                    num: perfumeRatings?.gender?.female
                },
                {
                    name: 'More Female',
                    isUserSelected: user
                        ? (modifyStr(result?.gender?.toLowerCase()) === 'morefemale' ? true : false)
                        : modifyStr(perfumeAnalytics?.gender?.k)?.toLowerCase() === 'morefemale' ? true : false,

                    num: perfumeRatings?.gender?.moreFemale
                },
                {
                    name: 'Unisex',
                    isUserSelected: user
                        ? (modifyStr(result?.gender?.toLowerCase()) === 'unisex' ? true : false)
                        : modifyStr(perfumeAnalytics?.gender?.k)?.toLowerCase() === 'unisex' ? true : false,


                    num: perfumeRatings?.gender?.unisex
                },
                {
                    name: 'More Male',
                    isUserSelected: user
                        ? (modifyStr(result?.gender?.toLowerCase()) === 'moremale' ? true : false)
                        : modifyStr(perfumeAnalytics?.gender?.k)?.toLowerCase() === 'moremale' ? true : false,

                    num: perfumeRatings?.gender?.moreMale
                },
                {
                    name: 'Male',
                    isUserSelected: user
                        ? (modifyStr(result?.gender?.toLowerCase()) === 'male' ? true : false)
                        : modifyStr(perfumeAnalytics?.gender?.k)?.toLowerCase() === 'male' ? true : false,

                    num: perfumeRatings?.gender?.male

                }
            ]
        }
    ]

    useEffect(() => {
        if (user?._id && id) {
            getReviewByUserId()
        }
    }, [user, id])

    const calculateDefaultLongevity = (nameOfVote) => {
        const switchToggler = modifyStr(nameOfVote)?.toLowerCase();
        // console.log("switchToggler",switchToggler);

        switch (switchToggler) {
            case 'longevity': {
                if (user?._id) {
                    const longevity = modifyStr(result?.longevity || 'null');

                    if (longevity.toLowerCase() === 'veryweak') return 1;
                    if (longevity.toLowerCase() === 'weak') { console.log("Yah hooo "); return 2; }
                    if (longevity.toLowerCase() === 'moderate') return 3;
                    if (longevity.toLowerCase() === 'longlasting') return 4;
                    if (longevity.toLowerCase() === 'eternal') return 5;
                } else {
                    const longevity = modifyStr(perfumeAnalytics?.longevity?.k || 'null');
                    // console.log("we were here amnnnn!!", longevity);

                    if (longevity.toLowerCase() == 'veryweak') return 1;
                    if (longevity.toLowerCase() == 'weak') return 2;
                    if (longevity.toLowerCase() == 'moderate') return 3;
                    if (longevity.toLowerCase() == 'longlasting') return 4;
                    if (longevity.toLowerCase() == 'eternal') return 5;
                }
                return 5;
            }
            case 'sillage': {
                if (user?._id) {
                    const sillage = modifyStr(result?.sillage || 'null');

                    if (sillage.toLowerCase() === 'intimate') return 1;
                    if (sillage.toLowerCase() === 'novote') return 2;
                    if (sillage.toLowerCase() === 'moderate') return 3;
                    if (sillage.toLowerCase() === 'strong') return 4;
                    if (sillage.toLowerCase() === 'enormous') return 5;
                } else {
                    const sillage = modifyStr(perfumeAnalytics?.sillage.k || 'null');
                    // console.log("we were here amnnnn!!", sillage);
                    if (sillage.toLowerCase() === 'intimate') return 1;
                    if (sillage.toLowerCase() === 'novote') return 2;
                    if (sillage.toLowerCase() === 'moderate') return 3;
                    if (sillage.toLowerCase() === 'strong') return 4;
                    if (sillage.toLowerCase() === 'enormous') return 5;
                }
                return 5
            }
            case 'pricevalue': {
                // console.log("we were here amnnnn pricevalue !!",modifyStr(nameOfVote));

                if (user?._id) {
                    const priceValue = modifyStr(result?.priceValue || 'null');

                    if (priceValue.toLowerCase() == 'wayoverpriced') return 1;
                    if (priceValue.toLowerCase() == 'overpriced') return 2;
                    if (priceValue.toLowerCase() == 'ok') return 3;
                    if (priceValue.toLowerCase() == 'goodvalue') return 4;
                    if (priceValue.toLowerCase() == 'greatvalue') return 5;
                } else {
                    const priceValue = modifyStr(perfumeAnalytics?.priceValue.k || 'null');
                    // console.log("we were here amnnnn!!", priceValue);

                    if (priceValue.toLowerCase() == 'wayoverpriced') return 1;
                    if (priceValue.toLowerCase() == 'overpriced') return 2;
                    if (priceValue.toLowerCase() == 'ok') return 3;
                    if (priceValue.toLowerCase() == 'goodvalue') return 4;
                    if (priceValue.toLowerCase() == 'greatvalue') return 5;
                }
                return 5
            }
            case 'gender': {
                // console.log("Processing gender:", switchToggler);

                if (user?._id) {
                    const gender = modifyStr(result?.gender || 'null');
                    // console.log("Gender for user:", gender);

                    if (gender.toLowerCase() === 'female') return 1;
                    if (gender.toLowerCase() === 'morefemale') return 2; // Corrected duplicate
                    if (gender.toLowerCase() === 'unisex') return 3;
                    if (gender.toLowerCase() === 'moremale') return 4;
                    if (gender.toLowerCase() === 'male') return 5;
                } else {
                    const gender = modifyStr(perfumeAnalytics?.gender?.k || 'null');
                    // console.log("Gender from analytics:", gender);

                    if (gender.toLowerCase() === 'female') return 1;
                    if (gender.toLowerCase() === 'morefemale') return 2; // Corrected duplicate
                    if (gender.toLowerCase() === 'unisex') return 3;
                    if (gender.toLowerCase() === 'moremale') return 4;
                    if (gender.toLowerCase() === 'male') return 5;
                }
                return 5;
            }
            default:
                return null; // Default fallback
        }
    };



    return (


        <div className='flex items-center justify-center'>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-10 md:gap-16 w-[100%]  md:mx-0 md:w-full   lg:px-12">
                {ratingData?.map((item, ind) => (
                    <div key={ind} className="flex flex-col gap-4">
                        {/* Header Section */}
                        <div className="font-semibold grid place-items-center text-center text-sm sm:text-lg py-2 text-[#2071B2] capitalize">
                            <span className="text-2xl sm:text-3xl">{item?.icon}</span>
                            <h3 className="text-black text-sm sm:text-base">{item?.name}</h3>
                        </div>

                        {/* Status Section */}
                        <div className="flex justify-center gap-3 sm:gap-4 h-full px-4">
                            {item.status.map((stats, idx) => {
                                console.log("item?.name", stats?.name, stats.isUserSelected)
                                return (
                                    <div
                                        key={idx}
                                        className="cursor-pointer grid place-items-center font-medium relative capitalize"
                                    >
                                        <div className="absolute w-full h-full bg-transparent"></div>
                                        <div
                                            className={`${stats.isUserSelected ? "text-pink-400" : "backdrop-grayscale"
                                                } text-xs sm:text-[12px] font-bold text-wrap text-center transition-all ease-in-out duration-300`} // <-- Added transition here
                                        >
                                            {stats?.name}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Range Input */}
                        <CustomRangeSlider
                            min={1}
                            max={5}
                            defaultValue={brightness}
                            onChange={setBrightness}
                            progressColor="bg-gradient-to-r from-yellow-400 to-orange-500"
                            showTicks
                            tickCount={5}
                            valueSuffix="%"
                            calculateDefaultLongevity={calculateDefaultLongevity} item={item} updateRating={updateRating} setEmoji={setEmoji}
                        />

                        {/* Status Details Section */}
                        <div className="space-y-3 px-6 ">
                            {item?.status.map((sta, idx) => (
                                <div key={idx} className="grid grid-cols-[9rem_auto]">
                                    <span className=" text-[#6B859E] capitalize text-wrap w-[8rem] text-xs sm:text-sm">
                                        {sta.name}
                                    </span>
                                    <div className="w-full flex items-center gap-3">
                                        <span className="text-sm sm:text-base">{sta.num}</span>
                                        <div className="bg-slate-300 relative w-[80%] md:w-full rounded-3xl h-[6px] sm:h-[8px]">
                                            <div
                                                style={{ width: `${sta.num}%` }}
                                                className="bg-pink-300 absolute rounded-3xl h-[6px] sm:h-[8px]"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>




    )
}


export default RatingResult
const LongevitySlider = ({ item, calculateDefaultLongevity, updateRating, setEmoji }) => {
    // Initialize optimistic state
    const [value, setValue] = useState(parseInt(calculateDefaultLongevity(item?.name)) || 5,
        (prev, newLongevity) => newLongevity);
    const [optimisticLongevity, setOptimisticLongevity] = useOptimistic(value);


    const debouncedUpdateSliderValue = useDebouncedCallback(async (newValue) => {


        // Optimistically update the slider's value


        // Perform your update logic (e.g., API or local update)
        updateRating(item, item.status[newValue - 1]);
        setValue(newValue);
        // Optionally handle emojis or additional state
        setEmoji(newValue);
    }, 300);

    const handleSliderChange = (event) => {
        const newValue = event.target.value;
        startTransition(() => {
            setOptimisticLongevity(newValue);
        });

        // Optimistically update state immediately
        setValue(newValue);

        // Debounced API call
        debouncedUpdateSliderValue(newValue);
    }

    return (
        <div className="w-full flex justify-center">
            <input
                className="w-full h-[12px] sm:h-[14px] md:h-[16px] rounded-md cursor-pointer"
                min={1}
                max={5}
                step={1}
                type="range"
                value={optimisticLongevity} // Use the optimistic state value
                onChange={handleSliderChange}
            />
        </div>
    );
};




