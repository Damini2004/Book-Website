import type { SVGProps } from 'react';

export function MphLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <g fill="currentColor">
        <path d="M10 10h15v80H10z" />
        <path d="M35 10h15v80H35z" />
        <path d="M60 10h15v80H60z" />
        <path d="M25 45h35v10H25z" />
        <path d="M85 10 a20 20 0 0 1 0 80 a20 20 0 0 1 0 -80" fill="none" stroke="currentColor" strokeWidth="10" />
      </g>
    </svg>
  );
}
