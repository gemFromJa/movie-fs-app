import type {
  Movie,
  Actor,
  Review,
  CreateReviewPayload,
  CreateActorPayload,
  PaginatedData,
  AuthPayload,
} from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

async function apiFetch<T>(
  path: string,
  options?: RequestInit,
  token?: string
): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options?.headers,
    },
  });

  if (!res.ok) {
    let message = `Request failed with status ${res.status}`;
    try {
      const body = await res.json();
      message = body?.message ?? message;
    } catch {
      /* ignore */
    }
    throw new Error(message);
  }

  return res.json() as Promise<T>;
}

function paginationParams(page?: number, limit?: number): string {
  const params = new URLSearchParams();
  if (page !== undefined) params.set("page", String(page));
  if (limit !== undefined) params.set("limit", String(limit));
  return params.toString();
}

// ── Auth ──────────────────────────────────────────────────────
export async function login(
  username: string,
  password: string
): Promise<AuthPayload> {
  return apiFetch<AuthPayload>(`/auth/login`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
}

// ── Movies ────────────────────────────────────────────────────
export async function fetchMovies(
  search?: string,
  page?: number,
  limit?: number
): Promise<PaginatedData<Movie>> {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (page !== undefined) params.set("page", String(page));
  if (limit !== undefined) params.set("limit", String(limit));
  const qs = params.size ? `?${params.toString()}` : "";
  return apiFetch<PaginatedData<Movie>>(`/movies${qs}`);
}

export async function fetchMovieById(id: number): Promise<Movie> {
  return apiFetch<Movie>(`/movies/${id}`);
}

export async function updateMovie(
  id: number,
  payload: Partial<Movie>,
  token: string
): Promise<Movie> {
  return apiFetch<Movie>(
    `/movies/${id}`,
    { method: "PATCH", body: JSON.stringify(payload) },
    token
  );
}

export async function deleteMovie(id: number, token: string): Promise<void> {
  return apiFetch<void>(`/movies/${id}`, { method: "DELETE" }, token);
}

// ── Actors ────────────────────────────────────────────────────
export async function fetchActors(
  search?: string,
  page?: number,
  limit?: number
): Promise<PaginatedData<Actor>> {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (page !== undefined) params.set("page", String(page));
  if (limit !== undefined) params.set("limit", String(limit));
  const qs = params.size ? `?${params.toString()}` : "";
  return apiFetch<PaginatedData<Actor>>(`/actors${qs}`);
}

export async function fetchActorsByMovie(
  movieId: number,
  page?: number,
  limit?: number
): Promise<PaginatedData<Actor>> {
  const params = new URLSearchParams();
  if (page !== undefined) params.set("page", String(page));
  if (limit !== undefined) params.set("limit", String(limit));
  const qs = params.size ? `?${params.toString()}` : "";
  return apiFetch<PaginatedData<Actor>>(`/movies/${movieId}/actors${qs}`);
}

export async function fetchActorById(id: number): Promise<Actor> {
  return apiFetch<Actor>(`/actors/${id}`);
}

export async function createActor(
  payload: CreateActorPayload,
  token: string
): Promise<Actor> {
  return apiFetch<Actor>(
    `/actors`,
    { method: "POST", body: JSON.stringify(payload) },
    token
  );
}

export async function updateActor(
  id: number,
  payload: Partial<Actor>,
  token: string
): Promise<Actor> {
  return apiFetch<Actor>(
    `/actors/${id}`,
    { method: "PATCH", body: JSON.stringify(payload) },
    token
  );
}

export async function deleteActor(id: number, token: string): Promise<void> {
  return apiFetch<void>(`/actors/${id}`, { method: "DELETE" }, token);
}

// ── Reviews ───────────────────────────────────────────────────
export async function getReviews(
  movieId: number,
  page?: number,
  limit?: number
): Promise<PaginatedData<Review>> {
  const qs = paginationParams(page, limit);
  return apiFetch<PaginatedData<Review>>(
    `/reviews/movie/${movieId}${qs ? `?${qs}` : ""}`
  );
}

export async function createReview(
  movieId: number,
  payload: CreateReviewPayload,
  token: string
): Promise<Review> {
  return apiFetch<Review>(
    `/reviews/movie/${movieId}`,
    { method: "POST", body: JSON.stringify({ ...payload, movieId }) },
    token
  );
}

export async function updateReview(
  id: number,
  payload: Partial<CreateReviewPayload>,
  token: string
): Promise<Review> {
  return apiFetch<Review>(
    `/reviews/${id}`,
    { method: "PATCH", body: JSON.stringify(payload) },
    token
  );
}

export async function deleteReview(id: number, token: string): Promise<void> {
  return apiFetch<void>(`/reviews/${id}`, { method: "DELETE" }, token);
}
