import React from 'react'

import './Movie.css'

const Movie = ({ movie }) => {
  return (
    <div className='movieContainer'>
      <img className='movieImg' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
    </div>
  )
}

export default Movie