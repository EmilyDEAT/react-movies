import React from "react";
import renderer from "react-test-renderer";
import { HashRouter } from "react-router-dom";

import NavBar from "./NavBar";

it("NavBar renders correctly", () => {
  const navBar = renderer
    .create(
      <HashRouter>
        <NavBar />
      </HashRouter>
    )
    .toJSON();
  expect(navBar).toMatchSnapshot();
});
