import { create } from "zustand";

interface StoreState {
  userName: string;
  setUserName: (value: string) => void;
}

const welcomeStore = create<StoreState>((set) => ({
  userName: "",
  setUserName: (value) => set({ userName: value }),
}));

export default welcomeStore;
