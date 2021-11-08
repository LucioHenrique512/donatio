import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const SmileEmoji = (props: any) => {
  return (
    <Svg
      width={72}
      height={72}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M36 59c12.703 0 23-10.297 23-23S48.703 13 36 13c-12.702 0-23 10.297-23 23s10.298 23 23 23z"
        fill="#ECCC68"
      />
      <Path
        d="M36 59c12.703 0 23-10.297 23-23S48.703 13 36 13 13 23.297 13 36s10.297 23 23 23z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M45.815 44.93A19.91 19.91 0 0136 47.5c-3.567 0-6.915-.934-9.815-2.57"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30 31a3.001 3.001 0 01-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3zM48 31a3.001 3.001 0 01-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3z"
        fill="#000"
      />
    </Svg>
  );
};
