import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";
import { unixDate } from "../../utils/useCalorieStore";
import useCalorieStore from "../../utils/useCalorieStore";
import CalendarWrapper, { StrokeWrapper } from "./styles";
import AnimationWorkoutCompleted from "./AnimationWorkoutCompleted";
import CalendarExercises from "./CalendarExercises";
import CalendarEntry from "./CalendarEntry";
import getTileClassName from "../../utils/tileClassHandler";
import tileContent from "../../utils/tileContentHandler";
import handleClickDay from "../../utils/tileClickHandler";

export default function HomeCalendar({
  getCaloriesConsumed,
  isVisible,
  setCalorieButton,
  calorieButtonVisibility,
  showHistoryEntry,
  setShowHistoryEntry,
  setIsWorkoutVisible,
}) {
  const { history, calorieGoals, routine, completedWorkouts } =
    useCalorieStore();
  const [date, setDate] = useState(new Date());

  const [historyEntryData, setHistoryEntryData] = useState([
    { date: null, meal: null, calories: null, time_stamp: null },
  ]);
  const [showWorkout, setShowWorkout] = useState(false);
  const [playState, setPlayState] = useState("stopped");

  const earliestDate =
    history.length >= 1 ? new Date(history[0].date) : new Date();

  const invisible =
    history.slice().filter((entry) => entry.date === unixDate).length > 4 &&
    isVisible;

  const isWorkoutToday = routine
    .slice()
    .filter((entry) => entry.id !== "free")
    .some((entry) => entry.date === unixDate);

  useEffect(() => {
    setIsWorkoutVisible(showWorkout);
  }, [showWorkout]);

  console.log(showWorkout);
  console.log(isWorkoutToday);

  return (
    <>
      <StrokeWrapper isVisible={invisible}>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </StrokeWrapper>
      <CalendarWrapper isVisible={invisible} workoutToday={isWorkoutToday}>
        <Calendar
          aria-label="Calendar with tracked data"
          value={date}
          selectRange={false}
          maxDate={lastDate}
          minDate={earliestDate}
          minDetail="month"
          formatShortWeekday={formatShortWeekday}
          formatMonthYear={formatMonthYear}
          onChange={(date) => {
            setDate(date);
            handleClickDay(
              date,
              history,
              unixDate,
              setCalorieButton,
              calorieButtonVisibility,
              setShowWorkout,
              setShowHistoryEntry,
              setHistoryEntryData,
              showHistoryEntry,
              isWorkoutToday,
              showWorkout
            );
          }}
          onClick={(event) => {
            event.target.stopPropagation();
          }}
          onClickDay={() => {}}
          tileClassName={({ date, view }) =>
            getTileClassName(
              date,
              view,
              history,
              calorieGoals,
              routine,
              unixDate,
              getCaloriesConsumed
            )
          }
          tileContent={({ date }) =>
            tileContent({ date }, unixDate, routine, completedWorkouts)
          }
        />
        {showHistoryEntry && (
          <CalendarEntry
            getCaloriesConsumed={getCaloriesConsumed}
            historyEntryData={historyEntryData}
          />
        )}
        {showWorkout && isWorkoutToday && (
          <CalendarExercises
            setPlayState={setPlayState}
            setShowWorkout={setShowWorkout}
            setCalorieButton={setCalorieButton}
            calorieButtonVisibility={calorieButtonVisibility}
          />
        )}
        {playState === "play" && (
          <AnimationWorkoutCompleted
            playState={playState}
            setPlayState={setPlayState}
          />
        )}
      </CalendarWrapper>
    </>
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
