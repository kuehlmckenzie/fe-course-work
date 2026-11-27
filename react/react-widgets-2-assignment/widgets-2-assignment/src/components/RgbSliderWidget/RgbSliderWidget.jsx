import "../styles/RgbSliderWidget.scss";

const CHANNELS = [
  { key: "r", label: "Red", short: "R", color: "#ef4444" },
  { key: "g", label: "Green", short: "G", color: "#22c55e" },
  { key: "b", label: "Blue", short: "B", color: "#3b82f6" },
];

export default function RgbSliderWidget({
  rgb,
  colorString,
  hexString,
  onChange,
  onReset,
}) {
  return (
    <div className="rgb-widget" role="group" aria-label="RGB color mixer">
      {/* Live rendered color preview */}
      <div className="rgb-widget__preview">
        <div
          className="rgb-widget__swatch"
          style={{ backgroundColor: colorString }}
          aria-label={`Current color preview: ${colorString}`}
        />
        <div className="rgb-widget__codes">
          <span className="rgb-widget__hex">{hexString}</span>
          <span className="rgb-widget__rgb">{colorString}</span>
        </div>
      </div>

      {/* R, G, B Sliders */}
      <div className="rgb-widget__sliders">
        {CHANNELS.map(({ key, label, short, color }) => (
          <label key={key} className="rgb-widget__channel">
            <span className="rgb-widget__label" style={{ color }}>
              {short}
            </span>
            <input
              type="range"
              min="0"
              max="255"
              value={rgb[key]}
              onChange={(e) => onChange(key, e.target.value)}
              className="rgb-widget__slider"
              style={{ accentColor: color }}
              aria-label={`${label} channel`}
            />
            <span className="rgb-widget__value">{rgb[key]}</span>
          </label>
        ))}
      </div>

      <button
        type="button"
        className="rgb-widget__reset"
        onClick={onReset}
        aria-label="Reset RGB color"
      >
        Reset
      </button>
    </div>
  );
}
