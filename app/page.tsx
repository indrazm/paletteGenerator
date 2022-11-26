"use client";

import chroma from "chroma-js";
import { useState } from "react";

export default function Home() {
  const [palette, setPalette] = useState<string[]>([]);
  const [cubePalette, setCubePalette] = useState<string[]>([]);

  const generatePalette = () => {
    const randomColor1 = chroma.random().hex();
    const randomColor2 = chroma.random().hex();
    const randomColor3 = chroma.random().hex();
    const generatedPalette = chroma
      .bezier([randomColor1, randomColor2, randomColor3])
      // .bezier([randomColor1, randomColor2, randomColor3])
      .scale()
      .colors(30);
    setPalette(generatedPalette);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div>
        <div className="flex w-[600px]">
          {palette.map((item) => {
            return (
              <div
                className="w-[60px] h-[60px]"
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
