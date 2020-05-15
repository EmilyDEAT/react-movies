import React, { useState, useEffect } from "react";
import axios from "axios";

import Movie from "./Movie";
import MovieInfo from "./MovieInfo";

import "./MoviesList.css";

const APIKey = "92b418e837b833be308bbfb1fb2aca1e";

const MoviesList = (props) => {
  const [moviesList, setMoviesList] = useState(null);
  const [showMovieInfo, setShowMovieInfo] = useState(false);
  const [movie, setMovie] = useState(null)
  const [genre, setGenre] = useState(null)

  // Function to open modal for movie info
  const showInfo = async (e) => {
    setShowMovieInfo(true);
      // Get Movie Info from API
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${e.target.id}?api_key=${APIKey}&language=fr`
    )
    setMovie(result.data)
  };
 // Function to close modal for movie info
  const hideInfo = () => {
    setShowMovieInfo(false);
    setMovie(null)
  };

  // Get Movies List from API
  const getMoviesList = async () => {
      setMoviesList(null)
      const result = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&${genre > 0 ? "with_genres=" + genre : ""}`
      );
      setMoviesList(result.data.results)
  };

  // Get Movie Genre
  const getGenre = (s) => {
    let idGenre = 0
    if (s === "action") {
      idGenre = 28
    } else if (s === "aventure") {
      idGenre = 12
    } else if (s === "comedie") {
      idGenre = 35
    } else if (s === "drame") {
      idGenre = 18
    } else if (s === "familial") {
      idGenre = 10751
    } else if (s === "fantastique") {
      idGenre = 14
    }
    return idGenre
  }

  useEffect(() => {getMoviesList()}, [genre]);
  useEffect(() => {setGenre(getGenre(props.match.params.genre))}, [props.match.params.genre]);

  return moviesList === null ? <div className='loader'></div> : (
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
