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
  transform: translate(-50%, 3%);
`;

export const NameInput = styled.input`
  background: var(--3);
  border: none;
  border-radius: 6px;
  width: 120px;
  height: 25px;
`;

export const NumberInput = styled.input`
  background: var(--3);
  border: none;
  width: 120px;
  border-radius: 6px;
  height: 25px;

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

// quick selection

export const OpenQSButton = styled.button`
  border: 2px solid var(--2);
  background: var(--3);
  color: var(--2);
  border-radius: 10px;
  width: 120px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: x-small;
  font-weight: 600;

  &:hover,
  &:active {
    background-color: var(--8);
    border-color: var(--1);
  }
  &:active {
    box-shadow: inset 0px 0px 3px var(--2);
  }
`;

export const QuickSelection = styled.ul`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  list-style: none;
  align-items: center;
  width: 200px;
  gap: 10px;
  z-index: 10;
  position: absolute;
  background-color: var(--8);
  border-radius: 25px;
  padding: 0.75rem;
  border: 10px solid var(--2);
  transform: translate(-50%);

  top: -9px;
`;

export const StyledListItem = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  height: 30px;
  padding: 0.3rem 0.5rem 0.3rem 0.5rem;
  border-radius: 15px;
  background: var(--3);
  color: var(--2);
  margin-bottom: 10px;

  &:hover,
  &:active {
    background-color: var(--6);
  }
  &:active {
    box-shadow: inset 0px 0px 3px var(--2);
  }
`;
