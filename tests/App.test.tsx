import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
/* redux */
import { Provider } from "react-redux";
import store from "../src/redux/store";

describe("App", () => {
  test("should render", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    screen.debug();
  });
});
