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
  console.log("history", history);

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
      const day = today.getDate().toString().padStart(2, "0");
      const month = (today.getMonth() + 1).toString().padStart(2, "0");
      const year = today.getFullYear().toString();
      const dateStr = `${day}.${month}.${year}`;
      addHistoryEntry(dateStr, isGoalExceeded);
      setCurrentDay(today);
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
      <button // only for test purpose
        onClick={() => {
          const today = new Date();
          const day = today.getDate().toString().padStart(2, "0");
          const month = (today.getMonth() + 1).toString().padStart(2, "0");
          const year = today.getFullYear().toString();
          const dateStr = `${day}.${month}.${year}`;
          addHistoryEntry(dateStr, isGoalExceeded);
          console.log("history: ", history);
        }}
      >
        test button
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
