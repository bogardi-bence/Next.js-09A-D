"use client";

import { useState } from "react";

export default function Abrazolas() {
  const [rInput, setRInput] = useState("5");
  const [adatInput, setAdatInput] = useState("5");
  const [tipus, setTipus] = useState("T");

  const r = parseFloat(rInput) || 5;
  const adat = parseFloat(adatInput) || 5;

  let keruletisebesseg = 0;

  if (tipus === "T") {
    keruletisebesseg = (2 * Math.PI * r) / adat;
  }

  if (tipus === "f") {
    keruletisebesseg = 2 * Math.PI * r * adat;
  }

  if (tipus === "w") {
    keruletisebesseg = r * adat;
  }

  const chartWidth = 400;
  const chartHeight = 200;
  const padding = 30;
  const maxR = 20;

  let maxV = 1;

  if (tipus === "T") {
    maxV = (2 * Math.PI * maxR) / adat;
  }

  if (tipus === "f") {
    maxV = 2 * Math.PI * maxR * adat;
  }

  if (tipus === "w") {
    maxV = maxR * adat;
  }

  const points = Array.from({ length: 21 }, (_, i) => {
    const ri = i;

    let v = 0;

    if (tipus === "T") {
      v = (2 * Math.PI * ri) / adat;
    }

    if (tipus === "f") {
      v = 2 * Math.PI * ri * adat;
    }

    if (tipus === "w") {
      v = ri * adat;
    }

    const x = padding + (ri / maxR) * (chartWidth - padding * 2);
    const y =
      chartHeight -
      padding -
      (v / maxV) * (chartHeight - padding * 2);

    return { x, y };
  });

  const polylinePoints = points.map((p) => `${p.x},${p.y}`).join(" ");

  const currentX =
    padding + (Math.min(r, maxR) / maxR) * (chartWidth - padding * 2);

  const currentY =
    chartHeight -
    padding -
    (Math.min(keruletisebesseg, maxV) / maxV) *
      (chartHeight - padding * 2);

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(rgba(8, 62, 209, 1), rgba(67, 109, 224, 1), white)",
      }}
    >
      <div
        className="w-full max-w-[480px] rounded-xl p-6 font-mono shadow-xl"
        style={{
          color: "white",
          backgroundColor: "rgba(41, 39, 110, 1)",
        }}
      >
        <h1 className="mb-5 text-center text-2xl font-semibold">
          Ábrázolás — grafikon
        </h1>

        <div className="mb-4 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <label>r =</label>
            <input
              className="input input-primary w-20 bg-black text-white"
              type="text"
              value={rInput}
              onBlur={() => setRInput(String(r))}
              onChange={(e) => setRInput(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              className="select select-primary bg-black text-white"
              value={tipus}
              onChange={(e) => setTipus(e.target.value)}
            >
              <option value="T">Periódusidő (T)</option>
              <option value="f">Fordulatszám (f)</option>
              <option value="w">Szögsebesség (ω)</option>
            </select>
            <a>=</a>

            <input
              className="input input-primary w-20 bg-black text-white"
              type="text"
              value={adatInput}
              onBlur={() => setAdatInput(String(adat))}
              onChange={(e) => setAdatInput(e.target.value)}
            />
          </div>
        </div>

        <p className="mb-4 text-center text-lg font-semibold">
          v = {keruletisebesseg.toFixed(2)} m/s
        </p>

        <p
          className="mb-2 text-center text-sm"
          style={{ color: "rgba(180,180,255,1)" }}
        >
          {tipus === "T" && `v(r) görbe — T = ${adat} s`}
          {tipus === "f" && `v(r) görbe — f = ${adat} 1/s`}
          {tipus === "w" && `v(r) görbe — ω = ${adat} rad/s`}
        </p>

        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          width="100%"
          style={{ display: "block", margin: "0 auto" }}
        >
          <line
            x1={padding}
            y1={chartHeight - padding}
            x2={chartWidth - padding}
            y2={chartHeight - padding}
            stroke="rgba(255,255,255,0.4)"
            strokeWidth={1}
          />

          <line
            x1={padding}
            y1={padding}
            x2={padding}
            y2={chartHeight - padding}
            stroke="rgba(255,255,255,0.4)"
            strokeWidth={1}
          />

          <text
            x={chartWidth - padding + 4}
            y={chartHeight - padding + 4}
            fontSize={10}
            fill="rgba(255,255,255,0.6)"
          >
            r
          </text>

          <text
            x={padding - 4}
            y={padding - 6}
            fontSize={10}
            fill="rgba(255,255,255,0.6)"
          >
            v
          </text>

          <polyline
            points={polylinePoints}
            fill="none"
            stroke="rgba(100, 200, 255, 1)"
            strokeWidth={2}
          />

          {r >= 0 && r <= maxR && (
            <>
              <line
                x1={currentX}
                y1={chartHeight - padding}
                x2={currentX}
                y2={currentY}
                stroke="rgba(255,220,50,0.5)"
                strokeWidth={1}
                strokeDasharray="4,3"
              />

              <circle
                cx={currentX}
                cy={currentY}
                r={5}
                fill="rgba(255,220,50,1)"
              />

              <text
                x={currentX + 7}
                y={currentY - 6}
                fontSize={11}
                fill="rgba(255,220,50,1)"
              >
                r={r}, v={keruletisebesseg.toFixed(1)}
              </text>
            </>
          )}
        </svg>
      </div>
    </div>
  );
}