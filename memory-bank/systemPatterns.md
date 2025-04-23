# System Patterns: Restaurant Dashboard

**Architecture:**
*   Next.js App Router for routing and server-side rendering capabilities.
*   React Server Components (RSC) and Client Components ("use client") as needed.

**UI/Layout:**
*   Core layout consists of a fixed `Sidebar` (`src/components/layout/Sidebar.tsx`) and a `Header` (`src/components/layout/Header.tsx`) above the main content area.
*   Layout structure defined in `src/app/layout.tsx`.
*   Styling primarily through Tailwind CSS utility classes.
*   UI elements built using Shadcn/UI components (`src/components/ui/`).

**Authentication:**
*   Handled by NextAuth.js.
*   API route at `src/app/api/auth/[...nextauth]/route.ts` processes authentication requests.
*   Currently configured with a `CredentialsProvider` (using placeholder logic).
*   Session management uses JWT strategy (`session: { strategy: "jwt" }`).
*   Session state is made available globally via `SessionProvider` (`src/components/providers/SessionProvider.tsx`) wrapping the root layout.
*   Custom login page at `/login`.

**Data Fetching:** (To be determined - likely React Query/SWR or RSC async/await)

**State Management:** (To be determined - likely React Context for global state like auth, potentially Zustand or similar for more complex client-side state if needed) 