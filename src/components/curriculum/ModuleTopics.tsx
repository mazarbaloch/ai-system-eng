import {getModuleBySlug} from '@site/src/data/curriculum/modules';

import {LearningObjectives} from './LearningObjectives';

interface ModuleTopicsProps {
  slug: string;
  title?: string;
}

export function ModuleTopics({slug, title = 'Topics in this module'}: ModuleTopicsProps) {
  const module = getModuleBySlug(slug);

  return <LearningObjectives title={title} items={module.topics} />;
}
