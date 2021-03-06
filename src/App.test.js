import React from "react";
import renderer from "react-test-renderer";
import { HashRouter } from "react-router-dom";

import App from "./App";

it("App renders correctly", () => {
  const app = renderer
    .create(
      <HashRouter>
        <App />
      </HashRouter>
    )
    .toJSON();
  expect(app).toMatchSnapshot();
});
