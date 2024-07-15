import React from 'react'
import PerfumePhotos from '../../PerfumePhotos/PerfumePhotos'
import { FaTruckMoving } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { FaMedal } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { BsShieldFillCheck } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FollowUs = () => {

    return (

        <div>
            <div>
                <div className='text-black grid place-items-center relative max-w-6xl mx-auto'>
                    <div className='text-lg sm:text-xl md:text-3xl font-semibold z-50 bg-white px-6 py-4'>FOLLOW US ON INSTAGRAM</div>
                    <div className='absolute w-full h-[2px] bg-slate-400'></div>
                </div>
                <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-1'>

                    {
                        [
                            `https://images.unsplash.com/photo-1595425959632-34f2822322ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D`,
                            `https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D`,
                            `https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D`,
                            `https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D`,
                            `https://images.unsplash.com/photo-1595425959632-34f2822322ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D`,
                            `https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D`,
                            `https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D`,
                            `https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D`,
                        ].map(img => {
                            return <div className='h-[12rem] w-full'>
                                <img className='w-full h-full' src={img} alt="" />
                            </div>
                        })
                    }
                </div>
            </div>
            <div>
                <div className='grid sm:grid-cols-3 md:grid-cols-6 place-items-center gap-3 container mx-auto md:divide-x-2 py-12'>
                    <div className='flex gap-2 px-8'><FaTruckMoving className='text-gray-400 ' size={50} />
                        <div className='font-semibold flex flex-col text-gray-800'>FREE DELIVERY <span>From 275 AED</span></div>
                    </div>
                    <div className='flex gap-2 px-8'> <BsCashCoin className='text-gray-400' size={50} />
                        <div className='font-semibold flex flex-col text-gray-800'>FREE DELIVERY <span>From 275 AED</span></div>
                    </div>
                    <div className='flex gap-2 px-8'><FaMedal className='text-gray-400' size={50} />
                        <div className='font-semibold flex flex-col text-gray-800'>FREE DELIVERY <span>From 275 AED</span></div>
                    </div>
                    <div className='flex gap-2 px-8'><FaGift className='text-gray-400' size={50} />
                        <div className='font-semibold flex flex-col text-gray-800'>FREE DELIVERY <span>From 275 AED</span></div>
                    </div>
                    <div className='flex gap-2 px-8'>
                        <BsShieldFillCheck className='text-gray-400' size={50} />
                        <div className='font-semibold flex flex-col text-gray-800'>FREE DELIVERY <span>From 275 AED</span></div>
                    </div>
                    <div className='flex gap-2 px-8'><BsFillTelephoneFill className='text-gray-400' size={50} />
                        <div className='font-semibold flex flex-col text-gray-800'>FREE DELIVERY <span>From 275 AED</span></div></div>
                </div>
            </div>


            <div className='grid md:grid-cols-3 gap-6 container mx-auto text-black'>
                <div className='bg-pink-200 space-y-3 py-5 px-6'>
                    <div className='flex gap-1'><FaLocationDot className='text-pink-500' size={22} /> <span className='text-xl font-semibold'>FIND YOUR NEAREST STORE</span></div>
                    <p>A contemporary grooming collection intused
                        with the inviaoratina and sensual scent of</p>
                    <div className='w-full'>
                        <span className='font-semibold text-sm pb-2'>FIND YOUR STORE</span>
                        <div className='w-full grid grid-cols-[auto_5rem]'><input className='px-4 py-3' placeholder='Search...' type="text" name="" id="" /><button className='bg-pink-500 px-5 py-3 text-white' type="button">GO</button></div>
                    </div>
                </div>
                <div className='bg-pink-200 space-y-3 py-5 px-6'>
                    <div className='flex gap-1'><IoMdMail className='text-pink-500' size={22} /> <span className='text-xl font-semibold'>NEWSLETTER</span></div>
                    <p>A contemporary grooming collection intused
                        with the inviaoratina and sensual scent of</p>
                    <div className='space-y-2 w-full '>
                        <div className='font-semibold text-sm pb-2'>FIND YOUR STORE</div>
                        <input className='px-4 py-3 w-full' placeholder='Enter Your First Name...' type="text" name="" id="" />
                        <div className='w-full grid grid-cols-[auto_5rem]'><input className='px-4 py-3 w-full' placeholder='Enter Your Email Address ' type="text" name="" id="" /><button className='bg-pink-500 px-5 py-3 text-white' type="button">GO</button></div>
                    </div>
                </div>
                <div className='bg-pink-300 space-y-3 py-5 px-6'>
                    <div className='text-center text-xl font-semibold'>FOLLOWS US</div>
                    <div className='flex w-full justify-around'>
                        <div className='size-10 text-white rounded-full grid place-items-center bg-pink-500'><FaFacebookF size={26} /></div>
                        <div className='size-10 text-white rounded-full grid place-items-center bg-pink-500'><FaXTwitter size={26} /></div>
                        <div className='size-10 text-white rounded-full grid place-items-center bg-pink-500'><FaYoutube size={26} /></div>
                        <div className='size-10 text-white rounded-full grid place-items-center bg-pink-500'><FaInstagram size={26} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowUs