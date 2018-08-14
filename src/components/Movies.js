import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
          return <div key={movie.title}>
            <h2>{movie.title}</h2>
            <h3>{movie.time}mins</h3>
            <ul>
              {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
          </div>
        })}
    </div>
  );
};

export default Movies;
