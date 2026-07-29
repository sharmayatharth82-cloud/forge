import AppShell from "../components/layout/AppShell";
import { Search } from "lucide-react";

const tools = [
  "JSON Formatter",
  "JWT Decoder",
  "Regex Tester",
  "Password Generator",
  "UUID Generator",
  "Hash Generator",
  "QR Generator",
];

export default function Dashboard() {
  return (
    <AppShell>
      <div className="mx-auto max-w-5xl">

        <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
          Forge
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white">
          Good evening.
        </h1>

        <p className="mt-3 text-lg text-zinc-400">
          What would you like to build today?
        </p>

        <div className="relative mt-10 max-w-2xl">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            placeholder="Search developer tools..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-6 text-white outline-none backdrop-blur-xl transition focus:border-sky-500"
          />
        </div>

        <div className="mt-14">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Available Tools
          </p>

          <div className="space-y-3">
            {tools.map((tool) => (
              <button
                key={tool}
                className="flex w-full items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-6 py-5 text-left transition hover:border-white/10 hover:bg-white/10"
              >
                <span className="text-lg font-medium text-white">
                  {tool}
                </span>

                <span className="text-zinc-500">→</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </AppShell>
  );
}
