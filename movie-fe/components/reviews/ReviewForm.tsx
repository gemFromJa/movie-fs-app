"use client";

import { useState } from "react";
import type { Review } from "@/types";
import { useAuth } from "@/context/AuthContext";
import { createReview } from "@/lib/api";
import { LoginModal } from "@/components/auth/LoginModal";

interface ReviewFormProps {
  movieId: number;
  onReviewAdded: (review: Review) => void;
}

export function ReviewForm({ movieId, onReviewAdded }: ReviewFormProps) {
  const { isLoggedIn, token, setShowLogin } = useAuth();
  const [rating, setRating] = useState(8);
  const [hovered, setHovered] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const displayRating = hovered ?? rating;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoggedIn) {
      setShowLogin(true);
      return;
    }

    if (!comment.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const review = await createReview(
        movieId,
        { rating, comment },
        String(token)
      );
      onReviewAdded(review);
      setComment("");
      setRating(8);
    } catch (e) {
      setError((e as Error).message ?? "Failed to submit review");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "var(--color-parchment-dark)",
          border: "1px solid oklch(from var(--color-ink) l c h / 0.09)",
          borderRadius: "6px",
          padding: "1.75rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--color-ink)",
          }}
        >
          Write a Review
        </h3>

        {/* Star rating picker */}
        <div>
          <label
            className="section-label"
            style={{ display: "block", marginBottom: "0.625rem" }}
          >
            Rating — {displayRating}/10
          </label>
          <div style={{ display: "flex", gap: "4px" }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <button
                key={i}
                type="button"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.375rem",
                  padding: "2px",
                  transition: "transform 0.1s ease",
                  color:
                    i < displayRating
                      ? "var(--color-gold)"
                      : "oklch(from var(--color-ink) l c h / 0.12)",
                }}
                onClick={() => setRating(i + 1)}
                onMouseEnter={() => setHovered(i + 1)}
                onMouseLeave={() => setHovered(null)}
                onMouseDown={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.transform =
                    "scale(1.2)")
                }
                onMouseUp={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.transform =
                    "scale(1)")
                }
              >
                ★
              </button>
            ))}
          </div>
        </div>

        {/* Comment textarea */}
        <div>
          <label
            className="section-label"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Your review
          </label>
          <textarea
            className="input"
            rows={4}
            style={{ resize: "vertical" }}
            placeholder="Share your thoughts about this film…"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>

        {error && (
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-danger)",
              background: "oklch(from var(--color-danger) l c h / 0.07)",
              border: "1px solid oklch(from var(--color-danger) l c h / 0.2)",
              padding: "0.5rem 0.75rem",
              borderRadius: "3px",
            }}
          >
            {error}
          </p>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading
              ? "Submitting…"
              : isLoggedIn
              ? "Submit Review"
              : "Sign in to Review"}
          </button>

          {!isLoggedIn && (
            <span
              style={{
                fontSize: "0.75rem",
                color: "oklch(from var(--color-ink) l c h / 0.4)",
              }}
            >
              You&apos;ll be prompted to sign in.
            </span>
          )}
        </div>
      </form>
    </>
  );
}
