import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Placeholder for user data - replace with actual database lookup
const users = [
  { id: "1", name: "Admin User", email: "admin@example.com", password: "password" },
];

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        // Add logic here to look up the user from the credentials supplied
        // IMPORTANT: In a real app, NEVER store plain text passwords. Hash and salt them.
        const user = users.find(
          (user) => user.email === credentials.email && user.password === credentials.password
        );

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          // Return only non-sensitive user data
          return { id: user.id, name: user.name, email: user.email };
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    // Add other providers like Google, GitHub etc. here if needed
  ],
  // Secret for JWT signing and encryption
  // IMPORTANT: Generate a strong secret and store it in .env.local
  // Use `openssl rand -base64 32` in your terminal
  secret: process.env.NEXTAUTH_SECRET,

  // Optional: Customize pages, callbacks, session strategy etc.
  pages: {
    signIn: '/login', // Use our custom login page
    // signOut: '/auth/signout', // Optional: Custom signout page
    // error: '/auth/error', // Optional: Custom error page (e.g. /auth/error?error=Verification)
    // verifyRequest: '/auth/verify-request', // Optional: Custom verify request page (used for email/OTP)
    // newUser: '/auth/new-user' // Optional: Redirect new users to a specific page (e.g. /welcome)
  },
  session: {
    strategy: "jwt", // Using JWT for session management
  },
  callbacks: {
    // Include user id and other details in the session token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    // Make user id available in the session object (client-side)
    async session({ session, token }) {
      if (session.user) {
         // Type assertion needed as default session user type might not have id
        (session.user as any).id = token.id;
      }
      return session;
    },
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
