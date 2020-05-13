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
          <h2>{movie.title}</h2>
          <div className='movieInfoFacts'>
            <p className="movieInfoGenre">{movie.genres[0].name}</p>
            <p className="movieInfoTime">{timeConvert(movie.runtime)}</p>
            <p className="movieInfoDate">{movie.release_date}</p>
          </div>
          <p className="movieInfoOverview">{movie.overview}</p>
        </div>
      )}
    </div>
  );
};

export default MovieInfo;
