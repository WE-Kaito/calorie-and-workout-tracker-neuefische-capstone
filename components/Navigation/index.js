import { useRouter } from "next/router";
import { Nav, LinkContainer, StyledLink } from "./styles";

export default function Navigation() {
  const router = useRouter();
  const url = router.pathname;
  return (
    <Nav>
      <LinkContainer
        style={{ backgroundColor: url === "/" ? "lightskyblue" : null }}
      >
        <StyledLink href="/">📊</StyledLink>
      </LinkContainer>

      <LinkContainer
        style={{ backgroundColor: url === "/edit" ? "lightskyblue" : null }}
      >
        <StyledLink href="/edit">📝</StyledLink>
      </LinkContainer>
    </Nav>
  );
}
