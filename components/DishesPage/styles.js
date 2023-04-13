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
  gap: 10px;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const ListItem = styled(Link)`
  width: 100%;
  height: 10%;
  color: var(--2);

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  margin-bottom: 15px;
  text-decoration: none;

  background: var(--8);

  &:hover {
    background-color: var(--3);
  }
  &:visited {
    color: var(--2);
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

// Details

export const DetailsList = styled.ul`
  list-style: none;
`;

export const Detail = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const DishHeadline = styled.h1`
  margin-bottom: 0;
`;

export const DetailsBackButton = styled(Link)`
  background: var(--3);
  color: var(--2);
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  border-radius: 7px;
  text-decoration: none;

  &:hover {
    background-color: var(--8);
  }
  &:visited {
    color: var(--2);
  }
`;

export const DeleteButton = styled.button`
  border: none;
  background: var(--7);
  color: var(--3);
  position: absolute;
  top: 40px;
  left: 15%;
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;

  &:hover {
    background-color: var(--8);
    color: crimson;
    font-weight: 800;
  }
`;
