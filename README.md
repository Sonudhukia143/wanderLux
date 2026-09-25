# WanderLux Travel

Thoughtful journeys, shaped around you. A responsive marketing site for a fictional tailor-made travel company.

**Live demo:** https://wander-lux-beta.vercel.app

## Why This Stack

Next.js App Router suits this content-first marketing site: its pages render as static HTML, metadata is built in, and the small interactive areas stay isolated as client components. Next Image handles responsive delivery for destination photography.

- **TypeScript** types package content and component contracts, catching mismatched travel data during development.
- **Tailwind CSS 4** keeps the color, typography, spacing, and responsive treatments close to the markup. The project uses a small set of shared design tokens rather than a large component framework.
- **shadcn/ui approach**: UI follows shadcn's composable, accessible component conventions, with focused local components styled to this brand instead of installing a large prebuilt theme.
- **React Hook Form + Zod** manage the contact form and validate requests with readable, field-level errors.
- **Vitest + React Testing Library** cover key component content and user behavior without snapshot or style tests.
- **Lucide React** supplies consistent interface icons.

## Features

- Full-height destination hero with layered scenic imagery, CTA buttons, and a scroll-indicator to the story section.
- Responsive navigation with a fixed scroll-aware header and mobile menu.
- Story, travel benefits, curated package grid, and contact form sections with a cohesive editorial brand aesthetic.
- Six typed holiday packages rendered with a reusable destination card, each including destination details, pricing, and traveler review metadata.
- Contact form with required fields, inline validation, loading feedback, and confirmation state. Submission is a frontend demo and does not send email.
- Responsive layouts, keyboard focus treatment, semantic page structure, and descriptive image text.
- Page metadata, Open Graph details, and image optimization configuration.

## Tech Stack

| Technology | Role |
| --- | --- |
| Next.js App Router | Static marketing page and production framework |
| React + TypeScript | UI and typed content |
| Tailwind CSS 4 | Responsive styling and design tokens |
| React Hook Form + Zod | Contact form state and validation |
| Vitest + RTL | Component and behavior tests |
| Lucide React | Interface icons |

## Getting Started

Prerequisites: Node.js 20.9 or later and npm.

```bash
git clone https://github.com/Sonudhukia143/wanderLux.git
cd frontend-assignement
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No environment variables are required. To create and run a production build:

```bash
npm run build
npm start
```

## Project Structure

```text
app/
  globals.css                  Brand tokens and global styles
  layout.tsx                   Fonts, shared layout, and site metadata
  page.tsx                     Home page section composition
components/
  contact/                     Validated contact form and tests
  layout/                      Responsive navbar, footer, and navbar tests
  packages/                    Reusable package card and test
  sections/                    Hero, about, features, packages, contact
  ui/                           Shared section heading and test
lib/
  data/packages.ts             Typed sample destination content
  types.ts                     Shared package and category types
public/                         Static assets and app icon
next.config.ts                  Remote image host configuration
vitest.config.ts                Test environment and path alias
vitest.setup.ts                 Testing Library matchers
```

## Testing

Vitest runs in jsdom with React Testing Library and `user-event`. Tests cover package-card details and image text, contact form validation and success, navbar links and mobile toggle, and the shared section heading.

```bash
npm test
npm run test:watch
```

## SEO Strategy

- Static App Router output makes the marketing content available in the initial HTML.
- Root and home page metadata provide descriptive titles, summaries, keywords, Open Graph, and Twitter card values.
- Semantic landmarks and one page-level H1 establish a clear content hierarchy.
- `next/image` uses descriptive alt text, responsive sizes, and a priority hero image.
- Remote destination images are restricted to the Unsplash image host in Next configuration.

## Responsive Design

The layout starts with single-column mobile content and a collapsible menu. At tablet widths, package cards and footer content use two columns; at desktop sizes, the page expands into three-column package grids, split story/contact layouts, and a four-column footer. Content stays within a shared 80rem maximum width, with responsive type and spacing.

## Deployment

1. Push the repository to GitHub.
2. In Vercel, import the GitHub repository and keep the detected Next.js build settings.
3. Deploy. Vercel will build each push and provide a live URL.
4. No environment variables are needed for the current demo. Update `metadataBase` in `app/layout.tsx` to the deployed site URL before sharing it publicly.

## Design Decisions

- A deep teal and warm amber palette with Playfair Display and Inter gives the brand an editorial travel feel.
- Static sections remain server-rendered; client JavaScript is limited to navigation and the contact form.
- Package data is separate from card presentation so destinations can be added without repeating markup.
- The contact form demonstrates validation and submission states without implying that a backend or email service exists.
- Destination photos use remote Unsplash assets so the repository stays focused on the frontend implementation.
