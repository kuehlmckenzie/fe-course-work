import { useFontSize } from "../hooks/useFontSize";
import "../styles/FontSizeWidget.css";

export default function FontSizeWidget() {
  const { scale, increase, decrease, reset, canIncrease, canDecrease } =
    useFontSize();

  return (
    <div className="font-widget" role="group" aria-label="Font size controls">
      <button
        type="button"
        className="font-widget__btn"
        onClick={decrease}
        disabled={!canDecrease}
        aria-label="Decrease font size"
      >
        A-
      </button>

      <button
        type="button"
        className="font-widget__btn font-widget__btn--reset"
        onClick={reset}
        aria-label="Reset font size to 100%"
      >
        {scale}%
      </button>

      <button
        type="button"
        className="font-widget__btn"
        onClick={increase}
        disabled={!canIncrease}
        aria-label="Increase font size"
      >
        A+
      </button>
    </div>
  );
}
