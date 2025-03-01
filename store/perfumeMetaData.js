import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const perfumeMetaData = create(
  persist(
    (set) => ({
      id: null, // Initial value
      setId: (newId) => set({ id: newId }), // Function to update the ID
      clearId: () => set({ id: null }), // Function to reset the ID
    }),
    {
      name: "perfumeMetadata", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default perfumeMetaData;
