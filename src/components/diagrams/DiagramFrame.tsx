import clsx from 'clsx';
import type {CSSProperties, ReactNode} from 'react';

import styles from './diagrams.module.css';

interface DiagramFrameProps {
  title: string;
  caption?: string;
  children: ReactNode;
  className?: string;
  minWidth?: number;
}

export default function DiagramFrame({title, caption, children, className, minWidth = 980}: DiagramFrameProps) {
  const frameStyle = {'--diagram-min-width': `${minWidth}px`} as CSSProperties;

  return (
    <figure className={clsx(styles.frame, className)} style={frameStyle}>
      <figcaption className={styles.header}>
        <span className={styles.title}>{title}</span>
      </figcaption>
      <div className={styles.scroller}>{children}</div>
      {caption ? <p className={styles.caption}>{caption}</p> : null}
    </figure>
  );
}
