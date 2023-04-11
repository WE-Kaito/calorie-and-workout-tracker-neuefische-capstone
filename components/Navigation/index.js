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
      <LinkContainer>
        <StyledLink href="/">
          <FontAwesomeIcon
            style={{ color: url === "/" ? "ghostwhite" : "#C4D7E0" }}
            icon={faChartSimple}
          />
        </StyledLink>
      </LinkContainer>

      <LinkContainer>
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
