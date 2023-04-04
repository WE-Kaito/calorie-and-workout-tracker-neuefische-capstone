import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
// implement styles.js later

export default function HomeCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Calendar
        onChange={(date) => {
          setDate(date);
          console.log(date);
        }}
        value={date}
      />
    </>
  );
}
