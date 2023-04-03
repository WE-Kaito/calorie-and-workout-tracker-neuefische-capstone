import styled from "styled-components";
import useCalorieStore from "../utils/useCalorieStore";

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.8rem;
  width: 200px;
`;
const StyledListItem = styled.div`
display: flex;
justify-content: space-between;
background-color: lightskyblue;
border 1px solid black;
filter: drop-shadow(0 0 0.05rem black);
`;

export default function ConsumedList() {
  const { dailyMeals } = useCalorieStore();

  return (
    <StyledList>
      {dailyMeals.map((meal) => (
        <StyledListItem key={meal.name}>
          <span>{`${meal.name}`}</span>
          <span>{`${meal.calories} kcal`}</span>
        </StyledListItem>
      ))}
    </StyledList>
  );
}
