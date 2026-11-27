import FontSizeWidget from "./components/FontSizeWidget";
import TextAlignWidget from "./components/TextAlignWidget";
import RgbSliderWidget from "./components/RgbSliderWidget";
import ClockWidget from "./components/ClockWidget";
import ColorNameWidget from "./components/ColorNameWidget";
import { useTextAlign } from "./components/hooks/useTextAlign";
import { useRgbColor } from "./components/hooks/useRgbColor";

export default function App() {
  const { align, setAlign } = useTextAlign();
  const { rgb, colorString, hexString, updateChannel, resetColor } =
    useRgbColor();

  return (
    <div>
      <header className="app-header">
        <div className="app-header__left" />
        <h1 className="app-header__title">My App</h1>
        <div className="app-header__right">
          <ClockWidget />
          <div className="app-header__stacked-controls">
            <FontSizeWidget />
            <TextAlignWidget align={align} onChange={setAlign} />
          </div>
        </div>
      </header>

      <div className="app-subbar">
        <RgbSliderWidget
          rgb={rgb}
          colorString={colorString}
          hexString={hexString}
          onChange={updateChannel}
          onReset={resetColor}
        />
      </div>

      <main className="app-main" style={{ textAlign: align }}>
        <p style={{ color: colorString }}>
          Use the controls above to check the clock, scale font size, change
          alignment, or mix an RGB color.
        </p>

        <ColorNameWidget />
      </main>
    </div>
  );
}
