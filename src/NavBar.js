/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const color = "deeppink";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

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
          display: inline-block;
          animation: ${spin} 1s ease infinite;

          &:hover {
            text-decoration: underline;
            cursor: pointer;
            animation-play-state: paused;
          }
        `}
        aria-label="logo"
        role="img"
      >
        L 🐩
      </span>
    </header>
  );
};

export default NavBar;
