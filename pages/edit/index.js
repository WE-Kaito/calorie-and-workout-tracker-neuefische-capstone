import useCalorieStore from "../../utils/useCalorieStore";
import {
  Wrapper,
  EditMaxContainer,
  EditLinkContainer,
  StyledHeadline,
  StyledForm,
  StyledInput,
  StyledSaveButton,
} from "./styles";

export default function EditPage() {
  const { calorieGoal, setCalorieGoal } = useCalorieStore();
  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    const calorieGoalInput = parseInt(data.caloriGoalInput);
    setCalorieGoal(calorieGoalInput);
    event.target.reset();
  }

  return (
    <Wrapper>
      <EditMaxContainer>
        <StyledHeadline>CALORIE GOAL</StyledHeadline>
        <StyledForm
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <StyledInput
            type="number"
            min={0}
            placeholder={`${calorieGoal} kcal`}
            name="calorieGoalInput"
            required
          ></StyledInput>
          <StyledSaveButton type="submit">💾</StyledSaveButton>
        </StyledForm>
      </EditMaxContainer>
      <EditLinkContainer>platzhalter</EditLinkContainer>
      <EditLinkContainer>platzhalter</EditLinkContainer>
    </Wrapper>
  );
}
