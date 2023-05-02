import Lottie from "lottie-react";
import circleAnimation from "../../public/lottie/circle.json";

export default function AnimationWorkoutToday() {
  return (
    <>
      <Lottie
        animationData={circleAnimation}
        autoplay
        loop
        style={{
          position: "fixed",
          zIndex: "20",
          width: "52px",
          transform: "translate(-8.5px, -34px)",
        }}
      />
    </>
  );
}
