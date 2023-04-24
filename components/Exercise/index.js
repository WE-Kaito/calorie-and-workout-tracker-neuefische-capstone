import {
  ListItemExercise,
  ListItemHeadline,
  ListItemValue,
  ListItemNotes,
  Input,
  Label,
  SubmitButton,
  ButtonWrapper,
  AddExerciseForm,
  ExerciseLabel,
  ExerciseInput,
  ExerciseInputWrapper,
  ExerciseFormWrapper,
  DeleteExerciseButton,
} from "../../components/WorkoutsPage/styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faStopwatch,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import useCalorieStore from "../../utils/useCalorieStore.js";
import { useState } from "react";
import { uid } from "uid";

export default function Exercise({
  id,
  index,
  title,
  sets,
  reps,
  weight,
  time,
  notes,
  workout,
}) {
  const { setExercise, deleteExercise, exercises } = useCalorieStore();
  const [formVisibility, toggleFormVisibility] = useState(false);
  const [inputExercise, setInputExercise] = useState(title);
  const [inputSets, setInputSets] = useState(sets);
  const [inputReps, setInputReps] = useState(reps);
  const [inputWeight, setInputWeight] = useState(weight);
  const [inputTime, setInputTime] = useState(
    typeof time === "string" ? timeToSeconds(time) : time
  );
  const [inputNotes, setInputNotes] = useState(notes);
  console.log(exercises);
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return (
      minutes.toString().padStart(2, "0") +
      ":" +
      remainingSeconds.toString().padStart(2, "0")
    );
  }

  function timeToSeconds(timeString) {
    const timeArray = timeString.split(":");
    const minutes = parseInt(timeArray[0]);
    const seconds = parseInt(timeArray[1]);
    return minutes * 60 + seconds;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    const datasets = parseInt(data.sets);
    const datareps = parseInt(data.reps);
    const dataweight = parseFloat(data.weight).toFixed(1);
    const datatime = formatTime(data.time);

    const indexToSet = exercises.findIndex((exercise) => exercise.id === id);

    setExercise(indexToSet, {
      id: uid(),
      workout: workout,
      title: data.title,
      sets: datasets,
      reps: datareps,
      weight: dataweight,
      time: datatime,
      notes: data.notes,
    });

    toggleFormVisibility(false);
    event.target.reset();
  }

  return (
    <>
      {!formVisibility && (
        <ListItemExercise
          onClick={() => {
            toggleFormVisibility(!formVisibility);
          }}
        >
          {
            <>
              <ListItemHeadline>{inputExercise}</ListItemHeadline>
              <div style={{ flexDirection: "row" }}>
                <ListItemValue>
                  <FontAwesomeIcon
                    icon={faRotateRight}
                    style={{
                      color: "var(--2)",
                      transform: "translate(-5px, 0.2px)",
                      scale: "0.9",
                    }}
                  />
                  {`${inputSets} × ${inputReps}`}
                </ListItemValue>

                {inputWeight !== 0 && (
                  <>
                    <FontAwesomeIcon
                      icon={faDumbbell}
                      style={{
                        color: "var(--2)",
                        transform: "translate(6px, 0.4px)",
                        scale: "0.9",
                      }}
                    />
                    <ListItemValue>{inputWeight}</ListItemValue>
                  </>
                )}
                {inputTime !== 0 && (
                  <>
                    <FontAwesomeIcon
                      icon={faStopwatch}
                      style={{
                        color: "var(--2)",
                        transform: "translate(6px, 0.4px)",
                        scale: "0.95",
                      }}
                    />
                    <ListItemValue>{formatTime(inputTime)}</ListItemValue>
                  </>
                )}
              </div>
              {inputNotes !== "" && <ListItemNotes>{inputNotes}</ListItemNotes>}
            </>
          }
        </ListItemExercise>
      )}

      <ExerciseFormWrapper
        visible={formVisibility}
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <AddExerciseForm>
          <Input
            id="title"
            name="title"
            type="text"
            required
            maxLength={20}
            value={inputExercise}
            onChange={(event) => setInputExercise(event.target.value)}
          ></Input>
          <ExerciseInputWrapper>
            <ExerciseInput
              min={0}
              max={100}
              id="sets"
              name="sets"
              type="number"
              required
              value={inputSets}
              onChange={(event) => setInputSets(event.target.value)}
            ></ExerciseInput>
            <ExerciseLabel htmlFor="reps" style={{ margin: "0" }}>
              ×
            </ExerciseLabel>
            <ExerciseInput
              id="reps"
              name="reps"
              type="number"
              value={inputReps}
              min={0}
              max={100}
              onChange={(event) => setInputReps(event.target.value)}
            ></ExerciseInput>
            <ExerciseLabel htmlFor="weight" style={{ margin: "0" }}>
              <FontAwesomeIcon
                icon={faDumbbell}
                style={{ color: "var(--2)", transform: "translate(5px, 1px)" }}
              />
            </ExerciseLabel>
            <ExerciseInput
              id="weight"
              name="weight"
              type="number"
              value={inputWeight}
              max={500}
              onChange={(event) => setInputWeight(event.target.value)}
            ></ExerciseInput>
          </ExerciseInputWrapper>
          <ExerciseInputWrapper style={{ width: "75%", margin: "0 0 5px 0" }}>
            <ExerciseLabel htmlFor="time">
              <FontAwesomeIcon
                icon={faStopwatch}
                style={{ color: "var(--2)" }}
              />
            </ExerciseLabel>
            <Input
              id="time"
              name="time"
              type="range"
              value={inputTime}
              min={0}
              max={1800}
              onChange={(event) => setInputTime(event.target.value)}
            ></Input>
            <span>{formatTime(inputTime)}</span>
          </ExerciseInputWrapper>
          <Label htmlFor="notes">Notes:</Label>
          <Input
            id="notes"
            name="notes"
            type="text"
            value={inputNotes}
            maxLength={36}
            style={{ textAlign: "center" }}
            onChange={(event) => setInputNotes(event.target.value)}
          ></Input>
          <ButtonWrapper>
            {index !== 0 && (
              <DeleteExerciseButton
                onClick={() => {
                  toggleFormVisibility(false);
                  deleteExercise(id);
                }}
              >
                DELETE
              </DeleteExerciseButton>
            )}
            <SubmitButton>save</SubmitButton>
          </ButtonWrapper>
        </AddExerciseForm>
      </ExerciseFormWrapper>
    </>
  );
}
