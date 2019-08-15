import React from "react";
import { Photo } from "@frontendmasters/pet";

interface IProps {
  media: Photo[];
}

interface IState {
  photos: string[];
  active: number;
}

class Carousel extends React.Component<IProps, IState> {
  public state = {
    photos: [],
    active: 0
  };

  public static getDerivedStateFromProps({ media }: IProps) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  public handleIndexClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    if (event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index
      });
    }
  };

  public render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              data-index={index}
              className={index === active ? "active" : ""}
              src={photo}
              onClick={this.handleIndexClick}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
