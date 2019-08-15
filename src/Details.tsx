import React from "react";
import pet, { Photo } from "@frontendmasters/pet";
import { navigate, RouteComponentProps } from "@reach/router";
import Modal from "./Modal";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

/* params ->  first: props, second: state
class Details extends React.Component<RouteComponentProps<{ id: string }>, { url: string, name: string, ... }> {}

Or we can set a default value for all of these properties in state,
This only works with public class properties. If you're doing this inside of a constructor, this doesn't work. Then you should use the method above
*/

class Details extends React.Component<RouteComponentProps<{ id: string }>> {
  public state = {
    loading: true,
    showModal: false,
    url: "",
    name: "",
    animal: "",
    breed: "",
    location: "",
    description: "",
    media: [] as Photo[]
  };

  public componentDidMount() {
    // throw new Error("lol");

    if (!this.props.id) {
      navigate("/");
      return;
    }

    pet
      .animal(Number(this.props.id))
      .then(({ animal }) => {
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          breed: animal.breeds.primary,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          loading: false
        });
      })
      .catch((err: Error) => this.setState({ error: err }));
  }

  public toggleModal = () =>
    this.setState({ showModal: !this.state.showModal });

  public adopt = () => navigate(this.state.url);

  public render() {
    if (this.state.loading) {
      return <h1>loading ... </h1>;
    }

    // prettier-ignore
    const { name, animal, breed, location, description, media , showModal } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />

        {/* eslint-disable-next-line */}
        <div onClick={console.log}>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                type="button"
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>

          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.toggleModal}>No, I am a monster</button>
                  <button onClick={this.adopt}>Yes</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

// export default Details;

// prettier-ignore
export default function DetailsWithErrorBoundary(props: RouteComponentProps<{ id: string }>) {
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
