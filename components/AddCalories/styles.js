import styled from "styled-components";

export const AddCalorieButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 3rem;
`;

export const AddCalorieForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  gap: 10px;
`;

export const FixedInput = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
  width: 74%;
`;
