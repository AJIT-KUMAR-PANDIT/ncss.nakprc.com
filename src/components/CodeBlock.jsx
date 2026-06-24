"use client";

import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { generateTsxFromJsx } from "@/lib/jsx-to-tsx";

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  const [lang, setLang] = useState("jsx");

  const displayCode = lang === "tsx" ? generateTsxFromJsx(code) : code;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(displayCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden border border-[var(--glass-border)] bg-[#0d0d12]">
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang("jsx")}
            className={cn("text-xs px-2 py-1 rounded transition-colors", lang === "jsx" ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300")}
          >
            JSX
          </button>
          <button
            onClick={() => setLang("tsx")}
            className={cn("text-xs px-2 py-1 rounded transition-colors", lang === "tsx" ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300")}
          >
            TSX
          </button>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
          title="Copy code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <Highlight theme={themes.nightOwl} code={displayCode} language={lang}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={cn(className, "p-6 overflow-x-auto text-sm bg-transparent")} style={{ ...style, background: 'transparent' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row">
                <span className="table-cell text-right pr-4 select-none opacity-30 text-xs">
                  {i + 1}
                </span>
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
