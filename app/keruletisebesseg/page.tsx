type SearchParams = {
  r?: string;
  adat?: string;
  tipus?: string;
};

export default async function KeruletiSebesseg({ searchParams }: { searchParams: SearchParams }) {
  const K: SearchParams = await searchParams;
  let r: number = Number(K.r) || 5;
  r = Math.floor(r) !== r ? 5 : r;

  const tipus = K.tipus || "T";
const adat = Number(K.adat) || 5;

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
 

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-4"
      style={{ background: "linear-gradient(rgba(8, 62, 209, 1), rgba(67, 109, 224, 1), white)" }}
    >
      <div
        className="w-full max-w-lg rounded-xl p-5 font-mono shadow-xl"
        style={{ color: "white", backgroundColor: "rgba(41, 39, 110, 1)" }}
      >
        <h1 className="mb-5 text-center text-2xl font-semibold">Kerületi sebesség</h1>
        <form className="space-y-2">
          <div className="flex items-center justify-center">
            <label className="mr-4" style={{ color: "white" }}>
              r =
            </label>
            <input
              className="input bg-black text-white input-primary"
              defaultValue={r}
              name="r"
              type="text"
            />
          </div>
          <div className="flex items-center justify-center">
            <label className="select mr-4 bg-black text-white select-primary">
              <select defaultValue={tipus} name="tipus">
                <option value="T">Periódusidő (T)</option>
                <option value="f">Fordulatszám (f)</option>
                <option value="w">Szögsebesség (ω)</option>
              </select>
              
            </label>
            <a>=</a>
            <input
              className="input bg-black text-white input-primary"
              defaultValue={adat}
              name="adat"
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
