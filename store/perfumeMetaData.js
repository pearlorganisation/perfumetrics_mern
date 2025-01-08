import { create } from "zustand";

const perfumeMetaData = create((set) => ({
  id: null, // Initial value
  setId: (newId) => set({ id: newId }), // Function to update the ID
  clearId: () => set({ id: null }), // Function to reset the ID
}));

export default perfumeMetaData;
