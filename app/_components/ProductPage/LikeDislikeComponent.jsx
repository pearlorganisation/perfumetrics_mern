import React, { useCallback, useEffect, useState } from 'react';
import { IoHeart } from 'react-icons/io5';
import Image from 'next/image';
import axios from 'axios';
import { userStore } from '@/store/userStore';

const LikeDislikeComponent = React.memo(({ historyMap, productId, data }) => {
    const { user, isUserLoggedIn } = userStore();
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
        try {
            const result = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/votePerfume`, {
                userId: user?._id, perfumeId: productId, userVote
            })
            getLikeDisLike()

        } catch (error) {
            console.log(error)
        }
    }

    const handleLike = useCallback(() => {
        // alert("hello")
        likeDislike(1);
    }, [likeDislike]);

    const handleDislike = useCallback(() => {
        // alert("hello")
        likeDislike(-1);
    }, [likeDislike]);
    useEffect(() => {
        getLikeDisLike()
        if (user) perfumeUserHistory(user._id);
    }, [user])
    useEffect(() => {
        if (user) perfumeUserHistory(user._id);
    }, [user, likeDisLikeData])


    return (
        <div className="flex justify-center  mt-6  ">
            <div
                onClick={handleLike}
                className="w-fit cursor-pointer grid place-items-center gap-1"
            >
                <IoHeart
                    className={`${((userHistory?.get(productId)?.vote === 1) ? 'ring-4 ring-pink-500' : '')} border-2 size-12 border-black rounded-full p-1 text-pink-300`}
                    size={38}
                />
                <div className="h-1 w-full bg-pink-400"></div>
                <span>{likeDisLikeData?.likes} Likes</span>
            </div>

            <div
                onClick={handleDislike}
                className="w-fit cursor-pointer grid place-items-center gap-1 ml-10"
            >
                <Image
                    className={`${((userHistory?.get(productId)?.vote === -1) ? 'ring-4 ring-pink-500' : '')} border-2 size-12 border-black rounded-full`}
                    src="/likes.svg"
                    width={50}
                    height={50}
                    alt=""
                />
                <div className="h-1 w-full bg-pink-400"></div>
                <span>{likeDisLikeData?.dislike} DisLikes</span>
            </div>
        </div>
    );
});

export default LikeDislikeComponent;