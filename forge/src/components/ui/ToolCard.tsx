type ToolCardProps = {
  title: string;
};

export default function ToolCard({ title }: ToolCardProps) {
  return (
    <button className="rounded-3xl border border-white/10 bg-white/5 p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-sky-500/30">

      <h4 className="text-xl font-semibold">
        {title}
      </h4>

      <p className="mt-3 text-zinc-400">
        Open tool →
      </p>

    </button>
  );
}
