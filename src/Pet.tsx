import React, { FunctionComponent } from "react";
import { Link } from "@reach/router";
import { Photo } from "@frontendmasters/pet";

interface IProps {
  id: number;
  name: string;
  animal: string;
  breed: string;
  media: Photo[];
  location: string;
}

const Pet: FunctionComponent<IProps> = ({ id, name, animal, breed, media, location }) => {
  let hero = "http://placecorgi.com/300/300"; // placeholder, if the image is not exist
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;

/*
// you may not define an interface, and immediately write all types directly inside

const Pet: FunctionComponent<{
  id: number;
  name: string;
  animal: string;
  breed: string;
  media: Photo[];
  location: string;
}> = ({ id, name, animal, breed, media, location }) => {}
*/