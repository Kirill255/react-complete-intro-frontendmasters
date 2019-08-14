import express from "express";
import React from "react";
// import { renderToString } from "react-dom/server";
import { renderToNodeStream } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "../src/App";

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();
const parts = html.split("not rendered"); // we split the index.html markup into two parts, before and after "not rendered", and insert the rendered react app into the middle -> parts[0] + renderToString(reactMarkup) + parts[1]

const app = express();

app.use("/dist", express.static("dist"));
app.use((req, res) => {
  res.write(parts[0]); // immediately send first piece
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  const stream = renderToNodeStream(reactMarkup);

  // prettier-ignore
  stream.pipe(res, { end: false }); // send all the markup into the res, but don't end it once it's done

  stream.on("end", () => {
    res.write(parts[1]); // send second part
    res.end();
  });
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
