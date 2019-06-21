import React from "react";

const Details = props => {
  return (
    <div>
      <h1>Details page</h1>
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
  );
};

export default Details;

/*
props

{
  "path": "/details/:id",
  "id": "9468194",
  "uri": "/details/9468194",
  "location": {
    "href": "http://localhost:1234/details/9468194",
    "ancestorOrigins": {},
    "origin": "http://localhost:1234",
    "protocol": "http:",
    "host": "localhost:1234",
    "hostname": "localhost",
    "port": "1234",
    "pathname": "/details/9468194",
    "search": "",
    "hash": "",
    "state": {
      "key": "1561121875533"
    },
    "key": "1561121875533"
  }
}

*/
