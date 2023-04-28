import styled from "styled-components";

import Link from "next/link";

export const Wrapper = styled.div`
  width: 375px;
  height: 667px;
  background: var(--2);

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.button`
  cursor: pointer;
  background: var(--3);
  border-radius: 50%;
  padding: 16.5px 20px 16.5px 20px;
  border: none;
  font-size: xx-large;

  position: absolute;
  right: 15px;
  top: 15px;

  &:hover {
    background-color: var(--8);
  }
`;

export const List = styled.section`
  visibility: ${({ invisible }) => (invisible ? "hidden" : "visible")};
  position: ${({ invisible }) => (invisible ? "absolute" : "relative")};

  width: 70%;
  height: 63%;
  background: none;
  border-radius: 20px;
  transform: translateY(5%);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const ListAddButton = styled.button`
  width: 100%;
  height: 10%;
  color: var(--4);

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 17px;

  background: var(--9);
  box-shadow: 0px 2px 3px black;
  padding-top: 4.5px;

  &:hover {
    background-color: var(--6);
  }
  &:active {
    background: var(--6);
    box-shadow: 0px 0.5px 2px black;
    transform: translateY(0.5px);
  }
  &:visited {
    text-decoration: none;
    color: var(--2);
  }
`;

export const AddWorkoutForm = styled.form`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  position: ${({ visible }) => (visible ? "relative" : "absolute")};

  width: 70%;
  height: 63%;
  background: lightsteelblue;
  border-radius: 20px;
  transform: translateY(5%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ExerciseFormWrapper = styled.form`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  position: ${({ visible }) => (visible ? "relative" : "absolute")};

  width: 100%;
  height: 190px;
  background: lightsteelblue;
  border-radius: 20px;
  transform: translateY(-15px);

  margin-top: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddExerciseForm = styled.div`
  width: 100%;
  height: fit-content;
  background: lightsteelblue;
  border-radius: 20px;
  transform: translateY(5%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  font-size: small;
  font-weight: 500;
  align-self: flex-start;
  transform: scale(0.9);

  margin-left: 28px;
  color: var(--2);
`;

export const Input = styled.input`
  border-radius: 7px;
  background-color: var(--3);
  border: none;
  text-align: center;
  width: 80%;

  height: 1.3rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const CloseFormButton = styled.button`
  border: none;
  background: var(--3);
  border-radius: 7px;
  color: var(--2);
  padding: 5px;

  transform: translateY(14px);

  &:hover {
    background-color: var(--8);
  }
`;

export const SubmitButton = styled.button`
  border: none;
  background: var(--6);
  border-radius: 7px;
  color: var(--2);
  padding: 5px;
  transform: translateY(14px);

  &:hover {
    background-color: var(--8);
  }
`;

export const DetailsEditButton = styled.button`
  border: none;
  width: 100%;
  height: 10%;
  color: var(--2);

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  margin-bottom: 15px;

  background: var(--3);

  &:hover {
    background-color: var(--6);
  }
`;

export const DeleteButton = styled.button`
  border: none;
  background: var(--7);
  color: var(--3);
  position: absolute;
  top: 40px;
  left: 70px;
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;

  &:hover {
    background-color: var(--8);
    color: crimson;
    font-weight: 800;
  }
`;
export const ExerciseLabel = styled.label``;

export const ExerciseInput = styled.input`
  width: 45px;
  height: 1.3rem;
  border-radius: 7px;
  background-color: var(--3);
  border: none;
  text-align: center;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

export const ExerciseInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 14px 0 14px 0;
`;

// ListItemButton

export const ListItem = styled(Link)`
  text-decoration: none;
  font-size: 17px;
  width: 100%;
  height: 10%;
  color: var(--2);

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  margin-bottom: 15px;

  background: var(--3);
  box-shadow: 0px 2px 3px black;

  &:hover {
    background-color: var(--6);
  }
  &:active {
    background: var(--6);
    box-shadow: 0px 0.5px 2px black;
    transform: translateY(0.5px);
  }
  &:visited {
    text-decoration: none;
    color: var(--2);
  }
`;

export const ListItemExercise = styled.button`
  width: 100%;
  height: fit-content;
  color: var(--2);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  margin-bottom: 15px;
  padding: 5px;

  background: var(--8);

  text-overflow: clip;
  &:hover {
    background-color: var(--3);
  }
`;

export const ListItemHeadline = styled.h3`
  color: var(--2);
  grid-row: 1;
  margin: 2px;
`;
export const ListItemValue = styled.span`
  color: var(--2);
  grid-row: 2;
  margin: 0px 13px 0px 13px;
`;
export const ListItemNotes = styled.span`
  color: var(--2);
  grid-row: 1;
`;

export const DeleteExerciseButton = styled.button`
  border: none;
  background: var(--7);
  border-radius: 7px;
  color: var(--3);
  padding: 5px;

  transform: translateY(14px);

  &:hover {
    background-color: var(--8);
  }
`;

// set intervall "form"

export const SetIntervalSection = styled.section`
  transform: translateY(20px);
  width: 100%;
  height: 30%;

  position: absolute;
  bottom: 0;
  padding: 8px 200px 20px 28px;
  background: var(--8);
  color: var(--2);
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

export const IntervalHeadline = styled.h2`
  margin-bottom: 8px;
  font-size: 0.96em;
`;

export const Interval = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  gap: 5px;
  max-height: 106px;
  overflow-y: scroll;

  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 1em;
    position: absolute;
    transform: translateY(-10px);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--2);
    border-radius: 25px;
    border: 2px solid var(--1);
  }
`;

export const ListItemEditMode = styled.button`
  width: 100%;
  height: 10%;
  color: var(--2);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  margin-bottom: 15px;
  font-size: 1.02em;

  background: var(--3);

  &:hover,
  &:active {
    background-color: var(--6);
    color: (var--4);
  }
`;

export const IntervalItem = styled.span`
  height: 20px;
  width: 100%;
  background: var(--1);
  color: var(--5);
  border-radius: 6px;
  padding: 0px 4px 0px 4px;
  box-shadow: inset 0 0 2px ghostwhite;
`;

export const IntervalButton = styled.button`
  border: none;
  background: var(--8);
  color: var(--4);
  padding: 5px;
  border-radius: 7px;
`;

export const StyledPageHeadline = styled.h1`
  position: absolute;
  top: 5px;
  left: 70px;
  z-index: 10;
  color: var(--3);
  font-size: 40px;
  text-shadow: 1px 1px 2px black;
`;

export const AddRoutineButton = styled.button`
  border: none;
  position: absolute;
  bottom: 0px;
  background: var(--8);
  width: 100%;
  height: 10%;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  font-size: 20px;
  color: var(--2);
  box-shadow: 0px -0.5px 2px black;

  &:hover,
  &:active {
    background-color: var(--6);
  }
  &:active {
    height: 15%;
    padding-bottom: 10%;
  }
`;
