export default function handleClickDay(
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
) {
  const unixTileDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  ).getTime();

  if (history.some((entry) => entry.date === unixTileDate) && date < unixDate) {
    setCalorieButton(!calorieButtonVisibility);
    setHistoryEntryData(
      history.slice().filter((entry) => entry.date === unixTileDate)
    );
    setShowHistoryEntry(!showHistoryEntry);
  }

  if (isWorkoutToday && unixTileDate === unixDate) {
    setShowWorkout(!showWorkout);
    setCalorieButton(!calorieButtonVisibility);
  }
}
