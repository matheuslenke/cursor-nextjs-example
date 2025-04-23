# Tech Context: Restaurant Dashboard

**Framework:** Next.js (App Router)
**Language:** TypeScript
**Styling:** Tailwind CSS
**UI Components:** Shadcn/UI
**Authentication:** NextAuth.js
**Code Structure:**
*   Main application code resides in the `src/` directory.
*   Components are organized under `src/components/` (e.g., `layout/`, `ui/`, `providers/`).
*   API routes are within `src/app/api/`.
*   Pages (using App Router) are directories under `src/app/` (e.g., `src/app/login/page.tsx`).

**Development Setup:**
*   Standard `npm` or `yarn` for package management.
*   Uses `next dev` for local development server.
*   ESLint configured for linting.

**Dependencies:**
*   `next`
*   `react`, `react-dom`
*   `typescript`
*   `tailwindcss`
*   `shadcn-ui` (CLI tool, adds components like `Button`, `Card`, `Input`, `Label` to `src/components/ui`)
*   `next-auth`
*   Font: Geist Sans / Mono

**Environment:**
*   Requires `NEXTAUTH_SECRET` environment variable in `.env.local` for NextAuth.js. 