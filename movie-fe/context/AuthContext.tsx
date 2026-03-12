"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { AuthUser, Role } from "@/types";

interface AuthContextValue {
  token: string | null;
  user: AuthUser | null;
  isLoggedIn: boolean;
  isAdmin: boolean;
  showLogin: boolean;
  setShowLogin: (state: boolean) => void;
  login: (token: string, user: AuthUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

// ── Demo users (swap with real JWT/session logic) ─────────────
export const DEMO_USERS: Record<string, AuthUser> = {
  user: {
    id: "u1",
    username: "Jane Viewer",

    role: "user",
  },
  admin: {
    id: "u2",
    username: "Admin",
    role: "admin",
  },
};

const ROLE_RANK: Record<Role, number> = {
  guest: 0,
  user: 1,
  moderator: 2,
  admin: 3,
};

export function hasRole(user: AuthUser | null, required: Role): boolean {
  const current: Role = user?.role ?? "guest";
  return ROLE_RANK[current] >= ROLE_RANK[required];
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        showLogin,
        setShowLogin,
        isLoggedIn: user !== null,
        isAdmin: user?.role === "admin",
        login: (token: string, user: AuthUser) => {
          setToken(token);
          setUser(user);
          setShowLogin(false);
        },
        logout: () => {
          setUser(null);
          setToken(null);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
