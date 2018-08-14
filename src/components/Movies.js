import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <React.Fragment>
       <h1>Movies Page</h1> 
        
          {movies.map( movie =>{
            return(
            <div> 
            Title: {movie.title}   Time: {movie.time} 
            <ul>
              {movie.genres.map( genre => <li>{genre}</li>)}
            </ul>
            </div>
            )
          })}
        
    </React.Fragment>
  );
};

export default Movies;
