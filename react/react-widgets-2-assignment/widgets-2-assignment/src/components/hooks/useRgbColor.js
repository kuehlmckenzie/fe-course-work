import { useState, useEffect } from "react";

const DEFAULT_RGB = { r: 59, g: 130, b: 246 }; // Default blue

export function useRgbColor() {
  const [rgb, setRgb] = useState(() => {
    try {
      const saved = localStorage.getItem("app-rgb-color");
      return saved ? JSON.parse(saved) : DEFAULT_RGB;
    } catch {
      return DEFAULT_RGB;
    }
  });

  useEffect(() => {
    localStorage.setItem("app-rgb-color", JSON.stringify(rgb));
  }, [rgb]);

  const updateChannel = (channel, value) => {
    setRgb((prev) => ({
      ...prev,
      [channel]: Math.min(255, Math.max(0, Number(value))),
    }));
  };

  const resetColor = () => setRgb(DEFAULT_RGB);

  const colorString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const hexString = `#${[rgb.r, rgb.g, rgb.b]
    .map((n) => n.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()}`;

  return { rgb, colorString, hexString, updateChannel, resetColor };
}
