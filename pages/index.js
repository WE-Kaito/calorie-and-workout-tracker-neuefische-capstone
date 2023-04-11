import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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
  const { history, calorieGoals, setCalorieGoal } = useCalorieStore();
  calorieGoals.at(-1).date !== unixDate && setCalorieGoal();

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

  function getGoalExceeded() {
    return history.find((entry) => entry.date === unixDate)
      ? calorieGoals.find((entry) => entry.date === unixDate).goal >=
          getCaloriesConsumed() // returns true if the sum of calories is less than the corresponding goal
      : true;
  }

  if (isLoading) {
    return <LoadingDisplay>█████████████████████████████▒▒▒▒▒</LoadingDisplay>;
  }

  return (
    <StyledDiv>
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
        <FontAwesomeIcon style={{ transform: `scale(${1.5})` }} icon={faPlus} />
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
      <HomeCalendar
        getTileColor={getGoalExceeded}
        getCaloriesConsumed={getCaloriesConsumed}
        isVisible={isListVisible}
      />
    </StyledDiv>
  );
}
