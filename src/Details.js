import React from "react";
import { connect } from "react-redux";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import Modal from "./Modal";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends React.Component {
  state = { loading: true, showModal: false };

  componentDidMount() {
    // throw new Error("lol");

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
      .catch(err => this.setState({ error: err }));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  adopt = () => navigate(this.state.url);

  render() {
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

          <button
            type="button"
            style={{ backgroundColor: this.props.theme }}
            onClick={this.toggleModal}
          >
            Adopt {name}
          </button>

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

const WrappedDetails = connect(({ theme }) => ({ theme }))(Details);

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <WrappedDetails {...props} />
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
