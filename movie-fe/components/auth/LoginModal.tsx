"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { login } from "@/lib/api";

interface LoginModalProps {
  onClose: () => void;
}

export function LoginModal({ onClose }: LoginModalProps) {
  const { login: stateLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await login(username, password);
      stateLogin(res.access_token, res.user);
      onClose();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="animate-fade-in"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "oklch(from var(--color-ink) l c h / 0.5)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Panel */}
      <div
        className="animate-fade-up"
        style={{
          position: "relative",
          background: "white",
          borderRadius: "8px",
          boxShadow: "var(--shadow-modal)",
          width: "100%",
          maxWidth: "22rem",
          padding: "2.5rem 2rem",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.125rem",
            color: "oklch(from var(--color-ink) l c h / 0.3)",
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          ✕
        </button>

        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span style={{ fontSize: "2rem", color: "var(--color-gold)" }}>
            ✦
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.625rem",
              fontWeight: 600,
              color: "var(--color-ink)",
              margin: "0.5rem 0 0.375rem",
            }}
          >
            Sign in to continue
          </h2>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "oklch(from var(--color-ink) l c h / 0.5)",
            }}
          >
            You need to be logged in to post a review.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          {error && (
            <p
              style={{
                margin: 0,
                padding: "0.5rem 0.75rem",
                background: "oklch(0.97 0.02 25)",
                border: "1px solid oklch(0.85 0.08 25)",
                borderRadius: "6px",
                fontSize: "0.8125rem",
                color: "oklch(0.45 0.18 25)",
              }}
            >
              {error}
            </p>
          )}

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
          >
            <label
              htmlFor="username"
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "oklch(from var(--color-ink) l c h / 0.6)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              placeholder="your username"
              style={{
                padding: "0.6rem 0.75rem",
                border: "1px solid oklch(from var(--color-ink) l c h / 0.15)",
                borderRadius: "6px",
                fontSize: "0.9375rem",
                color: "var(--color-ink)",
                outline: "none",
                transition: "border-color 0.15s",
                width: "100%",
                boxSizing: "border-box",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "var(--color-gold)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor =
                  "oklch(from var(--color-ink) l c h / 0.15)")
              }
            />
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
          >
            <label
              htmlFor="password"
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "oklch(from var(--color-ink) l c h / 0.6)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              placeholder="••••••••"
              style={{
                padding: "0.6rem 0.75rem",
                border: "1px solid oklch(from var(--color-ink) l c h / 0.15)",
                borderRadius: "6px",
                fontSize: "0.9375rem",
                color: "var(--color-ink)",
                outline: "none",
                transition: "border-color 0.15s",
                width: "100%",
                boxSizing: "border-box",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "var(--color-gold)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor =
                  "oklch(from var(--color-ink) l c h / 0.15)")
              }
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
            style={{
              justifyContent: "center",
              width: "100%",
              marginTop: "0.25rem",
              opacity: loading ? 0.6 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
