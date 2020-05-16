import React, { useState, useEffect } from "react";
import axios from "axios";

import Movie from "./Movie";
import MovieInfo from "./MovieInfo";

import "./MoviesList.css";

const APIKey = "92b418e837b833be308bbfb1fb2aca1e";

const MoviesList = (props) => {
  const [moviesList, setMoviesList] = useState(null);
  const [showMovieInfo, setShowMovieInfo] = useState(false);
  const [movie, setMovie] = useState(null);
  const [genre, setGenre] = useState(null);
  const [favoritesList, setFavoritesList] = useState({});
  const [isFavorite, setIsFavorite] = useState(false)

  // Function to open modal for movie info
  const showInfo = async (e) => {
    setShowMovieInfo(true);
    // Test is favorite
    if (favoritesList[e.target.id] !== undefined) {
      setIsFavorite(true)
    }
    // Get Movie Info from API
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${e.target.id}?api_key=${APIKey}&language=fr`
    );
    setMovie(result.data);

  };
  // Function to close modal for movie info
  const hideInfo = () => {
    setShowMovieInfo(false);
    setMovie(null);
    setIsFavorite(false)
  };

  // Add or remove a movie in my list
  const addFavorite = () => {
    if (favoritesList[movie.id] === undefined) {
      setFavoritesList({...favoritesList, [movie.id]: movie })
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
      const favoritesListTmp = {...favoritesList}
      delete favoritesListTmp[movie.id]
      setFavoritesList(favoritesListTmp)
    }
  }

  // Get Movies List from API
  const getMoviesList = async () => {
    setMoviesList(null);
    const result = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&${
        genre > 0 ? "with_genres=" + genre : ""
      }`
    );
    setMoviesList(result.data.results);
  };

  // Get Movie Genre
  const getGenre = (s) => {
    let idGenre = 0;
    if (s === "action") {
      idGenre = 28;
    } else if (s === "aventure") {
      idGenre = 12;
    } else if (s === "comedie") {
      idGenre = 35;
    } else if (s === "drame") {
      idGenre = 18;
    } else if (s === "familial") {
      idGenre = 10751;
    } else if (s === "fantastique") {
      idGenre = 14;
    }
    return idGenre;
  };

  useEffect(() => {
    getMoviesList();
  }, [genre]);
  useEffect(() => {
    setGenre(getGenre(props.match.params.genre));
  }, [props.match.params.genre]);

  return moviesList === null ? (
    <div className="loader"></div>
  ) : (
    <div className="moviesListContainer">
      {props.match.params.genre !== "favoris" ? (
        moviesList.map(movie => (
          <Movie movie={movie} key={movie.id} showInfo={showInfo} />
        ))
      ) : Object.keys(favoritesList).length === 0 ? (
        <h2 className='noFavorite'>Il n'y a aucun film dans votre liste</h2>
      ) : (
        Object.keys(favoritesList).map(movieId => (
          <Movie movie={favoritesList[movieId]} key={movieId} showInfo={showInfo} />
        ))
      )}
      <MovieInfo movie={movie} hideInfo={hideInfo} show={showMovieInfo} add={addFavorite} isFavorite={isFavorite}/>
    </div>
  );
};

export default MoviesList;
