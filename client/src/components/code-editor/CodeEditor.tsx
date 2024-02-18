import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useCallback, useState } from "react";
import { tokyoNightInit } from "@uiw/codemirror-theme-tokyo-night";
import { tags as t } from "@lezer/highlight";

export default function CodeEditor() {
  const [value, setValue] = useState("");

  const onChange = useCallback((val: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);

  return (
    <CodeMirror
      value={value}
      height="100vh"
      theme={tokyoNightInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
}
