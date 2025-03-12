import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  currentPage: string;
  setPage: (page: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      currentPage: "dashboard",
      setPage: (page) => set({ currentPage: page }),
    }),
    {
      name: "auth-store",
    }
  )
);
