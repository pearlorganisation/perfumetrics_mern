import React, { useCallback, useEffect, useState } from 'react';
import { IoHeart } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';
import { IoThumbsDown, IoThumbsDownOutline } from 'react-icons/io5';
import axios from 'axios';
import { userStore } from '@/store/userStore';
import { toast } from 'sonner';
import { FaSpinner } from 'react-icons/fa';
import perfumeMetaData from '@/store/perfumeMetaData';

const LikeDislikeComponent = React.memo(({ historyMap, productId, data }) => {
  const { user, isUserLoggedIn } = userStore();
  const { id, setId, clearId } = perfumeMetaData();
  const [isLoading, setIsLoading] = useState(false);
  const [likeDisLikeData, setLikeDisLike] = useState({});
  const [userHistory, setUserHistory] = useState(null);

  const perfumeUserHistory = useCallback(async (userId) => {
    const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/userHistory/${userId}`);
    const { perfumeMarkedVoted } = result?.data?.data;

    if (perfumeMarkedVoted?.length > 0) {
      const userHistoryMap = new Map(perfumeMarkedVoted.map((item) => [item.perfumeId, item]));
      setUserHistory(userHistoryMap);
    }
  }, []);

  const getLikeDisLike = async () => {
    const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/like-dislike/${id}`);
    setLikeDisLike(result?.data?.data);
  };

  const likeDislike = async (userVote) => {
    setIsLoading(true);
    try {
      await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/perfume/votePerfume`, {
        userId: user?._id,
        perfumeId: productId,
        userVote,
      });
      setIsLoading(false);
      getLikeDisLike();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleLike = useCallback(() => {
    isUserLoggedIn ? likeDislike(1) : toast.info('Please Login First...');
  }, [likeDislike]);

  const handleDislike = useCallback(() => {
    isUserLoggedIn ? likeDislike(-1) : toast.info('Please Login First...');
  }, [likeDislike]);

  useEffect(() => {
    if (id) {
      getLikeDisLike();
    }
    if (user) perfumeUserHistory(user._id);
  }, [user, id]);

  useEffect(() => {
    if (user) perfumeUserHistory(user._id);
  }, [user, likeDisLikeData]);

  return (
    <div className="flex justify-center items-center space-x-6 mt-6">
      {/* Like Button */}
      <div onClick={handleLike} className="cursor-pointer flex flex-col items-center">
        {isLoading ? (
          <FaSpinner className="animate-spin text-pink-500" size={28} />
        ) : userHistory?.get(productId)?.vote === 1 ? (
          <IoHeart className="text-pink-500 text-3xl hover:scale-110 transition-transform" />
        ) : (
          <IoHeartOutline className="text-gray-500 text-3xl hover:scale-110 transition-transform" />
        )}
        <span className="text-sm mt-1 text-gray-700">{likeDisLikeData?.likes || 0} Likes</span>
      </div>

      {/* Dislike Button */}
      <div onClick={handleDislike} className="cursor-pointer flex flex-col items-center">
        {isLoading ? (
          <FaSpinner className="animate-spin text-pink-500" size={28} />
        ) : userHistory?.get(productId)?.vote === -1 ? (
          <IoHeart className="text-pink-500 text-3xl hover:scale-110 transition-transform" />
        ) : (
          <IoHeartOutline className="text-gray-500 text-3xl hover:scale-110 transition-transform" />
        )}
        <span className="text-sm mt-1 text-gray-700">{likeDisLikeData?.dislike || 0} Dislikes</span>
      </div>
    </div>
  );
});

export default LikeDislikeComponent;
