import { StyledMoodle, StyledListHeadline, CompleteButton } from "./styles";
import useCalorieStore from "../../utils/useCalorieStore";
import { unixDate } from "../../utils/useCalorieStore";
import Exercise from "../Exercise";
export default function CalendarExercises({
  setPlayState,
  setShowWorkout,
  setCalorieButton,
  calorieButtonVisibility,
}) {
  const { exercises, routine, setCompletedWorkouts } = useCalorieStore();

  const todaysWorkout = routine
    .slice()
    .filter((entry) => entry.id !== "free")
    .find((entry) => entry.date === unixDate)?.workout;

  return (
    <StyledMoodle>
      <StyledListHeadline>{todaysWorkout}</StyledListHeadline>
      {exercises
        .slice()
        .filter((exercise) => exercise.workout === todaysWorkout)
        .map((exercise, index) => (
          <Exercise
            key={exercise.id}
            id={exercise.id}
            index={index}
            workout={exercise.workout}
            title={exercise.title}
            sets={exercise.sets}
            reps={exercise.reps}
            weight={exercise.weight}
            time={exercise.time}
            notes={exercise.notes}
          />
        ))}
      <CompleteButton
        onClick={() => {
          setCompletedWorkouts(unixDate);
          setShowWorkout(false);
          setPlayState("play");
          setCalorieButton(!calorieButtonVisibility);
        }}
      >
        ✓
      </CompleteButton>
    </StyledMoodle>
  );
}
