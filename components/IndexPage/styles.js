import styled from "styled-components";

export const StyledDiv = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;
`;
export const ConsumedContainer = styled.div`
  visibility: ${(props) => (props.isTrue ? "visible" : "hidden")};
  position: absolute;
  top: 3.5rem;
  width: 274px;
  height: 80%;
  left: 50%;
  transform: translateX(-50%) scale(0.85);
  background: grey;
  opacity: 0.8;
`;

export const FormContainer = styled.div`
  visibility: ${(props) => (props.isTrue ? "visible" : "hidden")};
  position: absolute;
  top: 18%;
  width: 274px;
  height: 17%;
  left: 50%;
  transform: translateX(-50%);
  background: grey;
  border-radius: 25px;
`;

export const StyledButtonCalorieCounter = styled.button`
  color: ${(props) => (props.isTrue ? "#32de84" : "crimson")};
  font-size: 2rem;
  font-weight: bold;
  width: 160px;
  height: 160px;
  border: none;
  border-radius: 100%;
`;

export const OpenCalorieFormButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 3rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 28%;
`;
