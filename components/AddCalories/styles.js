import styled from "styled-components";

export const AddCalorieForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  gap: 10px;
  z-index: 10;
  position: absolute;
  background-color: #b2c8df;
  border-radius: 25px;
  padding: 2rem;
  transform: translate(-50%, +80%);
`;

export const FixedInput = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
  width: 74%;
`;

export const AddCalorieButton = styled.button`
  background-color: #f8f9d7;
  color: white;
  border: none;
  width: 50px;
  height: 22px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: aquamarine;
  }
`;
