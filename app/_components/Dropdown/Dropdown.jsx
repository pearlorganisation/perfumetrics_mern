"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Dropdown = ({ brands }) => {
    const [subData, setSubData] = useState([])
    const temp = [
        {
            brand: 'Fogg',
            _id: '1',
            subData: [
                {
                    subName: 'Fogg Perfume 1'
                },
                {
                    subName: 'Fogg Perfume 2'
                },
                {
                    subName: 'Fogg Perfume 3'
                },
                {
                    subName: 'Fogg Perfume 4'
                }
            ]
        },
        {
            brand: 'Axe',
            _id: '2',
            subData: [
                {
                    subName: 'Axe Perfume 1'
                },
                {
                    subName: 'Axe Perfume 2'
                },
                {
                    subName: 'Axe Perfume 3'
                },
                {
                    subName: 'Axe Perfume 4'
                }
            ]
        },
        {
            brand: 'Diorr',
            _id: '3',
            subData: [
                {
                    subName: 'Dior Perfume 1'
                },
                {
                    subName: 'Dior Perfume 2'
                },
                {
                    subName: 'Dior Perfume 3'
                },
                {
                    subName: 'Dior Perfume 4'
                }
            ]
        },
        {
            brand: 'Valentino',
            _id: '4',
            subData: [
                {
                    subName: 'Valentino Perfume 1'
                },
                {
                    subName: 'Valentino Perfume 2'
                },
                {
                    subName: 'Valentino Perfume 3'
                },
                {
                    subName: 'Valentino Perfume 4'
                }
            ]
        },
        {
            brand: 'Gucci',
            _id: '5',
            subData: [
                {
                    subName: 'Gucci Perfume 1'
                },
                {
                    subName: 'Gucci Perfume 2'
                },
                {
                    subName: 'Gucci Perfume 3'
                },
                {
                    subName: 'Gucci Perfume 4'
                }
            ]
        },
        {
            brand: 'Chanel',
            _id: '6',
            subData: [
                {
                    subName: 'Chanel Perfume 1'
                },
                {
                    subName: 'Chanel Perfume 2'
                },
                {
                    subName: 'Chanel Perfume 3'
                },
                {
                    subName: 'Chanel Perfume 4'
                }
            ]
        }
        ,
        {
            brand: 'Chanel',
            _id: '6',
            subData: [
                {
                    subName: 'Chanel Perfume 1'
                },
                {
                    subName: 'Chanel Perfume 2'
                },
                {
                    subName: 'Chanel Perfume 3'
                },
                {
                    subName: 'Chanel Perfume 4'
                }
            ]
        },
        {
            brand: 'Chanel',
            _id: '6',
            subData: [
                {
                    subName: 'Chanel Perfume 1'
                },
                {
                    subName: 'Chanel Perfume 2'
                },
                {
                    subName: 'Chanel Perfume 3'
                },
                {
                    subName: 'Chanel Perfume 4'
                }
            ]
        },
        {
            brand: 'Chanel',
            _id: '6',
            subData: [
                {
                    subName: 'Chanel Perfume 1'
                },
                {
                    subName: 'Chanel Perfume 2'
                },
                {
                    subName: 'Chanel Perfume 3'
                },
                {
                    subName: 'Chanel Perfume 4'
                }
            ]
        },
        {
            brand: 'Chanel',
            _id: '6',
            subData: [
                {
                    subName: 'Chanel Perfume 1'
                },
                {
                    subName: 'Chanel Perfume 2'
                },
                {
                    subName: 'Chanel Perfume 3'
                },
                {
                    subName: 'Chanel Perfume 4'
                }
            ]
        },
        {
            brand: 'Chanel',
            _id: '6',
            subData: [
                {
                    subName: 'Chanel Perfume 1'
                },
                {
                    subName: 'Chanel Perfume 2'
                },
                {
                    subName: 'Chanel Perfume 3'
                },
                {
                    subName: 'Chanel Perfume 4'
                }
            ]
        }


    ];


    return (
        <div className='absolute border-2  text-black divide-x-2  top-[10rem] bg-white z-50  w-[25rem] grid grid-cols-2'>


            <div className=' shadow-lg max-h-[35rem] overflow-auto'>
                {
                    brands.map(item => {
                        return <Link
                            // href={`/brand/${item?._id}`}
                            href={`#`}
                        >
                            <div onMouseOver={() => {
                                setSubData(item?.AllPerfume)
                            }} className='text-sm px-4 w-full py-2 hover:bg-black/10'>{item?.brand}</div>
                        </Link>
                    })
                }
            </div>
            <div className='max-h-[35rem] overflow-auto shadow-lg'>
                {
                    subData.length > 0 && subData?.map(item => {
                        return <Link
                            href={`/product/${item?._id}`}
                        >
                            <div className='text-sm px-4 w-full py-2 hover:bg-black/10'>{item?.perfume}</div>
                        </Link>
                    })
                }
            </div>

        </div>
    )
}

export default Dropdown