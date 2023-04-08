import Link from "next/link";
import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
`;

export const LinkContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  box-shadow: inset 0em 1em 1.5em black;
`;

export const StyledLink = styled(Link)`
  padding: 5% 40% 5% 40%;
  font-size: 2em;
`;
