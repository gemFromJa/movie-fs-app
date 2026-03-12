import { ActorDetailsClient } from "@/components/actors/ActorDetailsClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ActorPage({ params }: PageProps) {
  const { id } = await params;
  return <ActorDetailsClient actorId={Number(id)} />;
}
