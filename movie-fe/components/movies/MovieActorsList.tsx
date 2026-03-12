import Link from "next/link";
import type { Actor } from "@/types";

interface MovieActorsListProps {
  actors: Actor[];
}

export function MovieActorsList({ actors }: MovieActorsListProps) {
  if (!actors.length) {
    return (
      <p style={{ fontSize: "0.875rem", color: "oklch(from var(--color-ink) l c h / 0.4)", fontStyle: "italic" }}>
        No cast listed.
      </p>
    );
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      {actors.map((actor) => (
        <Link
          key={actor.id}
          href={`/actors/${actor.id}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            padding: "0.375rem 0.75rem",
            background: "var(--color-parchment-dark)",
            border: "1px solid oklch(from var(--color-ink) l c h / 0.1)",
            borderRadius: "3px",
            fontSize: "0.8125rem",
            color: "oklch(from var(--color-ink) l c h / 0.75)",
            textDecoration: "none",
            transition: "all 0.15s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor =
              "oklch(from var(--color-gold) l c h / 0.4)";
            (e.currentTarget as HTMLAnchorElement).style.background =
              "oklch(from var(--color-gold) l c h / 0.08)";
            (e.currentTarget as HTMLAnchorElement).style.color =
              "var(--color-gold-dark)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor =
              "oklch(from var(--color-ink) l c h / 0.1)";
            (e.currentTarget as HTMLAnchorElement).style.background =
              "var(--color-parchment-dark)";
            (e.currentTarget as HTMLAnchorElement).style.color =
              "oklch(from var(--color-ink) l c h / 0.75)";
          }}
        >
          {actor.name}
        </Link>
      ))}
    </div>
  );
}
