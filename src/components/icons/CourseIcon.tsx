import type {ReactNode, SVGProps} from 'react';

import type {CourseIconName} from '@site/src/data/curriculum/types';

function IconFrame({children, ...props}: SVGProps<SVGSVGElement> & {children: ReactNode}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {children}
    </svg>
  );
}

export function BrandMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" {...props}>
      <path
        d="M18 3.5 29.5 10v16L18 32.5 6.5 26V10L18 3.5Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CourseIcon({name, ...props}: SVGProps<SVGSVGElement> & {name: CourseIconName}) {
  switch (name) {
    case 'foundations':
      return (
        <IconFrame {...props}>
          <path d="M4 19h16" />
          <path d="M6 19V9l6-3 6 3v10" />
          <path d="M9 19v-6" />
          <path d="M15 19v-6" />
        </IconFrame>
      );
    case 'prompting':
      return (
        <IconFrame {...props}>
          <path d="M7 7h10a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H12l-4 3v-3H7a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3Z" />
          <path d="M10 11h.01" />
          <path d="M14 11h.01" />
          <path d="M18 11h.01" />
        </IconFrame>
      );
    case 'structured':
      return (
        <IconFrame {...props}>
          <path d="M9 5C7 7 7 17 9 19" />
          <path d="M15 5c2 2 2 12 0 14" />
          <path d="M11 12h2" />
        </IconFrame>
      );
    case 'retrieval':
      return (
        <IconFrame {...props}>
          <circle cx="10" cy="10" r="5" />
          <path d="m14.5 14.5 5 5" />
        </IconFrame>
      );
    case 'rag':
      return (
        <IconFrame {...props}>
          <ellipse cx="12" cy="7" rx="5.5" ry="2.5" />
          <path d="M6.5 7v5c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5V7" />
          <path d="M6.5 12v5c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-5" />
        </IconFrame>
      );
    case 'memory':
      return (
        <IconFrame {...props}>
          <rect x="5" y="6" width="14" height="12" rx="2" />
          <path d="M9 6V4" />
          <path d="M15 6V4" />
          <path d="M9 12h6" />
          <path d="M9 16h4" />
        </IconFrame>
      );
    case 'agents':
      return (
        <IconFrame {...props}>
          <rect x="7" y="8" width="10" height="8" rx="2" />
          <path d="M12 4v2" />
          <path d="M7 12H5" />
          <path d="M19 12h-2" />
          <circle cx="10" cy="12" r="0.6" fill="currentColor" />
          <circle cx="14" cy="12" r="0.6" fill="currentColor" />
          <path d="M10 16v2" />
          <path d="M14 16v2" />
        </IconFrame>
      );
    case 'protocols':
      return (
        <IconFrame {...props}>
          <path d="m8 7-4 5 4 5" />
          <path d="m16 7 4 5-4 5" />
          <path d="M10 19h6" />
        </IconFrame>
      );
    case 'patterns':
      return (
        <IconFrame {...props}>
          <path d="M5 8h5v5H5z" />
          <path d="M14 5h5v5h-5z" />
          <path d="M14 14h5v5h-5z" />
          <path d="M10 10h4" />
          <path d="M12 10v4" />
        </IconFrame>
      );
    case 'evaluation':
      return (
        <IconFrame {...props}>
          <path d="M7 18V9" />
          <path d="M12 18V6" />
          <path d="M17 18v-4" />
          <path d="M5 18h14" />
        </IconFrame>
      );
    case 'safety':
      return (
        <IconFrame {...props}>
          <path d="M12 4 18 6v5c0 4-2.4 6.6-6 8-3.6-1.4-6-4-6-8V6l6-2Z" />
          <path d="m9.5 11.5 1.7 1.8 3.3-3.6" />
        </IconFrame>
      );
    case 'optimization':
      return (
        <IconFrame {...props}>
          <path d="M12 5v14" />
          <path d="M7 8h6a3 3 0 1 0 0-6H9" />
          <path d="M17 16h-6a3 3 0 1 0 0 6h4" />
        </IconFrame>
      );
    case 'orchestration':
      return (
        <IconFrame {...props}>
          <circle cx="12" cy="6" r="2" />
          <circle cx="6" cy="17" r="2" />
          <circle cx="18" cy="17" r="2" />
          <path d="M12 8v4" />
          <path d="M10.5 12 7.5 15" />
          <path d="M13.5 12 16.5 15" />
        </IconFrame>
      );
    case 'production':
      return (
        <IconFrame {...props}>
          <path d="M6 18V8l6-3 6 3v10" />
          <path d="M9 18V11h6v7" />
        </IconFrame>
      );
    case 'capstone':
      return (
        <IconFrame {...props}>
          <path d="M4 8h16" />
          <path d="M8 8V6h8v2" />
          <path d="M7 8v8c0 2.2 2.2 4 5 4s5-1.8 5-4V8" />
          <path d="M20 9v2c0 1.7-1.3 3-3 3h-1" />
        </IconFrame>
      );
    default:
      return null;
  }
}
