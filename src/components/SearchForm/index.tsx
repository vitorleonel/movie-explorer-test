import { useEffect, useState } from "react";
import Input from "../Input";
import Select from "../Select";

import { useMovies } from "../../shared/contexts/MoviesContext";
import { MoviesActionKind } from "../../store/movies";

import { Container } from "./styles";

const SearchForm = (): React.ReactNode => {
  const { dispatch } = useMovies();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchYear, setSearchYear] = useState("");

  useEffect(() => {
    // const timer = setTimeout(
    //   () =>
    dispatch({
      type: MoviesActionKind.SET_STATE,
      payload: {
        search: { q: searchTerm, year: searchYear },
        currentPage: 1,
      },
    });
    //   300
    // );

    // return () => {
    //   clearTimeout(timer);
    // };
  }, [dispatch, searchTerm, searchYear]);

  return (
    <Container>
      <Input
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="What is the movie you are looking for?"
        autoFocus
        data-testid="search-term"
      />

      <Select
        value={searchYear}
        onChange={(event) => setSearchYear(event.target.value)}
        data-testid="search-year"
      >
        <option value="">All</option>

        {Array.from({ length: 23 })
          .map(
            (_, numberIndex) => `20${String(numberIndex + 1).padStart(2, "0")}`
          )
          .reverse()
          .map((number) => (
            <option value={number} key={number}>
              {number}
            </option>
          ))}
      </Select>
    </Container>
  );
};

export default SearchForm;
