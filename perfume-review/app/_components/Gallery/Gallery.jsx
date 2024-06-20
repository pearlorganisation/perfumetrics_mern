import React from "react";

const Gallery = () => {
  return (
    <>
      <div className="container mx-auto max:w-8xl">
        <div className="p-5">
          <div>
            <h1 className="text-[#F8306C] text-center text-3xl font-medium">
              Gallery
            </h1>
          </div>

          <div className="text-center">
            <div className="inline-block relative">
              <h1 className="text-3xl font-medium pb-5">Perfumetrics Photo</h1>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-[#F8306C] "></div>
            </div>
          </div>
        </div>
        <div class="p-5 sm:p-8">
          <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            <img src="https://perfumetrics.com/wp-content/uploads/2024/04/bottle-perfume-with-gold-top_1340-38002.jpg" />
            <img src="https://perfumetrics.com/wp-content/uploads/2024/04/still-life-cosmetic-products_23-2149163104.jpg" />
            <img src="https://perfumetrics.com/wp-content/uploads/2024/04/3d-rendering-perfume-with-flowers_23-2150850983.jpg" />
            <img src="https://perfumetrics.com/wp-content/uploads/2024/04/assortment-beauty-products-displayed-shelf_23-2150717993.jpg" />
            <img src="https://perfumetrics.com/wp-content/uploads/2024/04/abstract-3d-flowers-with-perfume-bottle_23-2150872021.jpg" />
            <img src="https://perfumetrics.com/wp-content/uploads/2024/04/bottle-perfume-with-blue-top-that-says-perfume_1340-37998.jpg" />
            <img src="https://perfumetrics.com/wp-content/uploads/2024/04/scented-beauty-product-bottle-luxurious-aroma-relaxation-generated-by-artificial-intelligence_188544-90038.jpg" />
            <img src="https://perfumetrics.com/wp-content/uploads/2024/04/3d-rendering-perfume-with-flowers_23-2150850877.jpg" />
            <img src="https://perfumetrics.com/wp-content/uploads/2024/04/pexels-photo-16065311.webp" />
            {/* <img src="https://perfumetrics.com/wp-content/uploads/2024/04/pexels-photo-12616231.jpeg" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
