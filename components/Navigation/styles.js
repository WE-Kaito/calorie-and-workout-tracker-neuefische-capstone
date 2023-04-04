import Link from "next/link";
import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 4rem;
`;

export const LinkContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const StyledLink = styled(Link)`
  padding: 5% 40% 5% 40%;
  font-size: 2em;
`;
