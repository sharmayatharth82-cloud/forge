type ToolbarProps = {
  onFormat: () => void;
  onMinify: () => void;
};

export default function Toolbar({
  onFormat,
  onMinify,
}: ToolbarProps) {
  return (
    <div className="mb-6 flex gap-4">

      <button
        onClick={onFormat}
        className="rounded-xl bg-sky-500 px-5 py-3 font-medium transition hover:bg-sky-400"
      >
        Format
      </button>

      <button
        onClick={onMinify}
        className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:bg-white/10"
      >
        Minify
      </button>

    </div>
  );
}
