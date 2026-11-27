import { useState } from "react";
import "../../components/styles/ColorNameWidget.scss";

function isValidCssColor(value) {
  const trimmed = value.trim();
  if (!trimmed) return false;
  return CSS.supports("color", trimmed);
}

export default function ColorNameWidget() {
  const [inputValue, setInputValue] = useState("royalblue");
  const trimmed = inputValue.trim();
  const isValid = isValidCssColor(trimmed);

  return (
    <div
      className="color-name-widget"
      role="group"
      aria-label="Color name text preview"
    >
      <div className="color-name-widget__controls">
        <label htmlFor="color-name-input" className="color-name-widget__label">
          Type a color name:
        </label>
        <input
          id="color-name-input"
          type="text"
          className="color-name-widget__input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="e.g. crimson, teal, gold"
          autoComplete="off"
        />
        <span
          className={`color-name-widget__status ${
            isValid
              ? "color-name-widget__status--valid"
              : "color-name-widget__status--invalid"
          }`}
        >
          {trimmed === "" ? "Empty" : isValid ? "Valid color" : "Unknown color"}
        </span>
      </div>

      {/* Rendered text matching the entered color name */}
      <p
        className="color-name-widget__output"
        style={{ color: isValid ? trimmed : "#111827" }}
      >
        {trimmed || "Start typing a color name above..."}
      </p>
    </div>
  );
}
