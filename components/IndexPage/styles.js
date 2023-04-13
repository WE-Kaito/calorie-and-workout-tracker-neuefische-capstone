import styled from "styled-components";
import Link from "next/link";

export const StyledDiv = styled.div`
  position: relative;
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-height: 667px;
  max-width: 375px;
`;

// Navigation & Settings -------------------------------

export const HeadingButtons = styled.div`
  z-index: 20;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 375;

  display: flex;
  gap: 265px;

  .head-buttons {
    filter: hue-rotate(180deg);
  }
`;

export const SettingsButton = styled.button`
  border: none;
  background: none;
`;
export const PagesButton = styled.button`
  border: none;
  background: none;
`;

export const Nav = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  top: 0px;
  right: -47.5px;
  width: 280px;
  height: 260px;
  z-index: 3;
  background: var(--2);
  border-bottom-left-radius: 30px;
  filter: drop-shadow(2px 2px 5px black);

  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

export const LinkContainer = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
  width: fit-content;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--2);
  font-size: 14;
  font-weight: 700;
`;

export const StyledNavSpan = styled.span`
  color: var(--3);
  font-size: 3rem;
  position: absolute;
  right: 55px;
  transform: translateY(-58px);
`;

export const StyledNavButton = styled.button`
  width: 150px;
  height: 55px;
  background: var(--8);
  border-radius: 15px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SettingsSection = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  top: 0px;
  left: -47.5px;
  width: 280px;
  height: 220px;
  z-index: 3;
  background: var(--8);
  border-bottom-right-radius: 30px;
  filter: drop-shadow(2px 2px 5px black);

  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

export const StyledForm = styled.form`
  display: flex;
  margin: 15px 30px 50px 0px;
  gap: 15px;
`;

export const StyledInput = styled.input`
  height: 2rem;
  width: 5rem;
  background-color: var(--3);
  border: none;
  border-radius: 7px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

export const StyledSaveButton = styled.button`
  cursor: pointer;
  color: navy;
  background: #f8f9d7;
  border: none;
  font-style: italic;
  font-weight: bold;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
  border-radius: 7px;

  &:hover {
    background: aquamarine;
  }
`;

// main content -----------------------------------------------

export const ConsumedContainer = styled.div`
  visibility: ${(props) => (props.isTrue ? "visible" : "hidden")};
  position: absolute;
  top: 3rem;
  width: 306px;
  height: 80%;
  left: 50%;
  transform: translateX(-50%) scale(0.85);
  z-index: 3;

  padding: 2rem;
  border-radius: 25px;
`;

export const FormContainer = styled.div`
  visibility: ${({ isTrue }) => (isTrue ? "visible" : "hidden")};
  position: absolute;
  width: fit-content;
  filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
  z-index: 3;
`;

export const StyledButtonCalorieCounter = styled.button`
  color: ${({ isTrue }) => (isTrue ? "var(--6)" : "var(--7)")};
  font-size: 2.2rem;
  font-weight: 800;
  width: 172px;
  height: 172px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  background: var(--2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:active,
  &:hover {
    background: var(--8);
    color: ${(props) => (props.isTrue ? "#00A36C" : "crimson")};
  }
  &:active {
    box-shadow: inset 0px 0px 2px var(--2);
  }
`;

export const OpenCalorieFormButton = styled.button`
  background-color: var(--3);
  color: var(--2);
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: translateY(-34px);
  z-index: 2;

  &:hover,
  &:active {
    background: var(--8);
    color: var(--2);
  }
  &:active {
    box-shadow: inset 0px 0px 2px var(--2);
  }
`;

export const LoadingDisplay = styled.p`
  color: #32de84;
  margin: 0;
`;

export const StyledBackdrop = styled.div`
  position: absolute;
  bottom: -127px;
  box-shadow: inset 0 -10px 0 0 var(--2);
  left: -47.5px;
  z-index: -1;
  margin: 0;

  /* bottom: -430px;
  left: -110px;
  transform: scalex(1.3) rotate(5deg); */
  // this is for the list opening effect
`;

// add media query for scaling() the width
export const CalendarSection = styled.div`
  position: relative;
  max-height: 264px;
  z-index: ${(props) => (props.isVisible ? "-1" : "1")};
`;
