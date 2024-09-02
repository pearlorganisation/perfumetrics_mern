"use client"
import React, { useState } from "react";

const WriteAReview = () => {
    const [description, setDescription] = useState("");
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleRemoveImage = (index) => {
        setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    return (
        <div className="flex flex-col items-center p-6 space-y-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Write A Review</h1>

            {/* Image Upload */}
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
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
                <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
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

            {/* Description */}
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Write a description..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                    rows="4"
                />
            </div>

            {/* Submit Button */}
            <div className="w-full max-w-lg">
                <button
                    type="submit"
                    className="w-full bg-pink-400 text-white py-2 px-4 rounded-md shadow-md hover:bg-pink-500 transition duration-300"
                >
                    Submit Review
                </button>
            </div>
        </div>
    );
};




export default WriteAReview;
