"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Actor } from "@/types";
import { fetchActorById } from "@/lib/api";
import { ActorMoviesList } from "./ActorMoviesList";
import { AddActorForm } from "./AddActorForm";
import { RoleGate } from "@/components/ui/RoleGate";
import { DetailSkeleton } from "@/components/ui/Skeleton";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

interface ActorDetailsClientProps {
  actorId: number;
}

export function ActorDetailsClient({ actorId }: ActorDetailsClientProps) {
  const [actor, setActor] = useState<Actor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      setActor(await fetchActorById(actorId));
    } catch (e) {
      setError((e as Error).message ?? "Failed to load actor");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, [actorId]);

  if (loading) {
    return (
      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <DetailSkeleton />
      </div>
    );
  }

  if (error || !actor) {
    return (
      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <ErrorMessage message={error ?? "Actor not found"} onRetry={load} />
      </div>
    );
  }

  return (
    <div
      className="animate-fade-up"
      style={{ maxWidth: "56rem", margin: "0 auto", padding: "3rem 1.5rem" }}
    >
      {/* Back */}
      <Link
        href="/?type=actors"
        className="link-hover"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.375rem",
          fontSize: "0.8125rem",
          color: "oklch(from var(--color-ink) l c h / 0.5)",
          textDecoration: "none",
          marginBottom: "2.5rem",
        }}
      >
        ← Back to actors
      </Link>

      {/* Profile header */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", marginBottom: "3rem", flexWrap: "wrap" }}>
        {/* Avatar */}
        <div
          style={{
            width: "6rem",
            height: "6rem",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, oklch(from var(--color-gold) l c h / 0.25), oklch(from var(--color-ink) l c h / 0.08))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: "var(--shadow-card)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "2.5rem",
              color: "oklch(from var(--color-ink) l c h / 0.3)",
            }}
          >
            {actor.name[0]}
          </span>
        </div>

        <div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 600,
              color: "var(--color-ink)",
              marginBottom: "0.5rem",
            }}
          >
            {actor.name}
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span
              className="badge"
              style={{
                background: "var(--color-parchment-dark)",
                border: "1px solid oklch(from var(--color-ink) l c h / 0.1)",
                color: "oklch(from var(--color-ink) l c h / 0.6)",
              }}
            >
              {actor.gender}
            </span>
            <span style={{ fontSize: "0.8125rem", color: "oklch(from var(--color-ink) l c h / 0.4)" }}>
              {actor.movies?.length ?? 0} {actor.movies?.length === 1 ? "film" : "films"}
            </span>
          </div>
        </div>
      </div>

      {/* Filmography */}
      <div style={{ marginBottom: "3rem" }}>
        <p className="section-label" style={{ marginBottom: "1rem" }}>Filmography</p>
        <ActorMoviesList movies={actor.movies ?? []} />
      </div>

      {/* Admin-only: add actor form */}
      <RoleGate requires="admin">
        <hr className="divider" style={{ marginBottom: "2.5rem" }} />
        <AddActorForm />
      </RoleGate>
    </div>
  );
}
