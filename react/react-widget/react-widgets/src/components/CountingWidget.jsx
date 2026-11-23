import React, { useState } from "react";

export default function CountingWidget() {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    setCount((prev) => Math.max(1, prev - 1));
  };

  return (
    <section className="control-page__counter">
      <span className="control-page__label">Item Counter</span>

      <div className="counter-controls">
        <button
          type="button"
          className="btn btn--circle btn--outline"
          onClick={handleDecrement}
          disabled={count <= 1}
          aria-label="Decrease count"
        >
          −
        </button>

        <span className="counter-controls__value">{count}</span>

        <button
          type="button"
          className="btn btn--circle btn--primary"
          onClick={() => setCount((prev) => prev + 1)}
          aria-label="Increase count"
        >
          +
        </button>
      </div>

      <button
        type="button"
        className="btn btn--link"
        onClick={() => setCount(1)}
      >
        Reset to 1
      </button>
    </section>
  );
}
