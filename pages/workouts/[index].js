import {
  Wrapper,
  List,
  DeleteButton,
  DetailsEditButton,
  StyledPageHeadline,
} from "../../components/WorkoutsPage/styles.js";
import BackButton from "../../components/BackButton/index.js";
import Exercise from "../../components/Exercise/index.js";
import { LoadingDisplay } from "../../components/IndexPage/styles.js";
import useCalorieStore from "../../utils/useCalorieStore.js";
import Link from "next/link.js";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ExercisesPage() {
  const { exercises, deleteWorkout, addExercise } = useCalorieStore();

  const router = useRouter();
  const { index = 0 } = router.query;

  function getUniqueWorkoutTitles() {
    const workouts = exercises.map((exercise) => exercise.workout);
    return [...new Set(workouts)];
  }
  // hydration error handling
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return <LoadingDisplay>█████████████████████████████▒▒▒▒▒</LoadingDisplay>;
  }
  // --------------------------------

  return (
    <Wrapper>
      <StyledPageHeadline
        style={{
          position: "absolute",
          top: "70px",
          left: "50px",
          zIndex: "10",
          color: "var(--3)",
          fontSize: 34,
        }}
      >
        {getUniqueWorkoutTitles()[index]}
      </StyledPageHeadline>
      <DeleteButton
        onClick={() => {
          deleteWorkout(getUniqueWorkoutTitles()[index]);
          router.push(`/workouts/`);
        }}
      >
        DELETE WORKOUT
      </DeleteButton>
      <Link href="/workouts/">
        <BackButton />
      </Link>
      <List
        invisible={false}
        style={{ height: "78%", transform: "translateY(14px)" }}
      >
        {exercises
          .slice()
          .filter(
            (exercise) => exercise.workout === getUniqueWorkoutTitles()[index]
          )
          .map((exercise, index) => (
            <Exercise
              key={exercise.id}
              index={index}
              id={exercise.id}
              workout={exercise.workout}
              title={exercise.title}
              sets={exercise.sets}
              reps={exercise.reps}
              weight={exercise.weight}
              time={exercise.time}
              notes={exercise.notes}
            />
          ))}
        <DetailsEditButton
          onClick={() => {
            addExercise(getUniqueWorkoutTitles()[index]);
          }}
        >
          ADD EXERCISE
        </DetailsEditButton>
      </List>
    </Wrapper>
  );
}
