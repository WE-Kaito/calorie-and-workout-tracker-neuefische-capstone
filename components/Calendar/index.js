import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { unixDate } from "../../utils/useCalorieStore";
import useCalorieStore from "../../utils/useCalorieStore";
import CalendarWrapper from "./styles";

export default function HomeCalendar({ getCaloriesConsumed, isVisible }) {
  const { history, calorieGoals } = useCalorieStore();
  const [date, setDate] = useState(new Date());

  function getTileClassName(date, view) {
    const unixTileDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    ).getTime();

    if (history.some((entry) => entry.date === unixTileDate)) {
      if (date <= unixDate) {
        if (
          getCaloriesConsumed(unixTileDate) <=
          calorieGoals.find((goalEntry) => goalEntry.date === unixTileDate).goal
        ) {
          if (view === "month" && unixDate === unixTileDate) {
            return (
              "react-calendar__tile--wasNotExceeded" &&
              "react-calendar__tile--now--wasNotExceeded"
            );
          } else {
            return "react-calendar__tile--wasNotExceeded";
          }
        } else {
          if (view === "month" && unixDate === unixTileDate) {
            return (
              "react-calendar__tile--wasExceeded" &&
              "react-calendar__tile--now--wasExceeded"
            );
          }
          return "react-calendar__tile--wasExceeded";
        }
      }
    }
  }

  const earliestDate =
    history.length >= 1 ? new Date(history[0].date) : new Date();

  return (
    <CalendarWrapper isVisible={isVisible}>
      <Calendar
        aria-label="Calendar with tracked data"
        value={date}
        selectRange={false}
        maxDate={lastDate}
        minDate={earliestDate}
        minDetail="month"
        formatShortWeekday={formatShortWeekday}
        formatMonthYear={formatMonthYear}
        // ---
        onChange={(date) => {
          setDate(date);
        }}
        onClick={(event) => {
          event.target.stopPropagation();
        }}
        // ---
        tileClassName={({ date, view }) => getTileClassName(date, view)}
      />
    </CalendarWrapper>
  );
}

// calendar styling:

const lastDate = new Date(
  new Date().getFullYear(),
  new Date().getMonth() + 3,
  new Date().getDate()
);

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
