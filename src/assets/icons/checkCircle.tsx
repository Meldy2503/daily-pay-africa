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
    <g id="check-circle" clipPath="url(#clip0_25737_16019)">
      <path
        id="Vector"
        d="M16.5 8.37289V9.06289C16.4991 10.6802 15.9754 12.2539 15.007 13.5493C14.0386 14.8446 12.6775 15.7922 11.1265 16.2508C9.57557 16.7094 7.91794 16.6543 6.40085 16.0938C4.88376 15.5333 3.58849 14.4975 2.70822 13.1407C1.82795 11.7839 1.40984 10.1789 1.51626 8.56512C1.62267 6.95131 2.24791 5.41513 3.29871 4.18569C4.34951 2.95625 5.76959 2.09942 7.34714 1.743C8.92469 1.38657 10.5752 1.54964 12.0525 2.20789"
        stroke="#414141"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_2"
        d="M16.5 3.0625L9 10.57L6.75 8.32"
        stroke="#414141"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_25737_16019">
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
