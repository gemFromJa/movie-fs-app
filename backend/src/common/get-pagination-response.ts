export function buildPaginatedResponse<T>(
  items: T[],
  totalItems: number,
  page: number,
  limit: number,
) {
  return {
    data: items,
    totalItems,
    totalPages: Math.ceil(totalItems / limit),
    page,
    limit,
  };
}
