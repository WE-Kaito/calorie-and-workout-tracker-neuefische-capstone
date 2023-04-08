import useCalorieStore from "../../utils/useCalorieStore";
import { AddCalorieButton, AddCalorieForm, FixedInput } from "./styles";

export default function AddCalories({ onClose }) {
  const { addHistoryEntry } = useCalorieStore();

  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    console.log(data);
    const calories = parseInt(data.calories);
    data.meal
      ? addHistoryEntry(calories, data.meal)
      : addHistoryEntry(calories);
    event.target.reset();
  }

  return (
    <AddCalorieForm
      aria-label="Opened Form to add a meal. Click anywhere outside to close."
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="meal"
        placeholder={`meal: "${
          examples[Math.abs((Math.round(Math.random() * 10) / 10) * 10 - 1)]
        }"`}
      />
      <FixedInput
        type="number"
        min={1}
        max={7000}
        name="calories"
        placeholder={`kcal: "450"`}
        required
      />
      <AddCalorieButton
        onClick={() => {
          onClose(false);
        }}
      >
        <span>+</span>
      </AddCalorieButton>
    </AddCalorieForm>
  );
}

const examples = [
  "Pizza",
  "Salad",
  "Pasta",
  "Sushi",
  "Ice Cream",
  "Chocolate",
  "Coffee",
  "Smoothie",
  "Rice",
  "Banana",
];
