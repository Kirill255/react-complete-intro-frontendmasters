import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Search from "./Search";
// import Details from "./Details";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details"));

const App = () => {
  const themeHook = useState("darkblue"); // theme это [value, setValue] и мы сделали контекст с дэфолтным значением вида ["green", () => {}]

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Suspense fallback={<h1>Loading route ...</h1>}>
            <Router>
              <Search path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
