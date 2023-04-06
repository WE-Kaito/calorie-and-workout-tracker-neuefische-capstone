import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import useCalorieStore from "../../utils/useCalorieStore";
import styled from "styled-components";

export default function HomeCalendar() {
  const [date, setDate] = useState(new Date());
  const { history } = useCalorieStore();

  function getTileClassName(date) {
    if (
      history.find(
        (entry) => entry.date === date.getTime() && entry.entry.wasExceeded
      )
    ) {
      return "react-calendar__tile--wasExceeded";
    } else if (
      history.find(
        (entry) => entry.date === date.getTime() && !entry.entry.wasExceeded
      )
    ) {
      return "react-calendar__tile--wasNotExceeded";
    }
  }

  return (
    <CalendarWrapper>
      <Calendar
        value={date}
        selectRange={false}
        maxDate={new Date(2025, 4, 4)} // replace with today + X later
        minDate={new Date(2023, 3, 1)} // replace with earliest stored date later
        minDetail="month"
        formatShortWeekday={formatShortWeekday}
        formatMonthYear={formatMonthYear}
        // ---
        onChange={(date) => {
          setDate(date);
          console.log(date);
        }}
        // ---
        className="calendar-style"
        tileClassName={({ date }) => getTileClassName(date)}
      />
    </CalendarWrapper>
  );
}

// calendar styling:

const formatShortWeekday = (locale, date) => {
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  return weekdays[date.getDay()];
};

const formatMonthYear = (locale, date) => {
  return new Intl.DateTimeFormat(locale, {
    year: "2-digit",
    month: "long",
  }).format(date);
};

const CalendarWrapper = styled.div`
  .react-calendar__tile--wasExceeded {
    background-color: crimson;
  }
  .react-calendar__tile--wasNotExceeded {
    background-color: #32de84;
  }
  .calendar-style {
    border: none;
    transform: scale(0.95) translateY(1rem);

    button:disabled {
      background: white;
    }
  }
`;
