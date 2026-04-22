import clsx from 'clsx';
import Link from '@docusaurus/Link';
import type {ReactNode} from 'react';

import {getLinkProps} from './linkUtils';
import styles from './styles.module.css';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'md' | 'lg';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: ReactNode;
}

export function Button({href, children, variant = 'primary', size = 'md', className, icon}: ButtonProps) {
  return (
    <Link className={clsx(styles.button, styles[variant], styles[size], className)} {...getLinkProps(href)}>
      {icon ? <span className={styles.buttonIcon}>{icon}</span> : null}
      <span>{children}</span>
    </Link>
  );
}
