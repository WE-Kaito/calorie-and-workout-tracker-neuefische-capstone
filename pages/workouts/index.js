import {
  Wrapper,
  List,
  ListItem,
  ListAddButton,
  AddWorkoutForm,
  Input,
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
  IntervalButtonSave,
  StyledPageHeadline,
  AddRoutineButton,
} from "../../components/WorkoutsPage/styles.js";
import BackButton from "../../components/BackButton/index.js";
import { LoadingDisplay } from "../../components/IndexPage/styles.js";
import useCalorieStore from "../../utils/useCalorieStore.js";
import Link from "next/link.js";
import HeadingBackground from "../../components/WorkoutsPage/HeadingBackground.js";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import plusAnimation from "../../public/lottie/plus.json";

export default function WorkoutsPage() {
  const {
    addWorkout,
    setRoutine,
    routineDisplay,
    setRoutineDisplay,
    exercises,
  } = useCalorieStore();

  const workouts = exercises
    .slice()
    .filter(
      (exercise, index, self) =>
        index === self.findIndex((e) => e.workout === exercise.workout)
    );

  const [isEditMode, setIsEditMode] = useState(false);
  const [currentInterval, setCurrentInterval] = useState(routineDisplay);

  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    addWorkout(data.title);
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
            justifyContent: "flex-start",
            paddingLeft: "20px",
            transform: "translateX(-4px)",
          }}
        >
          {workout.workout}
          <Lottie
            animationData={plusAnimation}
            loop
            style={{
              width: "300px",
              position: "absolute",
              transform: "translate(90px,1px)",
              pointerEvents: "none",
            }}
          />
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
      <HeadingBackground />
      <StyledPageHeadline>Workouts</StyledPageHeadline>
      <Link href="/">
        <BackButton />
      </Link>
      <List>
        {renderUniqueWorkouts()}
        {!isEditMode ? (
          <AddWorkoutForm
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <Input
              style={{ height: "26px", border: "2px solid var(--2)" }}
              id="title"
              name="title"
              type="text"
              required
              maxLength={20}
              placeholder="Title"
            ></Input>
            <SubmitButton>ADD WORKOUT</SubmitButton>
          </AddWorkoutForm>
        ) : (
          <ListAddButton
            style={{
              justifyContent: "flex-start",
              paddingLeft: "20px",
            }}
            onClick={() => {
              setCurrentInterval((draft) => [
                ...draft,
                { id: "free", workout: "REST" },
              ]);
            }}
          >
            1 REST DAY
            <Lottie
              animationData={plusAnimation}
              loop
              style={{
                width: "220px",
                position: "absolute",
                transform: "translate(126px,1px)",
                pointerEvents: "none",
              }}
            />
          </ListAddButton>
        )}
      </List>

      {!isEditMode && (
        <AddRoutineButton
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
        >
          ▲ ADD ROUTINE TO CALENDAR ▲
        </AddRoutineButton>
      )}
      {isEditMode && (
        <SetIntervalSection>
          <IntervalHeadline>YOUR ROUTINE:</IntervalHeadline>
          <Interval>
            {currentInterval.map((workout, index) => (
              <IntervalItem
                key={index}
                style={{
                  backgroundColor: workout.id === "free" ? "var(--2)" : null,
                  color: workout.id === "free" ? "lightsteelblue" : null,
                }}
              >
                {currentInterval.length - 1 === index ? "↻ " : "⇣ "}
                {workout.workout}
              </IntervalItem>
            ))}
          </Interval>
          <ButtonWrapper>
            <IntervalButton
              onClick={() => {
                setIsEditMode(!isEditMode);
              }}
            >
              ▼CLOSE▼
            </IntervalButton>
            <IntervalButton
              style={{ backgroundColor: "var(--7)", color: "var(--5)" }}
              onClick={() => {
                setCurrentInterval([]);
              }}
            >
              CLEAR
            </IntervalButton>
            <IntervalButtonSave
              href="/"
              onClick={() => {
                setRoutine(currentInterval);
                setRoutineDisplay(currentInterval);
                setIsEditMode(false);
              }}
            >
              SAVE
            </IntervalButtonSave>
          </ButtonWrapper>
        </SetIntervalSection>
      )}
    </Wrapper>
  );
}
