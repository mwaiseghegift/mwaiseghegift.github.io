# AGENTS.md

This is the source of truth for AI coding agents working on this repository. If another agent-specific file exists, it should point here instead of duplicating instructions.

## Project Snapshot

- Project: Gift Mwaiseghe portfolio site.
- Framework: Next.js App Router with React and TypeScript.
- Styling: Tailwind CSS v4 through `src/app/globals.css`.
- UI libraries: `lucide-react` for icons, `framer-motion` for motion, `clsx` and `tailwind-merge` for class composition.
- Output mode: static export via `output: 'export'` in `next.config.ts`.
- Images: Cloudinary remote images are allowed, and Next image optimization is disabled for static export with `images.unoptimized: true`.
- Data source: portfolio content lives mostly in `src/data/portfolio.ts`.
- Main route: `src/app/page.tsx`, split into `LeftPanel` and `RightPanel` sections.

## Commands

Use npm because this repo has `package-lock.json`.

```bash
npm run dev
npm run lint
npm run build
```

Run `npm run lint` before handing off code changes. Run `npm run build` when touching routing, metadata, static export behavior, imports, or any shared component.

## Architecture Rules

- Prefer Server Components by default. Add `'use client'` only when a component needs state, effects, event handlers, browser APIs, or animation hooks.
- Keep client boundaries small. Do not mark layouts, full pages, or large static sections as client components unless there is a direct need.
- Put portfolio facts, lists, links, tags, and profile copy in `src/data/portfolio.ts` unless the data is tightly local to one component.
- Keep route files under `src/app`. Use Next metadata APIs in route/layout files instead of hand-writing `<head>` tags.
- Preserve static export compatibility. Avoid server-only runtime features that require a long-lived Node server unless the deployment plan changes.
- Use `next/link` for internal navigation. Use normal anchors for external links, with `target="_blank"` and `rel="noreferrer"` when opening new tabs.
- Use `next/font` for fonts and keep font variables wired through Tailwind theme tokens.
- Do not commit generated output from `.next/`, `out/`, or local build artifacts.

## UI Guardrails

The portfolio should feel authored, specific, calm, and professional. Do not generate interfaces that look like generic AI-produced SaaS templates.

Every visual decision must have a clear purpose:

- hierarchy over decoration
- clarity over novelty
- restraint over visual noise
- usability over trend imitation
- intentional design systems over random styling

Before adding any visual element, ask: "Does this improve user understanding, navigation, or interaction?" If the answer is no, remove it.

### Existing Visual Language

- Start from the existing visual language: dark slate background, muted body text, bright teal accents, compact typography, sticky left navigation, and section-based content on the right.
- Make portfolio work inspectable. Project cards should show real project names, credible descriptions, concrete tech tags, and useful links or honest unavailable states.
- Dense professional content is better here than airy marketing filler.
- Use real images/screenshots for project visuals where possible. If an image is missing, prefer a simple, branded placeholder over stock-like abstract art.

### Color

Avoid:

- neon color palettes
- excessive high-saturation colors
- rainbow accents
- multiple competing accent colors
- purple-blue gradients as default styling
- cyan-on-blue or similar color blending

Never use color just to make the interface feel "modern."

Use a controlled color hierarchy:

- 70% neutral foundation: whites, warm grays, cool grays, subtle backgrounds
- 20% supporting colors: secondary surfaces, navigation states, subtle highlights
- 10% accent colors: primary actions, important states, key information

Use at most one primary accent color and one secondary accent color when necessary. Every color must communicate meaning.

### Dark Mode And Background Effects

Avoid:

- glowing aurora backgrounds
- radial gradients behind every hero section
- neon glow effects
- glowing text
- excessive blur effects
- the "AI startup aesthetic"

Dark mode should prioritize readability, subtle contrast, clean surfaces, and clear hierarchy. Background decoration should exist only when it supports branding, storytelling, or spatial separation. Never add decorative gradients without a functional reason.

### Typography

Avoid:

- oversized dramatic AI-generated headlines
- excessive serif typography
- trendy fonts used without purpose
- mixing many font styles
- automatic use of decorative display fonts or luxury-style typography

Use clean professional sans-serif fonts, a consistent type scale, and strong hierarchy:

- primary headline: clear, confident, readable
- section headings: structured and consistent
- body text: comfortable reading size and high contrast
- metadata: visually quiet

Typography should guide attention, not become decoration.

### Icons And Visual Assets

Avoid:

- emojis as UI icons
- emojis inside navigation, cards, or feature illustrations
- generic icons inside colored rounded squares
- meaningless icon decoration

Use lucide icons where icons are helpful. Icons should communicate meaning, support interaction, and remain visually simple. If removing an icon does not reduce understanding, remove it.

### Cards

Avoid "card everything" layouts:

- every statistic inside a separate card
- every paragraph inside a card
- cards inside cards
- buttons inside cards inside panels

Use cards only when they provide grouping, comparison, separation, or interaction. Prefer open layouts, whitespace, sections, and visual grouping through spacing.

### Borders, Shadows, And Glass Effects

Avoid:

- glassmorphism everywhere
- frosted transparent panels
- glowing borders
- unnecessary shadows
- colored left borders on every section
- floating glass cards

Do not add blur, transparency, gradients, or shadows unless they solve a real design problem. Prefer spacing, contrast, typography, subtle borders, and flat surfaces.

### Tabs, Labels, And Status Indicators

Avoid rainbow side tabs, colored markers on every component, and decorative status dots. A colored dot must represent a real state such as online/offline, active/inactive, warning, or error.

Status information should use text first, an icon if needed, and color only as support. Never rely only on color.

### Layout And Hierarchy

Avoid AI-generated nested hierarchy such as section -> card -> mini card -> badge -> icon box -> label.

Every page must have a clear entry point, primary action, secondary information, and supporting details. Users should understand where they are, what matters most, and what action to take within 3 seconds.

Text must fit on mobile and desktop. Check long names, tags, buttons, and navigation labels for wrapping and overlap.

### Animation

Avoid:

- unnecessary entrance animations
- floating elements
- excessive hover movement
- cards jumping upward
- random scaling effects
- slow page reveals

Animation is allowed only for feedback, transitions, state changes, and navigation clarity. Keep it subtle, fast, predictable, and functional. Respect reduced motion.

### Buttons And Actions

Avoid gradient buttons, glowing buttons, oversized pill buttons everywhere, and multiple competing primary actions.

Buttons should communicate hierarchy:

- primary: strongest contrast and one clear action
- secondary: quieter treatment
- tertiary: text/action links

Do not style every button as equally important.

### Spacing

Avoid cramped AI-generated layouts, but do not fill every empty space. Use generous margins, a consistent spacing scale, and breathing room. Whitespace is a design element.

### Data Visualization

Avoid excessive colors, decorative charts, unnecessary gradients, and 3D effects. Charts should prioritize readability, comparison, and insight. Use color only to highlight meaning.

### Accessibility

Every interactive element needs an accessible name, visible focus state, and a touch-friendly target. Do not rely on color alone to convey state or meaning.

### UI Self-Review Checklist

Before completing UI work, check:

- Color: palette is limited, accents are intentional, and neon overload is avoided.
- Typography: hierarchy is clear and trendy fonts are not used without purpose.
- Components: unnecessary cards and decorative containers are removed.
- Icons: icons are meaningful and emojis are avoided.
- Effects: unnecessary gradients, shadows, glass, blur, and glow are avoided.
- Layout: the most important information is visually dominant and understandable immediately.
- Animation: every animation serves a purpose.

The final interface should feel calm, intentional, professional, product-focused, and timeless. It should not feel flashy, trendy, AI-generated, template-based, or overloaded with effects.

When uncertain, choose the simpler option. A great interface is not the one with the most decoration; it is the one where every element earns its place.

## Content Rules

- Keep the voice professional, direct, and human. Avoid inflated claims, generic hype, and filler phrases.
- Do not invent projects, employers, metrics, certifications, testimonials, or links.
- Prefer precise descriptions of outcomes, responsibilities, technologies, and constraints.
- When editing SEO metadata, keep it consistent with the visible profile and current site URL.
- Do not expose private contact details beyond what is already intentionally published in `src/data/portfolio.ts`.

## Next.js Best Practices For This Repo

- Server Components are the default in App Router and help reduce client JavaScript. Use Client Components only for interactivity, browser APIs, lifecycle hooks, or custom hooks.
- A file marked `'use client'` pulls its direct imports into the client bundle, so place the boundary as close as possible to the interactive UI.
- Use the `metadata` export or `generateMetadata` for SEO and social cards.
- Use Next image patterns intentionally. This repo uses static export with `images.unoptimized`, so image dimensions, alt text, and real asset quality matter even more.
- Keep accessibility and Core Web Vitals in the definition of done. The repo already uses `eslint-config-next/core-web-vitals`.
- For static export, test that routes build to `out/` and do not depend on unsupported runtime behavior.

## Files Agents Should Know

- `src/app/layout.tsx`: global metadata, fonts, root shell.
- `src/app/page.tsx`: home page composition.
- `src/app/globals.css`: Tailwind import, theme tokens, global page styling.
- `src/data/portfolio.ts`: profile, services, recommendations, projects, work history, education, contact info.
- `src/components/LeftPanel.tsx`: sticky identity, in-page nav, social links.
- `src/components/RightPanel.tsx`: section composition.
- `src/components/sections/*`: page content sections.
- `src/components/ui/ProjectDrawer.tsx`: detailed project interaction.
- `next.config.ts`: static export and image settings.
- `.github/workflows/*`: GitHub Pages and VPS deployment flows.

## Quality Bar

Before completing a meaningful change:

1. Read the nearby files and follow existing patterns.
2. Keep edits scoped to the request.
3. Run `npm run lint` unless the change is docs-only.
4. Run `npm run build` for route, metadata, config, deployment, or shared UI changes.
5. Manually review responsive states when making UI changes.
6. Mention any command that could not be run and why.

## Research Notes

These notes were checked against current public docs on 2026-07-07:

- Next.js Server and Client Components: https://nextjs.org/docs/app/getting-started/server-and-client-components
- Next.js Image component: https://nextjs.org/docs/app/api-reference/components/image
- Next.js `generateMetadata`: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- Next.js accessibility guide: https://nextjs.org/docs/app/guides/accessibility
- Next.js production checklist: https://nextjs.org/docs/app/guides/production-checklist
