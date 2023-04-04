import styled from "styled-components";

export const StyledDiv = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ListContainer = styled.div`
  position: absolute;
  top: 3.5rem;
  width: 274px;
  height: 80%;
  left: 50%;
  transform: translateX(-50%);
  background: grey;
  opacity: 0.8;
`;

export const StyledButtonCalorieCounter = styled.button`
  color: ${(props) => (props.true ? "#32de84" : "crimson")};
  font-size: 2rem;
  font-weight: bold;
  width: 160px;
  height: 160px;
  border: none;
  border-radius: 100%;
`;
