import React, { Component } from "react";

class GreetingToggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isMorning: true };
  }

  toggleGreeting = () => {
    this.setState((prevState) => ({ isMorning: !prevState.isMorning }));
  };

  render() {
    const { isMorning } = this.state;

    return (
      <header className="control-page__header">
        <h2 className="control-page__greeting">
          {isMorning ? "Good Morning!" : "Good Evening!"}
        </h2>
        <button className="btn btn--pill" onClick={this.toggleGreeting}>
          Switch to {isMorning ? "Evening" : "Morning"}
        </button>
      </header>
    );
  }
}

export default GreetingToggle;
