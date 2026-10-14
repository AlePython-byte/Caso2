"use client";

import { useLayoutEffect, useState, type ReactNode } from "react";

/** Width of the design (card) in CSS px; the frame never grows past it. */
const DESIGN_WIDTH = 679;
const GUTTER = 12;

/**
 * Keeps the exact desktop composition on small screens by scaling the whole
 * card down to the viewport width, so nothing wraps or collides.
 */
export function ScaleFrame({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const update = () =>
      setScale(Math.min(1, (window.innerWidth - GUTTER * 2) / DESIGN_WIDTH));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      className="mx-auto max-[700px]:[zoom:0.55]"
      style={{ width: DESIGN_WIDTH, zoom: scale === 1 ? undefined : scale }}
    >
      {children}
    </div>
  );
}
