"use client"

import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";

const VideoBox = () => {
    const [video, setVideo] = useState(true)

    return (
        <div className="grid place-items-center relative bg-slate-100  md:h-[12rem] md:w-[90%] border overflow-hidden">
            {
                video && <img
                    className="h-[15rem] w-[90%]  z-50"
                    src="https://plus.unsplash.com/premium_photo-1679106770086-f4355693be1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                />
            }

            <button
                onClick={() => {
                    setVideo(!video)
                }}
                className="size-14 rounded-full z-50 bg-pink-500 grid place-items-center absolute">
                <FaPlay size={25} className=" text-white" />
            </button>
            {/* <video
                className="-z-0  absolute"
                src="https://videos.pexels.com/video-files/8447605/8447605-uhd_2732_1440_25fps.mp4"
            ></video> */}

        </div>
    )
}

export default VideoBox