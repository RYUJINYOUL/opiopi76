import { create } from "zustand";

const useUIState = create((set) => ({
  homeCategory: "도어락 비파손 전문업체",
  headerImageSrc:
    "/",
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImageSrc: (src) => set({ headerImageSrc: src }),
}));

export default useUIState;
