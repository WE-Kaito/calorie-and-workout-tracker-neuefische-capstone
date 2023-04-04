import { create } from "zustand";
import { persist } from "zustand/middleware";

/* const useCalorieStore = create((set) => ({
  dailyCount: 0,
  dailyMeals: [],
  calorieGoal: 1600,
  // initiateDailyCount: reset at midnight!

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
      dailyMeals: state.dailyMeals.filter((meal, index) => index !== index1),
    })),
  setCalorieGoal: (userInput) => set(() => ({ calorieGoal: userInput })),
}));

export default useCalorieStore; */

const useCalorieStore = create(
  persist(
    (set, get) => ({
      dailyCount: 0,
      dailyMeals: [],
      calorieGoal: 1600,
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
    }),
    {
      name: "dailyCountStorage",
    }
  )
);

export default useCalorieStore;
