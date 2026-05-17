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
        
        {children}

        
        </body>
    </html>
  );
}
