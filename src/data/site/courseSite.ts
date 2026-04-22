import {courseModules, getModuleBySlug} from '../curriculum/modules';
import type {CourseSite} from '../curriculum/types';

export const courseSite: CourseSite = {
  brand: 'Applied AI Companion',
  eyebrow: "Master's Course",
  title: 'AI Systems Engineering',
  subtitle: 'Design of LLM & Multimodal AI Applications',
  description:
    'Build modern AI systems centered on large language models and learn how the same design principles extend to multimodal applications. Explore prompting, retrieval, agents, orchestration, evaluation, and production-ready workflows.',
  heroActions: [
    {
      label: 'Start Learning',
      href: '/docs/intro',
      variant: 'primary',
    },
    {
      label: 'View Curriculum',
      href: '/docs/curriculum/overview',
      variant: 'outline',
    },
  ],
  learningOutcomes: [
    'Design LLM-powered systems',
    'Build RAG and agent systems',
    'Engineer prompts and context',
    'Optimize cost, latency, and performance',
    'Deploy scalable AI applications',
  ],
  features: [
    {
      title: 'Prompting & Context',
      description:
        'Design effective prompts, manage context windows, and control model behavior with advanced techniques.',
      icon: 'prompting',
      tone: 'brand',
    },
    {
      title: 'RAG & Retrieval',
      description:
        'Build retrieval pipelines, index data, and integrate knowledge to ground LLMs in your own context.',
      icon: 'rag',
      tone: 'green',
    },
    {
      title: 'Agents & Tools',
      description:
        'Create autonomous agents that use tools, plan tasks, and interact with the real world.',
      icon: 'agents',
      tone: 'violet',
    },
    {
      title: 'Production & Evaluation',
      description:
        'Deploy reliable systems with evaluations, monitoring, guardrails, and continuous improvement.',
      icon: 'safety',
      tone: 'rose',
    },
  ],
  featuredModuleSlugs: [
    'module-01-foundations',
    'module-03-structured-outputs-tool-integration',
    'module-05-retrieval-augmented-generation',
    'module-07-ai-agents-iterative-reasoning',
    'module-08-protocols-cli-mcp',
    'module-13-orchestration-frameworks',
    'module-11-safety-security',
    'module-15-capstone-project',
  ],
  footerGroups: [
    {
      title: 'Explore',
      links: [
        {label: 'Curriculum', href: '/docs/curriculum/overview'},
        {label: 'Modules', href: '/docs/modules/module-01-foundations'},
        {label: 'Labs', href: '/docs/labs'},
        {label: 'Projects', href: '/docs/projects'},
      ],
    },
    {
      title: 'Resources',
      links: [
        {label: 'Documentation', href: '/docs/intro'},
        {label: 'Reading List', href: '/docs/resources'},
        {label: 'Cheatsheets', href: '/docs/resources/prompting-checklist'},
        {label: 'Community', href: 'mailto:hello@appliedaicompanion.dev?subject=Community%20Inquiry'},
      ],
    },
    {
      title: 'About',
      links: [
        {label: 'About the Course', href: '/docs/intro'},
        {label: 'Assessment', href: '/docs/curriculum/assessment'},
        {label: 'Contact', href: 'mailto:hello@appliedaicompanion.dev'},
      ],
    },
  ],
  footerMetaLinks: [
    {label: 'Privacy Policy', href: '/docs/resources/authoring-guide'},
    {label: 'Terms of Service', href: '/docs/resources/authoring-guide'},
    {label: 'GitHub', href: 'https://github.com/mazarbaloch/ai-system-eng', external: true},
  ],
  newsletter: {
    title: 'Stay in the loop',
    description: 'Get updates on new content, course materials, and release announcements.',
    email: 'hello@appliedaicompanion.dev',
  },
};

export const featuredModules = courseSite.featuredModuleSlugs.map((slug) => getModuleBySlug(slug));

export const curriculumStats = {
  moduleCount: courseModules.length,
  learningOutcomeCount: courseSite.learningOutcomes.length,
  featuredCount: featuredModules.length,
};
