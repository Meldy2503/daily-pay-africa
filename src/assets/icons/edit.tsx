import * as React from 'react';
import { SVGProps } from 'react';
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_874_20117)">
      <path
        d="M9.2168 3.06323H3.9668C3.56897 3.06323 3.18744 3.22127 2.90614 3.50257C2.62483 3.78388 2.4668 4.16541 2.4668 4.56323V15.0632C2.4668 15.4611 2.62483 15.8426 2.90614 16.1239C3.18744 16.4052 3.56897 16.5632 3.9668 16.5632H14.4668C14.8646 16.5632 15.2462 16.4052 15.5275 16.1239C15.8088 15.8426 15.9668 15.4611 15.9668 15.0632V9.81323"
        stroke="#414141"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8418 1.93828C15.1402 1.63991 15.5448 1.47229 15.9668 1.47229C16.3888 1.47229 16.7934 1.63991 17.0918 1.93828C17.3902 2.23665 17.5578 2.64132 17.5578 3.06328C17.5578 3.48524 17.3902 3.88991 17.0918 4.18828L9.9668 11.3133L6.9668 12.0633L7.7168 9.06328L14.8418 1.93828Z"
        stroke="#757575"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_874_20117">
        <rect
          width="18"
          height="18"
          fill="white"
          transform="translate(0.966797 0.0632324)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SVGComponent;
