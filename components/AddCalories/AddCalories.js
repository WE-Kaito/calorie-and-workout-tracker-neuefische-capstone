import useCalorieStore from "../../utils/useCalorieStore";
import { AddCalorieButton, AddCalorieForm, FixedInput } from "./styles";

export default function AddCalories({ setIsFormVisible }) {
  const { addDailyCount, addDailyMeal } = useCalorieStore();

  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    const calories = parseInt(data.calories);
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    addDailyCount(calories);
    addDailyMeal(data.name, calories, hour, minute);
    event.target.reset();
  }

  return (
    <AddCalorieForm onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="meal" required />
      <FixedInput
        type="number"
        min={1}
        max={9999}
        name="calories"
        placeholder="kcal"
        required
      />
      <AddCalorieButton
        onClick={() => {
          setIsFormVisible(false);
        }}
      >
        <span>+</span>
      </AddCalorieButton>
    </AddCalorieForm>
  );
}
