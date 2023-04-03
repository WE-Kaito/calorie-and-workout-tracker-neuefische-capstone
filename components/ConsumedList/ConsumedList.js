import useCalorieStore from "../../utils/useCalorieStore";
import {
  StyledList,
  StyledListItem,
  ShiftedSpan,
  CorrectionDiv,
} from "./styles";

export default function ConsumedList() {
  const { dailyMeals, addDailyCount, deleteDailyMeal } = useCalorieStore();
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  return (
    <CorrectionDiv>
      <StyledList>
        {dailyMeals.map((meal) => (
          <StyledListItem key={meal.name}>
            <span>{`${meal.name}`}</span>
            <ShiftedSpan>{`${meal.calories} kcal`}</ShiftedSpan>
            <span>{`${hour}:${minute}`}</span>
            <button
              style={{ border: "none", background: "none" }}
              onClick={(event) => {
                event.stopPropagation();
                addDailyCount(-meal.calories);
                deleteDailyMeal(meal.name);
              }}
            >
              ❌
            </button>
          </StyledListItem>
        ))}
      </StyledList>
    </CorrectionDiv>
  );
}
