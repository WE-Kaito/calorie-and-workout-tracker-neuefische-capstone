import {
  Wrapper,
  List,
  ListItem,
  ListAddButton,
  AddWorkoutForm,
  Input,
  BackButton,
  Label,
  SubmitButton,
  CloseFormButton,
  ButtonWrapper,
} from "../../components/WorkoutsPage/styles.js";
import { LoadingDisplay } from "../../components/IndexPage/styles.js";
import useCalorieStore from "../../utils/useCalorieStore.js";
import Link from "next/link.js";
import { useState, useEffect } from "react";

export default function WorkoutsPage({ workouts }) {
  const { exercises, addWorkout } = useCalorieStore();

  const [formVisibility, toggleFormVisibility] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    addWorkout(data.title);
    toggleFormVisibility(false);
    event.target.reset();
  }

  function renderUniqueWorkouts() {
    return workouts.map((workout, index) => (
      <ListItem href={`/workouts/${index}`} key={index}>
        {workout.workout}
      </ListItem>
    ));
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
        Workouts
      </h1>
      <Link href="/">
        <BackButton>🔙</BackButton>
      </Link>
      <List invisible={formVisibility}>
        {renderUniqueWorkouts()}
        <ListAddButton
          onClick={() => {
            toggleFormVisibility(!formVisibility);
          }}
        >
          ADD WORKOUT
        </ListAddButton>
      </List>
      <AddWorkoutForm
        visible={formVisibility}
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <Label for="title">Title:</Label>
        <Input
          id="title"
          name="title"
          type="text"
          required
          maxLength={20}
        ></Input>
        <ButtonWrapper>
          <CloseFormButton
            type="button"
            onClick={() => {
              toggleFormVisibility(false);
            }}
          >
            close
          </CloseFormButton>
          <SubmitButton>submit</SubmitButton>
        </ButtonWrapper>
      </AddWorkoutForm>
    </Wrapper>
  );
}
