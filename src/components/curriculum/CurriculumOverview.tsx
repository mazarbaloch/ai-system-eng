import {ModuleCard} from '@site/src/components/cards/ModuleCard';
import {ContentGrid} from '@site/src/components/ui/ContentGrid';
import {courseModules} from '@site/src/data/curriculum/modules';

import styles from './styles.module.css';

export function CurriculumOverview() {
  return (
    <section className={styles.blockSection}>
      <div className={styles.kicker}>Course modules</div>
      <h2 className={styles.blockTitle}>A systems-first roadmap from prompting to production</h2>
      <div className={styles.overviewDescription}>
        The full course is organized as a progressive build-up: students begin with system framing, move into prompting and retrieval, then finish with orchestration, robustness, and an end-to-end capstone.
      </div>
      <ContentGrid columns={3}>
        {courseModules.map((module) => (
          <ModuleCard key={module.slug} module={module} />
        ))}
      </ContentGrid>
    </section>
  );
}
