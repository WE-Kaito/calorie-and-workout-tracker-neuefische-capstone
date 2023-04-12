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
  background-color: var(--8);
  border-radius: 25px;
  padding: 0.75rem;
  border: 10px solid var(--2);
  transform: translate(-50%, +50%);
`;

export const NameInput = styled.input`
  background: var(--3);
  border: none;
  border-radius: 6px;
`;

export const NumberInput = styled.input`
  background: var(--3);
  border: none;
  width: 74%;
  border-radius: 6px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

export const AddCalorieButton = styled.button`
  background-color: var(--3);
  color: white;
  border: none;
  /* width: 50px;
  height: 22px; */
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  border: 2px solid var(--4);

  &:hover,
  &:active {
    background-color: var(--6);
    border-color: var(--1);
  }
  &:active {
    box-shadow: inset 0px 0px 3px var(--2);
  }
`;
