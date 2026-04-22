import clsx from 'clsx';
import type {ReactNode} from 'react';

import styles from './styles.module.css';

interface CourseCalloutProps {
  title: string;
  children: ReactNode;
  variant?: 'note' | 'tip' | 'success';
}

export function CourseCallout({title, children, variant = 'note'}: CourseCalloutProps) {
  return (
    <section className={clsx(styles.callout, styles[variant])}>
      <h2 className={styles.calloutTitle}>{title}</h2>
      <div className={styles.calloutBody}>{children}</div>
    </section>
  );
}
