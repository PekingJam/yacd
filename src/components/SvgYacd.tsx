import cx from 'clsx';
import * as React from 'react';

import s from './SvgYacd.module.scss';

type Props = {
  width?: number;
  height?: number;
  animate?: boolean;
  c0?: string;
  c1?: string;
  stroke?: string;
  eye?: string;
  mouth?: string;
};

function SvgYacd({
  width = 320,
  height = 320,
  animate = false,
  c0 = 'currentColor',
  stroke = '#eee',
  eye = '#eee',
  // mouth = '#eee',
}: Props) {
  const faceClassName = cx({ [s.path]: animate });
  return (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        {/* face */}
        <circle
          cx="24"
          cy="24"
          r="20"
          fill={c0}
          stroke={stroke}
          strokeWidth="3"
          className={faceClassName}
        />
        {/* eyes */}
        <path
          d="M23 14L18 24H30L25 34"
          stroke={eye}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default SvgYacd;
