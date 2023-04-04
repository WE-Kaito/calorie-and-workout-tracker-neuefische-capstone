import GlobalStyle from "../styles";
import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}
