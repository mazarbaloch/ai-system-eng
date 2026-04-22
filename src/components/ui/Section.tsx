import clsx from 'clsx';
import type {ReactNode} from 'react';

import styles from './styles.module.css';

interface SectionProps {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({id, title, description, children, className}: SectionProps) {
  return (
    <section id={id} className={clsx(styles.section, className)}>
      <div className="contentContainer">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {description ? <p className={styles.sectionDescription}>{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
