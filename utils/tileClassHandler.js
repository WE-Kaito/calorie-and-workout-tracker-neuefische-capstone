export default function getTileClassName(
  date,
  view,
  history,
  calorieGoals,
  routine,
  unixDate,
  getCaloriesConsumed
) {
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
  if (
    routine
      .slice()
      .filter((entry) => entry.id !== "free")
      .some((entry) => entry.date === unixTileDate) &&
    unixTileDate > unixDate
  ) {
    return "react-calendar__tile--workout";
  }
}
