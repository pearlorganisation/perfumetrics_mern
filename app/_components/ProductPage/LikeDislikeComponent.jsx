import React, { useCallback } from 'react';
import { IoHeart } from 'react-icons/io5';
import Image from 'next/image';
import axios from 'axios';
import { userStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';

const LikeDislikeComponent = React.memo(({ historyMap, productId, data }) => {
    const { user, isUserLoggedIn } = userStore();
    const router = useRouter();


    const likeDislike = async (userVote) => {
        try {
            const result = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/votePerfume`, {
                userId: user?._id, perfumeId: productId, userVote
            })
            router.refresh()
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

    return (
        <div className="flex justify-start px-14 py-8 md:mt-6">
            <div
                onClick={handleLike}
                className="w-fit cursor-pointer grid place-items-center gap-1"
            >
                <IoHeart
                    className={`${((historyMap?.get(productId)?.vote === 1) ? 'ring-4 ring-pink-500' : '')} border-2 size-12 border-black rounded-full p-1 text-pink-300`}
                    size={38}
                />
                <div className="h-1 w-full bg-pink-400"></div>
                <span>{data?.data?.likes} Likes</span>
            </div>

            <div
                onClick={handleDislike}
                className="w-fit cursor-pointer grid place-items-center gap-1 ml-10"
            >
                <Image
                    className={`${((historyMap?.get(productId)?.vote === -1) ? 'ring-4 ring-pink-500' : '')} border-2 size-12 border-black rounded-full`}
                    src="/likes.svg"
                    width={50}
                    height={50}
                    alt=""
                />
                <div className="h-1 w-full bg-pink-400"></div>
                <span>{data?.data?.dislike} DisLikes</span>
            </div>
        </div>
    );
});

export default LikeDislikeComponent;