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
  background: var(--1);
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

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--3);
  color: var(--2);
  border-radius: 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--8);
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
  width: 100%;
  height: 10%;
  color: var(--2);

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  margin-bottom: 15px;

  background: var(--8);

  &:hover {
    background-color: var(--3);
  }
  &:visited {
    text-decoration: none;
    color: var(--2);
  }
`;

export const ListItemExercise = styled.button`
  width: 100%;
  height: 10%;
  color: var(--2);

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  margin-bottom: 15px;

  background: var(--8);

  text-overflow: clip;
  &:hover {
    background-color: var(--3);
  }
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