import { Sparkles } from "lucide-react";

export default function WelcomeCard() {
  return (
    <div className="mt-12 rounded-3xl border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-cyan-500/10 p-8">
      <div className="flex items-center gap-3">
        <Sparkles className="text-sky-400" />

        <h3 className="text-2xl font-semibold">
          Welcome to Forge
        </h3>
      </div>

      <p className="mt-4 max-w-2xl text-zinc-300">
        Your all-in-one toolkit for formatting, generating,
        decoding, testing and inspecting developer data.
      </p>
    </div>
  );
}
