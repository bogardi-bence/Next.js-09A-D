"use client";

import { useEffect, useRef, useState } from "react";

export default function Animacio() {
  const [rInput, setRInput] = useState("5");
  const [TInput, setTInput] = useState("5");
  const angleRef = useRef(0);
  const [angle, setAngle] = useState(0);

  const r = parseFloat(rInput) || 5;
  const T = parseFloat(TInput) || 5;

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
      angleRef.current += ((2 * Math.PI) / T) * dt;
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
      className="flex min-h-screen flex-col items-center justify-center px-4"
      style={{ background: "linear-gradient(rgba(8, 62, 209, 1), rgba(67, 109, 224, 1), white)" }}
    >
      <div
        className="w-full max-w-[360px] rounded-xl p-6 font-mono shadow-xl"
        style={{ color: "white", backgroundColor: "rgba(41, 39, 110, 1)" }}
      >
        <h1 className="mb-5 text-center text-2xl font-semibold">Animáció</h1>

        <div className="mb-4 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <label>r =</label>
            <input
              className="input w-20 bg-black text-white input-primary"
              type="text"
              value={rInput}
              onBlur={() => setRInput(String(r))}
              onChange={(e) => setRInput(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label>T =</label>
            <input
              className="input w-20 bg-black text-white input-primary"
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

        {/* viewBox + width="100%" makes the animation scale on small screens */}
        <svg
          viewBox="0 0 300 300"
          width="100%"
          style={{ display: "block", margin: "0 auto" }}
        >
          <circle
            cx={cx}
            cy={cy}
            fill="none"
            r={circleR}
            stroke="rgba(100,200,255,0.5)"
            strokeWidth={1.5}
          />
          <circle cx={cx} cy={cy} fill="white" r={3} />
          <line
            stroke="rgba(255,220,50,0.7)"
            strokeWidth={1.5}
            x1={cx}
            x2={dotX}
            y1={cy}
            y2={dotY}
          />
          <circle cx={dotX} cy={dotY} fill="rgba(255,220,50,1)" r={8} />
          <line
            stroke="rgba(100,255,150,0.9)"
            strokeWidth={2}
            x1={dotX}
            x2={dotX + Math.min(keruletisebesseg * 3, 40) * -Math.sin(angle)}
            y1={dotY}
            y2={dotY + Math.min(keruletisebesseg * 3, 40) * Math.cos(angle)}
          />
          <text fill="rgba(180,180,255,0.8)" fontSize={11} x={10} y={290}>
            r = {r} m | T = {T} s | v = {keruletisebesseg.toFixed(2)} m/s
          </text>
        </svg>
      </div>
    </div>
  );
}