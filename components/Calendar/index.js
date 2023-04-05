import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

export default function HomeCalendar() {
  const [date, setDate] = useState(new Date());

  const formatShortWeekday = (locale, date) => {
    const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    return weekdays[date.getDay()];
  };

  const formatMonthYear = (locale, date) =>
    new Intl.DateTimeFormat(locale, {
      year: "2-digit",
      month: "long",
    }).format(date);

  return (
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
    />
  );
}
