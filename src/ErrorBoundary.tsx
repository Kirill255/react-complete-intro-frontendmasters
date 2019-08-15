import React, { ErrorInfo } from "react";
import { Link, Redirect } from "@reach/router";

// https://reactjs.org/docs/error-boundaries.html
// https://github.com/danburzo/react-recipes/blob/master/recipes/error-boundaries.md
class ErrorBoundary extends React.Component {
  // https://stackoverflow.com/questions/53414723/typescript-react-avoid-setstate-on-unmounted-components
  // isMounted is a private property of React.Component. Rename it and it should work
  private _isMounted: boolean = false;

  public state = { hasError: false, redirect: false };

  public componentDidMount() {
    this._isMounted = true;
  }

  public static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error: ", error, info);
  }

  public componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        if (this._isMounted) {
          this.setState({ redirect: true });
        }
      }, 5000);
    }
  }

  public componentWillUnmount() {
    this._isMounted = false;
  }

  public render() {
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
