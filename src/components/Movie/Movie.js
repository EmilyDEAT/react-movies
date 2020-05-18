import React, { useState } from "react";

import "./Movie.css";

const Movie = ({ movie, showInfo }) => {
  const [loaded, setLoaded] = useState(false);

  const handleImgLoaded = () => {
    setLoaded(true);
  };

  return (
    <div className="movieContainer">
      {loaded ? null : <div className="movieContainerPlaceholder"></div>}
      <img
        id={movie.id}
        className={loaded ? "movieImg" : "movieImgHidden"}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        onClick={showInfo}
        onLoad={handleImgLoaded}
      />
    </div>
  );
};

export default Movie;
