import axios from "axios";

import { Movie } from "../interfaces/movies";

export const getAll = async (
  params: Record<string, unknown> = {}
): Promise<{ movies: Movie[]; totalPages: number }> => {
  const { data: movies, headers } = await axios.get<Movie[]>(
    "http://localhost:8080/movies",
    {
      params,
    }
  );

  const totalPages =
    !headers || !headers["x-total-count"]
      ? 1
      : Math.ceil(
          Number(headers["x-total-count"]) / Number(params?._limit || 12)
        );

  return { movies, totalPages };
};
