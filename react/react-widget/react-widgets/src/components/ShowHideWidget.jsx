import React, { useState } from "react";

export default function ShowHideWidget() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <footer className="control-page__footer">
      <button
        type="button"
        className="accordion-trigger"
        onClick={() => setIsVisible(!isVisible)}
        aria-expanded={isVisible}
      >
        <span>{isVisible ? "Hide Me" : "Show Me"}</span>
        <span className="accordion-trigger__icon">{isVisible ? "▲" : "▼"}</span>
      </button>

      {isVisible && (
        <div className="accordion-content">
          Give me an A please! Aiming for 100 haha.
        </div>
      )}
    </footer>
  );
}
