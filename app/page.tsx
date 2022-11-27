"use client";

import chroma from "chroma-js";
import { useEffect, useState } from "react";
var randomColor = require("randomcolor"); // import the script

export default function Home() {
  const [palette, setPalette] = useState<string[]>([]);
  const [correctedpalette, setCorrectedPalette] = useState<string[]>([]);

  const generatePalette = () => {
    let palette = [];
    const colorLength = 6;
    for (let i = 0; i < colorLength; i++) {
      const randColor = randomColor();
      palette.push(randColor);
    }
    setPalette(palette);
  };

  const handleGenerate = (e: any) => {
    console.log(e);
  };

  useEffect(() => {
    generatePalette();
  }, []);

  return (
    <div
      className="flex w-full h-screen justify-center items-center"
      onKeyDown={handleGenerate}
    >
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
