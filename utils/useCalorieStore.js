import { create } from "zustand";

const useCalorieStore = create((set) => ({
  dailyCount: 0,
  dailyMeals: [],
  // initiateDailyCount: reset at midnight
  addDailyCount: (userInput) =>
    set((state) => ({ dailyCount: state.dailyCount + userInput })),
  addDailyMeal: (nameUserInput, caloriesUserInput) =>
    set((state) => ({
      dailyMeals: [
        ...state.dailyMeals,
        { name: `${nameUserInput}`, calories: `${caloriesUserInput}` },
      ],
    })),
  deleteDailyMeal: (name) =>
    set((state) => ({
      dailyMeals: state.dailyMeals.filter((meal) => meal.name !== name),
    })),
}));

export default useCalorieStore;
