

const TypingText = () => {
  return (
    <svg
      width="800"
      height="150"
      viewBox="20 40 800 150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        :root {
          --duration: 2.5s; /* typing duration */
          --steps: 25; /* number of characters */
          --targetWidth: 750px; /* adjusted to fit text exactly */
          --cursorWidth: 3px;
          --fontSize: 64px;
          --lineHeight: 95px; /* enough for full text visibility */
          --textX: 40px;
          --textY: 90px; /* baseline adjusted */
          --color: #ffffff;
          --letterSpacing: 0.5px; /* ~0.5% of font-size */
        }

        text {
          font-family: "Inter", "Inter Semi Bold", Arial, sans-serif;
          font-weight: 600;
          font-size: var(--fontSize);
          letter-spacing: var(--letterSpacing);
          fill: var(--color);
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
      `}</style>

      {/* Mask for typing effect */}
      <mask id="revealMask">
        <rect x="0" y="0" width="100%" height="100%" fill="black" />
        <rect id="revealRect" x="40" y="30" width="0" rx="2" ry="2" fill="white" />
      </mask>

      {/* Text */}
      <g mask="url(#revealMask)">
        <text x="40" y="110">uiux &amp; graphic designer</text>
      </g>

      {/* Typing cursor */}
      <rect id="cursor" x="40" y="30" rx="1" ry="1" />
    </svg>
  );
};

export default TypingText;
