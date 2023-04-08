import styled from "styled-components";

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  gap: 0.8rem;
  width: 250px;
  z-index: 10;
`;
export const StyledListItem = styled.div`
display: grid;
grid-template-columns: 6fr 2fr 2fr 1fr;
padding: 0.2rem;
background-color: lightskyblue;
border 1px solid black;
filter: drop-shadow(0 0 0.05rem black);
`;

export const ShiftedSpan = styled.span`
  width: 5rem;
  display: inline-block;
  text-align: right;
  transform: translateX(-1rem);
`;

export const CorrectionDiv = styled.div`
  padding: 1rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
