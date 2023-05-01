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
  border: 8px solid var(--2);
  transform: translate(-50%, 3%);
`;

export const NameInput = styled.input`
  background: var(--3);
  border: 1.5px solid var(--2);
  border-radius: 6px;
  width: 120px;
  height: 25px;
`;

export const NumberInput = styled.input`
  background: var(--3);
  border: 1.5px solid var(--2);
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
  font-style: italic;
  font-weight: bold;
  box-shadow: 0px 2px 3px black;

  &:hover {
    background: var(--6);
  }
  &:active {
    background: var(--6);
    box-shadow: 0px 1px 2px black;
    transform: translateY(0.5px);
  }
`;

// quick selection

export const OpenQSButton = styled.button`
  border: none;
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

  box-shadow: 0px 2px 3px black;

  &:hover {
    background: var(--6);
  }
  &:active {
    background: var(--6);
    box-shadow: 0px 0.5px 2px black;
    transform: translateY(0.5px);
  }
`;

export const QuickSelection = styled.ul`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  list-style: none;
  align-items: center;
  width: 240px;

  gap: 10px;
  z-index: 10;
  position: absolute;
  background-color: var(--8);
  border-radius: 25px;
  padding: 0.75rem;
  padding-bottom: 0;
  border: 7px solid var(--2);
  transform: translate(-50%);
  overflow-y: scroll;
  max-height: 330px;
  top: -9px;

  &::-webkit-scrollbar {
    width: 0px;
    visibility: hidden;
  }
`;

export const StyledListItem = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 185px;
  height: 30px;
  padding: 0.3rem 0.9rem 0.3rem 0.9rem;
  border-radius: 15px;
  background: var(--3);
  color: var(--2);
  margin-bottom: 10px;
  margin-left: 7px;

  box-shadow: 0px 1.5px 2.5px black;

  &:hover {
    background: var(--6);
  }
  &:active {
    background: var(--6);
    box-shadow: 0px 0.5px 2px black;
    transform: translateY(0.5px);
  }
`;
