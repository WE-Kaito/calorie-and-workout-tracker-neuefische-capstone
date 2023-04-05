import AddCalories from "../components/AddCalories/AddCalories";
import useCalorieStore from "../utils/useCalorieStore";
import ConsumedList from "../components/ConsumedList/ConsumedList";
import HomeCalendar from "../components/Calendar";
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";
import {
  StyledDiv,
  StyledButtonCalorieCounter,
  ConsumedContainer,
  FormContainer,
  OpenCalorieFormButton,
} from "../components/IndexPage/styles";

export default function HomePage() {
  const { dailyCount, dailyMeals, calorieGoal, setDailyCount } =
    useCalorieStore();

  const [isLoading, setIsLoading] = useState(true);

  const [isListVisible, setIsListVisible] = useState(false);
  const [isGoalExceeded, setIsGoalExceeded] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // reset the daily calorie count
  const [currentDay, setCurrentDay] = useLocalStorageState("currentDay", {
    defaultValue: new Date().getDay(),
  });
  setInterval(() => {
    const today = new Date().getDay();
    if (today !== currentDay) {
      setDailyCount(0);
      setCurrentDay(today);
    }
  }, 5000);
  // <----------------------------------------

  function handleWindowClosing() {
    setIsListVisible(false);
    setIsFormVisible(false);
  }

  useEffect(() => {
    isListVisible
      ? document.addEventListener("click", handleWindowClosing)
      : document.removeEventListener("click", handleWindowClosing);
  }, [isListVisible, isFormVisible]);

  useEffect(() => {
    dailyMeals.length === 0 && setIsListVisible(false);
    calorieGoal >= dailyCount && setIsGoalExceeded(false);
    calorieGoal < dailyCount && setIsGoalExceeded(true);
  }, [dailyMeals]);

  // error handling
  if (dailyMeals.length === 0 && dailyCount !== calorieGoal) {
  }

  useEffect(() => {
    setIsLoading(false);
  }, [dailyCount]); // because dailyCount is causing hydration errors

  if (isLoading) {
    return <div>Loading...</div>;
  }
  // <----------------------------------------

  return (
    <StyledDiv>
      <StyledButtonCalorieCounter
        isTrue={!isGoalExceeded}
        onClick={(event) => {
          event.stopPropagation();
          dailyMeals.length !== 0 && setIsListVisible(true);
        }}
      >
        {`${Math.abs(calorieGoal - dailyCount)}`}
        <br />
        {!isGoalExceeded ? "left" : "over"}
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
      <HomeCalendar></HomeCalendar>
    </StyledDiv>
  );
}
