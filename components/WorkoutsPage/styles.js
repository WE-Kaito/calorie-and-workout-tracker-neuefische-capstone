import styled from "styled-components";

import Link from "next/link";

export const Wrapper = styled.div`
  width: 375px;
  height: 667px;
  background: var(--2);

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10px;
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
  position: relative;
  width: 80%;
  height: 55.55%;
  background: none;
  border-radius: 20px;
  margin-top: 120px;
  overflow-y: scroll;
  padding-left: 6px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const ListAddButton = styled.button`
  width: 96%;
  height: 40px;
  color: var(--4);

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  margin-bottom: 15px;
  margin-left: 4px;
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
  width: 96%;
  height: 100px;
  background: var(--1);
  border-radius: 20px;
  margin-left: 4px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 2px 3px black;
`;

export const ExerciseFormWrapper = styled.form`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  position: ${({ visible }) => (visible ? "relative" : "absolute")};

  width: 97%;
  margin-left: 4px;
  height: 190px;
  background: var(--1);
  border-radius: 20px;
  transform: translateY(-15px);

  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0px 2px 4px black;
`;

export const AddExerciseForm = styled.div`
  width: 100%;
  height: fit-content;
  background: none;
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
  width: 100px;
  height: 30%;
  position: absolute;
  top: 54px;
  left: 240px;

  display: flex;
  gap: 12px;
  flex-direction: column;
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
  width: 80%;
  height: 26px;
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

export const DetailsEditButton = styled.button`
  border: none;
  width: 97%;
  margin-left: 4px;
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
    background: var(--6);
  }
  &:active {
    background: var(--6);
    box-shadow: 0px 0.5px 2px black;
    transform: translateY(0.5px);
  }
`;

export const DeleteButton = styled.button`
  border: none;
  background: var(--7);
  color: var(--4);
  position: absolute;
  top: 30px;
  left: 46px;
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;

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
export const ExerciseLabel = styled.label``;

export const ExerciseInput = styled.input`
  width: 45px;
  height: 1.3rem;
  border-radius: 7px;
  background-color: var(--3);
  border: 1.5px solid var(--2);
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
  width: 98%;
  height: 58px;
  color: var(--2);

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: none;
  margin-bottom: 15px;
  font-size: 1.2em;
  padding-top: 4px;
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
  width: 97%;
  margin-left: 4px;
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

  background: var(--1);

  text-overflow: clip;
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
  position: absolute;
  bottom: -14px;
  left: -55px;

  box-shadow: 0px 2px 3px black;

  &:hover {
    background: var(--10);
  }
  &:active {
    background: var(--10);
    box-shadow: 0px 0.5px 2px black;
    transform: translateY(0.5px);
  }
`;

// set intervall "form"

export const SetIntervalSection = styled.section`
  transform: translateY(20px);
  width: 100%;
  height: 35%;

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
  margin-left: 6px;
  font-size: 0.96em;
`;

export const Interval = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  gap: 4px;
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
  width: 98%;
  height: 58px;
  color: var(--2);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: none;
  margin-bottom: 15px;
  font-size: 1.2em;
  padding-top: 4px;
  box-shadow: 0px 2px 3px black;
  background-color: var(--8);
  margin-left: 4px;

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

export const IntervalItem = styled.span`
  height: 20px;
  width: 93%;
  background: var(--1);
  color: var(--5);
  border-radius: 6px;
  padding: 0px 4px 0px 4px;
  box-shadow: 1px 1px 1.5px black;
  margin: 1px;
`;

export const IntervalButton = styled.button`
  cursor: pointer;
  border: none;
  width: 100%;
  height: 50px;
  background: var(--3);
  color: var(--4);
  padding: 5px;
  border-radius: 7px;
  font-size: 16.5px;

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

export const IntervalButtonSave = styled(Link)`
  border: none;
  width: 100%;
  height: 50px;
  background: var(--6);
  color: var(--2);
  font-weight: 400;
  text-decoration: none;
  text-align: center;
  padding: 5px;
  border-radius: 7px;
  font-size: 16.5px;

  box-shadow: 0px 2px 3px black;

  &:hover {
    background: var(--6);
  }
  &:active {
    background: var(--6);
    box-shadow: 0px 0.5px 2px black;
    transform: translateY(0.5px);
  }
  &:visited {
  }
`;

export const StyledPageHeadline = styled.h1`
  position: absolute;
  top: 5px;
  left: 70px;
  z-index: 10;
  color: var(--3);
  font-size: 40px;
  text-shadow: 1px 1px 0.5px black;
`;

export const AddRoutineButton = styled.button`
  border: none;
  position: absolute;
  bottom: 0px;
  background: var(--8);
  width: 100%;
  height: 16%;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  font-size: 20px;
  color: var(--2);
  box-shadow: 0px -0.5px 2px black;
  padding-bottom: 40px;

  &:hover,
  &:active {
    background-color: var(--6);

    height: 20%;
    padding-bottom: 62px;
  }
`;

export const ExerciseButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  width: 100px;
  gap: 40px;
  bottom: -23px;
`;
