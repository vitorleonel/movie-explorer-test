import Hero from "../Hero";
import MovieCard from "../MovieCard";
import Pagination from "../Pagination";

import { useMovies } from "../../shared/contexts/MoviesContext";

import { Wrapper } from "./styles";

const App = (): React.ReactNode => {
  const { movies } = useMovies();

  return (
    <>
      <Hero />

      <Wrapper className="container">
        <div className="movies">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>

        <Pagination />
      </Wrapper>
    </>
  );
};

export default App;
