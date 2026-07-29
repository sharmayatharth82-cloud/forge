type EditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function Editor({ value, onChange }: EditorProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      spellCheck={false}
      placeholder="Paste your JSON here..."
      className="h-[600px] w-full resize-none rounded-3xl border border-white/10 bg-zinc-900/60 p-6 font-mono text-sm text-white outline-none transition focus:border-sky-500"
    />
  );
}
