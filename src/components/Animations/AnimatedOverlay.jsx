const AnimatedOverlay = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 400"
    preserveAspectRatio="xMidYMid slice"
    className="w-full h-full"
    data-app="Xyris"
  >
    <g
      transformOrigin="center"
      style={{ transformBox: "fill-box" }}
      id="id_geeecvd5sRTvaSAYzPABCc"
    >
      <rect
        fill="rgb(255, 255, 255)"
        stroke="#000000"
        strokeWidth="0"
        transformOrigin="center"
        x="811.603"
        y="-384.161"
        width="126.57"
        height="701.251"
        transform="rotate(-32)"
        fillOpacity="0.93"
        style={{ transformBox: "fill-box" }}
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          begin="-0.00001s"
          dur="1.98002s"
          keyTimes="0;1"
          values="0,100;-1073,-212"
          fill="freeze"
          additive="sum"
          calcMode="spline"
          keySplines="0.645 0.045 0.355 1"
        />
        <animate
          attributeName="width"
          keyTimes="0;1"
          values="126;68"
          begin="0.54799s"
          dur="1.43202s"
          fill="freeze"
          calcMode="spline"
          keySplines="0 0 1 1"
        />
      </rect>

      <rect
        fill="rgb(255, 255, 255)"
        stroke="#000000"
        strokeWidth="0"
        transformOrigin="center"
        x="852.934"
        y="-341.496"
        width="93"
        height="732.274"
        transform="rotate(-32)"
        fillOpacity="0.61"
        style={{ transformBox: "fill-box" }}
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          begin="0.308s"
          dur="1.67202s"
          keyTimes="0;1"
          values="31,0;-980,-194"
          fill="freeze"
          additive="sum"
          calcMode="spline"
          keySplines="0.42 0 0.58 1"
        />
        <animate
          attributeName="width"
          keyTimes="0;0.488;1"
          values="0;118.254;36"
          begin="0.308s"
          dur="1.67202s"
          fill="freeze"
          calcMode="spline"
          keySplines="0 0 1 1;0 0 1 1"
        />
      </rect>
    </g>
  </svg>
);

export default AnimatedOverlay;
