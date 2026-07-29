import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative max-w-3xl">

      <Search
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        type="text"
        placeholder="Search developer tools..."
        className="w-full rounded-2xl border border-white/10 bg-white/5 py-5 pl-14 pr-6 text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-sky-500 focus:bg-white/10"
      />

    </div>
  );
}
