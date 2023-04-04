import AddCalories from "../components/AddCalories/AddCalories";
import useCalorieStore from "../utils/useCalorieStore";
import ConsumedList from "../components/ConsumedList/ConsumedList";
import { useState, useEffect } from "react";
import { StyledDiv, StyledButton, ListContainer } from "./styles";

export default function HomePage() {
  const { dailyCount, dailyMeals, calorieGoal } = useCalorieStore();
  const difference = calorieGoal - dailyCount;

  const [isListVisible, setIsListVisible] = useState(false);
  const [isGoalExceeded, setIsGoalExceeded] = useState(false);

  useEffect(() => {
    document.addEventListener("click", () => setIsListVisible(false));
  }, []);
  useEffect(() => {
    dailyMeals.length === 0 && setIsListVisible(false);
    calorieGoal > dailyCount && setIsGoalExceeded(false);
    calorieGoal < dailyCount && setIsGoalExceeded(true);
  }, [dailyMeals]);

  return (
    <StyledDiv>
      <StyledButton
        true={!isGoalExceeded}
        onClick={(event) => {
          event.stopPropagation();
          dailyMeals.length !== 0 && setIsListVisible(!isListVisible);
        }}
      >
        {!isGoalExceeded ? `${difference}` : `${difference * -1}`}
        <br />
        {!isGoalExceeded ? " left" : " over"}
      </StyledButton>
      <AddCalories />
      {isListVisible ? (
        <ListContainer>
          <ConsumedList />
        </ListContainer>
      ) : null}
    </StyledDiv>
  );
}
