"use client"
import { userStore } from '@/store/userStore';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { toast } from 'sonner';

const AddReview = () => {
    const [loading, setLoading] = useState(false)
    const { user, isUserLoggedIn, logout } = userStore();
    const { productId } = useParams()
    const [comment, setComment] = useState('')
    const [files, setFiles] = useState([])
    const [images, setImages] = useState([])
    const handleComment = async () => {
        const formData = new FormData()
        console.log(comment, "comment")
        console.log(files, "files")
        for (let i = 0; i < files.length; i++) {
            formData.append('gallery', files[i]);
        }
        formData.append("description", comment)
        formData.append("userId", user?._id)

        console.log(formData.get("reviewBy"))

        try {
            setLoading(true)
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/comment/${productId}`,
                {
                    method: 'POST',
                    body: formData,
                });
            const data = await response.json();
            setLoading(false)
            toast.success("Comment Created!!", {
                position: 'top-center'
            })

            return data;
        } catch (error) {
            console.log(error)
        }


    }
    return (
        <form className="grid gap-2">
            <div class="text-3xl font-medium pl-1 relative grid place-items-center mt-24 mb-12">
                {" "}
                <div class="absolute w-full border "></div>
                <div class="z-20 bg-white px-3 py-2">Add Your Review</div>
            </div>
            <textarea
                className="resize-none border-2 px-3 py-2 outline-none rounded-md border-gray-400"
                name="comment"
                onChange={(e) => { setComment(e.target.value) }}
                placeholder="Add Your Review..."
                id=""
                cols="30"
                rows="10"
            ></textarea>
            <div className="flex gap-2">
                <label
                    className="flex px-6 font-medium py-3 bg-gray-300 w-fit rounded-md justify-center items-center gap-3"
                    htmlFor="image"
                >
                    Upload Images <IoMdAdd size={25} />
                </label>
                <input
                    onChange={(e) => { setFiles(e.target.files) }}
                    multiple
                    className="hidden"
                    type="file"
                    name="image"
                    id="image"
                />
                {
                    loading ? <button type='button' className="flex px-6 font-medium py-3 bg-gray-300 w-fit rounded-md justify-center items-center gap-3">
                        Loading...
                    </button> : <button type='button' onClick={handleComment} className="flex px-6 font-medium py-3 bg-gray-300 w-fit rounded-md justify-center items-center gap-3">
                        Submit
                    </button>
                }
            </div>
        </form>
    )
}

export default AddReview