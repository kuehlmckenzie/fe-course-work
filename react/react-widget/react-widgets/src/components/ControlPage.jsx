import React from "react";
import GreetingWidget from "./GreetingWidget.jsx";
import CountingWidget from "./countingwidget.jsx";
import ShowHideWidget from "./ShowHideWidget";
import "./Control.css";

export default function ControlPage() {
  return (
    <div className="control-page">
      <GreetingWidget />
      <CountingWidget />
      <ShowHideWidget />
    </div>
  );
}
