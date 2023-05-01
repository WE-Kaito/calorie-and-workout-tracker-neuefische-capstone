import {
  Nav,
  LinkContainer,
  StyledNavButton,
  StyledLink,
  StyledNavSpan,
  StyledMoodleHeading,
} from "../IndexPage/styles";
import Link from "next/link";

export default function Navigation() {
  return (
    <Nav>
      <StyledMoodleHeading style={{ left: "58px" }}>GO TO</StyledMoodleHeading>
      <LinkContainer>
        <StyledLink href="/dishes">
          <StyledNavButton>Dishes</StyledNavButton>
        </StyledLink>
        <Link href="/dishes">
          <StyledNavSpan>{` ➤`}</StyledNavSpan>
        </Link>
      </LinkContainer>

      <LinkContainer>
        <StyledLink href="/workouts">
          <StyledNavButton>Workouts</StyledNavButton>
        </StyledLink>
        <Link href="/workouts">
          {" "}
          <StyledNavSpan>➤</StyledNavSpan>
        </Link>
      </LinkContainer>
    </Nav>
  );
}
