import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 80%;
  height: 75%;

  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
`;

export const EditMaxContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  background-color: grey;
  margin: 15% 0 15% 0;
  background-color: lightgreen;
`;

export const EditLinkContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
  background-color: grey;
  margin: 15% 0 15% 0;
  border-radius: 25px;
`;

export const StyledHeadline = styled.h2``;

export const StyledInput = styled.input`
  height: 2rem;
  width: 5rem;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 2rem;
`;

export const StyledSaveButton = styled.button`
  cursor: pointer;
`;
