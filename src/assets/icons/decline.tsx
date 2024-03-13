import { SVGProps } from 'react';
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="97"
    height="96"
    viewBox="0 0 97 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="48.5" cy="48" r="48" fill="#FFF4F3" />
    <g clip-path="url(#clip0_28581_42742)">
      <path
        d="M48.5 30C38.6 30 30.5 38.1 30.5 48C30.5 57.9 38.6 66 48.5 66C58.4 66 66.5 57.9 66.5 48C66.5 38.1 58.4 30 48.5 30ZM48.5 34C51.6 34 54.5 35.1 56.9 36.8L37.3 56.4C35.6 54 34.5 51.1 34.5 48C34.5 40.3 40.8 34 48.5 34ZM48.5 62C45.4 62 42.5 60.9 40.1 59.2L59.7 39.6C61.4 42 62.5 44.9 62.5 48C62.5 55.7 56.2 62 48.5 62Z"
        fill="#EE5070"
      />
    </g>
    <defs>
      <clipPath id="clip0_28581_42742">
        <rect
          width="48"
          height="48"
          fill="white"
          transform="translate(24.5 24)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
