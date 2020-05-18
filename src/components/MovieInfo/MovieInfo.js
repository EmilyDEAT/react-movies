import React, { useState, useEffect } from "react";
import Rater from "react-rater";

import { timeConvert, dateConvert, ratingConvert } from "./utils";

import { ReactComponent as Heart } from "../../images/heart.svg";
import cross from "../../images/cross.png";

import "./MovieInfo.css";

const MovieInfo = ({ hideInfo, movie, show, add, isFavorite }) => {
  const [loaded, setLoaded] = useState(false);

  const handleImgLoaded = () => {
    setLoaded(true);
  };

  useEffect(() => {
    setLoaded(false);
  }, [movie]);

  return (
    <div
      className={`movieInfoContainer ${show ? "show" : "hide"}`}
      onClick={hideInfo}
    >
      {movie === null ? (
        <div className="loader"></div>
      ) : (
        <div className="movieInfo" onClick={(e) => e.stopPropagation()}>
          <img
            className="movieInfoClose"
            src={cross}
            onClick={hideInfo}
            alt="close"
          />
          {loaded ? null : <div className="movieInfoPlaceholder"></div>}
          <img
            className={loaded ? "movieInfoImg" : "movieInfoImgHidden"}
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
            onLoad={handleImgLoaded}
          />
          <div className="movieInfoTitleContainer">
            <h2 className="movieInfoTitle">{movie.title}</h2>
            <Heart
              className={`heart ${isFavorite ? "red" : ""}`}
              onClick={add}
            />
          </div>
          <div className="movieInfoRating">
            <Rater
              total={5}
              rating={ratingConvert(movie.vote_average)}
              interactive={false}
            />
            <p className="movieInfoVotes">({movie.vote_count} Votes)</p>
          </div>
          <div className="movieInfoFacts">
            <p className="movieInfoGenre">{movie.genres[0].name}</p>
            <p className="movieInfoTime">{timeConvert(movie.runtime)}</p>
            <p className="movieInfoDate">
              Sortie le {dateConvert(movie.release_date)}
            </p>
          </div>
          <strong className="movieInfoTagline">{movie.tagline}</strong>
          <p className="movieInfoOverview">{movie.overview}</p>
          <a
            className="movieInfoSite"
            href={movie.homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            Plus d'infos
          </a>
        </div>
      )}
    </div>
  );
};

export default MovieInfo;
