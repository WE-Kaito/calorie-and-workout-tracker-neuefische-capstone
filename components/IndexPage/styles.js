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
  z-index: 33;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 375;

  display: flex;
  gap: 265px;
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
  width: 220px;
  height: 210px;
  z-index: 30;
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
  right: 19px;
  transform: translateY(-54px);
  filter: drop-shadow(0px 1.5px 1.5px black);
`;

export const StyledNavButton = styled.button`
  width: 130px;
  height: 47px;
  border-radius: 15px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  color: var(--2);
  background: var(--3);
  border: none;
  font-style: italic;
  font-weight: bold;
  font-size: 1.08em;
  box-shadow: 0px 2px 3px black;

  &:hover {
    background: var(--6);
  }
  &:active {
    background: var(--6);
    box-shadow: 0px 0.5px 1px black;
  }
`;

export const SettingsSection = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  top: 0px;
  left: -47.5px;
  width: 260px;
  height: 200px;
  z-index: 3;
  background: var(--2);
  border-bottom-right-radius: 150px;
  filter: drop-shadow(2px 2px 5px black);

  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

export const StyledForm = styled.form`
  display: flex;
  margin: 15px 30px 50px 0px;
  gap: 15px;
  position: absolute;
  top: 64px;
  left: 60px;
  width: 160px;
`;

export const StyledInput = styled.input`
  height: 2rem;
  width: 5rem;
  background-color: var(--3);
  border: 2px solid var(--1);
  border-radius: 7px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

export const StyledSaveButton = styled.button`
  cursor: pointer;
  color: var(--2);
  background: var(--3);
  border: none;
  font-style: italic;
  font-weight: bold;
  padding-left: 0.45rem;
  padding-right: 0.9rem;
  border-radius: 1.5px;
  border-bottom-right-radius: 25px;
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

export const ToggleThemeButton = styled.button`
  cursor: pointer;
  color: var(--2);
  background: linear-gradient(to right top, var(--1), var(--3));
  border: none;
  padding-left: 13px;
  padding-top: 2px;
  border-radius: 7px;
  border-bottom-right-radius: 180px;
  box-shadow: 0px 2px 3px black;

  width: 130px;
  height: 48px;
  line-height: 1.1;
  text-align: left;
  font-size: 1.1em;
  font-weight: 500;

  position: absolute;
  left: 60px;
  bottom: 24px;
  &:hover {
    background: var(--6);
  }
  &:active {
    background: var(--6);
    box-shadow: 0px 0.5px 2px black;
    transform: translateY(0.5px);
  }
`;

export const StyledMoodleHeading = styled.h3`
  color: var(--5);
  position: absolute;
  top: 2px;
  left: 100px;
  font-size: larger;
  text-shadow: 1px 1px 1px var(--4);
`;

export const StyledFormSpan = styled.span`
  color: var(--5);
  position: absolute;
  top: -23px;
  font-size: small;
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
  z-index: 100;

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
  box-shadow: 0px 2px 7px black;
  padding-top: 5px;

  &:active,
  &:hover {
    background: var(--8);
    color: ${(props) => (props.isTrue ? "var(--9)" : "var(--10)")};
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
  box-shadow: 0px 4px 4px black;
  transform: translateY(-34px);
  z-index: 2;

  &:hover,
  &:active {
    background: var(--8);
    color: var(--2);
  }
  &:active {
    box-shadow: inset 0px 1.5px 2px black;
    transform: translateY(-33.5px);
  }
`;

export const LoadingDisplay = styled.p`
  color: var(--6);
  margin: 0;
`;

export const StyledBackdrop = styled.div`
  position: absolute;
  bottom: -127px;
  box-shadow: inset 0 -10px 0 0 var(--2);
  left: -47.5px;
  z-index: -1;
  margin: 0;
`;

export const CalendarSection = styled.div`
  position: relative;
  max-height: 264px;
  z-index: ${(props) => (props.isVisible ? "-1" : "1")};
`;
