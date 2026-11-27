import { useState, useEffect } from "react";

const MIN_SCALE = 80;
const MAX_SCALE = 150;
const STEP = 5;

export function useFontSize(defaultScale = 100) {
  const [scale, setScale] = useState(() => {
    const saved = localStorage.getItem("app-font-scale");
    return saved ? Number(saved) : defaultScale;
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${scale}%`;
    localStorage.setItem("app-font-scale", scale);
  }, [scale]);

  const increase = () => setScale((prev) => Math.min(MAX_SCALE, prev + STEP));
  const decrease = () => setScale((prev) => Math.max(MIN_SCALE, prev - STEP));
  const reset = () => setScale(defaultScale);

  return {
    scale,
    increase,
    decrease,
    reset,
    canIncrease: scale < MAX_SCALE,
    canDecrease: scale > MIN_SCALE,
  };
}
