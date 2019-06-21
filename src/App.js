import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Search from "./Search";
import Details from "./Details";

const App = () => (
  <React.StrictMode>
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <Search path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  </React.StrictMode>
);

render(<App />, document.getElementById("root"));
