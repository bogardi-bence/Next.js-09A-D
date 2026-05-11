<<<<<<< HEAD
export default function KörmozgásPage() {
  return (
    <div>
      <div className="flex items-center justify-center flex-col min-h-screen">
        <div className="flex w-80 flex-col items-center ">
          <h1>KörmozgásPage</h1>
        </div>
      </div>
    </div>
  )
}
=======
type SearchParams = {
    r?: string;
    T?: string;
}


export default function KeruletiSebesseg({ searchParams }) {
  
  const K = searchParams;
  const r: number = Number(K.r) || 5;
  const T: number = Number(K.T) || 5;   

  const keruletisebesseg = 2 * Math.PI * r / T;
  
    return (
    <div>KeruletiSebesseg</div>
    <form>
    <div>
        <label className=""></label>
    </div>
    </form>
  )
}



>>>>>>> e1a298549a05ae32340ce01403cef10e7cc262c0
