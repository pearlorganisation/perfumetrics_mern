"use client"
import Review from '@/app/(route)/product/[productId]/Review';
import { userStore } from '@/store/userStore';
import { useParams } from 'next/navigation';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { IoMdAdd } from "react-icons/io";
import { toast } from 'sonner';

const AddReview = () => {
    const [loading, setLoading] = useState(false);

    const { user } = userStore();
    const { productId } = useParams();
    const [comment, setComment] = useState('');
    const [files, setFiles] = useState([]);
    const [commentsData, setCommentsData] = useState([]);

    // UseCallback to prevent re-creation of the handleComment function on every render
    const handleComment = useCallback(async () => {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('gallery', files[i]);
        }
        formData.append("description", comment);
        formData.append("userId", user?._id);

        try {
            setLoading(true);
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/comment/${productId}`,
                {
                    method: 'POST',
                    body: formData,
                });
            const data = await response.json();
            setLoading(false);
            toast.success("Comment Created!!", { position: 'top-center' });
            getComments(productId); // Fetch the updated comments after submitting the form
            return data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [comment, files, productId, user?._id]);

    const getComments = useCallback(async (perfumeId) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/comment/${perfumeId}`);
        const data = await response.json();
        setCommentsData(data?.data);
    }, []);

    useEffect(() => {
        getComments(productId);
    }, [getComments, productId]);

    // Memoize the Review component so it only re-renders when commentsData changes
    const memoizedReview = useMemo(() => <Review commentsData={commentsData} />, [commentsData]);

    return (
        <>
            <form className="grid gap-2">
                <div className="text-3xl font-medium pl-1 relative grid place-items-center mt-24 mb-12">
                    <div className="absolute w-full border"></div>
                    <div className="z-20 bg-white px-3 py-2">Add Your Review</div>
                </div>
                <textarea
                    className="resize-none border-2 px-3 py-2 outline-none rounded-md border-gray-400"
                    name="comment"
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add Your Review..."
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
                        onChange={(e) => setFiles(e.target.files)}
                        multiple
                        className="hidden"
                        type="file"
                        name="image"
                        id="image"
                    />
                    {loading ? (
                        <button
                            type="button"
                            className="flex px-6 font-medium py-3 bg-gray-300 w-fit rounded-md justify-center items-center gap-3"
                        >
                            Loading...
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => {

                                user?._id ? handleComment() : toast.info("Please Login First!!", { position: 'top-center' })
                            }}
                            className="flex px-6 font-medium py-3 bg-gray-300 w-fit rounded-md justify-center items-center gap-3"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </form>
            {memoizedReview}
        </>
    );
};

export default AddReview;