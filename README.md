# AI Systems Engineering Course Website

This repository now contains a production-oriented Docusaurus + React course site for:

- `AI Systems Engineering`
- `Design of LLM & Multimodal AI Applications`

The implementation was built from the repository's source-of-truth inputs:

- `landing-page-reference.png` for the primary visual direction
- `COURSE_CURRICULUM.md` for the course/module content structure
- `IMPLEMENTATION_PROMPT.md` for architecture, maintainability, and scalability requirements

## Quick start

```bash
npm install
npm start
```

For a production build:

```bash
npm run build
```

## Project structure

```text
docs/
  curriculum/
  modules/
  labs/
  projects/
  resources/
src/
  components/
    cards/
    curriculum/
    icons/
    landing/
    layout/
    ui/
  data/
    curriculum/
    site/
  css/
  theme/
static/
  img/
```

Key ideas:

- `src/data/curriculum/modules.ts` is the shared course-data layer for module cards and module docs.
- `src/data/site/courseSite.ts` holds homepage, footer, and site-level content.
- `src/components/landing/` contains the custom homepage sections.
- `src/components/ui/` contains reusable primitives like buttons, badges, section wrappers, icon badges, and page headers.
- `src/components/curriculum/` contains MDX-friendly building blocks for docs pages.
- `src/theme/Footer/` and `src/theme/MDXComponents.tsx` integrate the custom design system into Docusaurus.

## How homepage content is sourced

Homepage content is intentionally not hardcoded inside the page component.

- Hero copy comes from `src/data/site/courseSite.ts`
- The four "What You'll Learn" cards come from `courseSite.features`
- The module grid comes from `courseSite.featuredModuleSlugs`, which maps into the shared module collection in `src/data/curriculum/modules.ts`

That means you can change module titles, summaries, tags, and links in one place without rewriting JSX markup.

## How to add new modules or content

To add a new module:

1. Add the structured module metadata in `src/data/curriculum/modules.ts`
2. Create the matching folder and `index.mdx` file in `docs/modules/<module-slug>/`
3. Add lectures or module-specific content inside that same folder as needed
4. If the module should appear on the homepage, add its slug to `courseSite.featuredModuleSlugs`

To add new labs, projects, or resources:

1. Add a new MDX file under `docs/labs/`, `docs/projects/`, or `docs/resources/`
2. Link to it from overview pages or module pages with `ResourceLinks`
3. Reuse `PageHeader`, `CourseCallout`, `LearningObjectives`, and `ResourceLinks` to keep the experience consistent

## Theme customization

The design system is token-driven.

- Core tokens live in `src/css/tokens.css`
- Global Docusaurus shell styling lives in `src/css/global.css`
- Utility helpers live in `src/css/utilities.css`

Update tokens when changing:

- brand colors
- radius scale
- shadows
- spacing scale
- typography families and sizes

Avoid scattering visual tweaks across many components. Most surface-level changes should be made through tokens first.

## Notes for maintainers

- The site defaults to a light, premium academic-tech aesthetic matching the supplied reference image.
- The homepage intentionally highlights a curated subset of modules for visual fidelity while the curriculum docs expose the full 15-module roadmap.
- Footer newsletter behavior is a lightweight `mailto:` flow so the site stays dependency-light until a real signup backend is introduced.
