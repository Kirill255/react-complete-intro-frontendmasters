import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet"; // ANIMALS is array with pets
import Results from "./Results";
import useDropdown from "./hooks/useDropdown";
import ThemeContext from "./ThemeContext";

const Search = () => {
  const [theme, setTheme] = useContext(ThemeContext); // контекст сейчас содержит ["green", () => {}]

  const [location, setLocation] = useState("Seattle, WA");
  // const [animal, setAnimal] = useState("dog"); // or try ""
  // const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  // prettier-ignore
  const [animal, AnimalDropdown, setAnimal] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

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
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
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

        <label htmlFor="location">
          Theme
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>

        <button type="submit" style={{ backgroundColor: theme }}>
          Submit
        </button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default Search;
