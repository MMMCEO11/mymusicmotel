import Link from "next/link";

export default function Lobby() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white p-8">
      <h1 className="text-4xl font-bold text-amber-500 mb-4">
        Welcome to the 360° Lobby
      </h1>
      <p className="text-zinc-400 mb-8">
        The interactive room will go here soon.
      </p>
      
      <Link href="/" className="px-6 py-3 border border-zinc-700 hover:bg-zinc-800 rounded-lg">
        Go Back to the Front Desk
      </Link>
    </main>
  );
}