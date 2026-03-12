interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 1.5rem",
        textAlign: "center",
        gap: "1rem",
      }}
    >
      <div
        style={{
          width: "3rem",
          height: "3rem",
          borderRadius: "50%",
          background: "oklch(from var(--color-danger) l c h / 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.25rem",
          color: "var(--color-danger)",
        }}
      >
        !
      </div>
      <p
        style={{
          fontSize: "0.875rem",
          color: "oklch(from var(--color-ink) l c h / 0.6)",
          maxWidth: "24rem",
        }}
      >
        {message}
      </p>
      {onRetry && (
        <button className="btn-ghost" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}
