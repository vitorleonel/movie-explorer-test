import { Movie } from "../shared/interfaces/movies";

export enum MoviesActionKind {
  SET_STATE = "SET_STATE",
}

export interface MoviesState {
  loading: boolean;
  currentPage: number;
  totalPages: number;
  search: {
    q: string;
    year: string;
  };
  movies: Movie[];
}

export interface MoviesAction {
  type: MoviesActionKind;
  payload: Partial<MoviesState>;
}

export const initialState = {
  loading: false,
  currentPage: 1,
  totalPages: 1,
  search: {
    q: "",
    year: "",
  },
  movies: [],
};

export const reducer = (
  state: MoviesState,
  action: MoviesAction
): MoviesState => {
  const { type, payload } = action;

  switch (type) {
    case MoviesActionKind.SET_STATE:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};
