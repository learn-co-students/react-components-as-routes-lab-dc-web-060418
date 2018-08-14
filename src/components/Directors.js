import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <React.Fragment>
      <h1>Directors Page</h1>
      {directors.map( director => {
        return(
          <div>
          <h1>{director.name}</h1>
          <ul>
            {director.movies.map( movie => <li>{movie}</li>)}
          </ul>
          </div>
        )
      })}
   
    </React.Fragment>
  );
}

export default Directors
