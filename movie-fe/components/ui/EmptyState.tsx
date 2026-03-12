interface EmptyStateProps {
  icon?: string;
  title: string;
  message?: string;
}

export function EmptyState({ icon = "✦", title, message }: EmptyStateProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.5rem",
        textAlign: "center",
      }}
    >
      <span
        style={{
          fontSize: "2.5rem",
          color: "oklch(from var(--color-gold) l c h / 0.35)",
          marginBottom: "1rem",
          display: "block",
        }}
      >
        {icon}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.25rem",
          color: "oklch(from var(--color-ink) l c h / 0.5)",
          marginBottom: "0.25rem",
        }}
      >
        {title}
      </h3>
      {message && (
        <p
          style={{
            fontSize: "0.875rem",
            color: "oklch(from var(--color-ink) l c h / 0.35)",
            maxWidth: "20rem",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}
