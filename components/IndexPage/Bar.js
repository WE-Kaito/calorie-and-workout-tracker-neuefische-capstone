export default function Bar(consumed, goal) {
  const percentage = (consumed / goal) * 100;

  if (typeof document !== "undefined") {
    // Get all the Meters
    const meters = document.querySelectorAll("svg[data-value] .meter");

    meters.forEach((path) => {
      let length = path.getTotalLength();
      path.style.strokeDashoffset = length;
      path.style.strokeDasharray = length;
      let value = parseInt(path.parentNode.getAttribute("data-value"));
      let to = length * ((100 - value) / 100);
      path.getBoundingClientRect();
      path.style.strokeDashoffset = Math.max(0, to);
    });
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="222"
      width="222"
      viewBox="0 0 200 200"
      data-value={`${percentage}`}
      style={{
        willChange: "auto",
        strokeWidth: "16px",
        strokeMiterlimit: "round",
        strokeLinecap: "round",
        transition: "stroke-dashoffset 850ms ease-in-out",
        position: "absolute",
        top: "160px",
        left: "29px",
        filter: "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.5))",
      }}
    >
      <path
        class="bg"
        stroke="var(--5)"
        d="M41 149.5a77 77 0 1 1 117.93 0"
        fill="none"
        style={{
          pointerEvents: "none",
        }}
      />
      <path
        class="meter"
        stroke="#09c"
        d="M41 149.5a77 77 0 1 1 117.93 0"
        fill="none"
        stroke-dasharray="350"
        stroke-dashoffset="350"
      />
    </svg>
  );
}
