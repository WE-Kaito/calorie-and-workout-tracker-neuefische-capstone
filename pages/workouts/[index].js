import {
  Wrapper,
  List,
  BackButton,
  DeleteButton,
  DetailsEditButton,
} from "../../components/WorkoutsPage/styles.js";
import Exercise from "../../components/Exercise/index.js";
import { LoadingDisplay } from "../../components/IndexPage/styles.js";
import useCalorieStore from "../../utils/useCalorieStore.js";
import Link from "next/link.js";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ExercisesPage({ workouts }) {
  const { exercises, deleteWorkout, addExercise } = useCalorieStore();

  const router = useRouter();
  const { index = 0 } = router.query;

  // hydration error handling
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return <LoadingDisplay>█████████████████████████████▒▒▒▒▒</LoadingDisplay>;
  }
  // --------------------------------

  if (workouts[0])
    return (
      <Wrapper>
        <h1
          style={{
            position: "absolute",
            top: "85px",
            left: "70px",
            zIndex: "10",
            color: "var(--3)",
            fontSize: 28,
          }}
        >
          {workouts[index].workout}
        </h1>
        <DeleteButton
          onClick={() => {
            deleteWorkout(workouts[index].workout);
            router.push(`/workouts/`);
          }}
        >
          DELETE WORKOUT
        </DeleteButton>
        <Link href="/workouts/">
          <BackButton>🔙</BackButton>
        </Link>
        <List invisible={false}>
          {exercises
            .slice()
            .filter((exercise) => exercise.workout === workouts[index].workout)
            .map((exercise, index) => (
              <Exercise
                key={index}
                index={index}
                id={exercise.id}
                exercise={exercise}
                workoutTitle={exercise.workout}
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
              addExercise(workouts[index].workout);
            }}
          >
            ADD EXERCISE
          </DetailsEditButton>
        </List>
      </Wrapper>
    );
}
