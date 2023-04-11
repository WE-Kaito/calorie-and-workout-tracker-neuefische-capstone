import styled from "styled-components";

export const StyledDiv = styled.div`
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-height: 667px;
`;

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
  left: -47.5px;
  z-index: -1;

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
