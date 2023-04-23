import { uid } from "uid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const unixDate = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate()
).getTime();

const useCalorieStore = create(
  persist(
    (set, get) => {
      const hour = new Date().getHours();
      const minute = new Date().getMinutes();

      return {
        history: [],
        calorieGoals: [{ date: unixDate, goal: 1600 }],
        dishes: [],
        exercises: [],
        routine: [],
        routineDisplay: [],
        completedWorkouts: [],

        setCalorieGoal: (userInput) =>
          set((state) => {
            const newGoal =
              userInput !== undefined
                ? userInput
                : state.calorieGoals.at(-1).goal;

            return {
              calorieGoals: [
                ...state.calorieGoals
                  .slice()
                  .filter((goalEntry) => goalEntry.date !== unixDate),
                { date: unixDate, goal: newGoal },
              ],
            };
          }),

        addHistoryEntry: (caloriesInput, mealInput = "⚡️ ---") =>
          set((state) => ({
            history: [
              ...state.history,
              {
                date: unixDate,
                meal: `${mealInput}`,
                calories: `${caloriesInput}`,
                time_stamp: `${hour < 10 ? "0" + hour : hour}:${
                  minute < 10 ? "0" + minute : minute
                }`,
              },
            ],
          })),

        deleteHistoryEntry: (entryToDelete) =>
          set((state) => ({
            history: state.history
              .slice()
              .filter((entry) => entry !== entryToDelete),
          })),

        addDish: (
          mealInput,
          caloriesInput,
          massInput = 0,
          proteinsInput = 0,
          carbsInput = 0,
          notesInput = ""
        ) =>
          set((state) => ({
            dishes: [
              {
                meal: `${mealInput}`,
                calories: `${caloriesInput}`,
                mass: `${massInput}`,
                proteins: `${proteinsInput}`,
                carbs: `${carbsInput}`,
                notes: `${notesInput}`,
              },
              ...state.dishes,
            ],
          })),

        deleteDish: (dishToDelete) =>
          set((state) => ({
            dishes: state.dishes
              .slice()
              .filter((dish) => dish !== dishToDelete),
          })),

        addWorkout: (workoutTitle) =>
          set((state) => ({
            exercises: [
              {
                id: uid(),
                workout: workoutTitle,
                title: " NEW ",
                sets: 0,
                reps: 0,
                weight: 0,
                time: "00:00",
                notes: "",
              },
              ...state.exercises,
            ],
          })),

        addExercise: (workoutTitle) => {
          const id = uid();
          set((state) => ({
            exercises: [
              ...state.exercises,
              {
                id:
                  id === state.exercises.some((exercise) => exercise.id === id)
                    ? `${id}abc`
                    : id,
                workout: workoutTitle,
                title: " NEW ",
                sets: 0,
                reps: 0,
                weight: 0,
                time: "00:00",
                notes: "",
              },
            ],
          }));
        },

        setExercise: (index, formData) => {
          const exercises = useCalorieStore.getState().exercises;
          exercises.splice(index, 1, formData);
          set(() => ({
            exercises: exercises,
          }));
        },

        deleteWorkout: (workoutTitle) =>
          set((state) => ({
            exercises: state.exercises.filter(
              (exercise) => exercise.workout !== workoutTitle
            ),
          })),

        deleteExercise: (id) =>
          set((state) => ({
            exercises: state.exercises.filter((exercise) => exercise.id !== id),
          })),

        setRoutine: (routineArr) => {
          const calendarRoutine = [];

          const datedWorkouts = routineArr.map((workout, index) => ({
            id: workout.id,
            workout: workout.workout,
            date: unixDate + index * 86400000,
          }));

          for (let i = 0; i < 100; i++) {
            datedWorkouts.forEach((workout) => {
              if (calendarRoutine.length < 1000) {
                if (true) {
                  calendarRoutine.push({
                    id: workout.id,
                    workout: workout.workout,
                    date: workout.date + i * (datedWorkouts.length * 86400000),
                  });
                }
              }
            });
          }
          set(() => ({
            routine: calendarRoutine,
          }));
        },

        setRoutineDisplay: (routineArr) => {
          set(() => ({
            routineDisplay: routineArr,
          }));
        },
        setCompletedWorkouts: (date) => {
          set((state) => ({
            completedWorkouts: [...state.completedWorkouts, { date: date }],
            routine: state.routine.filter((workout) => workout.date !== date),
          }));
        },
      };
    },
    {
      name: "trackedDataStorage",
    }
  )
);

export default useCalorieStore;
