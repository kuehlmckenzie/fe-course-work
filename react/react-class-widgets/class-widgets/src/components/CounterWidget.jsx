import React, { Component } from "react";

class CounterWidget extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count > 1 ? prevState.count - 1 : 1,
    }));
  };

  reset = () => {
    this.setState({ count: 1 });
  };

  render() {
    const { count } = this.state;

    return (
      <section className="control-page__counter">
        <span className="control-page__label">Counter</span>
        <div className="counter-controls">
          <button
            className="btn btn--circle btn--outline"
            onClick={this.decrement}
            disabled={count <= 1}
            aria-label="Decrease count"
          >
            −
          </button>
          <span className="counter-controls__value">{count}</span>
          <button
            className="btn btn--circle btn--primary"
            onClick={this.increment}
            aria-label="Increase count"
          >
            +
          </button>
        </div>
        <button className="btn btn--link" onClick={this.reset}>
          Reset
        </button>
      </section>
    );
  }
}

export default CounterWidget;
