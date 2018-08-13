import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie => {
          return (
          <div key={movies.indexOf(movie)}>
            {movie.title}, length: {movie.time}
            <ul>{movie.genres.map(genre => <li key={movie.genres.indexOf(genre)}>{genre}</li>)}</ul>
          </div>)
          })}
    </div>
  );
};

export default Movies;
