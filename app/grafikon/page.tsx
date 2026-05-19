"use client";

import { useState } from "react";

export default function Abrazolas() {
  const [rInput, setRInput] = useState("5");
  const [TInput, setTInput] = useState("5");

  const r = parseFloat(rInput) || 5;
  const T = parseFloat(TInput) || 5;

  const keruletisebesseg = (2 * Math.PI * r) / T;
  const chartWidth = 400;
  const chartHeight = 200;
  const padding = 30;
  const maxR = 20;
  const maxV = (2 * Math.PI * maxR) / T;

  const points = Array.from({ length: 21 }, (_, i) => {
    const ri = i;
    const v = (2 * Math.PI * ri) / T;
    const x = padding + (ri / maxR) * (chartWidth - padding * 2);
    const y = chartHeight - padding - (v / maxV) * (chartHeight - padding * 2);
    return { x, y };
  });

  const polylinePoints = points.map((p) => `${p.x},${p.y}`).join(" ");
  const currentX = padding + (Math.min(r, maxR) / maxR) * (chartWidth - padding * 2);
  const currentY =
    chartHeight - padding - (Math.min(keruletisebesseg, maxV) / maxV) * (chartHeight - padding * 2);

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center"
      style={{ background: "linear-gradient(rgba(8, 62, 209, 1), rgba(67, 109, 224, 1), white)" }}
    >
      <div
        className="rounded-xl p-6 font-mono shadow-xl"
        style={{ color: "white", backgroundColor: "rgba(41, 39, 110, 1)", width: "480px" }}
      >
        <h1 className="mb-5 text-center text-2xl font-semibold">Ábrázolás — grafikon</h1>

        <div className="mb-4 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <label>r =</label>
            <input
              className="input w-20 input-primary"
              style={{ color: "white" }}
              type="text"
              value={rInput}
              onBlur={() => setRInput(String(r))}
              onChange={(e) => setRInput(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label>T =</label>
            <input
              className="input w-20 input-primary"
              style={{ color: "white" }}
              type="text"
              value={TInput}
              onBlur={() => setTInput(String(T))}
              onChange={(e) => setTInput(e.target.value)}
            />
          </div>
        </div>

        <p className="mb-4 text-center text-lg font-semibold">
          v = {keruletisebesseg.toFixed(2)} m/s
        </p>

        <p className="mb-2 text-center text-sm" style={{ color: "rgba(180,180,255,1)" }}>
          v(r) görbe — T = {T} s
        </p>
        <svg height={chartHeight} style={{ display: "block", margin: "0 auto" }} width={chartWidth}>
          <line
            stroke="rgba(255,255,255,0.4)"
            strokeWidth={1}
            x1={padding}
            x2={chartWidth - padding}
            y1={chartHeight - padding}
            y2={chartHeight - padding}
          />
          <line
            stroke="rgba(255,255,255,0.4)"
            strokeWidth={1}
            x1={padding}
            x2={padding}
            y1={padding}
            y2={chartHeight - padding}
          />
          <text
            fill="rgba(255,255,255,0.6)"
            fontSize={10}
            x={chartWidth - padding + 4}
            y={chartHeight - padding + 4}
          >
            r
          </text>
          <text fill="rgba(255,255,255,0.6)" fontSize={10} x={padding - 4} y={padding - 6}>
            v
          </text>
          <polyline
            fill="none"
            points={polylinePoints}
            stroke="rgba(100, 200, 255, 1)"
            strokeWidth={2}
          />
          {r >= 0 && r <= maxR && (
            <>
              <line
                stroke="rgba(255,220,50,0.5)"
                strokeDasharray="4,3"
                strokeWidth={1}
                x1={currentX}
                x2={currentX}
                y1={chartHeight - padding}
                y2={currentY}
              />
              <circle cx={currentX} cy={currentY} fill="rgba(255,220,50,1)" r={5} />
              <text fill="rgba(255,220,50,1)" fontSize={11} x={currentX + 7} y={currentY - 6}>
                r={r}, v={keruletisebesseg.toFixed(1)}
              </text>
            </>
          )}
        </svg>
      </div>
    </div>
  );
}
