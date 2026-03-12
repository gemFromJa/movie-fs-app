import Link from "next/link";
import type { Movie } from "@/types";

interface ActorMoviesListProps {
  movies: Movie[];
}

export function ActorMoviesList({ movies }: ActorMoviesListProps) {
  if (!movies.length) {
    return (
      <p style={{ fontSize: "0.875rem", color: "oklch(from var(--color-ink) l c h / 0.4)", fontStyle: "italic" }}>
        No films listed.
      </p>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "0.75rem",
      }}
    >
      {movies.map((movie) => {
        const year = movie.releaseDate ? new Date(movie.releaseDate).getFullYear() : null;
        return (
          <Link
            key={movie.id}
            href={`/movies/${movie.id}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.875rem",
              padding: "0.875rem 1rem",
              background: "var(--color-parchment-dark)",
              border: "1px solid oklch(from var(--color-ink) l c h / 0.08)",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "oklch(from var(--color-gold) l c h / 0.07)";
              el.style.borderColor = "oklch(from var(--color-gold) l c h / 0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--color-parchment-dark)";
              el.style.borderColor = "oklch(from var(--color-ink) l c h / 0.08)";
            }}
          >
            {/* Mini poster */}
            <div
              style={{
                width: "2.5rem",
                height: "3.5rem",
                flexShrink: 0,
                background: "oklch(from var(--color-ink) l c h / 0.07)",
                borderRadius: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "1.25rem",
                  color: "oklch(from var(--color-ink) l c h / 0.25)",
                }}
              >
                {movie.title[0]}
              </span>
            </div>

            <div style={{ minWidth: 0, flex: 1 }}>
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--color-ink)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {movie.title}
              </p>
              {year && (
                <p style={{ fontSize: "0.75rem", color: "oklch(from var(--color-ink) l c h / 0.4)" }}>
                  {year}
                </p>
              )}
            </div>

            <span style={{ color: "oklch(from var(--color-ink) l c h / 0.2)", flexShrink: 0 }}>→</span>
          </Link>
        );
      })}
    </div>
  );
}
