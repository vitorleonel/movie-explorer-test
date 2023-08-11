import { describe, expect, it } from "vitest";

import { MoviesActionKind, initialState, reducer } from "./movies";
import { movieMock } from "../shared/mocks/movies";

describe("Movies Store", () => {
  it("should update the state", () => {
    const newState = reducer(initialState, {
      type: MoviesActionKind.SET_STATE,
      payload: { movies: [movieMock] },
    });

    expect(newState).toMatchObject({ ...initialState, movies: [movieMock] });
  });

  it("should not update the state", () => {
    const newState = reducer(initialState, {
      type: "something else" as MoviesActionKind,
      payload: { movies: [movieMock] },
    });

    expect(newState).toMatchObject(initialState);
  });
});
