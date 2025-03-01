"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { IoArrowBackOutline } from "react-icons/io5";

const Dropdown = ({ brands, setPerfumeDropDown }) => {
    const [subData, setSubData] = useState([])
    const [index, setIndex] = useState(0)


    return (
        <div className=''>
            <div

                className='absolute hidden  text-black divide-x-2  top-[2.8rem] bg-white z-50  w-[25rem] md:grid grid-cols-2'>
                <div className=' shadow-lg max-h-[50vh] overflow-auto'>
                    {
                        brands && brands?.map(item => {
                            return <Link
                                href={`/brand/${item?.slug}`}
                            // href={`#`}
                            >
                                <div onMouseOver={() => {
                                    setSubData(item?.AllPerfume)
                                }} className='text-sm px-4 w-full py-2 hover:bg-black/10'>{item?.brand}</div>
                            </Link>
                        })
                    }
                </div>
                <div className='max-h-[50vh] overflow-auto shadow-lg'>
                    {
                        subData?.length > 0 && subData?.map(item => {
                            return <Link
                                href={`/product/${item?.slug}`}
                            >
                                <div className='text-sm px-4 w-full py-2 hover:bg-black/10'>{item?.perfume}</div>
                            </Link>
                        })
                    }
                </div>

            </div>
            {
                index === 0 && <div className='block md:hidden fixed left-0 w-full bg-white top-0 z-30 h-screen overflow-scroll '>
                    <div onClick={() => {
                        setPerfumeDropDown(false)
                    }}><IoArrowBackOutline className='text-xl size-6 m-1' /></div>
                    <div className=' w-full '>
                        {
                            brands && brands?.map(item => {
                                return <Link
                                    href={`/brand/${item?.brand}`}
                                // href={`#`}
                                >
                                    <div
                                        onClick={() => {
                                            setSubData(item?.AllPerfume)
                                            setIndex(1)
                                            setPerfumeDropDown(false)
                                        }}
                                        //  onMouseOver={() => {
                                        //     setSubData(item?.AllPerfume)
                                        // }}
                                        className='text-sm px-4 w-full py-2 hover:bg-black/10'>{item?.brand}</div>
                                </Link>
                            })
                        }
                    </div>

                </div>
            }


        </div>
    )
}

export default Dropdown