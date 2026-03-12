"use client";

import Link from "next/link";
import type { ListingType } from "@/types";
import { MovieList } from "@/components/movies/MovieList";
import { ActorList } from "@/components/actors/ActorList";

interface ListingShellProps {
  type: ListingType;
}

export function ListingShell({ type }: ListingShellProps) {
  return (
    <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Page header */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 600,
            color: "var(--color-ink)",
            marginBottom: "0.25rem",
          }}
        >
          {type === "movies" ? "The Collection" : "The Cast"}
        </h1>
        <p style={{ fontSize: "0.875rem", color: "oklch(from var(--color-ink) l c h / 0.45)" }}>
          {type === "movies" ? "Browse every film in the archive" : "Discover actors and their filmographies"}
        </p>
      </div>

      {/* Tab switcher */}
      <div
        style={{
          display: "inline-flex",
          background: "var(--color-parchment-dark)",
          border: "1px solid oklch(from var(--color-ink) l c h / 0.1)",
          borderRadius: "4px",
          padding: "3px",
          marginBottom: "2.5rem",
          gap: "2px",
        }}
      >
        {(["movies", "actors"] as ListingType[]).map((t) => {
          const active = type === t;
          return (
            <Link
              key={t}
              href={`/?type=${t}`}
              style={{
                display: "inline-block",
                padding: "0.45rem 1.25rem",
                fontSize: "0.8125rem",
                fontWeight: active ? 600 : 400,
                borderRadius: "3px",
                textDecoration: "none",
                textTransform: "capitalize",
                transition: "all 0.15s ease",
                background: active ? "var(--color-ink)" : "transparent",
                color: active
                  ? "var(--color-parchment)"
                  : "oklch(from var(--color-ink) l c h / 0.55)",
              }}
            >
              {t}
            </Link>
          );
        })}
      </div>

      {/* Content */}
      {type === "movies" ? <MovieList /> : <ActorList />}
    </div>
  );
}
