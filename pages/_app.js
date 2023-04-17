import GlobalStyle from "../styles";
import Head from "next/head";
import useCalorieStore from "../utils/useCalorieStore";

export default function App({ Component, pageProps }) {
  const { exercises } = useCalorieStore();
  const filteredExercises = exercises
    .slice()
    .filter(
      (exercise, index, self) =>
        index === self.findIndex((e) => e.workout === exercise.workout)
    );

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} workouts={filteredExercises} />
    </>
  );
}
