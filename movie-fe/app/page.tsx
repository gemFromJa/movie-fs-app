import { ListingShell } from "@/components/ui/ListingShell";
import type { ListingType } from "@/types";

interface PageProps {
  searchParams: Promise<{ type?: string }>;
}

export default async function HomePage({ searchParams }: PageProps) {
  const { type: rawType } = await searchParams;
  const type: ListingType = rawType === "actors" ? "actors" : "movies";

  return <ListingShell type={type} />;
}
