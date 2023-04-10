import styled from "styled-components";

const CalendarWrapper = styled.div`
  width: fit-content;
  /* transform: scale(0.9) translateY(-1.3rem); */
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

    .react-calendar--doubleView {
      width: 700px;
    }

    .react-calendar--doubleView .react-calendar__viewContainer {
      display: flex;
      margin: -0.5em;
    }

    .react-calendar--doubleView .react-calendar__viewContainer > * {
      width: 50%;
      margin: 0.5em;
      gap: 0.5rem;
    }

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

    .react-calendar__navigation__label__labelText {
      color: black;
      visibility: ${(props) => (props.isVisible ? "hidden" : "visible")};
      background: ghostwhite;
      border-radius: 15px;
      padding: 0.25em 2em 0.25em 2em;
    }

    .react-calendar__navigation__arrow:enabled {
      color: ghostwhite;
      background-color: #c4d7e0;
      border-radius: 15px;
      padding: 0px;

      &:active,
      &:focus {
        color: navy;
      }
    }

    .react-calendar__navigation button {
      min-width: 44px;
      background: none;
      text-shadow: 1px 1px 1px lightsteelblue;
    }

    .react-calendar__navigation button:disabled {
      visibility: hidden;
      // this class functions like the whole background of the navigation
    }

    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
      background-color: #f8f9d7;
    }

    .react-calendar__month-view__weekdays {
      text-align: center;
      text-transform: none;
      font-weight: bold;
      font-size: 0.6em;
    }

    .react-calendar__month-view__weekdays__weekday abbr {
      padding: 0.2em 0.6em 0em 0.6em;
      text-decoration: none;
      background: ghostwhite;
      border-radius: 15px;
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
      color: ghostwhite;
    }

    .react-calendar__month-view__days__day--neighboringMonth,
    .react-calendar__month-view__days__day--neighboringMonth abbr {
      color: lightsteelblue !important;
      box-shadow: none !important;
    }

    .react-calendar__tile {
      color: ghostwhite;
      background-color: rgba(255, 255, 255, 0);
      text-align: center;
      border-radius: 30px;
      height: 40px;
      font-size: 14;
      font-weight: 500;
    }
    button {
      border: 5px solid var(--2);
    }

    .react-calendar__tile:disabled {
      color: ghostwhite;
      cursor: pointer;
    }

    .react-calendar__tile--now abbr {
      color: var(--3) !important;

      background-color: rgba(255, 255, 255, 0) !important;
    }
    .react-calendar__tile--now {
      border: 2px solid var(--6);

      background-color: rgba(255, 255, 255, 0) !important;
    }

    .react-calendar__month-view__days__day {
      padding: 0;
    }

    // custom classes

    .react-calendar__tile--wasExceeded,
    .react-calendar__tile--wasExceeded abbr {
      background-color: lightpink;
      color: black;
    }
    .react-calendar__tile--wasNotExceeded,
    .react-calendar__tile--wasNotExceeded abbr {
      background-color: aquamarine;
      color: black;
    }
  }
`;

export default CalendarWrapper;
