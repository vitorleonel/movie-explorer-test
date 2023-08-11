import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import MovieCard from ".";
import { movieMock } from "../../shared/mocks/movies";

describe("MovieCard", () => {
  it("should render correctly", () => {
    render(<MovieCard movie={movieMock} />);

    expect(screen.getByTestId("movie-card-image").getAttribute("src")).toBe(
      movieMock.coverImage
    );
    expect(screen.getByTestId("movie-card-title").textContent).toBe(
      movieMock.title
    );
    expect(screen.getByTestId("movie-card-director").textContent).toBe(
      movieMock.director
    );
    expect(screen.getByTestId("movie-card-year").textContent).toBe(
      String(movieMock.year)
    );
    expect(screen.getByTestId("movie-card-description").textContent).toBe(
      String(movieMock.description)
    );
  });
});
