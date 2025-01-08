import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import axios from "axios"; // Make sure axios is imported

export const userHistory = create(
  persist(
    (set) => ({
      userHistoryData: null,
      error: null,
      loading: false,
      getUserHistories: async (userId) => {
        set({ loading: true, error: null });
        try {
          const result = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/userHistory/${userId}`
          );
          // console.log(result, "userHistory");
          const mapObj = {};
          result?.data?.data?.commentsVote?.forEach((el) => {
            mapObj[el?.commentId] = el;
          });
          set({
            userHistoryData: mapObj,
            loading: false,
          });
        } catch (error) {
          console.error("Error fetching user history:", error);
          set({ error: error.message, loading: false });
        }
      },
    }),
    {
      name: "perfumetricsUserHistories", // Name of the item in localStorage
      storage: createJSONStorage(() => localStorage), // Use localStorage as the storage
    }
  )
);
