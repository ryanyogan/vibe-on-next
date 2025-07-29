import { inngest } from "./client";
import { openai, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const summarizer = createAgent({
      name: "writer",
      system:
        "You are an expert writer. You write readable, concise, simple content",
      model: openai({ model: "gpt-4o" }),
    });

    const { output } = await summarizer.run(
      `Summarize the following text: ${event.data.value}`,
    );

    return { message: output };
  },
);
