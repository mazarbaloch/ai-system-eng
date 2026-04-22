import clsx from 'clsx';

import type {CourseLink} from '@site/src/data/curriculum/types';

import {Badge} from './Badge';
import {Button} from './Button';
import styles from './styles.module.css';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: CourseLink[];
  className?: string;
}

export function PageHeader({eyebrow, title, description, actions = [], className}: PageHeaderProps) {
  return (
    <div className={clsx(styles.pageHeader, className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h1 className={styles.pageTitle}>{title}</h1>
      <div className={styles.pageDescription}>{description}</div>
      {actions.length ? (
        <div className={styles.pageActions}>
          {actions.map((action) => (
            <Button key={`${action.label}-${action.href}`} href={action.href} variant={action.variant ?? 'outline'}>
              {action.label}
            </Button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
