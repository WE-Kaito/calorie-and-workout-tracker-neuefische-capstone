import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddCalories from "../components/AddCalories/AddCalories";
import useCalorieStore from "../utils/useCalorieStore";
import { unixDate } from "../utils/useCalorieStore";
import ConsumedList from "../components/ConsumedList/ConsumedList";
import HomeCalendar from "../components/Calendar";
import { useState, useEffect } from "react";
import Backdrop from "../assets/backdrop.svg";
import Pages from "../assets/pages.svg";
import Settings from "../assets/settings.svg";
import styled from "styled-components";
import {
  StyledDiv,
  StyledButtonCalorieCounter,
  ConsumedContainer,
  FormContainer,
  OpenCalorieFormButton,
  LoadingDisplay,
  CalendarSection,
  StyledBackdrop,
  Nav,
  LinkContainer,
  StyledLink,
  StyledNavSpan,
  StyledNavButton,
  HeadingButtons,
  SettingsButton,
  PagesButton,
  SettingsSection,
  StyledInput,
  StyledForm,
  StyledSaveButton,
  SetGoalHeadline,
} from "../components/IndexPage/styles";

export default function HomePage() {
  const { history, calorieGoals, setCalorieGoal } = useCalorieStore();
  calorieGoals.at(-1).date !== unixDate && setCalorieGoal();

  const [isLoading, setIsLoading] = useState(true);
  const [isListVisible, setIsListVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isPagesVisible, setIsPagesVisible] = useState(false);
  const [isQSVisible, setIsQSVisible] = useState(false);
  const [isAddCaloriesButtonVisible, setIsAddCaloriesButtonVisible] =
    useState(true);

  function handleWindowClosing() {
    setIsListVisible(false);
    setIsFormVisible(false);
    setIsQSVisible(false);
  }

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!history.some((entry) => entry.date === unixDate)) {
      setIsListVisible(false);
    }
  }, [history]);

  useEffect(() => {
    isListVisible || isFormVisible
      ? document.addEventListener("click", handleWindowClosing)
      : document.removeEventListener("click", handleWindowClosing);
  }, [isListVisible, isFormVisible, isQSVisible]);

  function getCaloriesConsumed(day = unixDate) {
    return history.find((entry) => entry.date === day)
      ? history
          .slice()
          .filter((entry) => entry.date === day)
          .map((entry) => parseInt(entry.calories))
          .reduce((accumulator, current) => {
            return accumulator + current;
          })
      : 0; // returns the sum of calories consumed
  }

  function getGoalExceeded() {
    return history.find((entry) => entry.date === unixDate)
      ? calorieGoals.find((entry) => entry.date === unixDate).goal >=
          getCaloriesConsumed() // returns true if the sum of calories is less than the corresponding goal
      : true;
  }

  function handleSettingsSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    setCalorieGoal(data.calorieGoalInput);
    event.target.reset();
  }

  if (isLoading) {
    return <LoadingDisplay>█████████████████████████████▒▒▒▒▒</LoadingDisplay>;
  }

  return (
    <StyledDiv>
      {/* navigation & settings */}
      <HeadingButtons>
        <SettingsButton
          onClick={() => {
            setIsSettingsVisible(!isSettingsVisible);
          }}
        >
          <Settings className={isSettingsVisible ? "head-buttons" : null} />
        </SettingsButton>
        <PagesButton
          onClick={() => {
            setIsPagesVisible(!isPagesVisible);
          }}
        >
          <Pages className={isPagesVisible ? "head-buttons" : null} />
        </PagesButton>
      </HeadingButtons>

      <SettingsSection isVisible={isSettingsVisible}>
        <span style={{ color: "var(--1)", marginRight: "54px" }}>
          CALORIE GOAL
        </span>
        <StyledForm
          onSubmit={(event) => {
            handleSettingsSubmit(event);
          }}
        >
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
            save
          </StyledSaveButton>
        </StyledForm>
      </SettingsSection>

      <Nav isVisible={isPagesVisible}>
        <LinkContainer>
          <StyledLink href="/dishes">
            <StyledNavButton>Dishes</StyledNavButton>
          </StyledLink>
          <StyledNavSpan>{` ➤`}</StyledNavSpan>
        </LinkContainer>

        <LinkContainer>
          <StyledLink href="/workouts">
            <StyledNavButton>Workouts</StyledNavButton>
          </StyledLink>
          <StyledNavSpan>➤</StyledNavSpan>
        </LinkContainer>
      </Nav>

      {/* main content */}

      <StyledButtonCalorieCounter
        isTrue={getGoalExceeded()}
        onClick={(event) => {
          event.stopPropagation();
          history.find((entry) => entry.date === unixDate) &&
            setIsListVisible(!isListVisible);
        }}
      >
        {Math.abs(calorieGoals.at(-1).goal - getCaloriesConsumed())}
        <br />
        {getGoalExceeded() ? "left" : "over"}
      </StyledButtonCalorieCounter>

      <OpenCalorieFormButton
        style={{
          visibility: isAddCaloriesButtonVisible ? "visible" : "hidden",
        }}
        onClick={(event) => {
          event.stopPropagation();
          setIsFormVisible(true);
        }}
      >
        <FontAwesomeIcon
          style={{
            transform: `scale(${1.85})`,
          }}
          icon={faPlus}
        />
      </OpenCalorieFormButton>

      <FormContainer
        isTrue={isFormVisible}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <AddCalories
          onClose={setIsFormVisible}
          qSVisibility={isQSVisible}
          toggleQSVisibility={setIsQSVisible}
          toggleFormVisibility={setIsFormVisible}
        />
      </FormContainer>
      <ConsumedContainer
        isTrue={isListVisible}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <ConsumedList />
      </ConsumedContainer>
      <CalendarSection isVisible={isListVisible}>
        <StyledBackdrop>
          <Backdrop />
        </StyledBackdrop>
        <HomeCalendar
          getTileColor={getGoalExceeded}
          getCaloriesConsumed={getCaloriesConsumed}
          isVisible={isListVisible}
          setCalorieButton={setIsAddCaloriesButtonVisible}
          calorieButtonVisibility={isAddCaloriesButtonVisible}
        />
      </CalendarSection>
    </StyledDiv>
  );
}
