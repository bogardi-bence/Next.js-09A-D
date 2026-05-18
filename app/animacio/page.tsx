"use client";

import { useState, useEffect, useRef } from "react";

export default function Animacio() {
  const [rInput, setRInput] = useState("5");
  const [TInput, setTInput] = useState("5");
  const angleRef = useRef(0);
  const [angle, setAngle] = useState(0);

  const r = parseFloat(rInput) || 1;
  const T = parseFloat(TInput) || 1;

  const keruletisebesseg = (2 * Math.PI * r) / T;
  const circleR = Math.min(r * 6, 80);
  const cx = 150;
  const cy = 150;

  useEffect(() => {
    let last = performance.now();
    let animId: number;

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      angleRef.current += (2 * Math.PI) / T * dt;
      setAngle(angleRef.current);
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [T]);

  const dotX = cx + circleR * Math.cos(angleRef.current);
  const dotY = cy + circleR * Math.sin(angleRef.current);

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center"
      style={{ background: "linear-gradient(rgba(8, 62, 209, 1), rgba(67, 109, 224, 1), white)" }}
    >
      <div
        className="rounded-xl p-6 font-mono shadow-xl"
        style={{ color: "white", backgroundColor: "rgba(41, 39, 110, 1)", width: "360px" }}
      >
        <h1 className="mb-5 text-center text-2xl font-semibold">Animáció</h1>

        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <label>r =</label>
            <input className="input input-primary w-20" value={rInput} onChange={(e) => setRInput(e.target.value)} type="text" style={{ color: "black" }} />
          </div>
          <div className="flex items-center gap-2">
            <label>T =</label>
            <input className="input input-primary w-20" value={TInput} onChange={(e) => setTInput(e.target.value)} type="text" style={{ color: "black" }} />
          </div>
        </div>

        <p className="text-center text-lg font-semibold mb-4">v = {keruletisebesseg.toFixed(2)} m/s</p>

        <svg width={300} height={300} style={{ display: "block", margin: "0 auto" }}>
          <circle cx={cx} cy={cy} r={circleR} fill="none" stroke="rgba(100,200,255,0.5)" strokeWidth={1.5} />
          <circle cx={cx} cy={cy} r={3} fill="white" />
          <line x1={cx} y1={cy} x2={dotX} y2={dotY} stroke="rgba(255,220,50,0.7)" strokeWidth={1.5} />
          <circle cx={dotX} cy={dotY} r={8} fill="rgba(255,220,50,1)" />
          <line
            x1={dotX}
            y1={dotY}
            x2={dotX + Math.min(keruletisebesseg * 3, 40) * -Math.sin(angle)}
            y2={dotY + Math.min(keruletisebesseg * 3, 40) * Math.cos(angle)}
            stroke="rgba(100,255,150,0.9)"
            strokeWidth={2}
          />
          <text x={10} y={290} fill="rgba(180,180,255,0.8)" fontSize={11}>
            r = {r} m | T = {T} s | v = {keruletisebesseg.toFixed(2)} m/s
          </text>
        </svg>
      </div>
    </div>
  );
}