import styled from "styled-components";

const AddCalorieButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  border-radius: 50%;
`;

const AddCalorieForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50px;
  gap: 10px;
`;

export default function AddCalories({ addDailyCount }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    const calories = parseInt(data.calories);
    addDailyCount(calories);
  }
  return (
    <AddCalorieForm onSubmit={handleSubmit}>
      <AddCalorieButton>
        <span>+</span>
      </AddCalorieButton>
      <input type="number" name="calories" required></input>
    </AddCalorieForm>
  );
}
