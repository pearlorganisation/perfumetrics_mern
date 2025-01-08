"use client"
import { userStore } from "@/store/userStore";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const WriteAReview = () => {
    const { user, isUserLoggedIn } = userStore();
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedImages, setSelectedImages] = useState([]);
    const [imageFile, setImageFile] = useState([]);

    const postWriteAReview = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/writeReview`, data);
            toast.success("Successfully Submitted!!");
            router.push('/');
            setLoading(false);
        } catch (error) {
            toast.error("Error on Submission!!");
            setLoading(false);
        }
    };

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("brand", data?.brand);
        formData.append("description", data?.description);
        formData.append("images", imageFile[0]);
        formData.append("perfumeName", data?.perfumeName);
        formData.append("userId", user?._id);
        postWriteAReview(formData);
    };

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        setImageFile(event.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleRemoveImage = (index) => {
        setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
        setImageFile((prevFiles) => Array.from(prevFiles).filter((_, i) => i !== index));
    };

    useEffect(() => {
        if (!isUserLoggedIn) {
            toast.info("Please Login First!!");
            router.push('/login');
        }
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center space-y-6 min-h-screen p-8 bg-white">
            <h1 className="text-2xl font-bold text-gray-800">Write A Review</h1>

            {/* Left side image */}
            <div className="flex flex-col-reverse items-center md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
                {/* Right side illustration */}
                <div className="order-2 md:order-none block md:w-1/2 relative">
                    <Image
                        src={`https://res.cloudinary.com/dznz3eqe8/image/upload/v1730198850/love-potion-concept-illustration_114360-4648_clx6v7.jpg`}
                        alt="Illustration"
                        layout="responsive"
                        width={500}
                        height={500}
                        className="rounded-lg"
                    />
                </div>
                {/* Form Section */}
                <div className="w-full md:w-1/2 space-y-6 px-4">
                    {/* Brand */}
                    <div>
                        <input
                            type="text"
                            id="brand"
                            {...register("brand", {
                                required: "Brand is required",
                                minLength: { value: 3, message: "Brand must be at least 3 characters" },
                                maxLength: { value: 50, message: "Brand must be less than 50 characters" }
                            })}
                            placeholder="Brands"
                            className="w-full border border-pink-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
                        />
                        {errors.brand && <p className="text-red-500 text-xs mt-1">{errors.brand.message}</p>}
                    </div>

                    {/* Perfume Name */}
                    <div>
                        <input
                            type="text"
                            id="perfumeName"
                            {...register("perfumeName", {
                                required: "Perfume name is required",
                                minLength: { value: 3, message: "Perfume name must be at least 3 characters" },
                                maxLength: { value: 100, message: "Perfume name must be less than 100 characters" }
                            })}
                            placeholder="Perfume Name"
                            className="w-full border border-pink-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
                        />
                        {errors.perfumeName && <p className="text-red-500 text-xs mt-1">{errors.perfumeName.message}</p>}
                    </div>

                    {/* Description */}
                    <div>
                        <textarea
                            id="description"
                            {...register("description", {
                                required: "Description is required",
                                minLength: { value: 10, message: "Description must be at least 10 characters" },
                                maxLength: { value: 300, message: "Description must be less than 300 characters" }
                            })}
                            placeholder="Write Description"
                            rows="4"
                            className="w-full border border-pink-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
                        />
                        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                    </div>

                    {/* Image Upload */}
                    <div className="w-full">
                        <div className="flex items-center justify-center w-full h-36 border-2 border-dashed border-pink-300 rounded-lg cursor-pointer">
                            <input
                                type="file"
                                id="photo-upload"
                                accept="image/*"
                                multiple
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                            <label htmlFor="photo-upload" className="flex flex-col items-center">
                                <svg className="w-8 h-8 mb-4 text-pink-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <span className="text-sm text-pink-400">Click to upload</span>
                                <span className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</span>
                            </label>
                        </div>
                    </div>

                    {/* Image Preview */}
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        {selectedImages.map((image, index) => (
                            <div key={index} className="relative">
                                <img src={image} alt={`Preview ${index}`} className="size-48 object-contain rounded-md" />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(index)}
                                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full text-xs"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 grid place-items-center">
                        {isLoading ? (
                            <button
                                type="button"
                                disabled={isLoading}
                                className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition duration-200"
                            >
                                Loading...
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition duration-200"
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
};

export default WriteAReview;
