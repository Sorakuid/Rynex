# Changelog

## [0.3.1] — 2026-06-23

### Added
- Reusable ComparisonTable component (`src/components/shared/comparison.tsx`)
- Comparison data config (`src/config/comparison.json`) with 21 features, upgrade triggers, recommended plan
- Comparison types (`src/types/comparison.ts`)
- Drizzle migration 0006: `users`, `products`, `licenses`, `activations`, `orders` tables
- `.gitignore` entries for IDE, OS, logs, turbo, dist, cache

### Changed
- Moved comparison section from homepage to `/pricing` page
- Replaced local pricing ComparisonTable with shared component
- Comparison table: sticky first column, glassmorphism, upgrade trigger highlight, "Most Popular" badge
- Mobile comparison: accordion cards with recommended plan first, descriptions inline
- How Rynex Builds layout: CSS Grid → Flexbox for reliable sticky positioning
- Bumped version 0.2.1 → 0.3.1

### Fixed
- `autoFocus` a11y error in comment edit textarea (removed prop)
- `disableTransitionOnChange` removed from ThemeProvider (React 19 script tag error)
- `overflow-x: hidden` on body/html removed (broke `position: sticky` in Chromium)
- Sticky positioning by removing `overflow-x-clip` from layout root
- Dashboard Drizzle query error (`licenses` table did not exist)
- Cleaned up 30+ unused import/variable warnings across 18 files
- `pathname` prop removed from `SidebarContent` (declared but unused)

## [0.2.1] — 2026-06-17

### Added
- Blog comments with real-time sync via Ably LiveSync + Models SDK
- Optimistic UI for comments (add/edit/delete) with automatic confirmation/rollback
- Ably token authentication endpoint (`/api/ably/token`)
- Ably Postgres connector trigger for real-time outbox replication
- Drizzle migrations for outbox + nodes tables
- Mobile horizontal snap carousel for Layanan Digital section with autoplay
- Mobile fade+scale carousel for How Rynex Builds section with 5s autoplay
- CSS marquee auto-scroll for testimonials section (pause on hover)
- Email subscription input in footer
- Share button in blog comment section header

### Changed
- Hero sections: reduced min-height, top-aligned content, reduced bottom padding
- Partner marquee: reduced vertical padding (`py-6` → `py-3`)
- Global section spacing: reduced top padding on all `spacious-section` components
- Mobile heading sizes: `text-3xl md:text-5xl` on all pages
- Blog grid: `grid-cols-1 md:grid-cols-2` for responsive layout
- Button layout on mobile hero: side-by-side instead of stacked
- Carousel autoplay: uses `scrollTo({ left })` instead of `scrollIntoView` to prevent vertical page jumping
- Partner logos: smaller (`h-8` → `h-6 md:h-7`)
- Footer: smaller social icons, smaller description/link text
- Testimonials: removed carousel, replaced with pure CSS marquee
- FAQ: reduced to 5 items with concise answers, compact mobile layout
- Comment form uses `@ably-labs/models` SDK instead of raw Ably channels

### Removed
- Showcase section from desktop and mobile hero
- FeaturedProducts / Solusi Siap Pakai section from homepage
- "Lihat Semua Layanan" button from ServicesSection
- Komunitas Soraku from partners list

### Fixed
- Ably token capability: added `publish` + `history` to fix 40160 errors
- Migration runner: replaced `sql.unsafe()` with `sql.query()` (sql.unsafe does not execute SQL)
- Autoplay scroll: `scrollIntoView` caused vertical page jumping
- Build error 505 (Vercel deployment fix)

### Technical
- Upgraded to `@ably-labs/models` SDK for automated optimistic state management
- CTE-based transactional writes for comment + outbox (atomic insert)
- Direct Neon connection for Ably dashboard integration rule
- Pooled connection (`-pooler`) for app server `DATABASE_URL`
- All 6 Drizzle migrations applied to Neon Postgres

## [0.1.0] — 2026-05-20

### Added
- Initial Next.js 16 project scaffold with Turbopack
- Tailwind CSS v4 with `@tailwindcss/postcss` plugin
- shadcn/ui component system with Radix primitives
- Framer Motion animations and transitions
- Dark/light theme support via `next-themes`
- Responsive layout system with desktop/mobile components

### Pages
- Homepage with hero, services, portfolio, process sections
- Blog page with article listing and detail views
- Portfolio page with project showcase
- Pricing page with tier comparison
- FAQ page
- Contact page
- Privacy policy and Terms of Service pages
- Product listing and detail pages
- License verification page
- Documentation page
- Custom orders page
- Download page

### Components
- Desktop and mobile hero sections with gradient backgrounds
- Logo marquee for partner showcase
- Services section with card grid
- Portfolio section with project cards
- How Rynex Builds process section
- Why section with value propositions
- Pricing teaser section
- Testimonials carousel section
- Blog home section with recent articles
- FAQ accordion section
- CTA section
- Footer with navigation and social links
- Navigation header with mobile drawer

### Infrastructure
- Drizzle ORM with Neon Postgres database
- NextAuth v5 authentication with Drizzle adapter
- TanStack Query for data fetching
- React Hook Form with Zod validation
- Blog views counter with SSE polling
- Blog comments CRUD with optimistic UI (pre-Ably)
- Husky pre-commit hooks with lint-staged
- Commitlint for conventional commits
- ESLint + Prettier code quality setup
- Jest + Playwright test setup
- TypeScript strict mode
