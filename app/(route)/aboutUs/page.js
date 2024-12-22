import React from "react";
import Image from "next/image";
import { Description } from "@headlessui/react";

export const metadata = {
  title: {
    absolute: "About Us",
  },
};
const AboutUs = () => {
  return (
    <>
      <section className="bg-white py-8">
        {/* Main content */}
        <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
          {/* Left Side (Text) */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 mb-6">
              Welcome to Perfumetrics, your ultimate destination for discovering
              the perfect fragrance and lifestyle products tailored to your
              unique preferences. As an independent review platform, we aim to
              help you through the vast world of perfumes and lifestyle
              essentials, ensuring that you make informed decisions when
              choosing the products that suit you best. While we do not sell any
              products directly on our website, we provide in-depth and unbiased
              reviews that help you to get the right options based on your
              needs.
            </p>
            <p className="text-gray-700 mb-6">
              Whether you’re looking for a signature scent or exploring new
              olfactory horizons, Perfumetrics is always here to assist you with
              honest and comprehensive reviews. Each product review is crafted
              with the utmost research, providing you with detailed information
              about its composition, performance, and overall experience.
            </p>
          </div>

          {/* Right Side (Image) */}
          <div className="flex justify-center items-center">
            <Image
              className="rounded-lg"
              src="https://res.cloudinary.com/dznz3eqe8/image/upload/v1730190578/spraying-perfume-bottle-dark-purple-background_875825-31139_ecreni.avif"
              alt="Perfume Bottle Spraying"
              width={500}
              height={700}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Second content section */}
        <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
          {/* Right Side (Image) */}
          <div className="flex justify-center items-center">
            <Image
              className="rounded-lg"
              src="https://res.cloudinary.com/dznz3eqe8/image/upload/v1730190809/closeup-perfume-spraying_1036975-250183_i8fukx.avif"
              alt="Closeup Perfume Spraying"
              width={500}
              height={700}
              layout="responsive"
              objectFit="cover"
            />
          </div>

          {/* Left Side (Text) */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 mb-6">
              We have a global reach, offering our content in 10 different
              languages and many countries to serve fragrance enthusiasts and
              lifestyle seekers. This allows us to help diverse audiences. At
              Perfumetrics.com, we believe in transparency and trust. Our
              reviews are independent and unbiased, crafted by experts and
              enthusiasts who share a genuine passion for helping others
              discover the right products.
            </p>
            <p className="text-gray-700 mb-6">
              As an independent company based in the United States, we are
              committed to maintaining our authenticity and integrity. Our
              mission is simple: to be your trusted partner in navigating the
              vast world of fragrances and lifestyle products. Whether you’re a
              seasoned connoisseur or new to the fragrance scene, we’re here to
              help you find what works best for you.
            </p>
            <p className="text-gray-700">
              Should you have any questions or need further assistance, our
              dedicated team is always here to help. Feel free to reach out to
              us at{" "}
              <a
                href="mailto:help@perfumetrics.com"
                className="text-pink-500 underline"
              >
                help@perfumetrics.com
              </a>{" "}
              or visit our contact page.
            </p>
            <p className="text-gray-700 mt-4">
              We look forward to being part of your fragrance journey!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
