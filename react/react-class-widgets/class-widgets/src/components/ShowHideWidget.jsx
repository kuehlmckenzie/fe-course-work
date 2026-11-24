import React, { Component } from "react";

class ShowHideWidget extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: true };
  }

  toggleVisibility = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  };

  render() {
    const { isVisible } = this.state;

    return (
      <footer className="control-page__footer">
        <button className="accordion-trigger" onClick={this.toggleVisibility}>
          <span>{isVisible ? "Hide Details" : "Show Details"}</span>
          <span className="accordion-trigger__icon">
            {isVisible ? "▲" : "▼"}
          </span>
        </button>

        {isVisible && (
          <div className="accordion-content">
            This content is currently visible on the screen.
          </div>
        )}
      </footer>
    );
  }
}

export default ShowHideWidget;
