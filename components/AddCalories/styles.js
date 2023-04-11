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
  filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
`;

export const FixedInput = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
  width: 74%;
`;

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
