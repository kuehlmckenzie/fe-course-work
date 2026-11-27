import { useState, useEffect } from "react";

const VALID_ALIGNMENTS = ["left", "center", "right"];

export function useTextAlign(defaultAlign = "left") {
  const [align, setAlign] = useState(() => {
    const saved = localStorage.getItem("app-text-align");
    return VALID_ALIGNMENTS.includes(saved) ? saved : defaultAlign;
  });

  useEffect(() => {
    localStorage.setItem("app-text-align", align);
  }, [align]);

  return { align, setAlign };
}
