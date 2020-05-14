import React from "react";

import cross from "../images/cross.png";

import "./MovieInfo.css";

const MovieInfo = ({ hideInfo, movie, show }) => {
  // Time convert
  const timeConvert = (n) => {
    const hours = Math.floor(n / 60);
    const minutes = n - 60 * hours;
    const prettyMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}h${prettyMinutes}`;
  };

   // Date convert
   const dateConvert = (s) => {
     const day = s[8] + s[9]
     const month = s[5] + s[6]
     const year = s[0] + s[1] + s[2] + s[3]
     return `${day}/${month}/${year}`
   }

  return (
    <div className={`movieInfoContainer ${show ? "show" : "hide"}`}>
      {movie === null ? (
        "Loading"
      ) : (
        <div className="movieInfo">
          <img
            className="movieInfoClose"
            src={cross}
            onClick={hideInfo}
            alt="close"
          />
          <img
            className="movieInfoImg"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
          />
          <h2 className='movieInfoTitle'>{movie.title}</h2>
          <div className='movieInfoFacts'>
            <p className="movieInfoGenre">{movie.genres[0].name}</p>
            <p className="movieInfoTime">{timeConvert(movie.runtime)}</p>
            <p className="movieInfoDate">Sortie le {dateConvert(movie.release_date)}</p>
          </div>
          <strong className="movieInfoTagline">{movie.tagline}</strong>
          <p className="movieInfoOverview">{movie.overview}</p>
        </div>
      )}
    </div>
  );
};

export default MovieInfo;
