import { useState } from "react";

import Editor from "./components/Editor";
import Toolbar from "./components/Toolbar";
import {
  formatJson,
  minifyJson,
} from "./lib/formatter";

export default function JsonFormatter() {
  const [json, setJson] = useState("");

  function handleFormat() {
    try {
      setJson(formatJson(json));
    } catch {
      alert("Invalid JSON");
    }
  }

  function handleMinify() {
    try {
      setJson(minifyJson(json));
    } catch {
      alert("Invalid JSON");
    }
  }

  return (
    <div>

      <h1 className="mb-2 text-4xl font-bold">
        JSON Formatter
      </h1>

      <p className="mb-8 text-zinc-400">
        Format, validate and minify JSON instantly.
      </p>

      <Toolbar
        onFormat={handleFormat}
        onMinify={handleMinify}
      />

      <Editor
        value={json}
        onChange={setJson}
      />

    </div>
  );
}
