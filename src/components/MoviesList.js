import React, { useState, useEffect } from "react";
import axios from "axios";

import Movie from "./Movie";
import MovieInfo from "./MovieInfo";

import "./MoviesList.css";

const APIKey = "92b418e837b833be308bbfb1fb2aca1e";

const MoviesList = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [showMovieInfo, setShowMovieInfo] = useState(false);
  const [movie, setMovie] = useState(null)


  // Functions for open and close modal for movie info
  const showInfo = async (e) => {
    setShowMovieInfo(true);
      // Get Movie Info from API
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${e.target.id}?api_key=${APIKey}&language=fr`
    )
    setMovie(result.data)
  };

  const hideInfo = () => {
    setShowMovieInfo(false);
    setMovie(null)
  };

  // Scroll Function
  const getMoreMovie = () => {

  }

  // Get Movies List from API
  const getMoviesList = async () => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=fr&page=1`
    );
    setMoviesList(result.data.results);
  };

  useEffect(() => {getMoviesList()}, []);

  return (
    <div className="moviesListContainer">
      {moviesList.map((movie) => (
        <Movie 
        movie={movie} 
        key={movie.id} 
        showInfo={showInfo} 
        />
      ))}
      <MovieInfo movie={movie} hideInfo={hideInfo} show={showMovieInfo}/>
    </div>
  );
};

export default MoviesList;
