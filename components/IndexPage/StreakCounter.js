import useCalorieStore from "../../utils/useCalorieStore";
import { unixDate } from "../../utils/useCalorieStore";
import Lottie from "lottie-react";
import redFlameAnimation from "../../public/lottie/redFlame.json";

export default function StreakCounter({ getCaloriesConsumed }) {
  const { history, calorieGoals } = useCalorieStore();

  function getDates() {
    const aprilFirst = new Date(2023, 3, 1).getTime();

    const unixDates = [];
    for (let i = unixDate; i >= aprilFirst; i -= 86400000) {
      unixDates.push(i);
    }

    return unixDates;
  }

  function getStreak() {
    let streak = 0;
    const uniqueHistoryDates = [
      ...new Set(
        history.map((entry) => (entry.date < unixDate ? entry.date : null))
      ),
    ];
    const compareDates = getDates();

    for (let i = 1; i < compareDates.length - 1; i++) {
      const date = new Date(
        new Date(compareDates[i]).getFullYear(),
        new Date(compareDates[i]).getMonth(),
        new Date(compareDates[i]).getDate()
      ).getTime();

      if (
        uniqueHistoryDates.some((hdate) => hdate === date) &&
        history.some((entry) => entry.date === date)
      ) {
        const goal = calorieGoals.find((goal) => goal.date === date).goal;

        if (goal >= getCaloriesConsumed(date)) {
          streak++;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    return streak;
  }

  if (getStreak() >= 3) {
    return (
      <div
        style={{
          position: "absolute",
          top: "247px",
          right: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "20",
        }}
      >
        <span style={{ zIndex: "15", position: "absolute", color: "var(--2)" }}>
          ×{getStreak()}
        </span>
        <Lottie
          animationData={redFlameAnimation}
          autoplay
          loop
          style={{
            position: "absolute",
            width: "100px",
            zIndex: "13",
            bottom: "-23px",
            filter: "drop-shadow(0px -3px 5px var(--7))",
          }}
        />
      </div>
    );
  }
}
