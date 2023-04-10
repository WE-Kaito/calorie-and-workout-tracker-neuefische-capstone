import styled from "styled-components";

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  gap: 0.8rem;
  width: fit-content;
`;
export const StyledListItem = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr 2fr 1fr;
  align-items: center;
  width: 270px;
  padding: 0.3rem 0.5rem 0.3rem 0.5rem;
  border-radius: 15px;
  background-color: #f8f9d7;
  color: navy;
`;

export const NameSpan = styled.span`
  text-overflow: ellipsis;
`;

export const ShiftedSpan = styled.span`
  width: 5rem;
  display: inline-block;
  text-align: right;
  transform: translateX(-1rem);
`;

export const Wrapper = styled.div`
  padding: 1rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  z-index: 10;
  position: fixed;
`;
