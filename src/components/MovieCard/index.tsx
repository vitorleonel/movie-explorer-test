import React from "react";

import {
  Container,
  Description,
  DirectorName,
  Name,
  Resume,
  Year,
} from "./styles";

import { Movie } from "../../shared/interfaces/movies";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps): React.ReactNode => {
  return (
    <Container data-testid="movie-card">
      <img
        data-testid="movie-card-image"
        src={movie.coverImage}
        alt={movie.description}
        loading="lazy"
      />

      <Resume>
        <Name data-testid="movie-card-title">{movie.title}</Name>
        <DirectorName data-testid="movie-card-director">
          {movie.director}
        </DirectorName>
        <Year data-testid="movie-card-year">{movie.year}</Year>
      </Resume>

      <Description data-testid="movie-card-description">
        {movie.description}
      </Description>
    </Container>
  );
};

export default MovieCard;
