import { toast } from "sonner";
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
        set({ loading: true, error: null });
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signin`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ userName, pin }),
            }
          );

          if (!response.ok) {
            // console.log(await response.json());
            const errMessage = await response.json();
            throw new Error("Login failed: " + errMessage?.message);
          }

          const user = await response.json();

          set({ user: user.data, isUserLoggedIn: true, loading: false });
        } catch (error) {
          console.log(error);
          toast.error(error.message, { position: "top-center" });
          set({ error: error.message, loading: false });
        }
      },
      logout: () => set({ user: null, isUserLoggedIn: false }),
    }),
    {
      name: "perfumetricsUserStore", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
