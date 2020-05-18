import React from "react";
import renderer from "react-test-renderer";

import MoviesList from "./MoviesList";
import getGenre from "./utils";

it("MoviesList renders correctly", () => {
  const props = { match: { params: { genre: "" } } };
  const moviesList = renderer.create(<MoviesList {...props} />).toJSON();
  expect(moviesList).toMatchSnapshot();
});

it("getGenre returns the right number", () => {
  expect(getGenre("action")).toEqual(28);
  expect(getGenre("aventure")).toEqual(12);
  expect(getGenre("comedie")).toEqual(35);
  expect(getGenre("drame")).toEqual(18);
  expect(getGenre("familial")).toEqual(10751);
  expect(getGenre("fantastique")).toEqual(14);
  expect(getGenre("")).toEqual(0);
});
