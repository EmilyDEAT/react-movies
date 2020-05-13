import React, { useState, useEffect } from "react";
import axios from "axios";

import Movie from "./Movie";

import "./MoviesList.css";

const APIKey = "92b418e837b833be308bbfb1fb2aca1e";

const MoviesList = () => {
  const [moviesList, setMoviesList] = useState([]);

  const getMoviesList = async () => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=fr&page=1`
    );
    setMoviesList(result.data.results);
  };

  useEffect(getMoviesList, []);

  return (
    <div className="moviesListContainer">
      {moviesList.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MoviesList;
