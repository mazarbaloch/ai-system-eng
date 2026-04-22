import clsx from 'clsx';

import {CourseIcon} from '@site/src/components/icons/CourseIcon';
import type {CourseIconName, SurfaceTone} from '@site/src/data/curriculum/types';

import styles from './styles.module.css';

interface IconBadgeProps {
  icon: CourseIconName;
  tone: SurfaceTone;
  size?: 'sm' | 'md';
  className?: string;
}

export function IconBadge({icon, tone, size = 'md', className}: IconBadgeProps) {
  return (
    <span className={clsx(styles.iconBadge, styles[tone], styles[size], className)} aria-hidden="true">
      <CourseIcon name={icon} className={clsx(styles.iconGlyph, size === 'sm' && styles.iconGlyphSm)} />
    </span>
  );
}
