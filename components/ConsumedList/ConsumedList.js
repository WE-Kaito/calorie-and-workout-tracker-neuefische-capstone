import useCalorieStore from "../../utils/useCalorieStore";
import { StyledList, StyledListItem, ShiftedSpan } from "./styles";

export default function ConsumedList() {
  const { dailyMeals, addDailyCount, deleteDailyMeal } = useCalorieStore();

  return (
    <StyledList>
      {dailyMeals.map((meal) => (
        <StyledListItem key={meal.name}>
          <span>{`${meal.name}`}</span>
          <ShiftedSpan>{`${meal.calories} kcal`}</ShiftedSpan>
          <button
            style={{ border: "none", background: "none" }}
            onClick={() => {
              addDailyCount(-meal.calories);
              deleteDailyMeal(meal.name);
            }}
          >
            ❌
          </button>
        </StyledListItem>
      ))}
    </StyledList>
  );
}
