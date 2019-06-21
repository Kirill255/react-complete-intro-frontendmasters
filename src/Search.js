import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet"; // ANIMALS is array with pets
import useDropdown from "./hooks/useDropdown";

const Search = () => {
  const [location, setLocation] = useState("Seattle, WA");
  // const [animal, setAnimal] = useState("dog"); // or try ""
  // const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

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

        <AnimalDropdown />
        <BreedDropdown />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Search;
