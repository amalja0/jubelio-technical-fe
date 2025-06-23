import {create} from "zustand";

export const useLoaderStore = create((set) => ({
  isLoading: null,
  setIsLoading: (isLoading) => set({ isLoading: isLoading })
}));