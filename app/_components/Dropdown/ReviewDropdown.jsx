import Link from 'next/link'
import React from 'react'

export default function ReviewDropdown({ setIsMenuOpen }) {
    return (
        <div className='absolute !font-normal top-[2.8rem] bg-white z-30 w-[12rem] border text-black'>
            <Link
                // onClick={() => {
                //     setIsMenuOpen(false)
                // }}
                onTouchStart={() => {
                    setIsMenuOpen(false)
                }}
                href='/review/writeAreview'
            >
                <div className='px-2 py-3 hover:bg-black/10'>Write a Review</div>
            </Link>
            <Link
                onTouchStart={() => {
                    setIsMenuOpen(false)
                }}
                // onClick={() => {
                //     setIsMenuOpen(false)
                // }}
                href='/review/requestAreview'
            >
                <div className='px-2 py-3 hover:bg-black/10'>Request a Review</div>
            </Link>
        </div>
    )
}

