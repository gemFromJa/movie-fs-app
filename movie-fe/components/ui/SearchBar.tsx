"use client";

import { useState, useEffect, useRef } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  debounceMs?: number;
}

export function SearchBar({
  placeholder = "Search…",
  onSearch,
  debounceMs = 350,
}: SearchBarProps) {
  const [value, setValue] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => onSearch(value), debounceMs);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, debounceMs]);

  return (
    <div style={{ position: "relative", maxWidth: "28rem" }}>
      <span
        style={{
          position: "absolute",
          left: "0.75rem",
          top: "50%",
          transform: "translateY(-50%)",
          color: "oklch(from var(--color-ink) l c h / 0.3)",
          fontSize: "0.875rem",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        ⌕
      </span>
      <input
        type="search"
        className="input"
        style={{ paddingLeft: "2rem" }}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
