import React from "react";
import { render } from "react-dom";
import Search from "./Search";

const App = () => (
  <div>
    <h1>Adopt Me!</h1>
    <Search/>
  </div>
);

render(<App />, document.getElementById("root"));
