import Lottie from "lottie-react";
import starAnimation from "../../public/lottie/star.json";

export default function AnimationStar() {
  return (
    <Lottie
      animationData={starAnimation}
      autoplay
      loop
      speed={10}
      style={{
        position: "fixed",
        zIndex: "20",
        width: "20px",
        transform: "translate(18.5px, -28px)",
      }}
    />
  );
}
