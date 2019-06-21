import React from "react";
import { Link, Redirect } from "@reach/router";

// https://reactjs.org/docs/error-boundaries.html
// https://github.com/danburzo/react-recipes/blob/master/recipes/error-boundaries.md
class ErrorBoundary extends React.Component {
  _isMounted = false;

  state = { hasError: false };

  componentDidMount() {
    this._isMounted = true;
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error: ", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        if (this._isMounted) {
          this.setState({ redirect: true });
        }
      }, 5000);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page or wait five seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
