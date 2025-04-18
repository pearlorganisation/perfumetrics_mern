import Image from "next/image";
import React from "react";



const Gallery = () => {
  return (
    <>
      <div className="px-8 md:px-8  relative">
        <div className="">
          <div className="grid place-items-center relative mb-6">
            <h1 className="text-xl md:text-3xl font-medium px-4 md:px-8  bg-white z-40">
              Fragram Gallery
            </h1>
            <div className="absolute w-full h-[2px] bg-slate-500"></div>
          </div>
        </div>

        <ul className="flex flex-wrap gap-3 bg-red-500">
          {/* <img className=" md:w-full h-[22rem] md:h-auto " src="https://res.cloudinary.com/dznz3eqe8/image/upload/v1733475426/Untitled_design_20241206_014911_0000_tpl2lt.jpg" alt="" srcset="" /> */}
          <Image width={800} height={800} className="md:object-cover object-cover w-full h-full md:w-full"
            src="https://res.cloudinary.com/dznz3eqe8/image/upload/v1742280826/GalleryImage_yf5lo5.jpg"
            // src="https://res.cloudinary.com/dznz3eqe8/image/upload/w_828,h_552/v1737557545/Design%20Destination/gcvfr8gc7h4uhszanyql.jpg"
            alt="GalleryImage" />


        </ul>
      </div>
    </>
  );
};

export default Gallery;
