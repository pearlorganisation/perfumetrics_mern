import React from "react";

const galleryData = [
  {
    src: "https://images.unsplash.com/photo-1669587438543-50edf7ab0751?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxwZXJmdW1lfGVufDB8fDB8fHww",
    alt: "Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1654625172556-1aefe6498c2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk4fHxwZXJmdW1lfGVufDB8fDB8fHww",
    alt: "Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1618478441890-8d4e722fe882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk2fHxwZXJmdW1lfGVufDB8fDB8fHww",
    alt: "Image 4",
  },

  {
    src: "https://images.unsplash.com/photo-1695048312414-951790e85b14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHxwZXJmdW1lfGVufDB8fDB8fHww",
    alt: "Image 3",
  },

  {
    src: "https://images.unsplash.com/photo-1700524122797-9314962e40a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc4fHxwZXJmdW1lfGVufDB8fDB8fHww",
    alt: "Image 6",
  },
  {
    src: "https://images.unsplash.com/photo-1654625172556-1aefe6498c2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk4fHxwZXJmdW1lfGVufDB8fDB8fHww",
    alt: "Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1685137562352-5db6e7495538?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxwZXJmdW1lfGVufDB8fDB8fHww",
    alt: "Image 5",
  },
  {
    src: "https://images.unsplash.com/photo-1669587438543-50edf7ab0751?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxwZXJmdW1lfGVufDB8fDB8fHww",
    alt: "Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1669587438543-50edf7ab0751?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxwZXJmdW1lfGVufDB8fDB8fHww",
    alt: "Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1695048312414-951790e85b14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHxwZXJmdW1lfGVufDB8fDB8fHww",
    alt: "Image 3",
  },
  {
    src: "https://images.unsplash.com/photo-1618478441890-8d4e722fe882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk2fHxwZXJmdW1lfGVufDB8fDB8fHww",
    alt: "Image 4",
  },
  {
    src: "https://images.unsplash.com/photo-1685137562352-5db6e7495538?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxwZXJmdW1lfGVufDB8fDB8fHww",
    alt: "Image 5",
  },
  {
    src: "https://images.unsplash.com/photo-1700524122797-9314962e40a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc4fHxwZXJmdW1lfGVufDB8fDB8fHww",
    alt: "Image 6",
  },
];

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

        <ul className="flex flex-wrap gap-3 border-2">
          <img className="w md:w-full h-[22rem] md:h-auto " src="https://res.cloudinary.com/dznz3eqe8/image/upload/v1733475426/Untitled_design_20241206_014911_0000_tpl2lt.jpg" alt="" srcset="" />


        </ul>
      </div>
    </>
  );
};

export default Gallery;
