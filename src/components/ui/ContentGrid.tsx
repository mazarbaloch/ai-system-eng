import clsx from 'clsx';
import type {CSSProperties, ReactNode} from 'react';

import styles from './styles.module.css';

interface ContentGridProps {
  children: ReactNode;
  columns?: number;
  className?: string;
}

export function ContentGrid({children, columns = 4, className}: ContentGridProps) {
  return (
    <div className={clsx(styles.contentGrid, className)} style={{'--grid-columns': columns} as CSSProperties}>
      {children}
    </div>
  );
}
