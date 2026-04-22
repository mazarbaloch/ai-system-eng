import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI Systems Engineering',
  tagline: 'Design of LLM & Multimodal AI Applications',
  favicon: 'img/logo-mark.svg',
  future: {
    v4: true,
  },
  url: 'https://mazarbaloch.github.io',
  baseUrl: '/ai-system-eng/',
  organizationName: 'mazarbaloch',
  projectName: 'ai-system-eng',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700;800&family=Manrope:wght@600;700;800&display=swap',
      type: 'text/css',
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          sidebarCollapsible: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    mermaid: {
      options: {
        fontFamily: 'Instrument Sans, sans-serif',
        themeVariables: {
          fontSize: '20px',
        },
      },
    },
    navbar: {
      title: 'Applied AI Companion',
      logo: {
        alt: 'Applied AI Companion logo',
        src: 'img/logo-mark.svg',
      },
      items: [
        {
          to: '/docs/curriculum/overview',
          label: 'Curriculum',
          position: 'left',
        },
        {
          to: '/docs/modules/module-01-foundations',
          label: 'Modules',
          position: 'left',
        },
        {to: '/docs/labs', label: 'Labs', position: 'left'},
        {to: '/docs/projects', label: 'Projects', position: 'left'},
        {
          label: 'Resources',
          position: 'left',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'Reading List',
              to: '/docs/resources',
            },
            {
              label: 'Authoring Guide',
              to: '/docs/resources/authoring-guide',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
