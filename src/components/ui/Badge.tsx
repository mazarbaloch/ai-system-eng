import clsx from 'clsx';
import type {ReactNode} from 'react';

import styles from './styles.module.css';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({children, className}: BadgeProps) {
  return <span className={clsx(styles.badge, className)}>{children}</span>;
}
