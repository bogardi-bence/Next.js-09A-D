"use client";

import { useEffect, useRef, useState } from "react";

export default function Animacio() {
  const [rInput, setRInput] = useState("5");
  const [adatInput, setAdatInput] = useState("5");
  const [tipus, setTipus] = useState("T");

  const angleRef = useRef(0);
  const [angle, setAngle] = useState(0);

  const r = parseFloat(rInput) || 5;
  const adat = parseFloat(adatInput) || 5;

  let omega = 0;

  if (tipus === "T") {
    omega = adat !== 0 ? (2 * Math.PI) / adat : 0;
  }

  if (tipus === "f") {
    omega = 2 * Math.PI * adat;
  }

  if (tipus === "w") {
    omega = adat;
  }

  const keruletisebesseg = omega * r;

  const circleR = Math.min(r * 6, 80);
  const cx = 150;
  const cy = 150;

  useEffect(() => {
    let last = performance.now();
    let animId: number;

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      angleRef.current += omega * dt;

      setAngle(angleRef.current);

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animId);
  }, [omega]);

  const dotX = cx + circleR * Math.cos(angle);
  const dotY = cy + circleR * Math.sin(angle);

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(rgba(8, 62, 209, 1), rgba(67, 109, 224, 1), white)",
      }}
    >
      <div
        className="w-full max-w-[360px] rounded-xl p-6 font-mono shadow-xl"
        style={{
          color: "white",
          backgroundColor: "rgba(41, 39, 110, 1)",
        }}
      >
        <h1 className="mb-5 text-center text-2xl font-semibold">
          Animáció
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

        <svg
          viewBox="0 0 300 300"
          width="100%"
          style={{ display: "block", margin: "0 auto" }}
        >
          <circle
            cx={cx}
            cy={cy}
            r={circleR}
            fill="none"
            stroke="rgba(100,200,255,0.5)"
            strokeWidth={1.5}
          />

          <circle
            cx={cx}
            cy={cy}
            r={3}
            fill="white"
          />

          <line
            x1={cx}
            y1={cy}
            x2={dotX}
            y2={dotY}
            stroke="rgba(255,220,50,0.7)"
            strokeWidth={1.5}
          />

          <circle
            cx={dotX}
            cy={dotY}
            r={8}
            fill="rgba(255,220,50,1)"
          />

          <line
            x1={dotX}
            y1={dotY}
            x2={dotX + Math.min(keruletisebesseg * 3, 40) * -Math.sin(angle)}
            y2={dotY + Math.min(keruletisebesseg * 3, 40) * Math.cos(angle)}
            stroke="rgba(100,255,150,0.9)"
            strokeWidth={2}
          />

          <text
            x={10}
            y={290}
            fontSize={11}
            fill="rgba(180,180,255,0.8)"
          >
            r = {r} m | {tipus} = {adat} | v = {keruletisebesseg.toFixed(2)} m/s
          </text>
        </svg>
      </div>
    </div>
  );
}