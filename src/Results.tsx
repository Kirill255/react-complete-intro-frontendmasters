import React, { FunctionComponent } from "react";
import { Animal } from "@frontendmasters/pet";
import Pet from "./Pet";

interface IProp {
  pets: Animal[];
}

const Results: FunctionComponent<IProp> = ({ pets }) => (
  <div className="search">
    {!pets.length ? (
      <h1>No Pets Found</h1>
    ) : (
      pets.map(pet => (
        <Pet
          key={pet.id}
          id={pet.id}
          animal={pet.type}
          name={pet.name}
          breed={pet.breeds.primary}
          media={pet.photos}
          location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
        />
      ))
    )}
  </div>
);

export default Results;
