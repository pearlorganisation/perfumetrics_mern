"use client";
import { userStore } from "@/store/userStore";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const RequestAReview = () => {
    const { user, isUserLoggedIn } = userStore();
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedImages, setSelectedImages] = useState([]);
    const [imageFile, setImageFile] = useState([]);

    const postRequestAReview = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/requestReview`, data);
            toast.success("Successfully Submitted !!");
            router.push("/");
            setLoading(false);
        } catch (error) {
            toast.error("Error on Submission !!");
            setLoading(false);
        }
    };

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("brand", data?.brand);
        formData.append("description", data?.description);
        imageFile.forEach((file) => formData.append("images", file));
        formData.append("perfumeName", data?.perfumeName);
        formData.append("userId", user?._id);
        postRequestAReview(formData);
    };

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        setImageFile(files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setSelectedImages(newImages);
    };

    const handleRemoveImage = (index) => {
        setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
        setImageFile((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    useEffect(() => {
        if (!isUserLoggedIn) {
            toast.info("Please Login First!!");
            router.push("/login");
        }
    }, []);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center space-y-6 min-h-screen p-8 bg-white"
        >
            <h1 className="text-2xl font-bold text-gray-800">Request A Review</h1>

            <div className="flex flex-col-reverse items-center md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
                <div className="order-2 md:order-none block md:w-1/2 relative">
                    <Image
                        src={`https://res.cloudinary.com/dznz3eqe8/image/upload/v1730196194/tiny-women-with-huge-perfume-bottle-flat-vector-illustration-girls-creating-new-fragrance-flower-deodorant-adding-cinnamon-orange-scent-good-body-smell-aromatherapy-cosmetic-concept_74855-23229_djdn8r.jpg`}
                        alt="Illustration"
                        layout="responsive"
                        width={500}
                        height={500}
                        className="rounded-lg"
                    />
                </div>

                <div className="w-full md:w-1/2 space-y-6 px-4">
                    {/* Form Fields */}
                    {/* Brand */}
                    <div>
                        <input
                            type="text"
                            id="brand"
                            {...register("brand", {
                                required: "Brand is required",
                                minLength: { value: 3, message: "Brand must be at least 3 characters" },
                                maxLength: { value: 50, message: "Brand must be less than 50 characters" },
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
                                maxLength: { value: 100, message: "Perfume name must be less than 100 characters" },
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
                                maxLength: { value: 300, message: "Description must be less than 300 characters" },
                            })}
                            placeholder="Write Description"
                            rows="4"
                            className="w-full border border-pink-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
                        />
                        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                    </div>

                    {/* Image Upload */}
                    <div>
                        <div className="flex flex-col space-y-2">
                            <input
                                type="file"
                                id="photo-upload"
                                accept="image/*"
                                multiple
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                            <label
                                htmlFor="photo-upload"
                                className="flex items-center justify-center w-full h-36 border-2 border-dashed border-pink-300 rounded-lg cursor-pointer"
                            >
                                <span className="text-pink-400">Click to upload images</span>
                            </label>

                            {/* Image Preview */}
                            <div className="flex flex-wrap gap-4">
                                {selectedImages.map((src, index) => (
                                    <div key={index} className="relative size-48">
                                        <img
                                            src={src}
                                            alt={`Preview ${index}`}
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                        <button
                                            type="button"
                                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                                            onClick={() => handleRemoveImage(index)}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 grid place-items-center">
                        {isLoading ? (
                            <button
                                type="button"
                                disabled
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

export default RequestAReview;
