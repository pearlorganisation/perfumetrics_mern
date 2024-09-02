import Link from 'next/link'
import React from 'react'

const Dropdown = ({ brands }) => {
    const temp = [
        {
            name: 'Fogg',
            _id: '1'
        },
        {
            name: 'Axe',
            _id: '2'
        },
        {
            name: 'Diorr',
            _id: '3'
        },
        {
            name: 'Valentino',
            _id: '4'
        },
        {
            name: 'Diorr',
            _id: '3'
        },
        {
            name: 'Valentino',
            _id: '4'
        }
    ]
    return (
        <div className='absolute border-2 w-full text-black left-0 top-[10rem] bg-white z-50'>


            {
                brands.map(item => {
                    return <Link
                        href={`/brand/${item?._id}`}
                    >
                        <div className='px-4 w-full py-2 hover:bg-black/10'>{item?.brand}</div>
                    </Link>
                })
            }

        </div>
    )
}

export default Dropdown