"use client"
import Review from '@/app/(route)/product/[productId]/Review';
import perfumeMetaData from '@/store/perfumeMetaData';
import { userStore } from '@/store/userStore';
import { useParams } from 'next/navigation';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { IoMdAdd } from "react-icons/io";
import { toast } from 'sonner';

const AddReview = () => {
    const [loading, setLoading] = useState(false);
    const { id: productId, setId, clearId } = perfumeMetaData();

    const { user } = userStore();
    // const { productId } = useParams();
    const [comment, setComment] = useState('');
    const [files, setFiles] = useState([]);
    const [commentsData, setCommentsData] = useState([]);

    // UseCallback to prevent re-creation of the handleComment function on every render
    const handleComment = useCallback(async () => {
        if (comment.trim() == '') {
            toast.error("Please Enter Comment!")
            return
        }
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
            setComment('')
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
        if (productId) {
            getComments(productId);

        }
    }, [productId]);

    // Memoize the Review component so it only re-renders when commentsData changes
    const memoizedReview = useMemo(() => <Review commentsData={commentsData} />, [commentsData]);

    return (
        <div className=''>

            <form className="grid gap-2 px-4">
                <div className=" text-xl md:text-3xl font-medium pl-1 relative grid place-items-center mt-8 md:mt-4 mb-4 md:my-8">
                    <div className="z-20 font-bold text-[28px] bg-white px-3 py-2">Add Your Review</div>
                </div>
                <textarea
                    className="resize-none border-2 py-2 outline-none rounded-md border-gray-400 h-[10rem] px-3"
                    name="comment"
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add Your Review..."
                    cols="30"
                    rows="10"
                ></textarea>
                <div className="flex gap-2">
                    {/* <label
                        className="flex px-3 md:px-6 text-sm font-medium py-[4px] md:py-3 bg-gray-300 w-fit rounded-[9px] justify-center items-center gap-3"
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
                    /> */}
                    {loading ? (
                        <button
                            type="button"
                            className="flex px-6 font-medium py-3 bg-gray-300 w-fit rounded-[9px] justify-center items-center gap-3"
                        >
                            Loading...
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => {

                                user?._id ? handleComment() : toast.info("Please Login First!!", { position: 'top-center' })
                            }}
                            className="flex px-6 text-sm font-medium py-3 bg-[#6EF0A4] w-fit rounded-[9px] justify-center items-center gap-3"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </form>
            {memoizedReview}
        </div>
    );
};

export default AddReview;
