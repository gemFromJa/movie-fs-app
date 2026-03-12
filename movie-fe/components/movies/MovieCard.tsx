import Link from "next/link";
import Image from "next/image";
import type { Movie } from "@/types";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const year = movie.releaseDate
    ? new Date(movie.releaseDate).getFullYear()
    : null;

  const avgRating = movie.reviews?.length
    ? (
        movie.reviews.reduce((s, r) => s + r.rating, 0) / movie.reviews.length
      ).toFixed(1)
    : null;

  return (
    <Link
      href={`/movies/${movie.id}`}
      style={{ display: "block", textDecoration: "none" }}
    >
      <article className="card" style={{ overflow: "hidden" }}>
        {/* Poster */}
        <div
          style={{
            position: "relative",
            aspectRatio: "2 / 3",
            background: "var(--color-parchment-dark)",
            overflow: "hidden",
          }}
        >
          {movie.poster ? (
            <Image
              src={movie.poster}
              alt={movie.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "4rem",
                  fontStyle: "italic",
                  color: "oklch(from var(--color-ink) l c h / 0.08)",
                }}
              >
                {movie.title[0]}
              </span>
            </div>
          )}

          {/* Rating pill */}
          {avgRating && (
            <div
              style={{
                position: "absolute",
                top: "0.5rem",
                right: "0.5rem",
                background: "oklch(from var(--color-ink) l c h / 0.75)",
                color: "var(--color-gold-light)",
                fontSize: "0.7rem",
                fontWeight: 600,
                padding: "0.2rem 0.5rem",
                borderRadius: "3px",
                backdropFilter: "blur(4px)",
              }}
            >
              ★ {avgRating}
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{ padding: "0.875rem 1rem" }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--color-ink)",
              lineHeight: 1.3,
              marginBottom: "0.375rem",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {movie.title}
          </h3>
          <p
            style={{
              fontSize: "0.75rem",
              color: "oklch(from var(--color-ink) l c h / 0.45)",
              display: "flex",
              gap: "0.375rem",
            }}
          >
            {year && <span>{year}</span>}
            {year && movie.director && <span>·</span>}
            {movie.director && (
              <span
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {movie.director}
              </span>
            )}
          </p>
        </div>
      </article>
    </Link>
  );
}
