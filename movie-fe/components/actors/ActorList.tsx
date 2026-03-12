"use client";

import { useEffect, useState } from "react";
import type { Actor } from "@/types";
import { fetchActors } from "@/lib/api";
import { ActorCard } from "./ActorCard";
import { ActorCardSkeleton } from "@/components/ui/Skeleton";
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

export function ActorList() {
  const [actors, setActors] = useState<Actor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const load = async (q?: string, p = 1) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchActors(q, p, PAGE_LIMIT);
      setActors(data.data);
      setTotalPages(data.totalPages);
    } catch (e) {
      setError((e as Error).message ?? "Failed to load actors");
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
        <SearchBar placeholder="Search actors…" onSearch={handleSearch} />
      </div>

      {loading ? (
        <div style={GRID_STYLE}>
          {Array.from({ length: PAGE_LIMIT }).map((_, i) => (
            <ActorCardSkeleton key={i} />
          ))}
        </div>
      ) : actors.length === 0 ? (
        <EmptyState
          title="No actors found"
          message={search ? `No results for "${search}"` : "No actors yet."}
        />
      ) : (
        <div style={GRID_STYLE}>
          {actors.map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </div>
      )}

      <PaginationBar page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
