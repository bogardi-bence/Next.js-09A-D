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
    <div
      className="flex min-h-screen flex-col items-center justify-center"
      style={{ background: "linear-gradient(rgba(8, 62, 209, 1), rgba(67, 109, 224, 1), white)" }}
    >
      <div
        className="w-150 rounded-xl p-5 font-mono shadow-xl"
        style={{ color: "white", backgroundColor: "rgba(41, 39, 110, 1)" }}
      >
        <h1 className="mb-5 text-center text-2xl font-semibold">Kerületi sebesség</h1>
        <form className="space-y-2">
          <div className="flex items-center justify-center">
            <label className="mr-4" style={{ color: "white" }}>
              r =
            </label>
            <input
              className="input input-primary"
              defaultValue={r}
              name="r"
              style={{ color: "white" }}
              type="text"
            />
          </div>
          <div className="flex items-center justify-center">
            <label className="mr-4" style={{ color: "white" }}>
              T =
            </label>
            <input
              className="input input-primary"
              defaultValue={T}
              name="T"
              style={{ color: "white" }}
              type="text"
            />
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
