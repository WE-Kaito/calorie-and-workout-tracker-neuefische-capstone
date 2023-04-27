import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function BackButton() {
  const BackButton = styled.button`
    cursor: pointer;
    background: var(--4);
    color: var(--3);
    border-radius: 50%;
    padding: 10px;
    border: none;

    position: absolute;
    right: 20px;
    top: 20px;
    width: 50px;
    height: 50px;
    box-shadow: 0px 2px 3px black;

    &:hover {
      color: var(--6);
      background: var(--4);
    }
    &:active {
      background: var(--4);
      box-shadow: 0px 0.5px 1px black;
    }
  `;

  return (
    <BackButton>
      <FontAwesomeIcon
        style={{
          transform: `scale(${3.89}) translateX(0px)`,
        }}
        icon={faCircleLeft}
      />
    </BackButton>
  );
}
