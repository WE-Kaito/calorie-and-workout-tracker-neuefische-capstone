import { useRouter } from "next/router";
import { Nav, LinkContainer, StyledLink } from "./styles";

export default function Navigation() {
  const router = useRouter();
  const url = router.pathname;
  return (
    <Nav>
      <LinkContainer
        style={{
          backgroundColor: url === "/" ? "black" : "#004953",
          borderLeft: url === "/" ? "solid ghostwhite" : "none",
          borderRight: url === "/" ? "solid ghostwhite" : "none",
          borderBottom: url === "/" ? "solid ghostwhite" : "none",
          borderImage: "linear-gradient(to top, ghostwhite, black) 1",
        }} // for testing this style is applied inline
      >
        <StyledLink href="/">📊</StyledLink>
      </LinkContainer>

      <LinkContainer
        style={{
          backgroundColor: url === "/edit" ? "black" : "#004953",
          borderLeft: url === "/edit" ? "solid ghostwhite" : "none",
          borderRight: url === "/edit" ? "solid ghostwhite" : "none",
          borderBottom: url === "/edit" ? "solid ghostwhite" : "none",
          borderImage: "linear-gradient(to top, ghostwhite, black) 1",
        }}
      >
        <StyledLink href="/edit">📝</StyledLink>
      </LinkContainer>
    </Nav>
  );
}
