import useCalorieStore from "../../utils/useCalorieStore";
import { unixDate } from "../../utils/useCalorieStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import {
  StyledList,
  StyledListItem,
  ShiftedSpan,
  Wrapper,
  NameSpan,
} from "./styles";
import { uid } from "uid";

export default function ConsumedList() {
  const { history, deleteHistoryEntry } = useCalorieStore();

  return (
    <Wrapper>
      <StyledList aria-label="Opened List with todays entries. Click anywhere outside to close.">
        {history
          .slice()
          .filter((entry) => entry.date === unixDate)
          .map((entry, index) => (
            <StyledListItem
              key={uid()}
              aria-label={`${index + 1}. meal: ${entry.meal} from ${
                entry.time_stamp
              }`}
            >
              <NameSpan>{`${entry.meal}`}</NameSpan>
              <ShiftedSpan>{`${entry.calories} kcal`}</ShiftedSpan>
              <span>{`${entry.time_stamp}`}</span>
              <button
                style={{ border: "none", background: "none" }}
                aria-label={`delete ${entry.meal}`}
                onClick={() => {
                  deleteHistoryEntry(entry);
                }}
              >
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  style={{
                    fontSize: 22,
                    transform: `translateX(7px)`,
                    color: "var(--7)",
                  }}
                />
              </button>
            </StyledListItem>
          ))}
      </StyledList>
    </Wrapper>
  );
}
