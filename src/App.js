import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Search from "./Search";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("darkblue"); // theme это [value, setValue] и мы сделали контекст с дэфолтным значением вида ["green", () => {}]

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <Search path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
