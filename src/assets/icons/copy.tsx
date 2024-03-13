import { SVGProps } from 'react';
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={19}
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="copy" clipPath="url(#clip0_26018_16900)">
      <path
        id="Vector"
        d="M15 6.8125H8.25C7.42157 6.8125 6.75 7.48407 6.75 8.3125V15.0625C6.75 15.8909 7.42157 16.5625 8.25 16.5625H15C15.8284 16.5625 16.5 15.8909 16.5 15.0625V8.3125C16.5 7.48407 15.8284 6.8125 15 6.8125Z"
        stroke="#414141"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_2"
        d="M3.75 11.3125H3C2.60218 11.3125 2.22064 11.1545 1.93934 10.8732C1.65804 10.5919 1.5 10.2103 1.5 9.8125V3.0625C1.5 2.66468 1.65804 2.28314 1.93934 2.00184C2.22064 1.72054 2.60218 1.5625 3 1.5625H9.75C10.1478 1.5625 10.5294 1.72054 10.8107 2.00184C11.092 2.28314 11.25 2.66468 11.25 3.0625V3.8125"
        stroke="#414141"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_26018_16900">
        <rect
          width={18}
          height={18}
          fill="white"
          transform="translate(0 0.0625)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
