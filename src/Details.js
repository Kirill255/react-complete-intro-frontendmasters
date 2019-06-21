import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends React.Component {
  state = { loading: true };

  componentDidMount() {
    // throw new Error("lol");

    pet
      .animal(Number(this.props.id))
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          breed: animal.breeds.primary,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          loading: false
        });
      })
      .catch(err => this.setState({ error: err }));
  }

  render() {
    if (this.state.loading) {
      return <h1>loading ... </h1>;
    }

    const { name, animal, breed, location, description, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />

        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button type="button" style={{ backgroundColor: theme }}>
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// export default Details;

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

/*
контекст сейчас содержит ["green", () => {}], тоесть массив в терминах хуков это [theme, setTheme], нам нужно получить первый (вернее нулевой по индексу) элемент

<ThemeContext.Consumer>
  {(themeHook) => (
    <button type="button" style={{ backgroundColor: themeHook[0] }}>
      Adopt {name}
    </button>
  )}
</ThemeContext.Consumer>

или вот так

<ThemeContext.Consumer>
  {([theme]) => (
    <button type="button" style={{ backgroundColor: theme }}>
      Adopt {name}
    </button>
  )}
</ThemeContext.Consumer>
*/
