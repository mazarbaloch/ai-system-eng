import {Button} from '@site/src/components/ui/Button';
import {Badge} from '@site/src/components/ui/Badge';
import {courseSite} from '@site/src/data/site/courseSite';

import styles from './styles.module.css';

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19c2-4 7-9 11-11 1.2-.6 3-.6 3-.6s0 1.8-.6 3c-2 4-7 9-11 11l-3-1 1-2Z" />
      <path d="M13 11l2 2" />
      <path d="M5 19l-1 1" />
      <path d="M8 16 6 14" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4H19v15h-11A2.5 2.5 0 0 0 5.5 21H5V6.5Z" />
      <path d="M5 6.5A2.5 2.5 0 0 1 7.5 9H19" />
      <path d="M12 4v15" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`contentContainer ${styles.heroShell}`}>
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.orbitLarge} />
          <div className={styles.orbitSmall} />
          <div className={styles.signalField} />
        </div>
        <div className={styles.heroContent}>
          <Badge>{courseSite.eyebrow}</Badge>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>{courseSite.title}</h1>
            <p className={styles.heroSubtitle}>{courseSite.subtitle}</p>
            <p className={styles.heroDescription}>{courseSite.description}</p>
          </div>
          <div className={styles.heroActions}>
            <Button href={courseSite.heroActions[0].href} variant="primary" size="lg" icon={<RocketIcon />}>
              {courseSite.heroActions[0].label}
            </Button>
            <Button href={courseSite.heroActions[1].href} variant="outline" size="lg" icon={<BookIcon />}>
              {courseSite.heroActions[1].label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
