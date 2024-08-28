import { create } from "zustand";
import { devtools, createJSONStorage, persist } from "zustand/middleware";

export const userStore = create(
  persist(
    (set) => ({
      user: null,
      isUserLoggedIn: false,
      error: null,
      loading: false,
      login: async ({ userName, pin }) => {
        console.log("Zustand");
        set({ loading: true, error: null });
        try {
          const response = await fetch(
            "https://perfume-backend-1.onrender.com/api/v1/auth/signin",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ userName, pin }),
            }
          );

          if (!response.ok) {
            throw new Error("Login failed");
          }

          const user = await response.json();

          set({ user: user.data, isUserLoggedIn: true, loading: false });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },
      logout: () => set({ user: null, isUserLoggedIn: false }),
    }),
    {
      name: "perfumetricsUD", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
