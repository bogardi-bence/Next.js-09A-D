type SearchParams = {
  r?: string;
  T?: string;
}

export default function KeruletiSebesseg({ searchParams }: { searchParams: SearchParams }) {

  const r: number = Number(searchParams.r) || 5;
  const T: number = Number(searchParams.T) || 5;
  const keruletisebesseg = 2 * Math.PI * r / T;

  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <h1>Körmozgás Page</h1>
      <p>v = {keruletisebesseg.toFixed(3)} m/s</p>
    </div>
  );
}