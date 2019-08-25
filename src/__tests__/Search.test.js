import React from "react";
import { render, cleanup } from "@testing-library/react";
import pet, { ANIMALS, _breeds, _dogs } from "@frontendmasters/pet";
import Search from "../Search";

afterEach(cleanup);

test("Search", async () => {
  const { getByTestId } = render(<Search />);

  const animalDropdown = getByTestId("use-dropdown-animal");
  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);

  expect(pet.breeds).toHaveBeenCalled(); // api was called
  const breedDropdown = getByTestId("use-dropdown-breed");
  expect(breedDropdown.children.length).toEqual(_breeds.length + 1); // and we get result
});
