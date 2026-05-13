type SearchParams = {
  r?: string;
  T?: string;
}

export default function KeruletiSebesseg({ searchParams }: { searchParams: SearchParams }) {
  const r: number = Number(searchParams.r) || 5;
  const T: number = Number(searchParams.T) || 5;
  const keruletisebesseg = 2 * Math.PI * r / T;

  return (
    <div className="relative min-h-screen bg-[#020b18] flex items-center justify-center overflow-hidden font-sans">

      {/* Orbit háttér */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="orbit orbit-1"><div className="orbit-dot" /></div>
        <div className="orbit orbit-2"><div className="orbit-dot" /></div>
        <div className="orbit orbit-3" />
        <div className="orbit orbit-4" />
      </div>

      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, transparent 70%)' }}
      />

      {/* Kártya */}
      <div className="card relative z-10 w-[420px] bg-[rgba(8,24,52,0.75)] border border-blue-500/25 shadow-2xl backdrop-blur-xl">
        <div className="card-body gap-0 p-12">

          {/* Badge */}
          <div className="badge badge-outline border-blue-500/40 text-blue-300 bg-blue-500/10 text-[10px] tracking-widest uppercase mb-5 gap-2 py-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Fizika · Kinematika
          </div>

          <h1 className="text-2xl font-black tracking-wider text-white mb-1" style={{ fontFamily: 'Orbitron, monospace' }}>
            Körmozgás
          </h1>
          <p className="text-sm text-slate-400/70 font-light mb-8">
            Kerületi sebesség számítása
          </p>

          {/* Divider */}
          <div className="divider divider-neutral opacity-20 my-0 mb-8" />

          {/* Paraméterek */}
          <div className="grid grid-cols-2 gap-3 mb-7">
            <div className="rounded-2xl bg-[rgba(15,35,75,0.6)] border border-blue-500/15 p-4">
              <p className="text-[10px] font-medium tracking-widest uppercase text-slate-400/60 mb-1.5">Sugár</p>
              <p className="text-2xl font-bold text-blue-400" style={{ fontFamily: 'Orbitron, monospace' }}>
                {r}<span className="text-xs font-normal text-slate-500 ml-1">m</span>
              </p>
            </div>
            <div className="rounded-2xl bg-[rgba(15,35,75,0.6)] border border-blue-500/15 p-4">
              <p className="text-[10px] font-medium tracking-widest uppercase text-slate-400/60 mb-1.5">Periódusidő</p>
              <p className="text-2xl font-bold text-blue-400" style={{ fontFamily: 'Orbitron, monospace' }}>
                {T}<span className="text-xs font-normal text-slate-500 ml-1">s</span>
              </p>
            </div>
          </div>

          {/* Eredmény */}
          <div className="relative rounded-2xl border border-blue-500/35 p-6 text-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(29,78,216,0.1))' }}>
            {/* Top shine */}
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(to right, transparent, rgba(147,197,253,0.6), transparent)' }}
            />
            <p className="text-[11px] tracking-[0.14em] uppercase text-blue-300 font-medium mb-2.5">
              Kerületi sebesség
            </p>
            <p className="text-5xl font-black leading-none mb-1.5"
              style={{
                fontFamily: 'Orbitron, monospace',
                background: 'linear-gradient(135deg, #93c5fd, #3b82f6, #1d4ed8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              {keruletisebesseg.toFixed(3)}
            </p>
            <p className="text-sm text-slate-400/55 font-light">méter / másodperc (m/s)</p>
            <p className="mt-3.5 text-xs text-slate-500/40 tracking-wider" style={{ fontFamily: 'Orbitron, monospace' }}>
              v = 2π · r / T
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}