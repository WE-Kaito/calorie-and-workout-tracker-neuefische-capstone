import AddCalories from "../components/AddCalories/AddCalories";
import useCalorieStore from "../utils/useCalorieStore";
import styled from "styled-components";
import ConsumedList from "../components/ConsumedList/ConsumedList";
import { useState, useEffect } from "react";

const StyledDiv = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ListContainer = styled.div`
  position: absolute;
  top: 3.5rem;
  width: 274px;
  height: 80%;
  left: 50%;
  transform: translateX(-50%);
  background: grey;
  opacity: 0.8;
`;

const StyledButton = styled.button`
  color: ${(props) => (props.true ? "#32de84" : "crimson")};
  font-size: 2rem;
  font-weight: bold;
  width: 160px;
  height: 160px;
  border: none;
  border-radius: 100%;
`;

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
