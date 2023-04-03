import styled from "styled-components";
import useCalorieStore from "../utils/useCalorieStore";

const AddCalorieButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 3rem;
`;

const AddCalorieForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  gap: 10px;
`;

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
      <input type="number" name="calories" placeholder="kcal" required />
    </AddCalorieForm>
  );
}
