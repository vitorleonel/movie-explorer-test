import { useMovies } from "../../shared/contexts/MoviesContext";
import Button from "../Button";

import { Container } from "./styles";
import { MoviesActionKind } from "../../store/movies";

const Pagination = () => {
  const { currentPage, totalPages, dispatch } = useMovies();

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  const handleChangePage = (newCurrentPage: number) => {
    dispatch({
      type: MoviesActionKind.SET_STATE,
      payload: { currentPage: newCurrentPage },
    });
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <Container>
      <Button
        onClick={() => handleChangePage(currentPage - 1)}
        disabled={!hasPreviousPage}
      >
        Previous
      </Button>

      <span>
        {currentPage} / {totalPages}
      </span>

      <Button
        onClick={() => handleChangePage(currentPage + 1)}
        disabled={!hasNextPage}
      >
        Next
      </Button>
    </Container>
  );
};

export default Pagination;
