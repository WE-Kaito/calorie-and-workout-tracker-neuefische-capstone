import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddCalories from "../components/AddCalories/AddCalories";
import useCalorieStore from "../utils/useCalorieStore";
import { unixDate } from "../utils/useCalorieStore";
import ConsumedList from "../components/ConsumedList/ConsumedList";
import HomeCalendar from "../components/Calendar";
import { useState, useEffect, useRef } from "react";
import Backdrop from "../assets/backdrop.svg";
import PagesIcon from "../assets/pages.svg";
import SettingsIcon from "../assets/settings.svg";
import Bar from "../components/IndexPage/Bar";
import StreakCounter from "../components/IndexPage/StreakCounter";
import Settings from "../components/Settings";
import Navigation from "../components/Navigation";
import {
  StyledDiv,
  StyledButtonCalorieCounter,
  ConsumedContainer,
  FormContainer,
  OpenCalorieFormButton,
  LoadingDisplay,
  CalendarSection,
  StyledBackdrop,
  HeadingButtons,
  SettingsButton,
  PagesButton,
} from "../components/IndexPage/styles";
import styled from "styled-components";
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
  const [showHistoryEntry, setShowHistoryEntry] = useState(false);
  const [isWorkoutVisible, setIsWorkoutVisible] = useState(false);
  const todaysGoal = calorieGoals.find(
    (entry) => entry.date === unixDate
  )?.goal;

  const [percentage, setPercentage] = useState(0);

  function handleWindowClosing() {
    setIsListVisible(false);
    setIsFormVisible(false);
    setIsQSVisible(false);
  }

  const svgRef = useRef(null);

  useEffect(() => {
    setIsLoading(false);
    setPercentage((getCaloriesConsumed() / todaysGoal) * 100);
  }, []);
  useEffect(() => {
    if (!history.some((entry) => entry.date === unixDate)) {
      setIsListVisible(false);
    }
    setPercentage((getCaloriesConsumed() / todaysGoal) * 100);
  }, [history]);

  useEffect(() => {
    const meters = document.querySelectorAll("svg[data-value] .meter");
    meters.forEach((path) => {
      let length = path.getTotalLength();
      path.style.strokeDashoffset = length;
      path.style.strokeDasharray = length;
      let value = parseInt(path.parentNode.getAttribute("data-value"));
      let to = length * ((100 - value) / 100);
      path.getBoundingClientRect();
      path.style.strokeDashoffset = Math.max(0, to);
    });
  }, [percentage]);

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
      : 0;
  }

  function getGoalExceeded() {
    return history.find((entry) => entry.date === unixDate)
      ? todaysGoal >= getCaloriesConsumed()
      : true;
  }

  if (isLoading) {
    return <LoadingDisplay>█████████████████████████████▒▒▒▒▒</LoadingDisplay>;
  }

  return (
    <StyledDiv>
      {!isListVisible && !showHistoryEntry && !isWorkoutVisible && (
        <StreakCounter getCaloriesConsumed={getCaloriesConsumed} />
      )}
      {Bar(percentage, svgRef)}

      <HeadingButtons>
        <SettingsButton
          onClick={() => {
            setIsSettingsVisible(!isSettingsVisible);
            setIsPagesVisible(false);
          }}
        >
          <StyledSettingsIcon isSettingsVisible={isSettingsVisible} />
        </SettingsButton>
        <PagesButton
          onClick={() => {
            setIsPagesVisible(!isPagesVisible);
            setIsSettingsVisible(false);
          }}
        >
          <StyledPagesIcon isPagesVisible={isPagesVisible} />
        </PagesButton>
      </HeadingButtons>
      <Settings
        isSettingsVisible={isSettingsVisible}
        setIsSettingsVisible={setIsSettingsVisible}
        calorieGoals={calorieGoals}
        setCalorieGoal={setCalorieGoal}
      />
      {isPagesVisible && <Navigation />}

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
          <StyledBackdropSVG />
        </StyledBackdrop>
        <HomeCalendar
          showHistoryEntry={showHistoryEntry}
          setShowHistoryEntry={setShowHistoryEntry}
          getTileColor={getGoalExceeded}
          getCaloriesConsumed={getCaloriesConsumed}
          isVisible={isListVisible}
          setCalorieButton={setIsAddCaloriesButtonVisible}
          calorieButtonVisibility={isAddCaloriesButtonVisible}
          isWorkoutVisible={isWorkoutVisible}
          setIsWorkoutVisible={setIsWorkoutVisible}
        />
      </CalendarSection>
    </StyledDiv>
  );
}

const StyledBackdropSVG = styled(Backdrop)`
  fill: var(--2);
`;

const StyledPagesIcon = styled(PagesIcon)`
  fill: ${({ isPagesVisible }) => (isPagesVisible ? "var(--8)" : "var(--3)")};
  stroke: ${({ isPagesVisible }) => (isPagesVisible ? "var(--8)" : "var(--3)")};
  filter: drop-shadow(1px 1px 1.25px black);
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  fill: ${({ isSettingsVisible }) =>
    isSettingsVisible ? "var(--8)" : "var(--3)"};
  filter: drop-shadow(1px 1px 1.25px black);
`;
