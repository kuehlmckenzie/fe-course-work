import { Component } from "react";
import ClockWidget from "./ClockWidget";
import "../../components/styles/ClockWidget.scss";

export default class ClockContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: true,
    };
    this.toggleClock = this.toggleClock.bind(this);
  }

  toggleClock() {
    this.setState((prevState) => ({
      isMounted: !prevState.isMounted,
    }));
  }

  render() {
    const { isMounted } = this.state;

    return (
      <div
        className="clock-widget"
        role="group"
        aria-label="Clock widget controls"
      >
        <button
          type="button"
          className="clock-widget__btn"
          onClick={this.toggleClock}
          aria-pressed={isMounted}
        >
          {isMounted ? "Unmount Clock" : "Mount Clock"}
        </button>

        {isMounted ? (
          <ClockWidget />
        ) : (
          <span className="clock-widget__placeholder">Clock unmounted</span>
        )}
      </div>
    );
  }
}
