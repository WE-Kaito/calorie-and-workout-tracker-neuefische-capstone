import styled from "styled-components";

export const StyledDiv = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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
  cursor: pointer;

  box-shadow: rgba(158, 158, 158, 0.2) 0 -25px 18px -14px inset,
    rgba(158, 158, 158, 0.15) 0 1px 2px, rgba(158, 158, 158, 0.15) 0 2px 4px,
    rgba(158, 158, 158, 0.15) 0 4px 8px, rgba(158, 158, 158, 0.15) 0 8px 16px,
    rgba(158, 158, 158, 0.15) 0 16px 32px;
  &:hover {
    background-color: ghostwhite;
    text-shadow: 0 0 0.05rem
      ${(props) => (props.isTrue ? "#32de84" : "crimson")};
  }
`;

export const OpenCalorieFormButton = styled.button`
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: green;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 3rem;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: limegreen;
  }
`;

export const LoadingDisplay = styled.p`
  color: #32de84;
  margin: 0;
`;
