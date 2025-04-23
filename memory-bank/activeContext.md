# Active Context: Restaurant Dashboard

**Current Focus:** Implementing Authentication using NextAuth.js.

**Recent Changes:**
*   Completed initial project setup (Next.js, TS, Tailwind, Shadcn/UI).
*   Implemented core application layout (Sidebar + Header).
*   Installed `next-auth` package.
*   Created NextAuth.js API route (`src/app/api/auth/[...nextauth]/route.ts`) with a placeholder `CredentialsProvider`.
*   Created and integrated `SessionProvider` (`src/components/providers/SessionProvider.tsx`).
*   Created a custom login page (`src/app/login/page.tsx`) using Shadcn/UI components.
*   Updated `authOptions` to point to the custom login page.
*   Added required Shadcn components (`Button`, `Card`, `Input`, `Label`).
*   Created `src/middleware.ts` to protect routes using `getToken`.

**Key Decisions/Considerations:**
*   Using NextAuth.js for authentication.
*   Starting with `CredentialsProvider`; other providers (e.g., Google) might be added later.
*   Using JWT session strategy.
*   Using Shadcn/UI for building components.

**Next Steps:**
1.  Replace placeholder user lookup and password check in `authorize` function with secure database logic (requires database setup - Task 4).
2.  Add logout functionality (likely a button calling `signOut()`).
3.  Implement Signup page/flow (requires database setup - Task 4).
4.  Refine login page UI/UX if needed.
5.  Ensure `NEXTAUTH_SECRET` environment variable is set locally.

**Learnings/Insights:**
*   `shadcn-ui` package is deprecated; use `shadcn`.
*   Need to explicitly add Shadcn components via CLI (`npx shadcn@latest add ...`).
*   Need to configure `pages: { signIn: '/login' }` in `authOptions` for custom login page.
*   Use `useRouter` from `next/navigation` in App Router client components for navigation. 