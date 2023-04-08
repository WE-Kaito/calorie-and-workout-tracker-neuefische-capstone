import AddCalories from "../components/AddCalories/AddCalories";
import useCalorieStore from "../utils/useCalorieStore";
import { unixDate } from "../utils/useCalorieStore";
import ConsumedList from "../components/ConsumedList/ConsumedList";
import HomeCalendar from "../components/Calendar";
import { useState, useEffect } from "react";
import {
  StyledDiv,
  StyledButtonCalorieCounter,
  ConsumedContainer,
  FormContainer,
  OpenCalorieFormButton,
  LoadingDisplay,
} from "../components/IndexPage/styles";

export default function HomePage() {
  const { history, calorieGoals } = useCalorieStore();

  const [isLoading, setIsLoading] = useState(true);
  const [isListVisible, setIsListVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  function handleWindowClosing() {
    setIsListVisible(false);
    setIsFormVisible(false);
  }

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!history.some((entry) => entry.date === unixDate)) {
      setIsListVisible(false);
    }
  }, [history]);

  useEffect(() => {
    isListVisible || isFormVisible
      ? document.addEventListener("click", handleWindowClosing)
      : document.removeEventListener("click", handleWindowClosing);
  }, [isListVisible, isFormVisible]);

  function getCaloriesConsumed(day = unixDate) {
    return history.find((entry) => entry.date === day)
      ? history
          .slice()
          .filter((entry) => entry.date === day)
          .map((entry) => parseInt(entry.calories))
          .reduce((accumulator, current) => {
            return accumulator + current;
          })
      : 0; // returns the sum of calories consumed
  }

  function getGoalExceeded(day = unixDate) {
    return history.find((entry) => entry.date === day)
      ? calorieGoals.find((entry) => entry.date === day).goal >=
          getCaloriesConsumed() // returns true if the sum of calories is less than the corresponding goal
      : true;
  }

  if (isLoading) {
    return <LoadingDisplay>█████████████████████████████▒▒▒▒▒</LoadingDisplay>;
  }

  return (
    <StyledDiv>
      <p
        style={{
          fontSize: 10,
          color: "lightpink",
          display: "inline-block",
          position: "absolute",
          top: 0,
          margin: 0,
          textAlign: "center",
        }}
      >
        note for QA: <br />
        As for past logged days the current day will also mark the success
        depending on counted calories
      </p>
      <StyledButtonCalorieCounter
        isTrue={getGoalExceeded()}
        onClick={(event) => {
          event.stopPropagation();
          history.find((entry) => entry.date === unixDate) &&
            setIsListVisible(!isListVisible);
        }}
      >
        {Math.abs(calorieGoals.at(-1).goal - getCaloriesConsumed())}
        <br />
        {getGoalExceeded() ? "left" : "over"}
      </StyledButtonCalorieCounter>
      <OpenCalorieFormButton
        onClick={(event) => {
          event.stopPropagation();
          setIsFormVisible(true);
        }}
      >
        +
      </OpenCalorieFormButton>
      <FormContainer
        isTrue={isFormVisible}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <AddCalories onClose={setIsFormVisible} />
      </FormContainer>
      <ConsumedContainer
        isTrue={isListVisible}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <ConsumedList />
      </ConsumedContainer>
      <HomeCalendar getTileColor={getGoalExceeded} />
    </StyledDiv>
  );
}
