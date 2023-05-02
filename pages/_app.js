import GlobalStyle from "../styles";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <ThemeProvider
        defaultTheme="theme0"
        themes={["theme0", "theme1", "theme2"]}
      >
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
