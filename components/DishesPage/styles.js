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

export const List = styled.section`
  position: relative;
  width: 80%;
  height: 70%;
  background: none;
  border-radius: 20px;
  margin-top: 50px;
  overflow-y: scroll;
  padding-left: 6px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const ListWrapper = styled.section`
  position: relative;
  width: 78%;
  height: 70%;
  background: var(--8);
  border-radius: 25px;
  margin-top: 50px;
  overflow-y: scroll;
  padding-left: 6px;
  font-size: large;
  box-shadow: 0px 1.5px 4px black;

  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const ListItem = styled(Link)`
  width: 98%;
  height: 10%;
  color: var(--2);
  font-size: large;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  margin-bottom: 15px;
  text-decoration: none;

  background: var(--3);
  box-shadow: 0px 1.5px 3px black;

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

export const ListAddButton = styled.button`
  width: 98%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;

  background: var(--9);
  color: var(--2);
  border-radius: 20px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 1.5px 3px black;

  &:hover {
    background-color: var(--6);
  }
  &:active {
    background: var(--6);
    box-shadow: 0px 0.5px 2px black;
    transform: translateY(0.5px);
  }
`;

export const AddDishForm = styled.form`
  width: 78%;
  height: 70%;
  background: var(--1);
  border-radius: 25px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  box-shadow: 0px 2px 4px black;
`;

export const Label = styled.label`
  font-size: 12.5px;
  font-weight: 500;
  align-self: flex-start;
  transform: translateY(7px);

  margin-left: 62px;
  color: var(--2);
`;

export const Input = styled.input`
  border-radius: 7px;
  width: 162px;
  background-color: var(--3);
  border: 2px solid var(--2);
  text-align: center;

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
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

export const CloseFormButton = styled.button`
  border: none;
  height: 26px;
  background: var(--3);
  border-radius: 7px;
  color: var(--2);
  padding: 5px;
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

export const SubmitButton = styled.button`
  border: none;
  background: var(--6);
  border-radius: 7px;
  color: var(--2);
  padding: 5px;
  width: 100px;
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
  color: var(--2);
`;

export const DetailsEditButton = styled.button`
  padding: 2px;
  width: 80px;
  height: 45px;
  font-size: larger;
  border: none;
  background: var(--3);
  color: var(--2);
  position: absolute;
  bottom: 20px;
  left: 194px;
  padding: 10px;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0px 2.5px 3px black;

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
