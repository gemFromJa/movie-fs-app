import { MovieDetailsClient } from "@/components/movies/MovieDetailsClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function MoviePage({ params }: PageProps) {
  const { id } = await params;
  return <MovieDetailsClient movieId={Number(id)} />;
}
