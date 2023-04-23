import AnimationStar from "../components/Calendar/AnimationStar";
import AnimationWorkoutToday from "../components/Calendar/AnimationWorkoutToday";
export default function tileContent(
  { date },
  unixDate,
  routine,
  completedWorkouts
) {
  const unixTileDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  ).getTime();

  if (
    routine
      .slice()
      .filter((entry) => entry.id !== "free")
      .some((entry) => entry.date === unixTileDate) &&
    unixTileDate === unixDate
  ) {
    return <AnimationWorkoutToday />;
  }

  if (
    completedWorkouts.some((entry) => entry.date === unixTileDate) &&
    unixTileDate <= unixDate
  ) {
    return <AnimationStar />;
  }
}
