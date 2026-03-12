"use client";

import Link from "next/link";
import { useAuth, DEMO_USERS } from "@/context/AuthContext";
import { LoginModal } from "../auth/LoginModal";

export function Navbar() {
  const { user, isLoggedIn, isAdmin, showLogin, login, logout, setShowLogin } =
    useAuth();

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          backgroundColor:
            "color-mix(in oklch, var(--color-parchment) 95%, transparent)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid oklch(from var(--color-ink) l c h / 0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/?type=movies"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
            }}
          >
            <span style={{ color: "var(--color-gold)", fontSize: "1.25rem" }}>
              ✦
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.375rem",
                fontWeight: 600,
                color: "var(--color-ink)",
                letterSpacing: "-0.01em",
              }}
            >
              Cinéma
            </span>
          </Link>

          {/* Center nav */}
          <nav style={{ display: "flex", gap: "2rem" }}>
            {[
              { href: "/?type=movies", label: "Movies" },
              { href: "/?type=actors", label: "Actors" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="link-hover"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "oklch(from var(--color-ink) l c h / 0.65)",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Auth area */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            {isLoggedIn ? (
              <>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    color: "oklch(from var(--color-ink) l c h / 0.55)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {user?.username}
                  {isAdmin && (
                    <span
                      className="badge"
                      style={{
                        background:
                          "oklch(from var(--color-gold) l c h / 0.15)",
                        color: "var(--color-gold-dark)",
                      }}
                    >
                      Admin
                    </span>
                  )}
                </span>
                <button
                  className="btn-ghost"
                  onClick={logout}
                  style={{ padding: "0.4rem 0.875rem" }}
                >
                  Sign out
                </button>
              </>
            ) : (
              <button
                className="btn-ghost"
                onClick={() => setShowLogin(true)}
                style={{ padding: "0.4rem 0.875rem" }}
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </header>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}
