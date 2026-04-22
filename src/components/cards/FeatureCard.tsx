import styles from './styles.module.css';

import {IconBadge} from '@site/src/components/ui/IconBadge';
import type {CourseFeature} from '@site/src/data/curriculum/types';

interface FeatureCardProps {
  feature: CourseFeature;
}

export function FeatureCard({feature}: FeatureCardProps) {
  return (
    <article className={styles.featureCard}>
      <IconBadge icon={feature.icon} tone={feature.tone} />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{feature.title}</h3>
        <div className={styles.cardDescription}>{feature.description}</div>
      </div>
    </article>
  );
}
