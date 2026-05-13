"use client";

import { useState } from "react";

export default function KeruletiSebesseg() {
  const [r, setR] = useState(5);
  const [T, setT] = useState(5);

  const keruletisebesseg = 2 * Math.PI * r / T;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ fontFamily: 'DM Sans, sans-serif' }}>

      {/* Gradient háttér */}
      <div className="absolute inset-0 -z-10" style={{
        background: 'linear-gradient(135deg, #020b18 0%, #041530 25%, #062050 45%, #0a2d6e 60%, #062050 75%, #041530 90%, #020b18 100%)'
      }} />

      {/* Mesh overlay */}
      <div className="absolute inset-0 -z-10 opacity-40" style={{
        background: 'radial-gradient(ellipse 80% 60% at 20% 30%, rgba(59,130,246,0.25) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 70%, rgba(29,78,216,0.2) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 50% 50%, rgba(99,179,237,0.15) 0%, transparent 70%)'
      }} />

      {/* Orbit animációk */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="orbit orbit-1"><div className="orbit-dot" /></div>
        <div className="orbit orbit-2"><div className="orbit-dot" /></div>
        <div className="orbit orbit-3" />
        <div className="orbit orbit-4" />
      </div>

      {/* Kártya */}
      <div className="relative z-10 w-[460px] rounded-3xl border border-blue-400/20 p-10 shadow-2xl"
        style={{
          background: 'rgba(4, 18, 45, 0.65)',
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          boxShadow: '0 0 0 1px rgba(59,130,246,0.08), 0 40px 100px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)'
        }}>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-blue-400/30 bg-blue-500/10 rounded-full px-4 py-1.5 text-[10px] font-medium tracking-widest uppercase text-blue-300 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Fizika · Kinematika
        </div>

        <h1 className="text-2xl font-black tracking-wider text-white mb-1" style={{ fontFamily: 'Orbitron, monospace' }}>
          Körmozgás
        </h1>
        <p className="text-sm text-slate-400/70 font-light mb-8">Kerületi sebesség számítása</p>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.35), transparent)' }} />

        {/* Paraméterek */}
        <div className="grid grid-cols-2 gap-4 mb-8">

          {/* Sugár */}
          <div className="rounded-2xl border border-blue-500/15 p-4" style={{ background: 'rgba(10, 28, 70, 0.7)' }}>
            <p className="text-[10px] font-medium tracking-widest uppercase text-slate-400/60 mb-3">Sugár (r)</p>
            <p className="text-3xl font-bold text-blue-300 mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
              {r}<span className="text-xs font-normal text-slate-500 ml-1">m</span>
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setR(v => Math.max(1, v - 1))}
                className="flex-1 rounded-xl border border-blue-500/25 bg-blue-500/10 text-blue-300 text-lg font-bold hover:bg-blue-500/25 hover:border-blue-400/50 active:scale-95 transition-all duration-150"
                style={{ paddingTop: 4, paddingBottom: 4 }}>
                −
              </button>
              <button
                onClick={() => setR(v => v + 1)}
                className="flex-1 rounded-xl border border-blue-500/25 bg-blue-500/10 text-blue-300 text-lg font-bold hover:bg-blue-500/25 hover:border-blue-400/50 active:scale-95 transition-all duration-150"
                style={{ paddingTop: 4, paddingBottom: 4 }}>
                +
              </button>
            </div>
          </div>

          {/* Periódusidő */}
          <div className="rounded-2xl border border-blue-500/15 p-4" style={{ background: 'rgba(10, 28, 70, 0.7)' }}>
            <p className="text-[10px] font-medium tracking-widest uppercase text-slate-400/60 mb-3">Periódusidő (T)</p>
            <p className="text-3xl font-bold text-blue-300 mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
              {T}<span className="text-xs font-normal text-slate-500 ml-1">s</span>
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setT(v => Math.max(1, v - 1))}
                className="flex-1 rounded-xl border border-blue-500/25 bg-blue-500/10 text-blue-300 text-lg font-bold hover:bg-blue-500/25 hover:border-blue-400/50 active:scale-95 transition-all duration-150"
                style={{ paddingTop: 4, paddingBottom: 4 }}>
                −
              </button>
              <button
                onClick={() => setT(v => v + 1)}
                className="flex-1 rounded-xl border border-blue-500/25 bg-blue-500/10 text-blue-300 text-lg font-bold hover:bg-blue-500/25 hover:border-blue-400/50 active:scale-95 transition-all duration-150"
                style={{ paddingTop: 4, paddingBottom: 4 }}>
                +
              </button>
            </div>
          </div>
        </div>

        {/* Eredmény */}
        <div className="relative rounded-2xl border border-blue-400/30 p-7 text-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.22), rgba(29,78,216,0.12))' }}>
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(147,197,253,0.7), transparent)' }} />

          <p className="text-[11px] tracking-[0.16em] uppercase text-blue-300/80 font-medium mb-3">
            Kerületi sebesség
          </p>
          <p className="text-6xl font-black leading-none mb-2"
            style={{
              fontFamily: 'Orbitron, monospace',
              background: 'linear-gradient(135deg, #bfdbfe, #60a5fa, #2563eb)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            {keruletisebesseg.toFixed(3)}
          </p>
          <p className="text-sm text-slate-400/50 font-light mb-4">méter / másodperc (m/s)</p>

          <div className="h-px mb-4" style={{ background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.2), transparent)' }} />

          <p className="text-xs text-slate-500/50 tracking-widest" style={{ fontFamily: 'Orbitron, monospace' }}>
            v = 2π · r / T
          </p>
        </div>

      </div>
    </div>
  );
}