import styled from "styled-components";

const CalendarWrapper = styled.div`
  width: fit-content;
  scale: 1.05;
  transform: translateY(34px);
  border-radius: 20px;

  .react-calendar {
    width: 280px;
    background-color: rgba(255, 255, 255, 0);
    border: 1px solid #a0a096;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    border: none;
    visibility: ${(props) => (props.isVisible ? "hidden" : "visible")};

    border-radius: 20px;

    .react-calendar,
    .react-calendar *,
    .react-calendar *:before,
    .react-calendar *:after {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    .react-calendar button {
      margin: 0;
      border: 0;
      outline: none;
    }

    .react-calendar button:enabled:hover {
      cursor: pointer;
    }

    .react-calendar__navigation {
      display: flex;
      height: 30px;
      margin-bottom: 0.2em;
      border-radius: 15px;
    }

    .react-calendar__navigation__label {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 3px);
    }

    .react-calendar__navigation__label__labelText {
      color: var(--4);
      visibility: ${(props) => (props.isVisible ? "hidden" : "visible")};
      background: var(--1);
      border-radius: 10px;
      font-size: 15;
      padding: 2px 15px 2px 15px;
    }

    .react-calendar__navigation__arrow:enabled {
      color: var(--2);
      background-color: var(--3);
      border-radius: 10px;

      &:hover {
        background-color: var(--8);
      }
      &:active {
        box-shadow: inset 0px 0px 1.5px var(--2);
      }
    }

    .react-calendar__navigation button {
      background: none;
    }

    .react-calendar__navigation button:disabled {
      visibility: hidden;
      // this class functions like the whole background of the navigation
    }

    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
      background-color: var(--6);
    }

    .react-calendar__month-view__weekdays {
      text-align: center;
      text-transform: none;
      font-weight: bold;
      font-size: 14;
      color: var(--3);
    }

    .react-calendar__month-view__weekdays__weekday abbr {
      padding: 0.2em 0.6em 0em 0.6em;
      text-decoration: none;
      background: none;
    }
    .react-calendar__navigation__prev-button {
      transform: translate(-20px, -6px) scaleY(0.92) !important;
      font-size: 18px;
      padding-bottom: 2.75px;

      filter: drop-shadow(0px 1px 1.5px black);
    }
    .react-calendar__navigation__next-button {
      transform: translate(124.5px, -6px) scaleY(0.92) !important;
      font-size: 18px;
      padding-bottom: 2.75px;

      filter: drop-shadow(0px 1px 1.5px black);
    }

    .react-calendar__navigation__next2-button,
    .react-calendar__navigation__prev2-button {
      visibility: hidden;
    }

    .react-calendar__month-view__weekNumbers .react-calendar__tile {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75em;
      font-weight: bold;
    }

    .react-calendar__month-view__days__day--weekend,
    .react-calendar__month-view__days__day--weekend abbr,
    .react-calendar__month-view__days__day--weekend button:enabled:focus {
      color: var(--11);
    }

    .react-calendar__month-view__days__day--neighboringMonth,
    .react-calendar__month-view__days__day--neighboringMonth abbr {
      color: var(--5) !important;
      opacity: 0.45;
      box-shadow: none !important;
    }

    .react-calendar__tile {
      color: var(--5);
      background-color: rgba(255, 255, 255, 0);
      text-align: center;
      border-radius: 30px;
      height: 40px;
      font-size: 14;
      font-weight: 500;
    }

    .react-calendar__tile abbr {
      padding-left: 0.75px;
      padding-top: 0.5px;
    }

    .react-calendar__tile:disabled {
      color: var(--5);
      cursor: pointer;
    }

    .react-calendar__tile--now abbr {
      color: var(--3);
      border: 2px solid var(--2);
      border-radius: 25px;
      background: var(--2);
      padding-top: 5.5px;
      padding-bottom: 5.5px;
      padding-left: ${({ digitLength }) =>
        digitLength === 2 ? "5.5px" : "8.75px"};
      padding-right: ${({ digitLength }) =>
        digitLength === 2 ? "5.5px" : "8.75px"};
    }
    .react-calendar__tile--now {
      border: 2.5px solid var(--2);
      background: ${({ workoutToday }) =>
        workoutToday ? "var(--1)" : "var(--3)"};
    }

    .react-calendar__month-view__days__day {
      padding: 0;
    }

    // custom classes

    .react-calendar__tile--now--wasExceeded abbr {
      border: 2.5px solid var(--2);
      padding-top: 5.5px;
      padding-bottom: 5.5px;
      padding-left: ${({ digitLength }) =>
        digitLength === 2 ? "5.5px" : "8.75px"};
      padding-right: ${({ digitLength }) =>
        digitLength === 2 ? "5.5px" : "8.75px"};
      border-radius: 25px;
      background: var(--2);
    }
    .react-calendar__tile--now--wasExceeded {
      border: 2.5px solid var(--2);
      background: var(--7);
    }

    .react-calendar__tile--now--wasNotExceeded abbr {
      border: 2.5px solid var(--2);
      padding-top: 5.5px;
      padding-bottom: 5.5px;
      padding-left: ${({ digitLength }) =>
        digitLength === 2 ? "5.5px" : "8.75px"};
      padding-right: ${({ digitLength }) =>
        digitLength === 2 ? "5.5px" : "8.75px"};
      margin-left: 0.25px;
      border-radius: 25px;
      background: var(--2);
    }
    .react-calendar__tile--now--wasNotExceeded {
      border: 2.5px solid var(--2);
      background: var(--6);
    }

    .react-calendar__tile--wasExceeded,
    .react-calendar__tile--wasExceeded abbr {
      background-color: var(--7);
      color: var(--4);
    }

    .react-calendar__tile--wasExceeded,
    .react-calendar__tile--wasNotExceeded {
      border: 5px solid var(--2);
    }
    .react-calendar__tile--wasNotExceeded,
    .react-calendar__tile--wasNotExceeded abbr {
      background-color: var(--6);
      color: var(--4);
    }

    .react-calendar__tile--workout,
    .react-calendar__tile--workout abbr {
      background: var(--1);
      color: var(--5);
    }
    .react-calendar__tile--workout {
      border: 5px solid var(--2);
    }
  }
`;

export default CalendarWrapper;

export const StrokeWrapper = styled.div`
  visibility: ${({ isVisible }) => (isVisible ? "hidden" : "visible")};
  color: #424f69;
  opacity: 0.7;
  position: absolute;
  display: flex;
  gap: 38.5px;

  transform: scaleY(1.3);
  font-weight: 200;

  bottom: 175px;
  left: 35px;
`;

export const StyledMoodle = styled.div`
  position: absolute;
  bottom: 200px;
  left: -5px;
  background: var(--8);
  width: 290px;
  max-height: 330px;
  padding: 15px;
  border-radius: 15px;
  border: 5px solid var(--2);
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 200;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const StyledListItem = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr 2fr;
  align-items: center;
  width: 237.5px;
  padding: 0.4em 0.7rem 0.4rem 0.7rem;
  border-radius: 20px;
  background: var(--3);
  color: var(--2);
  margin-bottom: 10px;
`;

export const StyledListHeadline = styled.h2`
  color: var(--2);
  width: auto;
  text-align: center;
  margin-top: 8px;
  text-shadow: 0.75px 0.5px 1px black;
`;

export const StyledListSpan = styled.p`
  color: var(--1);
  width: 237.5px;
  text-align: center;
  margin: 0;
  transform: translateY(-13px);
`;

export const CompleteButton = styled.button`
  border: none;
  background: var(--9);
  width: 30px;
  height: 30px;
  font-size: x-large;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transform: translateX(200px);
  box-shadow: 0.5px 1.5px 2px black;
  :hover {
    background-color: var(--6);
  }
  :active {
    background-color: var(--6);
    color: var(--3);
    box-shadow: inset 0 0 3px var(--2);
  }
`;
