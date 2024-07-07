import Home1 from '../app/pages/index'; // Importa il componente Home dall'index.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      </div>
      <div>
     
      <p>Content of  Page</p>
      <Home1 /> {/* Utilizza il componente Home importato qui */}
    </div>
      <div className="flex flex-col mt-12 items-center justify-center w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-center">Welcome to Tech Interview</h1>
        <div className="mt-8 text-center">
        
          </div>
        </div>
    </main>
  )
}
