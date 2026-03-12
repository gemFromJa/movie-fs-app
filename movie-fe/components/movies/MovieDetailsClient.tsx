"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Movie, Review } from "@/types";
import { deleteReview, fetchMovieById, getReviews } from "@/lib/api";
import { MovieActorsList } from "./MovieActorsList";
import { ReviewList } from "@/components/reviews/ReviewList";
import { ReviewForm } from "@/components/reviews/ReviewForm";
import { PaginationBar } from "@/components/ui/PaginationBar";
import { DetailSkeleton } from "@/components/ui/Skeleton";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { useAuth } from "@/context/AuthContext";

interface MovieDetailsClientProps {
  movieId: number;
}

const REVIEWS_LIMIT = 5;

export function MovieDetailsClient({ movieId }: MovieDetailsClientProps) {
  const { token } = useAuth();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewsPage, setReviewsPage] = useState(1);
  const [reviewsTotalPages, setReviewsTotalPages] = useState(1);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const movie = await fetchMovieById(movieId);
      setMovie(movie);
      await loadReviews(1);
    } catch (e) {
      setError((e as Error).message ?? "Failed to load movie");
    } finally {
      setLoading(false);
    }
  };

  const loadReviews = async (p: number) => {
    setReviewsLoading(true);
    try {
      const data = await getReviews(movieId, p, REVIEWS_LIMIT);
      setReviews(data.data);
      setReviewsTotalPages(data.totalPages);
      setReviewsPage(p);
    } finally {
      setReviewsLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [movieId]);

  const handleReviewAdded = (review: Review) => {
    setReviews((r) => [review, ...r]);
  };

  const handleReviewsPageChange = (p: number) => {
    loadReviews(p);
    document
      .getElementById("reviews-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const onRemoveReview = async (id: number) => {
    try {
      await deleteReview(id, token || "");
      await loadReviews(reviewsPage);
    } catch (e) {
      setError("Failed to delete review");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{ maxWidth: "64rem", margin: "0 auto", padding: "3rem 1.5rem" }}
      >
        <DetailSkeleton />
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div
        style={{ maxWidth: "64rem", margin: "0 auto", padding: "3rem 1.5rem" }}
      >
        <ErrorMessage message={error ?? "Movie not found"} onRetry={load} />
      </div>
    );
  }

  const releaseYear = movie.releaseDate
    ? new Date(movie.releaseDate).getFullYear()
    : null;
  const releaseFmt = movie.releaseDate
    ? new Date(movie.releaseDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div
      className="animate-fade-up"
      style={{ maxWidth: "64rem", margin: "0 auto", padding: "3rem 1.5rem" }}
    >
      {/* Back link */}
      <Link
        href="/?type=movies"
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
        ← Back to movies
      </Link>

      {/* Hero */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "2.5rem",
          marginBottom: "3rem",
        }}
      >
        {/* Poster */}
        <div style={{ flexShrink: 0, width: "clamp(160px, 20vw, 220px)" }}>
          <div
            style={{
              aspectRatio: "2 / 3",
              borderRadius: "6px",
              overflow: "hidden",
              background: "var(--color-parchment-dark)",
              boxShadow: "var(--shadow-card-hover)",
              position: "relative",
            }}
          >
            {movie.poster ? (
              <Image
                src={movie.poster}
                alt={movie.title}
                fill
                style={{ objectFit: "cover" }}
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
                    fontStyle: "italic",
                    fontSize: "5rem",
                    color: "oklch(from var(--color-ink) l c h / 0.08)",
                  }}
                >
                  {movie.title[0]}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Metadata */}
        <div style={{ flex: 1, minWidth: "240px" }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 600,
              color: "var(--color-ink)",
              lineHeight: 1.15,
              marginBottom: "0.375rem",
            }}
          >
            {movie.title}
          </h1>

          {releaseYear && (
            <p
              style={{
                color: "var(--color-gold-dark)",
                fontSize: "0.9375rem",
                fontWeight: 500,
                marginBottom: "1.5rem",
              }}
            >
              {releaseYear}
            </p>
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.75rem 2rem",
              marginBottom: "1.5rem",
            }}
          >
            <MetaField label="Director" value={movie.director} />
            {releaseFmt && <MetaField label="Released" value={releaseFmt} />}
          </div>

          {movie.description && (
            <p
              style={{
                fontSize: "0.9rem",
                color: "oklch(from var(--color-ink) l c h / 0.65)",
                lineHeight: 1.7,
                marginBottom: "1.75rem",
              }}
            >
              {movie.description}
            </p>
          )}

          <div>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>
              Cast
            </p>
            <MovieActorsList actors={movie.actors ?? []} />
          </div>
        </div>
      </div>

      {/* Reviews */}
      <hr className="divider" style={{ marginBottom: "2.5rem" }} />

      <div id="reviews-section">
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.75rem",
            fontWeight: 600,
            color: "var(--color-ink)",
            marginBottom: "1.75rem",
          }}
        >
          Reviews
        </h2>

        <div style={{ marginBottom: "2.5rem" }}>
          <ReviewForm movieId={movie.id} onReviewAdded={handleReviewAdded} />
        </div>

        <div
          style={{
            opacity: reviewsLoading ? 0.5 : 1,
            transition: "opacity 0.2s",
          }}
        >
          <ReviewList reviews={reviews} onRemove={onRemoveReview} />
        </div>

        <PaginationBar
          page={reviewsPage}
          totalPages={reviewsTotalPages}
          onChange={handleReviewsPageChange}
        />
      </div>
    </div>
  );
}

function MetaField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span
        className="section-label"
        style={{ display: "block", marginBottom: "0.25rem" }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: "0.9rem",
          fontWeight: 500,
          color: "var(--color-ink)",
        }}
      >
        {value}
      </span>
    </div>
  );
}
