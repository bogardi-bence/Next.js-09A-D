type LinkType = {
  href: string;
  label: string;
};
const links: LinkType[] = [
  { href: "/keruletisebesseg", label: "Kerületi sebesség" },
  { href: "/abrazolas", label: "Ábrázolás Grafikonokkal" },
  { href: "/animacio", label: "Ábrázolás Animációval" },


];
import Link from "next/link";
export default function KeruletiSebesseg() {
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
      <ul className="mt-3 items-center justify-center flex flex-col gap-3">
          {links.map((link, index) => (
            <li key={index}>
              <Link className=""  href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>  
        
      </div>
    </div>
  );
};
