import "../styles/TextAlignWidget.scss";

const OPTIONS = [
  { value: "left", label: "Left", aria: "Align text left" },
  { value: "center", label: "Center", aria: "Align text center" },
  { value: "right", label: "Right", aria: "Align text right" },
];

export default function TextAlignWidget({ align, onChange }) {
  return (
    <div
      className="align-widget"
      role="group"
      aria-label="Text alignment controls"
    >
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`align-widget__btn ${align === option.value ? "align-widget__btn--active" : ""}`}
          onClick={() => onChange(option.value)}
          aria-pressed={align === option.value}
          aria-label={option.aria}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
