import {
  Dispatch,
  PropsWithChildren,
  Reducer,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

import * as moviesService from "../services/movies";

import {
  MoviesAction,
  MoviesActionKind,
  MoviesState,
  initialState,
  reducer,
} from "../../store/movies";

const MoviesContext = createContext<
  MoviesState & {
    dispatch: Dispatch<MoviesAction>;
  }
>({
  ...initialState,
  dispatch: () => null,
});

export const MoviesProvider = ({
  children,
}: PropsWithChildren): React.ReactNode => {
  const [state, dispatch] = useReducer<Reducer<MoviesState, MoviesAction>>(
    reducer,
    initialState
  );

  useEffect(() => {
    const search = async () => {
      try {
        dispatch({
          type: MoviesActionKind.SET_STATE,
          payload: { loading: true },
        });

        const payload = {
          q: state.search.q || undefined,
          year: state.search.year || undefined,
          _page: state.currentPage,
          _limit: 12,
        };

        const { movies, totalPages } = await moviesService.getAll(payload);

        dispatch({
          type: MoviesActionKind.SET_STATE,
          payload: {
            loading: false,
            totalPages,
            movies,
          },
        });
      } catch (error) {
        // TODO: an alert?

        dispatch({
          type: MoviesActionKind.SET_STATE,
          payload: { loading: false },
        });
      }
    };

    search();
  }, [state.currentPage, state.search.q, state.search.year]);

  return (
    <MoviesContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => useContext(MoviesContext);
