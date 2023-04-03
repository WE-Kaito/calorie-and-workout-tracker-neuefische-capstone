import useCalorieStore from "../../utils/useCalorieStore";
import { AddCalorieButton, AddCalorieForm, FixedInput } from "./styles";

export default function AddCalories() {
  const { addDailyCount, addDailyMeal } = useCalorieStore();

  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    const calories = parseInt(data.calories);
    addDailyCount(calories);
    addDailyMeal(data.name, calories);
    event.target.reset();
  }
  return (
    <AddCalorieForm onSubmit={handleSubmit}>
      <AddCalorieButton>
        <span>+</span>
      </AddCalorieButton>
      <input type="text" name="name" placeholder="name" required />
      <FixedInput
        type="number"
        min={1}
        max={9999}
        name="calories"
        placeholder="kcal"
        required
      />
    </AddCalorieForm>
  );
}
