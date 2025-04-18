
"use client"
import React from 'react'
import PerfumePhotos from '../../PerfumePhotos/PerfumePhotos'
import { FaTruckMoving } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { FaMedal } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { BsShieldFillCheck } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'sonner';
import Image from 'next/image';

const FollowUs = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log("Form Data:", data);
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/newsLetter`, data)
        reset()
        console.log(data, "data")
        toast.success("Success!!")
    };

    return (

        <div className='space-y-8 '>
            <div className='px-8 space-y-5'>
                <div className='text-black grid place-items-center relative mx-auto px-1 '>
                    <div className='text-base md:text-[36px] font-bold z-50 bg-white md:px-6 px-1 py-4'>FOLLOW US ON PINTEREST</div>
                    <div className='absolute w-full h-[2px] bg-slate-400'></div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2'>

                    {
                        [
                            `https://res.cloudinary.com/dznz3eqe8/image/upload/q_auto,f_auto/v1742364150/FOTTERIMAGE_gqw9hn.jpg`,
                            `https://res.cloudinary.com/dznz3eqe8/image/upload/q_auto,f_auto/v1742364150/footerimag2_pqgvnm.avif`,
                            `https://res.cloudinary.com/dznz3eqe8/image/upload/q_auto,f_auto/v1742364150/fotter3_v6bhg8.avif`,
                            `https://res.cloudinary.com/dznz3eqe8/image/upload/q_auto,f_auto/v1742364150/footer4_wlqqxe.avif`,
                            `https://res.cloudinary.com/dznz3eqe8/image/upload/q_auto,f_auto/v1742364150/fotter5_wlmm30.jpg`,
                            `https://res.cloudinary.com/dznz3eqe8/image/upload/q_auto,f_auto/v1742364257/footer6_vbyifg.png`,
                            `https://res.cloudinary.com/dznz3eqe8/image/upload/q_auto,f_auto/v1742364150/fotter3_v6bhg8.avif`,
                            `https://res.cloudinary.com/dznz3eqe8/image/upload/q_auto,f_auto/v1742364601/fotter7_xzpw4c.jpg`,
                        ].map((img, index, array) => {
                            const isLastTwoItems = index >= array.length - 2;
                            return <div key={img} className={`h-[12rem] w-full ${isLastTwoItems ? 'hidden md:block' : ''}`}>
                                <Image width={200} height={200} className='w-full h-full object-cover' src={img} alt="Footer Images" />
                            </div>
                        })
                    }
                </div>
            </div>
            {/* <div className='bg-pink-500'>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 place-items-center gap-4 md:gap-6 container mx-auto md:divide-x-2 py-12'>
                    <div className='flex w-full md:w-auto  justify-center gap-[3rem]  md:gap-2 px-8'><FaTruckMoving className='text-white-400 ' size={40} />
                        <div className='font-semibold flex flex-col text-white text-xs lg:text-sm'>FREE DELIVERY <span>From 275 AED</span></div>
                    </div>
                    <div className='flex w-full md:w-auto  justify-center gap-[3rem]  md:gap-2 px-8'> <BsCashCoin className='text-white-400' size={40} />
                        <div className='font-semibold flex flex-col text-white text-xs lg:text-sm'>FREE DELIVERY <span>From 275 AED</span></div>
                    </div>
                    <div className='flex w-full md:w-auto  justify-center gap-[3rem]  md:gap-2 px-8'><FaMedal className='text-white-400' size={40} />
                        <div className='font-semibold flex flex-col text-white text-xs lg:text-sm'>FREE DELIVERY <span>From 275 AED</span></div>
                    </div>
                    <div className='hidden md:flex w-full md:w-auto  justify-center gap-[3rem]  md:gap-2 px-8'><FaGift className='text-white-400' size={40} />
                        <div className='font-semibold flex flex-col text-white text-xs lg:text-sm'>FREE DELIVERY <span>From 275 AED</span></div>
                    </div>
                    <div className='hidden md:flex w-full md:w-auto  justify-center gap-[3rem]  md:gap-2 px-8'>
                        <BsShieldFillCheck className='text-white-400' size={40} />
                        <div className='font-semibold flex flex-col text-white text-xs lg:text-sm'>FREE DELIVERY <span>From 275 AED</span></div>
                    </div>
                    <div className='hidden md:flex w-full md:w-auto  justify-center gap-[3rem]  md:gap-2 px-8'><BsFillTelephoneFill className='text-white-400' size={40} />
                        <div className='font-semibold flex flex-col text-white text-xs lg:text-sm'>FREE DELIVERY <span>From 275 AED</span></div></div>
                </div>
            </div> */}

            <div className='footerWarp waveBg '>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto text-black'>
                    <div className=' space-y-3 py-5 px-6 order-2 md:order-1'>
                        <div className='flex gap-1'><FaLink className='text-pink-500' size={22} /> <span className='text-xl font-semibold'>Quick Links</span></div>

                        <div className='w-full'>
                            <div className='w-full flex flex-col justify-center items-left text-black gap-3 text-md'>
                                <Link className='hover:underline' href='/privacyPolicy'>Privacy Policy</Link>
                                <Link className='hover:underline' href='/termsConditions'>Terms And Conditions</Link>
                                <Link className='hover:underline' href='/aboutUs'>About Us</Link>
                                <Link className='hover:underline' href='/contactUs'>Contact Us</Link>
                            </div>

                        </div>
                    </div>
                    <div className=' space-y-3 py-5 px-6 order-1'>
                        <div className='flex gap-1'><IoMdMail className='text-pink-500' size={22} /> <span className='text-xl font-semibold'>COUPON LIST</span></div>
                        <p>Get your favourite fragrances under best price, Subscribe now for coupon list.</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 w-full">
                            <div className="font-semibold text-sm pb-2">FIND BEST PRICE</div>

                            {/* First Name Input */}
                            <input
                                className="px-4 py-3 w-full bg-slate-300"
                                placeholder="Enter Your First Name..."
                                type="text"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}

                            {/* Email Input & Button */}
                            <div className="w-full grid grid-cols-[auto_5rem]">
                                <div>
                                    <input
                                        className="px-4 py-3 w-full bg-slate-300"
                                        placeholder="Enter Your Email Address"
                                        type="email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" },
                                        })}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                                </div>
                                <button className="bg-pink-500 px-5 py-3 text-white" type="submit">
                                    GO
                                </button>
                            </div>
                        </form>
                    </div>


                    <div className=' md:col-span-2 lg:col-span-1 space-y-3 py-5 px-6 order-3'>
                        <div className='text-center text-xl font-semibold'>FOLLOWS US</div>
                        <div className='flex w-full justify-around'>
                            <div className='size-10 text-white rounded-full grid place-items-center bg-pink-500'><FaFacebookF size={26} /></div>
                            <div className='size-10 text-white rounded-full grid place-items-center bg-pink-500'><FaXTwitter size={26} /></div>
                            <div className='size-10 text-white rounded-full grid place-items-center bg-pink-500'><FaYoutube size={26} /></div>
                            <div className='size-10 text-white rounded-full grid place-items-center bg-pink-500'>
                                <a href='https://www.instagram.com/perfumetrics_live/' target='_blank' rel='no_opener' >
                                    <FaInstagram size={26} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-pink-500 px-4'>
                    <div className='container mx-auto items-center lg:flex justify-center py-3 '>
                        <p className='text-xs text-white text-center'>© 1999 - 2024 perfumetrics International Ltd | Privacy Policy | Terms of Use</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowUs