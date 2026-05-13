type SearchParams = {
    r?: string;
    T?: string;
}

export default function KeruletiSebesseg({
   searchParams }: {
    searchParams: SearchParams;
  }) {

  const K = searchParams;
  const r: number = Number(K.r) || 5;
  const T: number = Number(K.T) || 5;   

  const keruletisebesseg = 2 * Math.PI * r / T;
  
  return (
    <div>
      <div className="flex items-center justify-center flex-col min-h-screen">
        <div className="flex w-80 flex-col items-center ">
          
<form className="flex flex-col gap-4">
  <p className="text-center text-xl font-semibold">Körmozgás sebessége</p>
  <div>
    
  </div>
</form>
        </div>
      </div>
    </div>
  )
}




