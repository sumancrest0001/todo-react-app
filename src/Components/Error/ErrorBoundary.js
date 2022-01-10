import React, { PureComponent} from 'react';
import ErrorMessage from './ErrorMessage';

class ErrorBoundary extends PureComponent {
  state = {
    error: false
  };

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.error(error);
    console.log(info);
  }

  render() {
    const {
      props: { children },
      state: { error }
    } = this;

    return error ? <ErrorMessage /> : children;
  }
}

export default ErrorBoundary;
