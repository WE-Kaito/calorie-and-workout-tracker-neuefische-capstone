import useCalorieStore from "../../utils/useCalorieStore";
import {
  AddCalorieButton,
  AddCalorieForm,
  NumberInput,
  NameInput,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
      <NameInput
        type="text"
        name="meal"
        maxLength={20}
        placeholder={`meal: "${
          examples[Math.abs((Math.round(Math.random() * 10) / 10) * 10 - 1)]
        }"`}
      />
      <NumberInput
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
        <FontAwesomeIcon
          style={{
            transform: `scale(${1.2})`,
            color: "var(--2)",
          }}
          icon={faPlus}
        />
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
