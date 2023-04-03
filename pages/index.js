import AddCalories from "../components/AddCalories";
import useCalorieStore from "../utils/useCalorieStore";
import styled from "styled-components";
import ConsumedList from "../components/ConsumedList";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function HomePage() {
  const { dailyCount } = useCalorieStore();

  return (
    <StyledDiv>
      <h1>{dailyCount}</h1>
      <AddCalories />
      <ConsumedList />
    </StyledDiv>
  );
}
