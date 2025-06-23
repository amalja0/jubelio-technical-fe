import {create} from "zustand";

export const useDashboardStore = create((set) => ({
  filterObject: null,
  setFilterObject: (filters) => set({ filterObject: filters })
}));