import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import pet, { ANIMALS } from "@frontendmasters/pet"; // ANIMALS is array with pets
import Results from "./Results";
import useDropdown from "./hooks/useDropdown";
import { changeLocation, changeTheme } from "./actions";

const Search = props => {
  const [breeds, setBreeds] = useState([]);
  const [pets, setPets] = useState([]);
  // prettier-ignore
  const [animal, AnimalDropdown, setAnimal] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  async function requestPets() {
    const { animals } = await pet.animals({
      location: props.location,
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
      <h2>{props.location || "Type location"}</h2>
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
            value={props.location}
            onChange={e => props.setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>

        <AnimalDropdown />
        <BreedDropdown />

        <label htmlFor="location">
          Theme
          <select
            value={props.theme}
            onChange={e => props.setTheme(e.target.value)}
            onBlur={e => props.setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>

        <button type="submit" style={{ backgroundColor: props.theme }}>
          Submit
        </button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default connect(
  ({ location, theme }) => ({ location, theme }),
  dispatch => ({
    setLocation: location => dispatch(changeLocation(location)),
    setTheme: theme => dispatch(changeTheme(theme))
  })
)(Search);
