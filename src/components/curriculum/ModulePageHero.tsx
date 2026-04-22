import {getModuleBySlug} from '@site/src/data/curriculum/modules';

import {PageHeader} from '../ui/PageHeader';
import styles from './styles.module.css';

interface ModulePageHeroProps {
  slug: string;
}

export function ModulePageHero({slug}: ModulePageHeroProps) {
  const module = getModuleBySlug(slug);

  return (
    <section className={styles.moduleHero}>
      <PageHeader
        eyebrow={`Module ${module.number.toString().padStart(2, '0')}`}
        title={module.title}
        description={module.description}
        actions={[
          {label: 'Curriculum Overview', href: '/docs/curriculum/overview', variant: 'outline'},
          {label: 'Course Home', href: '/', variant: 'ghost'},
        ]}
      />
      <div className={styles.metaRow}>
        {module.tags.map((tag) => (
          <span key={`${module.slug}-${tag}`} className={styles.metaChip}>
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
