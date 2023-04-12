import styled from "styled-components";

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
  height: 70%;
  background: var(--1);
  border-radius: 20px;
  transform: translateY(5%);

  gap: 10px;
`;

export const ListItem = styled.button`
  width: 100%;
  height: 10%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  margin-bottom: 15px;

  background: var(--8);
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

  &:hover {
    background-color: var(--8);
  }
`;

export const AddDishForm = styled.form`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  position: ${({ visible }) => (visible ? "relative" : "absolute")};

  width: 70%;
  height: 70%;
  background: lightsteelblue;
  border-radius: 20px;
  transform: translateY(5%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: small;
  font-weight: 500;
  align-self: flex-start;
  transform: translateY(10px) scale(0.9);

  margin-left: 62px;
  color: var(--2);
`;

export const Input = styled.input`
  border-radius: 7px;
  background-color: var(--3);
  border: none;
  text-align: center;

  height: 1.3rem;
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

  &:hover {
    background-color: var(--8);
  }
`;
