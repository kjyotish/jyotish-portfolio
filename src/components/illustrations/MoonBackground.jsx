import * as React from "react";
const SVGComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-80 -200 1440 1080"
    preserveAspectRatio="xMidYMid meet"
    data-app="Xyris"
    className={`block w-full h-auto ${props.className ?? ""}`}
    {...props}
  >
    <defs>
      <linearGradient id="linearGradient-u4GJc27QZC4XVgs6DngB4s">
        <stop offset="0%" stopColor="rgb(197, 235, 255)" />
        <stop offset="100%" stopColor="rgb(255, 255, 255)" />
      </linearGradient>
      <filter id="filter-pjeD4jk2WpTYN1YUnN5R6G">
        <feGaussianBlur stdDeviation="13, 16" />
        <feMorphology radius="4, 2" operator="dilate" />
      </filter>
      <linearGradient
        id="linearGradient-nC4RBuEsy7qCBY8abZy7mP"
        x1={-0.174692}
        y1={1.10015}
      >
        <stop offset="0%" stopColor="rgb(255, 255, 255)" />
        <stop offset="100%" stopColor="rgb(149, 187, 251)" />
      </linearGradient>
      <linearGradient
        id="linearGradient-81F4hRffeCBkvJmiggqH1V"
        x1={-0.174692}
        y1={1.10015}
      >
        <stop offset="0%" stopColor="rgb(255, 255, 255)" />
        <stop offset="100%" stopColor="rgb(149, 187, 251)" />
      </linearGradient>
      <linearGradient
        id="linearGradient-kQPjfyGi3B7aQvy3oQogGP"
        x1={0.0188966}
        y1={0.669953}
        x2={1.40152}
        y2={0.125474}
      >
        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.06)" />
        <stop offset="100%" stopColor="rgb(255, 255, 255)" />
      </linearGradient>
      <linearGradient
        id="linearGradient-u6bYvZrR86rb75RrnNyDeA"
        x1={0.104936}
        y1={0.820522}
        x2={1.00717}
        y2={0.111134}
      >
        <stop offset="0%" stopColor="rgb(11, 11, 11)" />
        <stop offset="100%" stopColor="rgba(255, 255, 255, 0.08)" />
      </linearGradient>
      <filter id="filter-rupG95S6xfk9KNRJagAFt3">
        <feGaussianBlur stdDeviation={12} />
        <feMorphology radius={11} operator="erode" />
      </filter>
    </defs>
    <rect
      fill="rgb(21, 21, 21)"
      stroke="#000000"
      strokeWidth={0}
      x={0.00002}
      y={-0.00001}
      width={1440}
      height={1080}
      transform=""
    />
    <path
      d="M 533.872 525.128 C 533.872 742.33 712.79 918.409 933.495 918.409 C 1154.19 918.409 1333.11 742.33 1333.11 525.128 C 1333.11 307.923 1154.19 131.846 933.495 131.846 C 712.79 131.846 533.872 307.923 533.872 525.128 Z"
      fill="url(#linearGradient-81F4hRffeCBkvJmiggqH1V)"
      stroke="url(#linearGradient-nC4RBuEsy7qCBY8abZy7mP)"
      strokeWidth={11}
      transform-origin="center"
      id="motion-path-kCixyyd7wjrEwwhkWctwCx"
      filter="url(#filter-pjeD4jk2WpTYN1YUnN5R6G)"
      transform="rotate(90)"
      style={{
        transformBox: "fill-box",
        mixBlendMode: "overlay",
      }}
    />
    <ellipse
      fill="url(#linearGradient-kQPjfyGi3B7aQvy3oQogGP)"
      stroke="#000000"
      strokeWidth={0}
      cx={924.958}
      cy={540}
      rx={384.747}
      ry={384.747}
      transform=""
    />
    <ellipse
      fill="url(#linearGradient-u6bYvZrR86rb75RrnNyDeA)"
      stroke="#000000"
      strokeWidth={0}
      cx={924.958}
      cy={540}
      rx={384.747}
      ry={384.747}
      transform=""
    />
    <rect
      fill="rgba(13, 11, 31, 0.47)"
      stroke="#000000"
      strokeWidth={0}
      x={0}
      y={0}
      width={1440}
      height={1080}
    />
    <polygon
      fill="url(#linearGradient-u4GJc27QZC4XVgs6DngB4s)"
      stroke="#000000"
      strokeWidth={0}
      transform-origin="center"
      points="797.2620239257812,371.1173400878906 812.3870849609375,417.66766357421875 861.3330078125,417.66766357421875 821.7349243164062,446.4373779296875 836.860107421875,492.98760986328125 797.2620239257812,464.21795654296875 757.6639404296875,492.98760986328125 772.7890625,446.4373779296875 733.1909790039062,417.66766357421875 782.1369018554688,417.66766357421875"
      transform="matrix(1,0,0,1,-797.261962890625,-432.052490234375)"
      filter="url(#filter-rupG95S6xfk9KNRJagAFt3)"
      style={{
        transformBox: "fill-box",
      }}
    >
      <animateMotion
        begin={-0.00001}
        dur={19.96002}
        fill="freeze"
        repeatCount="indefinite"
      >
        <mpath href="#motion-path-kCixyyd7wjrEwwhkWctwCx" />
      </animateMotion>
      <animateTransform
        attributeName="transform"
        type="rotate"
        begin={-0.00001}
        dur={19.96002}
        keyTimes="0; 1"
        values="0; 360"
        fill="freeze"
        additive="sum"
        calcMode="spline"
        keySplines="0 0 1 1"
        repeatCount="indefinite"
      />
      <animateTransform
        attributeName="transform"
        type="scale"
        begin={-0.00001}
        dur={19.96002}
        keyTimes="0; 0.2878757667923738; 1"
        values="1.4; 2; 1.4"
        fill="freeze"
        additive="sum"
        calcMode="spline"
        keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
        repeatCount="indefinite"
      />
    </polygon>
  </svg>
);
export default SVGComponent;
