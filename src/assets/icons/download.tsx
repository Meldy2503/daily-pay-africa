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
    <g id="download">
      <path
        id="Vector"
        d="M15.75 11.3125V14.3125C15.75 14.7103 15.592 15.0919 15.3107 15.3732C15.0294 15.6545 14.6478 15.8125 14.25 15.8125H3.75C3.35218 15.8125 2.97064 15.6545 2.68934 15.3732C2.40804 15.0919 2.25 14.7103 2.25 14.3125V11.3125"
        stroke="#414141"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_2"
        d="M5.25 7.5625L9 11.3125L12.75 7.5625"
        stroke="#414141"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_3"
        d="M9 11.3125V2.3125"
        stroke="#414141"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SVGComponent;
