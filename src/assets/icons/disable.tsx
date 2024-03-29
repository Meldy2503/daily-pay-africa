import { SVGProps } from 'react';
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="slash" clipPath="url(#clip0_23901_23001)">
      <path
        id="Vector"
        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
        stroke="#f23120"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_2"
        d="M3.69727 3.69727L14.3023 14.3023"
        stroke="#f23120"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_23901_23001">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
