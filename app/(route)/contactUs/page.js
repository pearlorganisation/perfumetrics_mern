"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact-us`,
        {
          ...data,
        }
      );
      toast.success("Successfully Submitted!");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Error!");
    }
  };
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "support@perfumetrics.com",
    },
  ];

  return (
    <main className="py-14 contactWrap">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none infoWrap">
          <div className="max-w-lg space-y-3">
            <h3 className="text-pink-600 font-semibold">Contact</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Let us know how we can help
            </p>
            <p>
              We’re here to help and answer any question you might have, We look
              forward to hearing from you! Please fill out the form, or us the
              contact information bellow .
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">{item.icon}</div>
                    <p>{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md py-10 px-10 contactForm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="font-medium text-black">Full name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="w-full mt-2 px-3 py-2 text-gray-500 outline-none border border-slate focus:border-pink-600 shadow-sm"
                />
                {errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <label className="font-medium text-black">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full mt-2 px-3 py-2 text-gray-500 outline-none border border-slate focus:border-pink-600 shadow-sm"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <label className="font-medium text-black">Company</label>
                <input
                  type="text"
                  {...register("company", { required: true })}
                  className="w-full mt-2 px-3 py-2 text-gray-500 outline-none border border-slate focus:border-pink-600 shadow-sm"
                />
                {errors.company && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <label className="font-medium text-black">Message</label>
                <textarea
                  {...register("message", { required: true })}
                  className="w-full mt-2 px-3 py-2 text-gray-500 outline-none border border-slate focus:border-pink-600 shadow-sm"
                ></textarea>
                {errors.message && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <button className="w-full px-4 py-2 bg-pink-500 px-5 py-3 text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ContactUs;
