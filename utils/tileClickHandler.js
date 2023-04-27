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

  if ("vibrate" in navigator) {
    navigator.vibrate([100]);
  }

  if (history.some((entry) => entry.date === unixTileDate) && date < unixDate) {
    setHistoryEntryData(
      history.slice().filter((entry) => entry.date === unixTileDate)
    );
    setCalorieButton(!calorieButtonVisibility);

    setShowHistoryEntry(!showHistoryEntry);
  }

  if (isWorkoutToday && unixTileDate === unixDate) {
    setShowWorkout(!showWorkout);
    setCalorieButton(!calorieButtonVisibility);
  }
}
