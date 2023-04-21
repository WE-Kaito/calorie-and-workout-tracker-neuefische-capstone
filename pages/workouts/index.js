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
  Interval,
  IntervalHeadline,
  SetIntervalSection,
  ListItemEditMode,
  IntervalItem,
  IntervalButton,
} from "../../components/WorkoutsPage/styles.js";
import { LoadingDisplay } from "../../components/IndexPage/styles.js";
import useCalorieStore from "../../utils/useCalorieStore.js";
import Link from "next/link.js";
import { useState, useEffect } from "react";

export default function WorkoutsPage({ workouts }) {
  const { addWorkout, setRoutine, routineDisplay, setRoutineDisplay } =
    useCalorieStore();

  const [formVisibility, toggleFormVisibility] = useState(false);

  const [isEditMode, setIsEditMode] = useState(false);
  const [currentInterval, setCurrentInterval] = useState(routineDisplay);

  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    addWorkout(data.title);
    toggleFormVisibility(false);
    event.target.reset();
  }

  function renderUniqueWorkouts() {
    if (!isEditMode) {
      return workouts.map((workout, index) => (
        <ListItem href={`/workouts/${index}`} key={index}>
          {workout.workout}
        </ListItem>
      ));
    } else {
      return workouts.map((workout, index) => (
        <ListItemEditMode
          key={index}
          onClick={() => {
            setCurrentInterval((draft) => [
              ...draft,
              { id: workout.id, workout: workout.workout },
            ]);
          }}
          style={{
            background: currentInterval.includes(workout)
              ? "var(--9)"
              : "var(--6)",
          }}
        >
          {workout.workout}
        </ListItemEditMode>
      ));
    }
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
          top: "67px",
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
      <List
        invisible={formVisibility}
        style={{
          height: "58%",
          transform: isEditMode ? "translateY(54px)" : "translateY(2px)",
        }}
      >
        {renderUniqueWorkouts()}
        {!isEditMode ? (
          <ListAddButton
            onClick={() => {
              toggleFormVisibility(!formVisibility);
            }}
          >
            ADD WORKOUT
          </ListAddButton>
        ) : (
          <ListAddButton
            style={{ marginBottom: "40px" }}
            onClick={() => {
              setCurrentInterval((draft) => [
                ...draft,
                { id: "free", workout: "REST" },
              ]);
            }}
          >
            + 1 REST DAY
          </ListAddButton>
        )}
      </List>
      <AddWorkoutForm
        visible={formVisibility}
        style={{ height: "386px", transform: "translateY(2px)" }}
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
            CLOSE
          </CloseFormButton>
          <SubmitButton>ADD WORKOUT</SubmitButton>
        </ButtonWrapper>
      </AddWorkoutForm>
      {!isEditMode && (
        <ListAddButton
          style={{
            width: "260px",
            height: "40px",
            transform: "translateY(2.8px)",
          }}
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
        >
          ADD ROUTINE TO CALENDAR
        </ListAddButton>
      )}
      {isEditMode && (
        <SetIntervalSection>
          <IntervalHeadline>YOUR WORKOUT INTERVAL:</IntervalHeadline>
          <Interval>
            {currentInterval.map((workout, index) => (
              <IntervalItem
                key={index}
                style={{
                  backgroundColor: workout.id === "free" ? "var(--2)" : null,
                  color: workout.id === "free" ? "lightsteelblue" : null,
                }}
              >
                {workout.workout}
              </IntervalItem>
            ))}
          </Interval>
          <ButtonWrapper style={{ marginTop: "15px", marginBottom: "5px" }}>
            <IntervalButton
              onClick={() => {
                setIsEditMode(!isEditMode);
              }}
            >
              CLOSE
            </IntervalButton>
            <IntervalButton
              style={{ backgroundColor: "var(--7)", color: "var(--5)" }}
              onClick={() => {
                setCurrentInterval([]);
              }}
            >
              CLEAR
            </IntervalButton>
            <IntervalButton
              style={{ backgroundColor: "var(--6)", color: "var(--2)" }}
              onClick={() => {
                setRoutine(currentInterval);
                setRoutineDisplay(currentInterval);
                setIsEditMode(false);
              }}
            >
              SAVE
            </IntervalButton>
          </ButtonWrapper>
        </SetIntervalSection>
      )}
    </Wrapper>
  );
}
