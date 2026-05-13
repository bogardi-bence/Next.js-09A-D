type SearchParams = {
  r?: string;
  T?: string;
};

export default async function KeruletiSebesseg({ searchParams }: { searchParams: SearchParams }) {
  const K: SearchParams = await searchParams;

  let r: number = Number(K.r) || 5;
  let T: number = Number(K.T) || 5;

  r = Math.floor(r) !== r ? 5 : r;
  T = Math.floor(T) !== T ? 5 : T;

  const keruletisebesseg = (2 * Math.PI * r) / T;

  return (
    <div className="bg-red-500 flex min-h-screen flex-col items-left justify-left">
      <div className="w-150 rounded-xl bg-white p-5 font-mono shadow-xl">
        <h1 className="text-2xl font-semibold mb-5 text-center">Kerületi sebesség</h1>
        <form className="space-y-2">
          <div>
            <label className="mr-4">r =</label>
            <input className="input input-primary" defaultValue={r} name="r" type="text" />
          </div>
          <div>
            <label className="mr-4">T =</label>
            <input className="input input-primary" defaultValue={T} name="T" type="text" />
          </div>
          <div className="mt-4">
            <p className="text-center text-2xl font-semibold">
              Kerületi sebesség = {keruletisebesseg.toFixed(2)}
            </p>
          </div>
          <button className="hidden" type="submit"></button>
        </form>
      </div>
    </div>
  );
}
