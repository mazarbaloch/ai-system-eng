import clsx from 'clsx';
import Link from '@docusaurus/Link';

import {IconBadge} from '@site/src/components/ui/IconBadge';
import {getLinkProps} from '@site/src/components/ui/linkUtils';
import type {CourseModule} from '@site/src/data/curriculum/types';

import styles from './styles.module.css';

interface ModuleCardProps {
  module: CourseModule;
  variant?: 'default' | 'compact';
  showTags?: boolean;
}

export function ModuleCard({module, variant = 'default', showTags = true}: ModuleCardProps) {
  return (
    <Link className={clsx(styles.moduleCard, variant === 'compact' && styles.compactModuleCard)} {...getLinkProps(module.docPath)}>
      <div className={styles.moduleHeader}>
        <IconBadge icon={module.icon} tone={module.tone} size={variant === 'compact' ? 'sm' : 'md'} />
        <span className={styles.moduleNumber}>{module.number.toString().padStart(2, '0')}</span>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{module.shortTitle}</h3>
        <div className={styles.cardDescription}>{module.summary}</div>
      </div>
      {showTags ? (
        <div className={styles.tagRow}>
          {module.tags.map((tag) => (
            <span key={`${module.slug}-${tag}`} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </Link>
  );
}
