import AddCalories from "../components/AddCalories/AddCalories";
import useCalorieStore from "../utils/useCalorieStore";
import styled from "styled-components";
import ConsumedList from "../components/ConsumedList/ConsumedList";
import { useState, useEffect } from "react";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ListContainer = styled.div`
  position: absolute;
  top: 4rem;
  width: 274px;
  height: 80%;
  left: 50%;
  transform: translateX(-50%);
  background: grey;
  opacity: 0.7;
`;
export default function HomePage() {
  const { dailyCount } = useCalorieStore();

  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("click", () => setIsListVisible(false));
  }, []);

  return (
    <StyledDiv>
      <button
        onClick={(event) => {
          event.stopPropagation();
          setIsListVisible(!isListVisible);
        }}
      >
        {dailyCount}
      </button>
      <AddCalories />
      {isListVisible ? (
        <ListContainer>
          <ConsumedList />
        </ListContainer>
      ) : null}
    </StyledDiv>
  );
}
