import Link from "next/link";
import type { Actor } from "@/types";

interface ActorCardProps {
  actor: Actor;
}

export function ActorCard({ actor }: ActorCardProps) {
  const movieCount = actor.movies?.length ?? 0;

  return (
    <Link href={`/actors/${actor.id}`} style={{ display: "block", textDecoration: "none" }}>
      <article className="card" style={{ padding: "1.25rem" }}>
        {/* Avatar */}
        <div
          style={{
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, oklch(from var(--color-gold) l c h / 0.2), oklch(from var(--color-ink) l c h / 0.08))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "0.875rem",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "1.5rem",
              color: "oklch(from var(--color-ink) l c h / 0.35)",
            }}
          >
            {actor.name[0]}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            fontWeight: 600,
            color: "var(--color-ink)",
            lineHeight: 1.3,
            marginBottom: "0.25rem",
          }}
        >
          {actor.name}
        </h3>
        <p style={{ fontSize: "0.75rem", color: "oklch(from var(--color-ink) l c h / 0.45)", marginBottom: "0.5rem" }}>
          {actor.gender}
        </p>
        <p style={{ fontSize: "0.7rem", color: "oklch(from var(--color-ink) l c h / 0.35)" }}>
          {movieCount} {movieCount === 1 ? "film" : "films"}
        </p>
      </article>
    </Link>
  );
}
