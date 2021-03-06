import React from 'react';

import MovieCard from '../MovieCard';
import { Movie } from '../../service/api';

interface IProps {
  movieList: Movie[] | null;
  baseUrl: string;
}

const MovieList: React.FC<IProps> = ({ movieList, baseUrl }) => {
  return (
    <>
      {movieList &&
        movieList.map(movie => (
          <MovieCard
            movie={movie}
            posterUrl={baseUrl + movie.poster_path}
            key={movie.id}
          />
        ))}
    </>
  );
};

export default MovieList;
