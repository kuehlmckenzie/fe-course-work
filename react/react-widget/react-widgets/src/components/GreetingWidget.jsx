import React, { useState } from "react";
import { Component } from "react";
export default function GreetingWidget() {
  const [isWelcomed, setIsWelcomed] = useState(true);

  return (
    <header className="control-page__header">
      <h2 className="control-page__greeting">
        {isWelcomed ? "👋 Welcome back!" : "🌙 See you later!"}
      </h2>
      <button
        type="button"
        className="btn btn--pill"
        onClick={() => setIsWelcomed(!isWelcomed)}
      >
        Toggle Me!
      </button>
    </header>
  );
}
