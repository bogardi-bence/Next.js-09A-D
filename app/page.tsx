"use client";

import Link from "next/link";
import { useState } from "react";

type LinkType = { href: string; label: string };

const links: LinkType[] = [
  { href: "/keruletisebesseg", label: "Kerületi sebesség" },
  { href: "/grafikon", label: "Ábrázolás Grafikonokkal" },
  { href: "/animacio", label: "Ábrázolás Animációval" },
];

function AnimatedLink({ href, label }: LinkType) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        color: "white",
        textDecoration: "none",
        padding: "8px 22px",
        borderRadius: "8px",
        border: hovered ? "1.5px solid rgb(66, 71, 158)" : "1.5px solid transparent",
        background: hovered ? "rgba(66, 71, 158, 0.15)" : "transparent",
        transform: hovered ? "translateY(-5px)" : "translateY(0px)",
        transition: "transform 0.18s ease, border-color 0.18s ease, background 0.18s ease",
      }}
    >
      {label}
    </Link>
  );
}

export default function KeruletiSebesseg() {
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
        <ul className="mt-3 flex flex-col items-center gap-3">
          {links.map((link, index) => (
            <li key={index}>
              <AnimatedLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}