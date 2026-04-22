import Link from '@docusaurus/Link';

import {getLinkProps} from '@site/src/components/ui/linkUtils';

import styles from './styles.module.css';

interface ResourceLinkItem {
  label: string;
  href: string;
}

interface ResourceLinksProps {
  title?: string;
  items: ResourceLinkItem[];
}

export function ResourceLinks({title = 'Resource links', items}: ResourceLinksProps) {
  return (
    <section className={styles.blockSection}>
      <h2 className={styles.blockTitle}>{title}</h2>
      <div className={styles.linkGrid}>
        {items.map((item) => (
          <Link key={`${item.label}-${item.href}`} className={styles.linkCard} {...getLinkProps(item.href)}>
            <span>{item.label}</span>
            <span aria-hidden="true">-&gt;</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
