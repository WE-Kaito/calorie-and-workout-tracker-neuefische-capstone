import { createGlobalStyle } from "styled-components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const theme0 = {
  "--1": "#6E85B7",
  "--2": "#14244E",
  "--3": "#F8F9D7",
  "--4": "#191A1C",
  "--5": "ghostwhite",
  "--6": "aquamarine",
  "--7": "lightcoral",
  "--8": "#c4d7e0",
  "--9": "#00A36C",
  "--10": "crimson",
  "--11": "#D9D9D9",
};

const theme1 = {
  "--1": "#a12353",
  "--2": "#f0edef",
  "--3": "#4BC4F7",
  "--4": "ghostwhite",
  "--5": "#170c1c",
  "--6": "#6893ee",
  "--7": "#bf1944",
  "--8": "#ff91af",
  "--9": "#2e62d1",
  "--10": "#f80947",
  "--11": "#2f2642",
};

const theme2 = {
  "--1": "#F5F5F5",
  "--2": "#121212",
  "--3": "#F05454",
  "--4": "#3A3A3A",
  "--5": "#374f66",
  "--6": "#00a6ed",
  "--7": "#FF6347",
  "--8": "#CCCCCC",
  "--9": "#0080FF",
  "--10": "#683a9c",
  "--11": "#D9D9D9",
};

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --1: ${() => theme0["--1"]};
    --2: ${() => theme0["--2"]};
    --3: ${() => theme0["--3"]};
    --4: ${() => theme0["--4"]};
    --5: ${() => theme0["--5"]};
    --6: ${() => theme0["--6"]};
    --7: ${() => theme0["--7"]};
    --8: ${() => theme0["--8"]};
    --9: ${() => theme0["--9"]};
    --10: ${() => theme0["--10"]};
    --11: ${() => theme0["--11"]};

    --font1: ${roboto.style.fontFamily}, serif;
  }

  [data-theme="theme1"] {
    --1: ${() => theme1["--1"]};
    --2: ${() => theme1["--2"]};
    --3: ${() => theme1["--3"]};
    --4: ${() => theme1["--4"]};
    --5: ${() => theme1["--5"]};
    --6: ${() => theme1["--6"]};
    --7: ${() => theme1["--7"]};
    --8: ${() => theme1["--8"]};
    --9: ${() => theme1["--9"]};
    --10: ${() => theme1["--10"]};
    --11: ${() => theme1["--11"]};
  }
  
  [data-theme="theme2"] {
    --1: ${() => theme2["--1"]};
    --2: ${() => theme2["--2"]};
    --3: ${() => theme2["--3"]};
    --4: ${() => theme2["--4"]};
    --5: ${() => theme2["--5"]};
    --6: ${() => theme2["--6"]};
    --7: ${() => theme2["--7"]};
    --8: ${() => theme2["--8"]};
    --9: ${() => theme2["--9"]};
    --10: ${() => theme2["--10"]};
    --11: ${() => theme2["--11"]};
  }

  html{
    background-color: var(--2);
    @media (min-width: 768px) {
    background-color: var(--1);
    }
  }

  body {
    margin: 0;
    font-family: var(--font1), sans-serif, system-ui;
    background-color: var(--1);
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 280px) {
    scale: 0.82;
    transform: translateY(-63px);
}

@media (min-width: 375px) {
    scale: 1.005;
}

@media (min-width: 390px) {
    scale: 1.043;
    transform: translateY(12px);
}

@media (min-width: 393px) {
    scale: 1.048;
    transform: translateY(13px);
}

@media (min-width: 412px) {
    scale: 1.1;
    transform: translateY(25px);
}


    @media (min-width: 414px) {
    scale: 1.1073;
    transform: translateY(27px);
    }

    @media (min-width: 768px) {
    scale: 1.535;
    transform: translateY(117px);
    }

    @media (min-width: 820px) {
    scale: 1.71;
    transform: translateY(117px);
    }

    @media (min-width: 912px) {
    scale: 2.055;
    transform: translateY(171px);
    }

    @media (min-width: 923px) {
    scale: 1;
    transform: translateY(0px);    }
  }
  
  button{
  @media (pointer: coarse) {
  :hover, :active {
    background-color: transparent;
  }
}
}

  ::placeholder {
  color: var(--1);
  text-align: center;
}
input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: transparent;
  }

`;
