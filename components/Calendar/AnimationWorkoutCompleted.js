import Lottie from "lottie-react";
import completeAnimation from "../../public/lottie/completeStar.json";

export default function AnimationWorkoutCompleted({ playState, setPlayState }) {
  return (
    <Lottie
      animationData={completeAnimation}
      playState={playState}
      loop={false}
      onComplete={() => {
        setPlayState("stopped");
      }}
      style={{
        width: 240,
        height: 240,
        position: "absolute",
        zIndex: "100",
        bottom: "135px",
        left: "22px",
      }}
    />
  );
}
