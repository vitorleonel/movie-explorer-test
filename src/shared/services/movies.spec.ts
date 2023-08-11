import { describe, expect, it, vi } from "vitest";
import axios from "axios";

import * as moviesService from "./movies";

import { moviesMock } from "../mocks/movies";

vi.mock("axios");

const API_URL = "http://localhost:8080/movies";

describe("Movies Service", () => {
  describe("getAll", () => {
    it("should return correctly", async () => {
      vi.mocked(axios.get).mockResolvedValue({
        data: moviesMock,
        headers: { "x-total-count": "1000" },
      });

      const result = await moviesService.getAll();

      expect(result).toMatchObject({ movies: moviesMock, totalPages: 84 });
      expect(axios.get).toBeCalledWith(API_URL, { params: {} });
    });

    it("should return correctly if there is no x-total-count header", async () => {
      vi.mocked(axios.get).mockResolvedValue({
        data: moviesMock,
      });

      const result = await moviesService.getAll();

      expect(result).toMatchObject({ movies: moviesMock, totalPages: 1 });
      expect(axios.get).toBeCalledWith(API_URL, { params: {} });
    });

    it("should return correctly with params", async () => {
      vi.mocked(axios.get).mockResolvedValue({
        data: moviesMock,
      });

      const pageNumber = 3;
      const result = await moviesService.getAll({ _page: pageNumber });

      expect(result).toMatchObject({ movies: moviesMock, totalPages: 1 });
      expect(axios.get).toBeCalledWith(API_URL, {
        params: { _page: pageNumber },
      });
    });

    it("should not return correctly if the API returns error", async () => {
      vi.mocked(axios.get).mockRejectedValue(new Error());

      expect(moviesService.getAll()).rejects.toBeTruthy();
    });
  });
});
