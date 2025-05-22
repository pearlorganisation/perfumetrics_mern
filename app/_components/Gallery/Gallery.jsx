// import Image from "next/image";
// import React from "react";



// const Gallery = () => {
//   return (
//     <>
//       {/* <div className="px-8 md:px-8  relative">
//         <div className="">
//           <div className="grid place-items-center relative mb-6">
//             <h2 className="text-xl md:text-3xl font-medium px-4 md:px-8  bg-white z-40">
//               Fragram Gallery
//             </h2>
//             <div className="absolute w-full h-[2px] bg-slate-500"></div>
//           </div>
//         </div>

//         <ul className="flex flex-wrap gap-3 bg-red-500">
          
//           <Image width={800} height={800} className="md:object-cover object-cover w-full h-full md:w-full"
//             src="https://res.cloudinary.com/dznz3eqe8/image/upload/v1742280826/GalleryImage_yf5lo5.jpg"
            
//             alt="GalleryImage" />


//         </ul>
//       </div> */}
//        <div className="px-8 md:px-8 relative">
//       <div className="">
//         <div className="grid place-items-center relative mb-6">
//           <h2 className="text-xl md:text-3xl font-medium px-4 md:px-8 bg-white z-40">Fragram Gallery</h2>
//           <div className="absolute w-full h-[2px] bg-slate-500"></div>
//         </div>
//       </div>

//       <ul className="flex flex-wrap gap-3 bg-red-500">
//         <Image
//           width={800}
//           height={800}
//           className="object-cover w-full h-[70vh] md:h-auto md:object-cover md:w-full"
//           src="https://res.cloudinary.com/dznz3eqe8/image/upload/v1742280826/GalleryImage_yf5lo5.jpg"
//           alt="GalleryImage"
//         />
//       </ul>
//     </div>
//     </>
//   );
// };

// export default Gallery;



import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="px-8 md:px-8 relative">
      <div>
        <div className="grid place-items-center relative mb-6">
          <h2 className="text-xl md:text-3xl font-medium px-4 md:px-8 bg-white z-40">
            Fragram Gallery
          </h2>
          <div className="absolute w-full h-[2px] bg-slate-500"></div>
        </div>
      </div>

      <ul className="flex flex-wrap gap-3 bg-red-500">
        {/* Image for medium and larger screens */}
        <div className="hidden sm:hidden md:block w-full">
          <Image
            width={800}
            height={800}
            className="object-cover w-full h-auto"
            src="https://res.cloudinary.com/dznz3eqe8/image/upload/q_auto,f_auto/v1747038750/0_kzuwlg.jpg"
            alt="Large Screen Gallery Image"
          />
        </div>

        {/* Image for small and extra-small screens */}
        <div className="block md:hidden w-full">
          <Image
            width={800}
            height={800}
            className="object-cover w-full h-auto"
            src="https://res.cloudinary.com/dznz3eqe8/image/upload/h_465,w_326/v1747038750/0_1_a9awgn.jpg
"
            alt="Small Screen Gallery Image"
          />
        </div>
      </ul>
    </div>
  );
};

export default Gallery;
