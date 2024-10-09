"use client";
import { userStore } from "@/store/userStore";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const RequestAReview = () => {
    const { user, isUserLoggedIn } = userStore();

    const [isLoading, setLoading] = useState(false)

    const router = useRouter()
    console.log(user, "user")
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedImages, setSelectedImages] = React.useState([]);
    const [imageFile, setImageFile] = React.useState([]);

    const postWriteAReview = async (data) => {
        setLoading(true)
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/requestReview`, data)
            console.log(response, "response")
            toast.success("Successfully Submitted !!")
            router.push('/')
            setLoading(false)

        } catch (error) {
            toast.error("Error on Submission !!")
            console.log(error)
            setLoading(false)
        }
    }

    const onSubmit = (data) => {
        console.log(imageFile[0])


        const formData = new FormData();
        formData.append('userId', user?._id);
        formData.append('images', imageFile[0]);
        formData.append('perfumeName', data.perfumeName);
        formData.append('description', data.description);



        const datum = { ...data, images: imageFile[0], userId: user?._id }
        console.log(datum, "datum");
        postWriteAReview(formData)
        // Handle the form submission
    };

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        setImageFile(event.target.files)
        const newImages = files.map((file) => URL.createObjectURL(file));
        setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleRemoveImage = (index) => {
        setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    useEffect(() => {
        if (!isUserLoggedIn) {
            toast.info("Please Login First !!")
            router.push('/login')
        }
    }, [])


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center p-6 space-y-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Request A Review</h1>

            {/* Brand */}
            <div className="w-full max-w-lg rounded-lg">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
                    Brand
                </label>
                <input
                    id="brand"
                    type="text"
                    {...register("brand", { required: "Brand is required" })}
                    placeholder="Brand"
                    className={`w-full px-3 py-2 border ${errors.brand ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200`}
                />
                {errors.brand && <p className="text-red-500 text-xs mt-1">{errors.brand.message}</p>}
            </div>

            {/* Title */}
            <div className="w-full max-w-lg rounded-lg">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="perfumeName">
                    Perfume Name
                </label>
                <input
                    id="perfumeName"
                    type="text"
                    {...register("perfumeName", { required: "Title is required" })}
                    placeholder="Title"
                    className={`w-full px-3 py-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200`}
                />
                {errors.perfumeName && <p className="text-red-500 text-xs mt-1">{errors.perfumeName.message}</p>}
            </div>

            {/* Description */}
            <div className="w-full max-w-lg rounded-lg">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <textarea
                    id="description"
                    {...register("description", { required: "Description is required" })}
                    placeholder="Write a description..."
                    className={`w-full px-3 py-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200`}
                    rows="4"
                />
                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
            </div>

            {/* Image Upload */}
            <div className="w-full max-w-lg rounded-lg">

                <div className="flex items-center justify-center w-full">
                    <label
                        htmlFor="photo-upload"
                        className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                        </div>
                        <input type="file"
                            id="photo-upload"
                            accept="image/*"
                            multiple
                            onChange={handleImageUpload} className="hidden" />
                    </label>
                </div>
                {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo-upload">
                    Upload Photos
                </label>
                <input
                    type="file"
                    id="photo-upload"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                /> */}
            </div>

            {/* Image Previews */}
            {selectedImages.length > 0 && (
                <div className="w-full max-w-lg rounded-lg">
                    <h2 className="text-gray-700 text-sm font-bold mb-4">Image Previews</h2>
                    <div className="grid grid-cols-2 gap-4 border border-gray-300 w-full p-2">
                        {selectedImages.map((image, index) => (
                            <div key={index} className="relative shadow-lg ">
                                <img
                                    src={image}
                                    alt={`Preview ${index + 1}`}
                                    className="w-full h-auto  rounded-md shadow-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(index)}
                                    className="absolute size-6 top-1 right-1 bg-red-500 text-white rounded-full  hover:bg-red-700"
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Submit Button */}
            <div className="w-full max-w-lg">
                {
                    isLoading ? <button
                        type="button"
                        disabled={isLoading}
                        className="w-full bg-pink-400 text-white py-2 px-4 rounded-md shadow-md hover:bg-pink-500 transition duration-300"
                    >
                        Loading...
                    </button> : <button
                        type="submit"
                        className="w-full bg-pink-400 text-white py-2 px-4 rounded-md shadow-md hover:bg-pink-500 transition duration-300"
                    >
                        Submit Review
                    </button>
                }
            </div>
        </form>
    );
};




export default RequestAReview
