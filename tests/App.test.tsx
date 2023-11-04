import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    /* screen.debug(); */ //Esto me puede servir para ver como se renderiza todo el html de mi apk
  });
});
