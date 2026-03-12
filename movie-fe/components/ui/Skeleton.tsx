export function Skeleton({ style }: { style?: React.CSSProperties }) {
  return <div className="skeleton" style={style} />;
}

export function MovieCardSkeleton() {
  return (
    <div className="card" style={{ overflow: "hidden" }}>
      <Skeleton style={{ height: "16rem" }} />
      <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Skeleton style={{ height: "1.125rem", width: "75%" }} />
        <Skeleton style={{ height: "0.875rem", width: "50%" }} />
      </div>
    </div>
  );
}

export function ActorCardSkeleton() {
  return (
    <div className="card" style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <Skeleton style={{ width: "4rem", height: "4rem", borderRadius: "50%" }} />
      <Skeleton style={{ height: "1.125rem", width: "70%" }} />
      <Skeleton style={{ height: "0.875rem", width: "40%" }} />
    </div>
  );
}

export function DetailSkeleton() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Skeleton style={{ height: "2.5rem", width: "55%" }} />
      <Skeleton style={{ height: "1rem", width: "100%" }} />
      <Skeleton style={{ height: "1rem", width: "85%" }} />
      <Skeleton style={{ height: "1rem", width: "70%" }} />
    </div>
  );
}
