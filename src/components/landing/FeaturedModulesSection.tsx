import {ModuleCard} from '@site/src/components/cards/ModuleCard';
import {Section} from '@site/src/components/ui/Section';
import {featuredModules} from '@site/src/data/site/courseSite';

import styles from './styles.module.css';

export function FeaturedModulesSection() {
  return (
    <Section title="Course Modules">
      <div className={styles.moduleShowcaseGrid}>
        {featuredModules.map((module) => (
          <ModuleCard key={module.slug} module={module} variant="compact" showTags={false} />
        ))}
      </div>
    </Section>
  );
}
