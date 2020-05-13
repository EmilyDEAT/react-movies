import React from "react";

import cross from '../images/cross.png'

import "./MovieInfo.css";

const MovieInfo = ({ hideInfo, movie, show }) => {

  // Time convert
  const timeConvert = (n) => {
    const hours = Math.floor((n / 60));
    const minutes = n - 60 * hours
    const prettyMinutes = minutes < 10 ? `0${minutes}` : minutes
    return `${hours}h${prettyMinutes}`
    }

  return movie === null ? "Loading" : (
    <div className={`movieInfoContainer ${show ? "show" : "hide"}`}>
      <div className="movieInfo">
        <img className='movieInfoClose' src={cross} onClick={hideInfo} alt='close'/>
        <img className='movieInfoImg' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
        <h2>{movie.title}</h2>
        <p>{movie.genres[0].name}</p>
        <p>{timeConvert(movie.runtime)}</p>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
