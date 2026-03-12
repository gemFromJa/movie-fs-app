import type { Review } from "@/types";
import { ReviewItem } from "./ReviewItem";
import { EmptyState } from "@/components/ui/EmptyState";

interface ReviewListProps {
  reviews: Review[];
  onRemove: (id: number) => void;
}

export function ReviewList({ reviews, onRemove }: ReviewListProps) {
  if (!reviews.length) {
    return (
      <EmptyState
        icon="★"
        title="No reviews yet"
        message="Be the first to share your thoughts."
      />
    );
  }

  const avg = (
    reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div>
      {/* Summary bar */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "0.75rem",
          marginBottom: "1rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid oklch(from var(--color-ink) l c h / 0.07)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2.25rem",
            fontWeight: 600,
            color: "var(--color-ink)",
            lineHeight: 1,
          }}
        >
          {avg}
        </span>
        <span
          style={{
            fontSize: "0.875rem",
            color: "oklch(from var(--color-ink) l c h / 0.4)",
          }}
        >
          / 10 average
        </span>
        <span
          style={{
            fontSize: "0.8125rem",
            color: "oklch(from var(--color-ink) l c h / 0.3)",
          }}
        >
          ({reviews.length} {reviews.length === 1 ? "review" : "reviews"})
        </span>
      </div>

      <div>
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
}
