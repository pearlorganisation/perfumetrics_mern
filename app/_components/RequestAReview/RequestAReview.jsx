"use client";
import { userStore } from "@/store/userStore";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const RequestAReview = () => {
    const { user, isUserLoggedIn } = userStore();



    const router = useRouter()
    console.log(user, "user")
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedImages, setSelectedImages] = React.useState([]);
    const [imageFile, setImageFile] = React.useState([]);

    const postWriteAReview = async (data) => {

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/writeReview`, data)
            console.log(response, "response")
            toast.success("Successfully Submitted !!")
            router.push('/')
        } catch (error) {
            toast.error("Error on Submission !!")
            console.log(error)
        }
    }

    const onSubmit = (data) => {
        console.log(imageFile[0])
        const datum = { ...data, images: imageFile[0], userId: user?._id }
        console.log(datum, "datum");
        postWriteAReview(datum)
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo-upload">
                    Upload Photos
                </label>
                <input
                    type="file"
                    id="photo-upload"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                />
            </div>

            {/* Image Previews */}
            {selectedImages.length > 0 && (
                <div className="w-full max-w-lg rounded-lg">
                    <h2 className="text-gray-700 text-sm font-bold mb-4">Image Previews</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {selectedImages.map((image, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={image}
                                    alt={`Preview ${index + 1}`}
                                    className="w-full h-auto border border-gray-300 rounded-md shadow-sm"
                                />
                                <button
                                    onClick={() => handleRemoveImage(index)}
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
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
                <button
                    type="submit"
                    className="w-full bg-pink-400 text-white py-2 px-4 rounded-md shadow-md hover:bg-pink-500 transition duration-300"
                >
                    Submit Review
                </button>
            </div>
        </form>
    );
};




export default RequestAReview
