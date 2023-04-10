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
  top: 3rem;
  width: 306px;
  height: 80%;
  left: 50%;
  transform: translateX(-50%) scale(0.85);

  padding: 2rem;
  border-radius: 25px;
  background-color: #b2c8df;

  filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
`;

export const FormContainer = styled.div`
  visibility: ${(props) => (props.isTrue ? "visible" : "hidden")};
  position: absolute;
  width: fit-content;
  filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
`;

export const StyledButtonCalorieCounter = styled.button`
  color: ${(props) => (props.isTrue ? "aquamarine" : "tomato")};
  font-size: 2rem;
  font-weight: bold;
  width: 160px;
  height: 160px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  background: #b2c8df;

  &:active,
  &:hover {
    background: radial-gradient(#f8f9d7, lightsteelblue);
    ${(props) => (props.isTrue ? "#32de84" : "crimson")};
  }
`;

export const OpenCalorieFormButton = styled.button`
  background-color: #c4d7e0;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;

  &:hover,
  &:active {
    background: radial-gradient(#f8f9d7, lightsteelblue);
    color: navy;
  }
`;

export const LoadingDisplay = styled.p`
  color: #32de84;
  margin: 0;
`;
