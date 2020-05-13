import React from 'react'

import './Movie.css'

const Movie = ({ movie, showInfo }) => {
  return (
    <div className='movieContainer'>
      <img id={movie.id} className='movieImg' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} onClick={showInfo}/>
    </div>
  )
}

export default Movie