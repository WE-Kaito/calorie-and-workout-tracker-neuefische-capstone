import styled from "styled-components";

export const AddCalorieButton = styled.button`
  background-color: #32de84;
  color: white;
  border: none;
  width: 50px;
  height: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: lightgreen;
    filter: drop-shadow(0 0 0.08rem #32de84);
  }
`;

export const AddCalorieForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  gap: 10px;
  margin-top: 10%;
  margin-left: 12.5%;
  z-index: 10;
`;

export const FixedInput = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
  width: 74%;
`;
