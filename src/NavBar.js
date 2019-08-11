import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const NavBar = () => (
  <header
    css={css`
      position: sticky;
      top: 0;
      background-color: #333;
      padding: 15px;
      z-index: 10;
    `}
  >
    <Link to="/">Adopt Me!</Link>
    <span aria-label="logo" role="img">
      🐩
    </span>
  </header>
);

export default NavBar;
