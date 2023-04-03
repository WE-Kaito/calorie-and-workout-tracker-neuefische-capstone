import { create } from "zustand";

const useCalorieStore = create((set) => ({
  dailyCount: 0,
  // initiateDailyCount: reset at midnight
  addDailyCount: (userInput) =>
    set((state) => ({ dailyCount: state.dailyCount + userInput })),
}));

export default useCalorieStore;
