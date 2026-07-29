import { Search, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 px-8">

      <div>
        <h2 className="text-lg font-semibold">Forge</h2>
      </div>

      <div className="flex items-center gap-3">

        <button className="rounded-xl p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white">
          <Search size={18} />
        </button>

        <button className="rounded-xl p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white">
          <Settings size={18} />
        </button>

      </div>

    </header>
  );
}
