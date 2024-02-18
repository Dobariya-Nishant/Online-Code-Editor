import CodeEditor from "@/components/code-editor/CodeEditor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Compiler() {
  return (
    <ResizablePanelGroup direction="horizontal" className="rounded-lg">
      <ResizablePanel
        className="h-[calc(100dvh-60px)] min-w-[400px]"
        defaultSize={50}
      >
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-[calc(100dvh-60px)] min-w-[400px]"
        defaultSize={50}
      >
        two
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
