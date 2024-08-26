import { create } from "zustand";
import { Store } from "@/type";

interface StoreState {
  selectedStore: Store | null;
  setSelectedStore: (store: Store) => void;
}

export const useStore = create<StoreState>((set) => ({
  selectedStore: null,
  setSelectedStore: (store) => set({ selectedStore: store }),
}));