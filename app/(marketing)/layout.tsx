
import "../globals.css";



export default function RootLayout({children}) {
  return (
    <>
      <body>
        <header className="bg-green-500 text-white p-4">
          <p>Header (Marketing)</p>
        </header>
        {children}

        <footer className="bg-yellow-500 text-black p-4">
          <p>Footer (Marketing)</p>
        </footer>
        </body>
   </>
  )
}
