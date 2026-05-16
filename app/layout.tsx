import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export default function RootLayout({children}) {
  return (
    <html
      lang="en"
    >
      <body>
        <header className="bg-black text-white p-4">
          <p>Header</p>
        </header>
        {children}

        <footer className="bg-gray-200 text-black p-4">
          <p>Footer</p>
        </footer>
        </body>
    </html>
  );
}
