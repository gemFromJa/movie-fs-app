import { useAuth } from "@/context/AuthContext";
import type { Review } from "@/types";

interface ReviewItemProps {
  review: Review;
  onRemove: (id: number) => void;
}

function Stars({ score }: { score: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          style={{
            fontSize: "0.75rem",
            color:
              i < score
                ? "var(--color-gold)"
                : "oklch(from var(--color-ink) l c h / 0.12)",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function ReviewItem({ review, onRemove }: ReviewItemProps) {
  const { user } = useAuth();
  return (
    <div
      style={{
        padding: "1.25rem 0",
        borderBottom: "1px solid oklch(from var(--color-ink) l c h / 0.07)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "0.625rem",
        }}
      >
        <Stars score={review.rating} />
        <span
          style={{
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "var(--color-gold-dark)",
          }}
        >
          {review.rating}/10
        </span>
        {["admin", "moderator"].includes(user?.role || "") && (
          <span
            className="text-xs ml-auto px-2 cursor-pointer hover:opacity-50"
            onClick={() => onRemove(review.id)}
          >
            remove
          </span>
        )}
      </div>
      {review.comment && (
        <p
          style={{
            fontSize: "0.9rem",
            color: "oklch(from var(--color-ink) l c h / 0.65)",
            lineHeight: 1.65,
          }}
        >
          {review.comment}
        </p>
      )}
    </div>
  );
}
