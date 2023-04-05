import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCalorieStore = create(
  persist(
    (set, get) => ({
      dailyCount: 0,
      dailyMeals: [],
      calorieGoal: 1600,
      history: [],
      setDailyCount: (count) => set(() => ({ dailyCount: count })),
      addDailyCount: (userInput) =>
        set((state) => ({ dailyCount: state.dailyCount + userInput })),
      addDailyMeal: (nameUserInput, caloriesUserInput, hour, minute) =>
        set((state) => ({
          dailyMeals: [
            ...state.dailyMeals,
            {
              name: `${nameUserInput}`,
              calories: `${caloriesUserInput}`,
              time_stamp: `${hour < 10 ? "0" + hour : hour}:${
                minute < 10 ? "0" + minute : minute
              }`,
            },
          ],
        })),
      deleteDailyMeal: (index1) =>
        set((state) => ({
          dailyMeals: state.dailyMeals.filter(
            (meal, index) => index !== index1
          ),
        })),
      setCalorieGoal: (userInput) => set(() => ({ calorieGoal: userInput })),
      addHistoryEntry: (date, historyEntry) =>
        set((state) => ({
          history: [...state.history, { date: date, entry: { historyEntry } }],
        })),
    }),
    {
      name: "dailyCountStorage",
    }
  )
);

export default useCalorieStore;
