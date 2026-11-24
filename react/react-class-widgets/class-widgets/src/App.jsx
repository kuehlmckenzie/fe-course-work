import React, { Component } from "react";
import "./App.css";
import GreetingToggle from "./components/GreetingToggle";
import CounterWidget from "./components/CounterWidget";
import ShowHideWidget from "./components/ShowHideWidget";

class App extends Component {
  render() {
    return (
      <main className="control-page">
        <GreetingToggle />
        <CounterWidget />
        <ShowHideWidget />
      </main>
    );
  }
}

export default App;
