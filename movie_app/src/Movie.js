import React from "react";
import PropTypes from 'prop-types';
import './Movie.css'

// stateless component(functional component): return하기만 하면 됨 (state없음, 라이프사이클 없음)
function Movie({title, poster}){
  return (
    <div>
        <h1>{title}</h1>
        <MoviePoster poster={poster} />
      </div>
  )
}

function MoviePoster({poster}) {
  return (
    <img src={poster} alt="Movie Poster" />
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

export default Movie
