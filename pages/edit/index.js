import useCalorieStore from "../../utils/useCalorieStore";
import {
  Wrapper,
  EditMaxContainer,
  EditLinkContainer,
  StyledHeadline,
  StyledForm,
  StyledInput,
  StyledSaveButton,
} from "../../components/EditPage/styles";

export default function EditPage() {
  const { calorieGoals, setCalorieGoal } = useCalorieStore();
  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    setCalorieGoal(data.calorieGoalInput);
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
            placeholder={`${calorieGoals.at(-1).goal} kcal`}
            name="calorieGoalInput"
            required
          ></StyledInput>
          <StyledSaveButton type="submit">
            save <span style={{ fontSize: 10 }}>➤</span>
          </StyledSaveButton>
        </StyledForm>
      </EditMaxContainer>
      <EditLinkContainer>platzhalter</EditLinkContainer>
      <EditLinkContainer>platzhalter</EditLinkContainer>
    </Wrapper>
  );
}
