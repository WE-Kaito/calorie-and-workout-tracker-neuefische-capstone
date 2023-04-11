import { useRouter } from "next/router";
import { Nav, LinkContainer, StyledLink } from "./styles";
import {
  faPenToSquare,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation() {
  const router = useRouter();
  const url = router.pathname;
  return (
    <Nav>
      <LinkContainer
        style={{
          borderLeft: url === "/" ? "2px solid ghostwhite" : "none",
          borderRight: url === "/" ? "2px solid ghostwhite" : "none",
          borderBottom: url === "/" ? "2px solid ghostwhite" : "none",
          borderImage: "linear-gradient(to top, ghostwhite, #6E85B7) 1",
        }} // for testing this style is applied inline
      >
        <StyledLink href="/">
          <FontAwesomeIcon
            style={{ color: url === "/" ? "ghostwhite" : "#C4D7E0" }}
            icon={faChartSimple}
          />
        </StyledLink>
      </LinkContainer>

      <LinkContainer
        style={{
          borderLeft: url === "/edit" ? "2px solid ghostwhite" : "none",
          borderRight: url === "/edit" ? "2px solid ghostwhite" : "none",
          borderBottom: url === "/edit" ? "2px solid ghostwhite" : "none",
          borderImage: "linear-gradient(to top, ghostwhite, #6E85B7) 1",
        }}
      >
        <StyledLink href="/edit">
          <FontAwesomeIcon
            style={{ color: url === "/edit" ? "ghostwhite" : "#C4D7E0" }}
            icon={faPenToSquare}
          />
        </StyledLink>
      </LinkContainer>
    </Nav>
  );
}
