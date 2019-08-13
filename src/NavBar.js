/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import colors from "./colors";

const color = "deeppink";

const NavBar = () => {
  const [padding, setPadding] = useState(15);

  return (
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        position: sticky;
        top: 0;
        background-color: ${colors.dark};
        padding: ${padding}px;
        z-index: 10;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          color: ${color};

          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        `}
        aria-label="logo"
        role="img"
      >
        Logo 🐩
      </span>
    </header>
  );
};

export default NavBar;
