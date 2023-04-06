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
  const {
    dailyCount,
    dailyMeals,
    resetDailyMeals,
    calorieGoal,
    setDailyCount,
    addHistoryEntry,
    history,
  } = useCalorieStore();

  const [isLoading, setIsLoading] = useState(true);

  const [isListVisible, setIsListVisible] = useState(false);
  const [isGoalExceeded, setIsGoalExceeded] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // reset the daily calorie count & save history entry
  const [currentDay, setCurrentDay] = useLocalStorageState("currentDay", {
    defaultValue: new Date().getDate(),
  });

  setInterval(() => {
    const today = new Date();
    if (today.getDate() !== currentDay) {
      addHistoryEntry(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
        isGoalExceeded
      );
      setCurrentDay(today);
      setDailyCount(0);
      resetDailyMeals();
    }
  }, 5000);
  // <----------------------------------------

  function handleWindowClosing() {
    setIsListVisible(false);
    setIsFormVisible(false);
  }

  useEffect(() => {
    isListVisible || isFormVisible
      ? document.addEventListener("click", handleWindowClosing)
      : document.removeEventListener("click", handleWindowClosing);
  }, [isListVisible, isFormVisible]);

  useEffect(() => {
    dailyMeals.length === 0 && setIsListVisible(false);
    calorieGoal >= dailyCount && setIsGoalExceeded(false);
    calorieGoal < dailyCount && setIsGoalExceeded(true);
  }, [dailyMeals]);

  // error handling
  if (
    (dailyMeals.length === 0 && dailyCount !== 0) ||
    (dailyMeals.length !== 0 && dailyCount === 0)
  ) {
    setDailyCount(0);
    resetDailyMeals();
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
      <button /* Only for testing of success-marker for past days,
        it creates the saved daily entry for yesterday.
        Clicking with default local storage values will mark yesterday either
        red or green depending on the currently displayed calorie count.
        The history with entries is also logged in the console.*/
        onClick={() => {
          const today = new Date();
          const day = today.getDate() - 1;
          const month = today.getMonth();
          const year = today.getFullYear();
          addHistoryEntry(year, month, day, isGoalExceeded);
          console.log("history: ", history);
        }}
      >
        history test button
      </button>
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
