import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import pet, { ANIMALS, _breeds, _dogs } from "@frontendmasters/pet";
import Search from "../Search";

afterEach(cleanup);

test("Search", async () => {
  const { container, getByTestId, getByText } = render(<Search />);

  const animalDropdown = getByTestId("use-dropdown-animal");
  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);

  expect(pet.breeds).toHaveBeenCalled(); // api was called
  const breedDropdown = getByTestId("use-dropdown-breed");
  expect(breedDropdown.children.length).toEqual(_breeds.length + 1); // and we get result

  const searchResults = getByTestId("search-results");
  expect(searchResults.textContent).toEqual("No Pets Found");
  fireEvent(getByText("Submit"), new MouseEvent("click"));
  expect(pet.animals).toHaveBeenCalled(); // the method to request pets doesn't work as an async await
  expect(searchResults.children.length).toEqual(_dogs.length);

  // before run test
  expect(container.firstChild).toMatchInlineSnapshot();
});
