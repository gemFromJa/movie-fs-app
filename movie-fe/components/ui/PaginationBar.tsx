interface PaginationBarProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function PaginationBar({
  page,
  totalPages,
  onChange,
}: PaginationBarProps) {
  if (totalPages <= 1) return null;

  const goTo = (p: number) => {
    if (p < 1 || p > totalPages || p === page) return;
    onChange(p);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.375rem",
        marginTop: "2.5rem",
      }}
    >
      <PagerButton onClick={() => goTo(page - 1)} disabled={page === 1}>
        ←
      </PagerButton>

      {getPageNumbers(page, totalPages).map((p, i) =>
        p === "..." ? (
          <span
            key={`ellipsis-${i}`}
            style={{
              padding: "0 0.25rem",
              color: "oklch(from var(--color-ink) l c h / 0.3)",
            }}
          >
            …
          </span>
        ) : (
          <PagerButton
            key={p}
            onClick={() => goTo(p as number)}
            active={p === page}
          >
            {p}
          </PagerButton>
        )
      )}

      <PagerButton
        onClick={() => goTo(page + 1)}
        disabled={page === totalPages}
      >
        →
      </PagerButton>
    </div>
  );
}

function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, "...", total];
  if (current >= total - 3)
    return [1, "...", total - 4, total - 3, total - 2, total - 1, total];
  return [1, "...", current - 1, current, current + 1, "...", total];
}

interface PagerButtonProps {
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
  children: React.ReactNode;
}

function PagerButton({
  onClick,
  disabled,
  active,
  children,
}: PagerButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        minWidth: "2.25rem",
        height: "2.25rem",
        padding: "0 0.5rem",
        borderRadius: "6px",
        border: active
          ? "1px solid var(--color-gold)"
          : "1px solid oklch(from var(--color-ink) l c h / 0.12)",
        background: active ? "var(--color-gold)" : "transparent",
        color: active
          ? "white"
          : disabled
          ? "oklch(from var(--color-ink) l c h / 0.25)"
          : "var(--color-ink)",
        cursor: disabled ? "not-allowed" : "pointer",
        fontSize: "0.875rem",
        fontWeight: active ? 600 : 400,
        transition: "all 0.15s",
      }}
    >
      {children}
    </button>
  );
}
