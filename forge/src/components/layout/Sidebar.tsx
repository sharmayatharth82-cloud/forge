import {
  House,
  Braces,
  KeyRound,
  Regex,
  Lock,
  Fingerprint,
  Hash,
  QrCode,
} from "lucide-react";

export default function Sidebar() {
  const items = [
    { name: "Dashboard", icon: House },
    { name: "JSON Formatter", icon: Braces },
    { name: "JWT Decoder", icon: KeyRound },
    { name: "Regex Tester", icon: Regex },
    { name: "Password Generator", icon: Lock },
    { name: "UUID Generator", icon: Fingerprint },
    { name: "Hash Generator", icon: Hash },
    { name: "QR Generator", icon: QrCode },
  ];

  return (
    <aside className="flex w-72 flex-col border-r border-white/10 bg-zinc-950/60 backdrop-blur-xl">

      <div className="px-8 py-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Forge
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          Developer Toolkit
        </p>
      </div>

      <nav className="flex-1 space-y-2 px-4">
        {items.map(({ name, icon: Icon }) => (
          <button
            key={name}
            className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-zinc-400 transition hover:bg-white/10 hover:text-white"
          >
            <Icon size={18} />
            <span>{name}</span>
          </button>
        ))}
      </nav>

      <div className="m-4 rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          Version
        </p>

        <p className="mt-2 text-white">
          Forge v0.1
        </p>
      </div>

    </aside>
  );
}
