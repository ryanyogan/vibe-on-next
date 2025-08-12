import { Button } from "@/components/ui/button";
import { Fragment } from "@/generated/prisma";
import { ExternalLinkIcon, RefreshCcwIcon } from "lucide-react";
import { useState } from "react";

export function FragmentWeb({ data }: { data: Fragment }) {
  const [fragmentKey, setFragmentKey] = useState(0);
  const [copied, setCopied] = useState(false);

  function onRefresh() {
    setFragmentKey((prev) => prev + 1);
  }

  function handleCopy() {
    navigator.clipboard.writeText(data.sandboxUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2_000);
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="p-2 border-b bg-sidebar flex items-center gap-x-2">
        <Button size="sm" variant="outline" onClick={onRefresh}>
          <RefreshCcwIcon />
        </Button>
        <Button
          size="sm"
          variant="outline"
          disabled={!data.sandboxUrl || copied}
          onClick={handleCopy}
          className="flex-1 justify-start text-start font-normal"
        >
          <span className="truncate">{data.sandboxUrl}</span>
        </Button>
        <Button
          size="sm"
          disabled={!data.sandboxUrl}
          variant="outline"
          onClick={() => {
            if (!data.sandboxUrl) return;
            window.open(`https://${data.sandboxUrl}`, "_blank");
          }}
        >
          <ExternalLinkIcon />
        </Button>
      </div>
      <iframe
        key={fragmentKey}
        className="h-full w-full"
        sandbox="allow-forms allow-scripts allow-same-origin"
        loading="lazy"
        src={data.sandboxUrl}
      />
    </div>
  );
}
