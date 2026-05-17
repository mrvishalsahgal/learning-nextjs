import type { Metadata } from "next";

import "./globals.css";

export const metadata = {
  title:{
    template:"%s | Learning NextJS",
    default:"Learning NextJS"
  },
  description: "Learning NextJS",
}

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
