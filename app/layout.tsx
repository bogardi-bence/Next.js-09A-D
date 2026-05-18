"use client";
import './globals.css'
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from 'react';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  return (
    <html lang="en">
      <body>
        <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
        { path !== "/" && (<header className="flex items-center pl-3 h-10" style={{ backgroundColor: "rgba(41, 39, 110, 1)" }}>
              <Link className="text-white" href={"/"}>Vissza a főmenübe</Link>
        </header>)}
        {children}
      </body>
    </html>
  );
}