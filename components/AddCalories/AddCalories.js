import useCalorieStore from "../../utils/useCalorieStore";
import {
  AddCalorieButton,
  AddCalorieForm,
  NumberInput,
  NameInput,
  OpenQSButton,
  QuickSelection,
  StyledListItem,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { uid } from "uid";

export default function AddCalories({
  onClose,
  qSVisibility,
  toggleQSVisibility,
  toggleFormVisibility,
}) {
  const { addHistoryEntry, history, dishes } = useCalorieStore();

  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    const calories = parseInt(data.calories);
    data.meal
      ? addHistoryEntry(calories, data.meal)
      : addHistoryEntry(calories);
    event.target.reset();
  }

  const nameCounts = history.slice().reduce((acc, curr) => {
    acc[curr.meal] = (acc[curr.meal] || 0) + 1;
    return acc;
  }, {});
  const score = (obj) => nameCounts[obj.name] || 0;

  return (
    <>
      <AddCalorieForm
        aria-label="Opened Form to add a meal. Click anywhere outside to close."
        onSubmit={handleSubmit}
      >
        <OpenQSButton
          type="button"
          onClick={() => {
            toggleQSVisibility(true);

            toggleFormVisibility(false);
          }}
        >
          QUICK SELECTION
          <br />
        </OpenQSButton>
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
      <QuickSelection visible={qSVisibility}>
        {dishes
          .slice()
          .sort((a, b) => score(b) - score(a) || a.meal.localeCompare(b.meal))
          .map((dish) => (
            <StyledListItem
              key={uid()}
              onClick={() => {
                addHistoryEntry(dish.calories, dish.meal);
                toggleQSVisibility(false);
              }}
            >
              <span>{`${dish.meal}`}</span>
              <span>{`${dish.calories} kcal`}</span>
            </StyledListItem>
          ))}
      </QuickSelection>
    </>
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
