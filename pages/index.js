import AddCalories from "../components/AddCalories/AddCalories";
import useCalorieStore from "../utils/useCalorieStore";
import ConsumedList from "../components/ConsumedList/ConsumedList";
import HomeCalendar from "../components/Calendar";
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect, Suspense } from "react";
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

  const [isListVisible, setIsListVisible] = useState(false);
  const [isGoalExceeded, setIsGoalExceeded] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [currentDay, setCurrentDay] = useLocalStorageState("currentDay", {
    defaultValue: new Date().getDay(),
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      const today = new Date().getDay();
      if (today !== currentDay) {
        setDailyCount(0);
        setCurrentDay(today);
      }
    }, 1000); // check every second

    return () => clearInterval(intervalId);
  }, [currentDay]);

  useEffect(() => {
    setIsLoading(false);
  }, [dailyCount]);
  useEffect(() => {
    document.addEventListener("click", () => {
      setIsListVisible(false);
      setIsFormVisible(false);
    });
  }, []);
  useEffect(() => {
    dailyMeals.length === 0 && setIsListVisible(false);
    calorieGoal > dailyCount && setIsGoalExceeded(false);
    calorieGoal < dailyCount && setIsGoalExceeded(true);
  }, [dailyMeals]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <StyledDiv>
      <Suspense fallback={<div>Loading...</div>}>
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
          <AddCalories setIsFormVisible={setIsFormVisible} />
        </FormContainer>
      </Suspense>
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
