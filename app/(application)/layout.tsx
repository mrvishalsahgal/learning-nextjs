
import "../globals.css";



export default function RootLayout({children}) {
  return (
    <>
      <body>
        <header className="bg-red-700 text-white p-4">
          <p>Header (Application)</p>
        </header>
        {children}

        <footer className="bg-teal-700 text-black p-4">
          <p>Footer (Application)</p>
        </footer>
        </body>
   </>
  )
}
