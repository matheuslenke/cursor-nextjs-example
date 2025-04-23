"use client"; // This needs to be a client component

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import React from "react";

interface SessionProviderProps {
  children: React.ReactNode;
  // session: any; // Optional: Pass initial session data if needed from server components
}

const SessionProvider = ({ children }: SessionProviderProps) => {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
};

export default SessionProvider; 