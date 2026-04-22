import MDXComponents from '@theme-original/MDXComponents';

import {CourseCallout} from '@site/src/components/curriculum/CourseCallout';
import {CurriculumOverview} from '@site/src/components/curriculum/CurriculumOverview';
import {LearningObjectives} from '@site/src/components/curriculum/LearningObjectives';
import {ModulePageHero} from '@site/src/components/curriculum/ModulePageHero';
import {ModuleTopics} from '@site/src/components/curriculum/ModuleTopics';
import {ResourceLinks} from '@site/src/components/curriculum/ResourceLinks';
import {PageHeader} from '@site/src/components/ui/PageHeader';

const components = {
  ...MDXComponents,
  CourseCallout,
  CurriculumOverview,
  LearningObjectives,
  ModulePageHero,
  ModuleTopics,
  PageHeader,
  ResourceLinks,
};

export default components;
