import React from "react";
import Movie from "./Movie";
import renderer from "react-test-renderer";

it("Movie renders correctly", () => {
  const props = {
    movie: { id: 1, poster_path: "", title: "" },
    showInfo: () => {},
  };
  const movie = renderer.create(<Movie {...props} />).toJSON();
  expect(movie).toMatchSnapshot();
});
