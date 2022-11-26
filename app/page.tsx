"use client";

import chroma from "chroma-js";
import { useState } from "react";

export default function Home() {
  const [palette, setPalette] = useState<string[]>([]);

  const generatePalette = () => {
    const randomColor1 = chroma.random().hex();
    const randomColor2 = chroma.random().hex();
    const generatedPalette = chroma
      .bezier([randomColor1, randomColor2])
      .scale()
      .colors(5);
    setPalette(generatedPalette);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div>
        <div className="flex">
          {palette.map((item) => {
            return (
              <div
                className="min-w-[120px] min-h-[120px]"
                style={{ backgroundColor: item }}
              ></div>
            );
          })}
        </div>
        <div>
          <button onClick={generatePalette}>Generate</button>
        </div>
      </div>
    </div>
  );
}
