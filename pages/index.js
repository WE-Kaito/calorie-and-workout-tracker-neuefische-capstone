import AddCalories from "../components/AddCalories/AddCalories";
import useCalorieStore from "../utils/useCalorieStore";
import ConsumedList from "../components/ConsumedList/ConsumedList";
import { useState, useEffect } from "react";
import {
  StyledDiv,
  StyledButtonCalorieCounter,
  ConsumedContainer,
  FormContainer,
  OpenCalorieFormButton,
} from "../components/IndexPage/styles";

export default function HomePage() {
  const { dailyCount, dailyMeals, calorieGoal } = useCalorieStore();
  const difference = calorieGoal - dailyCount;

  const [isListVisible, setIsListVisible] = useState(false);
  const [isGoalExceeded, setIsGoalExceeded] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  function handleFormExit(event) {
    event.stopPropagation();
  }
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
  return (
    <StyledDiv>
      <StyledButtonCalorieCounter
        isTrue={!isGoalExceeded}
        onClick={(event) => {
          event.stopPropagation();
          dailyMeals.length !== 0 && setIsListVisible(true);
        }}
      >
        {!isGoalExceeded ? `${difference}` : `${difference * -1}`}
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
      <FormContainer isTrue={isFormVisible} onClick={handleFormExit}>
        <AddCalories setIsFormVisible={setIsFormVisible} />
      </FormContainer>
      <ConsumedContainer isTrue={isListVisible} onClick={handleFormExit}>
        <ConsumedList />
      </ConsumedContainer>
    </StyledDiv>
  );
}
