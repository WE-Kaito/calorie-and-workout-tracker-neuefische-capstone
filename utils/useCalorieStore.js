import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCalorieStore = create(
  persist(
    (set, get) => ({
      dailyCount: 0,
      dailyMeals: [],
      calorieGoal: 1600,
      history: [],

      resetDailyMeals: () => set(() => ({ dailyMeals: [] })),

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

      addHistoryEntry: (year, month, day, isGoalExceeded) =>
        set((state) => ({
          history: [
            ...state.history,
            {
              date: new Date(year, month, day).getTime(),
              entry: {
                wasExceeded: isGoalExceeded,
                dailyCount: state.dailyCount,
                dailyMeals: state.dailyMeals,
                calorieGoal: state.calorieGoal,
                // states for home ui
              },
            },
          ],
        })),
    }),
    {
      name: "dailyCountStorage",
    }
  )
);

export default useCalorieStore;
