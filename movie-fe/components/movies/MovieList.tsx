"use client";

import { useEffect, useState } from "react";
import type { Movie } from "@/types";
import { fetchMovies } from "@/lib/api";
import { MovieCard } from "./MovieCard";
import { MovieCardSkeleton } from "@/components/ui/Skeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { SearchBar } from "@/components/ui/SearchBar";
import { PaginationBar } from "@/components/ui/PaginationBar";

const GRID_STYLE: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
  gap: "1.25rem",
};

const PAGE_LIMIT = 12;

export function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const load = async (q?: string, p = 1) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMovies(q, p, PAGE_LIMIT);
      setMovies(data.data);
      setTotalPages(data.totalPages);
    } catch (e) {
      setError((e as Error).message ?? "Failed to load movies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load(search || undefined, page);
  }, [page]);

  const handleSearch = (q: string) => {
    setSearch(q);
    setPage(1);
    load(q || undefined, 1);
  };

  if (error)
    return <ErrorMessage message={error} onRetry={() => load(search, page)} />;

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <SearchBar placeholder="Search movies…" onSearch={handleSearch} />
      </div>

      {loading ? (
        <div style={GRID_STYLE}>
          {Array.from({ length: PAGE_LIMIT }).map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
        </div>
      ) : movies.length === 0 ? (
        <EmptyState
          title="No movies found"
          message={
            search ? `No results for "${search}"` : "The collection is empty."
          }
        />
      ) : (
        <div style={GRID_STYLE}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      <PaginationBar page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
