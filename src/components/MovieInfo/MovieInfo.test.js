import React from "react";
import renderer from "react-test-renderer";

import MovieInfo from "./MovieInfo";
import { timeConvert, dateConvert, ratingConvert } from "./utils";

it("MovieInfo renders correctly", () => {
  const props = {
    hideInfo: () => {},
    movie: {
      backdrop_path: "",
      title: "",
      vote_average: 1,
      vote_count: 1,
      genres: [{ name: "" }],
      runtime: 100,
      release_date: "",
      tagline: "",
      overview: "",
      homepage: "",
    },
    show: () => {},
    add: () => {},
    isFavorite: true,
  };
  const movieInfo = renderer.create(<MovieInfo {...props} />).toJSON();
  expect(movieInfo).toMatchSnapshot();
});

it("timeConvert returns time correctly", () => {
  expect(timeConvert(123)).toEqual("2h03");
  expect(timeConvert(130)).toEqual("2h10");
  expect(timeConvert(50)).toEqual("0h50");
});

it("dateConvert returns date correctly", () => {
  expect(dateConvert("2019-11-20")).toEqual("20/11/2019");
});

it("ratingConvert returns rating correctly", () => {
  expect(ratingConvert(8.2)).toEqual(4);
  expect(ratingConvert(7.2)).toEqual(4);
});
