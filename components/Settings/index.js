import {
  SettingsSection,
  StyledForm,
  StyledInput,
  StyledSaveButton,
  ToggleThemeButton,
  StyledFormSpan,
  StyledMoodleHeading,
} from "../IndexPage/styles";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

export default function Settings({
  setIsSettingsVisible,
  setCalorieGoal,
  calorieGoals,
  isSettingsVisible,
}) {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    const themeIndex = parseInt(theme.slice(-1));
    const nextThemeIndex = (themeIndex + 1) % 3;
    const nextTheme = `theme${nextThemeIndex}`;
    setTheme(nextTheme);
  }

  async function handleSettingsSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    await setCalorieGoal(data.calorieGoalInput);
    console.log(data);
    event.target.reset();
  }

  return (
    <SettingsSection isSettingsVisible={isSettingsVisible}>
      <StyledMoodleHeading>SETTINGS</StyledMoodleHeading>
      <StyledForm
        onSubmit={(event) => {
          handleSettingsSubmit(event);
        }}
      >
        <StyledFormSpan>SET YOUR CALORIE GOAL:</StyledFormSpan>
        <StyledInput
          type="number"
          min={0}
          placeholder={`${calorieGoals.at(-1).goal} kcal`}
          name="calorieGoalInput"
          required
        ></StyledInput>
        <StyledSaveButton
          type="submit"
          onClick={() => {
            setIsSettingsVisible(false);
          }}
        >
          SAVE
        </StyledSaveButton>
      </StyledForm>
      <ToggleThemeButton onClick={toggleTheme}>
        THEME
        <FontAwesomeIcon
          style={{
            transform: `scale(${1.3}) translateX(7px)`,
          }}
          icon={faRetweet}
        />
      </ToggleThemeButton>
    </SettingsSection>
  );
}
