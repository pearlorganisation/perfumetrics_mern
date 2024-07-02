"use client"
import Image from 'next/image';
import React, { useRef } from 'react'
import CustomerFeedbackModal from '../Modals/FeedBackModal/CustomerFeedbackModal';

const Feedback = () => {
    function handleOpeningModal() {
        modalRef.current.open();
    }

    const modalRef = useRef();
    return (
        <>
            <CustomerFeedbackModal ref={modalRef} />
            <div className="grid grid-cols-2">
                <div className="grid grid-cols-6 gap-5">
                    {[
                        {
                            name: "Wrost",
                            icons: "😖",
                            indi: 30,
                        },
                        {
                            name: "Not Good",
                            icons: "🙁",
                            indi: 20,
                        },
                        {
                            name: "Fine",
                            icons: "😐",
                            indi: 60,
                        },
                        {
                            name: "Good",
                            icons: "😀",
                            indi: 55,
                        },
                        {
                            name: "Very Good",
                            icons: "😍",
                            indi: 45,
                        },
                    ]?.map((item) => {
                        return (
                            <div
                                onClick={handleOpeningModal}
                                className="cursor-pointer font-medium text-[#105955] relative grid place-items-center"
                            >
                                <div className="absolute w-full h-full bg-transparent hover:backdrop-grayscale-0 backdrop-grayscale"></div>
                                <div className="text-3xl">{item?.icons}</div>
                                <div className="text-sm font-medium"> {item?.name}</div>
                                <div className="h-3 border overflow-hidden rounded-lg w-full bg-slate-300">
                                    {" "}
                                    <div
                                        style={{
                                            width: `${item.indi}%`,
                                        }}
                                        className={`h-full  bg-pink-500 grayscale-0`}
                                    ></div>{" "}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="grid grid-cols-6 gap-5">
                    {[
                        {
                            name: "Winter",
                            icons: "/snow.svg",
                            indi: 30,
                        },
                        {
                            name: "Spring",
                            icons: "/spring.svg",
                            indi: 20,
                        },
                        {
                            name: "Summer",
                            icons: "/summer.svg",
                            indi: 60,
                        },
                        {
                            name: "Fall",
                            icons: "/fall.svg",
                            indi: 55,
                        },
                        {
                            name: "Day",
                            icons: "/day.svg",
                            indi: 45,
                        },
                        {
                            name: "Night",
                            icons: "/night.svg",
                            indi: 45,
                        },
                    ]?.map((item) => {
                        return (
                            <div
                                onClick={handleOpeningModal}
                                className="cursor-pointer font-medium text-[#105955] relative grid place-items-center"
                            >
                                <div className="absolute w-full h-full bg-transparent hover:backdrop-grayscale-0 backdrop-grayscale"></div>
                                <Image
                                    src={item?.icons}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "60%", height: "auto" }}
                                    alt="img"
                                />
                                <div className="text-sm font-medium"> {item?.name}</div>
                                <div className="h-3 border overflow-hidden rounded-lg w-full bg-slate-300">
                                    {" "}
                                    <div
                                        className={`h-full w-[50%] bg-pink-500 grayscale-0`}
                                    ></div>{" "}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div></>
    )
}

export default Feedback