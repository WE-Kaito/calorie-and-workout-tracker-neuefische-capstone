import AddCalories from "../components/AddCalories/AddCalories";
import useCalorieStore from "../utils/useCalorieStore";
import styled from "styled-components";
import ConsumedList from "../components/ConsumedList/ConsumedList";
import { useEffect } from "react";

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
  useEffect(() => {
    document.addEventListener("click", () => {
      const popUpList = document.getElementById("hiddenList");
      popUpList.hasAttribute("hidden")
        ? null
        : popUpList.setAttribute("hidden", true);
    });
  }, []);
  return (
    <StyledDiv>
      <button
        onClick={(event) => {
          event.stopPropagation();
          const popUpList = document.getElementById("hiddenList");
          popUpList.removeAttribute("hidden");
        }}
      >
        {dailyCount}
      </button>
      <AddCalories />
      <ListContainer id="hiddenList" hidden>
        <ConsumedList />
      </ListContainer>
    </StyledDiv>
  );
}
