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



