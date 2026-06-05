"use client";

import { useState } from "react";

export default function PaintCalculator() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const area = width * height;
  const paint = area / 10;

  return (
    <main className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">Paint Calculator</h1>

      <input
        type="number"
        placeholder="Width"
        onChange={(e) => setWidth(Number(e.target.value))}
        className="border p-2 mt-4 w-full"
      />

      <input
        type="number"
        placeholder="Height"
        onChange={(e) => setHeight(Number(e.target.value))}
        className="border p-2 mt-2 w-full"
      />

      <p className="mt-4">
        You need approx: <b>{paint.toFixed(2)}</b> litres of paint
      </p>
    </main>
  );
}