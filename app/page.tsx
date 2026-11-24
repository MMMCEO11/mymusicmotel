export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white p-8">
      
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-amber-500 mb-4">
          Welcome to My Music Motel
        </h1>
        <p className="text-xl text-zinc-400 mb-12">
          We'll leave the site on for you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <button className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-lg transition-colors">
          Enter the 360° Lobby
        </button>
        <button className="px-8 py-4 border border-zinc-700 hover:bg-zinc-800 text-white font-bold rounded-lg transition-colors">
          Listen to ARIA Radio
        </button>
      </div>

    </main>
  );
}
