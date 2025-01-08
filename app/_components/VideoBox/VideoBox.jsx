"use client"

import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";

const VideoBox = ({ videoD }) => {
    // console.log(videoD, "videoDG")
    const [video, setVideo] = useState(false)

    return (
        <div className="grid place-items-center relative bg-slate-100  md:h-[12rem] md:w-[90%] border overflow-hidden">

            <iframe
                src={videoD[0]?.path}
                width="100%"
                height="100%"
            // className="rounded-2xl h-[200px] sm:w-[500px] sm:h-[300px] md:h-[300px] md:w-[640px] 2xl:h-[400px] 2xl:w-[700px]"
            ></iframe>

            {/* <video
                className="-z-0  absolute"
                src={videoD[0]?.path}
                controls

            ></video> */}

        </div>
    )
}

export default VideoBox