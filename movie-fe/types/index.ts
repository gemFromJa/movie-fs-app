export interface Actor {
  id: number;
  name: string;
  gender: string;
  movies: Movie[];
}

export interface Movie {
  id: number;
  poster?: string;
  title: string;
  description: string;
  director: string;
  releaseDate: string; // ISO string from API
  reviews: Review[];
  actors: Actor[];
}

export interface Review {
  id: number;
  rating: number;
  comment: string;
  movie?: Pick<Movie, "id" | "title">;
}

export interface CreateReviewPayload {
  rating: number;
  comment: string;
}

export interface CreateActorPayload {
  name: string;
  gender: string;
}

export type ListingType = "movies" | "actors";

export type Role = "guest" | "user" | "moderator" | "admin";

export interface AuthUser {
  id: string;
  username: string;
  role: Role;
}

export interface AuthPayload {
  access_token: string;
  user: AuthUser;
}

export interface PaginatedData<T> {
  data: T[];
  totalPages: number;
  totalItems: number;
  page: number;
  limit: number;
}
