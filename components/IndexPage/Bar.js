export default function Bar(percentage, svgRef) {
  return (
    <svg
      ref={svgRef}
      pointerEvents="none"
      xmlns="http://www.w3.org/2000/svg"
      height="262"
      width="262"
      viewBox="0 0 200 200"
      data-value={`${percentage}`}
      style={{
        willChange: "auto",
        strokeWidth: "17px",
        strokeMiterlimit: "round",
        strokeLinecap: "round",
        transition: "stroke-dashoffset 850ms ease-in-out",
        position: "absolute",
        top: "-33px",
        left: "9px",
        filter: "drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.5))",
      }}
    >
      <path
        className="bg"
        stroke="var(--11)"
        d="M41 149.5a63.5 63.5 0 1 1 117.93 0"
        fill="none"
        style={{
          pointerEvents: "none",
        }}
      />
      <path
        className="meter"
        stroke={percentage < 100 ? "var(--6)" : "var(--10)"}
        d="M41 149.5a63.5 63.5 0 1 1 117.93 0"
        fill="none"
        strokeDasharray="350"
        strokeDashoffset="350"
      />
    </svg>
  );
}
