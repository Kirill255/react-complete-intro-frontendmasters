import React, { useState } from "react";

const Search = () => {
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <h2>{location || "Type location"}</h2>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Search;
