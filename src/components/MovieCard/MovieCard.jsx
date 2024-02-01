import React from 'react';

const MovieCard = ({movie,onClick}) => {
  return (
    <div className="movie" key={movie.id} onClick ={()=> onClick(movie)}>
      <div>
        <p>{movie.premiered}</p>
      </div>

      <div>
        <img src={movie.image !== null ? movie.image.medium : "https://via.placeholder.com/400"} alt={movie.name} />
      </div>

      <div>
        <span>{movie.language}</span>
        <h3>{movie.name}</h3>
      </div>
    </div>
  );
}

export default MovieCard;