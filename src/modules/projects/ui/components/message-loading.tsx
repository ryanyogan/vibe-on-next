import { useEffect, useState } from "react";

function ShimmerMessages() {
  const messages = [
    "Thinking...",
    "Loading...",
    "Generating response...",
    "Analyzing your input...",
    "Building your website...",
    "Crafting Tapestry components...",
    "Optimizing the layout...",
    "Adding final touches...",
    "Almost ready!!!!",
  ];

  const [shimmerMessageIndex, setShimmerMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShimmerMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2_000);

    return () => {
      clearInterval(interval);
    };
  }, [messages.length]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-base text-muted-foreground animate-pulse">
        {messages[shimmerMessageIndex]}
      </span>
    </div>
  );
}

export function MessageLoading() {
  return (
    <div className="flex flex-col group px-2 pb-4">
      <div className="flex items-center gap-2 pl-2 mb-2">
        {/* <Image src="/logo.svg" alt="Avant AI" width={18} height={18} className="shrink-0" /> */}
        <span className="text-sm font-medium">Avant AI</span>
      </div>
      <div className="pl-8.5 flex flex-col gap-y-4">
        <ShimmerMessages />
      </div>
    </div>
  );
}
