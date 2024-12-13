import React, { useState, useEffect, useMemo, memo } from "react";
import { SlDislike, SlLike } from "react-icons/sl";
import { toast } from "sonner";
import { FaSpinner } from "react-icons/fa";
import { userStore } from "@/store/userStore";
import { userHistory } from "@/store/userHistory";
import { useRouter } from "next/navigation";

async function getCommentVotes(item) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/comment/vote-comment/${item._id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch comment votes");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching comment votes:", error);
    throw error;
  }
}

const CommentLikeDisLike = memo(({ item }) => {
  const [currLikeDislikeData, setCurrLikeDislikeData] = useState({
    likes: item?.likes || 0,
    disLikes: item?.disLikes || 0,
  });
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter();
  const { user } = userStore();
  const { getUserHistories, userHistoryData } = userHistory();

  // Determine if the user has liked or disliked this comment
  const userVote =
    userHistoryData?.[`${item?._id}`]?.vote || -99; // 1 for like, -1 for dislike, 0 for no action

  async function postAnVoteForComment(currVote) {
    if (!user) {
      toast.error("Please log in!");
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/comment/vote-comment/${item._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user._id,
            perfumeId: item.perfumeId,
            vote: currVote,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit vote");
      }

      // Get updated vote data
      if (user) {
        getUserHistories(user?._id); // Refresh user history
      }
      const { data } = await getCommentVotes(item);

      setCurrLikeDislikeData((prev) => ({
        ...prev,
        likes: data.likes,
        disLikes: data.disLikes,
      }));
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");

      console.error("Error:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  }

  return (
    <div className="mt-4 flex space-x-4">
      {/* Like Button */}
      <button
        onClick={() => {
          if (!user) {
            router.push("/login");
          } else {
            postAnVoteForComment(1);
          }
        }}
        className={`flex items-center space-x-2 ${userVote == 1 ? "text-green-500" : "text-gray-500"
          } hover:text-green-700`}
        disabled={loading} // Disable button when loading
      >
        <div>
          <SlLike className="" />
          {loading ? (
            <FaSpinner className="animate-spin text-pink-500" size={22} />
          ) : (
            currLikeDislikeData?.likes || 0
          )}
        </div>
      </button>

      {/* Dislike Button */}
      <button
        onClick={() => {
          if (!user) {
            router.push("/login");
          } else {
            postAnVoteForComment(-1);
          }
        }}
        className={`flex items-center space-x-2 ${userVote == -1 ? "text-red-500" : "text-gray-500"
          } hover:text-red-700`}
        disabled={loading} // Disable button when loading
      >
        <div>
          <SlDislike className="" />
          {loading ? (
            <FaSpinner className="animate-spin text-red-500" size={22} />
          ) : (
            currLikeDislikeData?.disLikes || 0
          )}
        </div>
      </button>
    </div>
  );
});

export default CommentLikeDisLike;
