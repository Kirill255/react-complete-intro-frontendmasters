import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet"; // ANIMALS is array with pets
import useDropdown from "./hooks/useDropdown";

const Search = () => {
  const [location, setLocation] = useState("Seattle, WA");
  // const [animal, setAnimal] = useState("dog"); // or try ""
  // const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  // prettier-ignore
  const [animal, AnimalDropdown, setAnimal] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    // pet.breeds("dog").then(console.log, console.error); // get http://pets.dev-apis.com/types/dog/breeds

    // before request
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedsStr = apiBreeds.map(({ name }) => name); // get only names
      setBreeds(breedsStr);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

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
