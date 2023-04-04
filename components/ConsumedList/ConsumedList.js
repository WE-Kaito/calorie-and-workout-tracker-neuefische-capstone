import useCalorieStore from "../../utils/useCalorieStore";
import {
  StyledList,
  StyledListItem,
  ShiftedSpan,
  CorrectionDiv,
} from "./styles";

export default function ConsumedList() {
  const { dailyMeals, addDailyCount, deleteDailyMeal } = useCalorieStore();

  return (
    <CorrectionDiv>
      <StyledList>
        {dailyMeals.map((meal, index) => (
          <StyledListItem
            key={meal.name}
            aria-label={`delete meal: ${meal.name}`}
          >
            <span>{`${meal.name}`}</span>
            <ShiftedSpan>{`${meal.calories} kcal`}</ShiftedSpan>
            <span>{`${meal.time_stamp}`}</span>
            <button
              style={{ border: "none", background: "none" }}
              aria-label={`delete meal: ${meal.name}`}
              onClick={() => {
                addDailyCount(-meal.calories);
                deleteDailyMeal(index);
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
