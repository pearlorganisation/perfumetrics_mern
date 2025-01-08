import axios from "axios";
import { create } from "zustand";
import { devtools, createJSONStorage, persist } from "zustand/middleware";

export const userLikeDislikeHistoryStore = create(
  persist(
    (set) => ({
      userLikeDislikeHistory: null,
      error: null,
      loading: false,
      getUserLikeDisLikeHistory: async (userId) => {
        set({ loading: true, error: null });
        try {
          const result = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/userHistory/${userId}`
          );
          // console.log(result, "userHistory");

          const { cons, pros, perfumeMarkedVoted } = result?.data?.data;
          const userHistoryMap = new Map();

          if (cons && cons.length > 1) {
            cons.forEach((element) => {
              userHistoryMap.set(element.consId, element);
            });
          }
          if (pros && pros.length > 1) {
            pros.forEach((element) => {
              userHistoryMap.set(element.prosId, element);
            });
          }
          if (perfumeMarkedVoted && perfumeMarkedVoted.length > 1) {
            perfumeMarkedVoted.forEach((element) => {
              userHistoryMap.set(element.perfumeId, element);
            });
          }

          // console.log("abhishek bhai ", userHistoryMap);
          set({
            userLikeDislikeHistory: userHistoryMap,
            isUserLoggedIn: true,
            loading: false,
          });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },
    }),
    {
      name: "perfumetricsUserLikeDislikeHistory", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
