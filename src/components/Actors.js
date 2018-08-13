import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
          return (
          <div key={actors.indexOf(actor)}>
            {actor.name}
            <ul>{actor.movies.map(movie => <li key={actor.movies.indexOf(movie)}>{movie}</li>)}</ul>
          </div>)
          })}
    </div>
  );
};

export default Actors;
