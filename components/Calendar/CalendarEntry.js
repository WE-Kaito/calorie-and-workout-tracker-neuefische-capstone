import { NameSpan, ShiftedSpan } from "../ConsumedList/styles";
import {
  StyledMoodle,
  StyledListItem,
  StyledListHeadline,
  StyledListSpan,
} from "./styles";
import useCalorieStore from "../../utils/useCalorieStore";

export default function CalendarEntry({
  getCaloriesConsumed,
  historyEntryData,
}) {
  const { calorieGoals } = useCalorieStore();

  function getFormattedDate(unixTime) {
    const dateObj = new Date(unixTime);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = dateObj.getMonth();
    const year = dateObj.getFullYear();
    const day = dateObj.getDate();
    const formattedDate = `${day} ${months[monthIndex]} ${year}`.replace(
      /,/g,
      ""
    );
    return formattedDate;
  }

  return (
    <StyledMoodle style={{ paddingLeft: "22.5px" }}>
      {historyEntryData.map((entry, index) => (
        <>
          {index === 0 && (
            <>
              <StyledListHeadline
                style={{
                  color:
                    calorieGoals.find((goal) => goal.date === entry.date).goal >
                    getCaloriesConsumed(entry.date)
                      ? "var(--9)"
                      : "var(--10)",
                }}
              >
                {getFormattedDate(entry.date)}
              </StyledListHeadline>
              <StyledListSpan>{`${getCaloriesConsumed(entry.date)} / ${
                calorieGoals.find((goal) => goal.date === entry.date).goal
              }`}</StyledListSpan>
            </>
          )}

          <StyledListItem key={index}>
            <NameSpan>{`${entry.meal}`}</NameSpan>
            <ShiftedSpan>{`${entry.calories} kcal`}</ShiftedSpan>
            <span>{`${entry.time_stamp}`}</span>
          </StyledListItem>
        </>
      ))}
    </StyledMoodle>
  );
}
