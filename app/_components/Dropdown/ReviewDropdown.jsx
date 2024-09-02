import Link from 'next/link'
import React from 'react'

export default function ReviewDropdown() {
    return (
        <div className='absolute top-[2.8rem] bg-white z-30 w-[12rem] border text-black'>
            <Link
                href='/review/writeAreview'
            >
                <div className='px-2 py-3 hover:bg-black/10'>Write a Review</div>
            </Link>
            <Link
                href='/review/requestAreview'
            >
                <div className='px-2 py-3 hover:bg-black/10'>Request a Review</div>
            </Link>
        </div>
    )
}

