import React from 'react';
import { movies } from '../data';

const Movies = () => {


  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return (
          <div key={movie.title}>
            <h3>Name: {movie.title}</h3>
            <p>Time: {movie.time}</p>
            <p>Genres:</p>
            <ul>
              {movie.genres.map(genre => {
                return <li>{genre}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
};

export default Movies;

// {movies.forEach(movie => {
//     <h1>{movie.title}</h1>
// })}

// <React.Fragment>
//   <h3>Name: {movie.title}</h3>
//   <p>Time: {movie.time}</p>
//   <p>Genres:</p>
//   <ul>
//     {movie.genres.forEach(genre => {
//       return <li>{genre}</li>
//     })}
//   </ul>
// </React.Fragment>
