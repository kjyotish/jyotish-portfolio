export default function TypingText() {
  return (
    <div className="w-full flex justify-center items-center">
      <svg
        viewBox="0 0 1000 150"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-5xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <style>
          {`
            :root {
              --duration: 2.5s; /* typing duration */
              --steps: 25; /* number of characters */
              --targetWidth: 800px; /* adjusted to fit text exactly */
              --cursorWidth: 3px;
              --fontSize:64px;
              --lineHeight: 95px; /* enough for full text visibility */
              --color: #ffffff;
              --letterSpacing: 0.5px; /* ~0.5% of font-size */
            }

            text {
              font-family: "Inter", "Inter Semi Bold", Arial, sans-serif;
              font-weight: 600;
              font-size: var(--fontSize);
              letter-spacing: var(--letterSpacing);
              fill: var(--color);
              dominant-baseline: middle;
              text-anchor: middle;
            }

            @keyframes type-reveal {
              from { width: 0; }
              to { width: var(--targetWidth); }
            }

            @keyframes cursor-move {
              from { transform: translateX(0); }
              to { transform: translateX(var(--targetWidth)); }
            }

            @keyframes caret-blink {
              0%, 49% { opacity: 1; }
              50%, 100% { opacity: 0; }
            }

            #revealRect {
              height: var(--lineHeight);
              animation: type-reveal var(--duration) steps(var(--steps)) forwards;
            }

            #cursor {
              width: var(--cursorWidth);
              height: 90px;
              fill: var(--color);
              animation: cursor-move var(--duration) steps(var(--steps)) forwards,
                        caret-blink 1s step-end infinite;
            }
          `}
        </style>

        {/* Mask for typing effect */}
        <mask id="revealMask">
          <rect x="0" y="0" width="100%" height="100%" fill="black" />
          <rect
            id="revealRect"
            x="75"
            y="25"
            width="0"
            rx="2"
            ry="2"
            fill="white"
          />
        </mask>

        {/* Centered Text */}
        <g mask="url(#revealMask)">
          <text x="50%" y="50%">uiux &amp; graphic designer</text>
        </g>

        {/* Typing cursor */}
        <rect id="cursor" x="75" y="25" rx="1" ry="1" />
      </svg>
    </div>
  );
}
