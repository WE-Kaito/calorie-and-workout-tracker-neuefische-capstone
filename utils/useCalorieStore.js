import { create } from "zustand";

const useCalorieStore = create((set) => ({
  dailyCount: 0,
  dailyMeals: [],
  calorieGoal: 1600,
  // initiateDailyCount: reset at midnight
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

export default useCalorieStore;
