import React from "react";

const Banner = () => {
  return (
    <div className="flex shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
      <div className="w-[50vw] h-[60vh] ">
        <img
          className="object-cover object-center w-[50vw] h-[60vh]"
          src="https://img.freepik.com/free-photo/close-view-sexual-bride-with-makeup-hairstyle-wearing-white-silk-gown-veil-spraying-perfume-her-neck-enjoying-smell-against-gray-background-bridal-morning_8353-12277.jpg?t=st=1719998749~exp=1720002349~hmac=bf2c78f2c38ceb986d0e9903d5692259f600d4430c5df00866c0ea5f824eeece&w=740"
          alt="perfumegirl"
        />
      </div>
      <div className=" w-[50vw] h-[60vh] ">
        <img
          className="object-cover object-center w-[50vw] h-[60vh]"
          src="https://img.freepik.com/premium-photo/glass-perfume-bottle-with-good-decoration-flowers_969965-334.jpg"
          alt="perfume"
        />
      </div>
    </div>
  );
};

export default Banner;
