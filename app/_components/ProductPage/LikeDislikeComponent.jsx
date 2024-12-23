import React, { useCallback, useEffect, useState } from 'react';
import { IoHeart } from 'react-icons/io5';
import Image from 'next/image';
import axios from 'axios';
import { userStore } from '@/store/userStore';
import { toast } from 'sonner';
import { FaSpinner } from 'react-icons/fa';

const LikeDislikeComponent = React.memo(({ historyMap, productId, data }) => {
    const { user, isUserLoggedIn } = userStore();
    const [isLoading, setIsLoading] = useState(false)
    const [likeDisLikeData, setLikeDisLike] = useState({})
    const [userHistory, setUserHistory] = useState(null)

    // Perfume user history
    const perfumeUserHistory = useCallback(async (userId) => {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/userHistory/${userId}`);
        const { perfumeMarkedVoted } = result?.data?.data;

        if (perfumeMarkedVoted?.length > 0) {
            const userHistoryMap = new Map(perfumeMarkedVoted.map((item) => [item.perfumeId, item]));
            setUserHistory(userHistoryMap);
        }
    }, []);


    const getLikeDisLike = async () => {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/like-dislike/${productId}`,)
        console.log(result?.data?.data, "getLikeDisLike")
        setLikeDisLike(result?.data?.data)
    }
    const likeDislike = async (userVote) => {
        setIsLoading(true)
        try {
            const result = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/votePerfume`, {
                userId: user?._id, perfumeId: productId, userVote
            })
            setIsLoading(false)

            getLikeDisLike()

        } catch (error) {
            console.log(error)
            setIsLoading(false)

        }
    }

    const handleLike = useCallback(() => {
        // alert("hello")
        isUserLoggedIn ? likeDislike(1) : toast.info("Please Login First...");
    }, [likeDislike]);

    const handleDislike = useCallback(() => {
        // alert("hello")
        isUserLoggedIn ? likeDislike(-1) : toast.info("Please Login First...");

    }, [likeDislike]);
    useEffect(() => {
        getLikeDisLike()
        if (user) perfumeUserHistory(user._id);
    }, [user])
    useEffect(() => {
        if (user) perfumeUserHistory(user._id);
    }, [user, likeDisLikeData])


    return (
        <div className="flex justify-center   mt-6  ">
            <div
                onClick={handleLike}
                className="w-full cursor-pointer grid place-items-center gap-1"
            >
                <div className='relative'>
                    {
                        isLoading ? <div className='absolute w-full h-full border-t-2 animate-spin rounded-full border-pink-500'>

                        </div> : ''
                    }
                    <IoHeart
                        className={`${((userHistory?.get(productId)?.vote === 1) ? 'ring-2 ring-pink-500' : '')}  border-2 size-12 border-black rounded-full p-1 text-pink-300`}
                        size={38}
                    />
                </div>
                <div className="h-1 w-full bg-pink-400"></div>
                <div className='w-full flex justify-center gap-1 '><div className='w-fit h-6 '> {isLoading ? <FaSpinner className="animate-spin text-red-500" size={18} /> : (likeDisLikeData?.likes || 0)} </div> Likes</div>
            </div>

            <div
                onClick={handleDislike}
                className="w-full  cursor-pointer grid place-items-center gap-1 ml-10 space-y-1"
            >
                <div className='relative'>
                    {
                        isLoading ? <div className='absolute w-full h-full border-t-2 animate-spin rounded-full border-pink-500'>

                        </div> : ''
                    }
                    <Image
                        className={`${((userHistory?.get(productId)?.vote === -1) ? 'ring-4 ring-pink-500' : '')} ${(isLoading ? 'ring-4 ring-pink-500' : '')} border-2 size-12 border-black rounded-full`}
                        src="/likes.svg"
                        width={50}
                        height={50}
                        alt=""
                    />
                </div>
                <div className="h-1 w-full bg-pink-400"></div>
                <div className='w-full flex justify-center gap-1 '><div className='w-fit h-6 '> {isLoading ? <FaSpinner className="animate-spin text-red-500" size={18} /> : (likeDisLikeData?.dislike || 0)} </div> DisLikes </div>
            </div>
        </div>
    );
});

export default LikeDislikeComponent;