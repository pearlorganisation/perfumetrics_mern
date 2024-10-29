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
      <div className="px-8 md:px-20 ">
        <div className="p-5">
          <div>
            <h1 className="text-[#F8306C] text-center text-xl sm:text-2xl md:text-3xl font-medium">
              Gallery
            </h1>
          </div>

          <div className="text-center">
            <div className="inline-block relative">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-medium pb-5">Perfumetrics Photo</h1>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-[#F8306C] "></div>
            </div>
          </div>
        </div>

        <ul className="flex flex-wrap gap-3">
          {galleryData.map((image, index) => (
            <li
              key={index}
              className=" h-[100px] sm:h-[25vh] xl:h-[200px]  flex-grow portrait-height short-screen-height"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-full min-w-full object-cover align-bottom img-small-screen"
                loading="lazy"
              />
            </li>
          ))}
          <li className="flex-grow-[0]"></li>
        </ul>
      </div>
    </>
  );
};

export default Gallery;
