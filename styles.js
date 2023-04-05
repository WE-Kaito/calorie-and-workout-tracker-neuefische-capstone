import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Roboto", sans-serif, system-ui;
  }

  .calendar-style{
  border: none;
transform: scale(0.95) translateY(1rem);

  button:disabled{
    background: white;
  }
}
`;
