import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { copywriterAgent } from "../agents/copy-writer";

export const copywriterTool = createTool({
  id: "copywriter-agent",
  description: "Calls the copywriter agent to write blog post copy.",
  inputSchema: z.object({
    topic: z.string().describe("Blog post topic"),
  }),
  outputSchema: z.object({
    copy: z.string().describe("Blog post copy"),
  }),
  execute: async ({ context }) => {
    const result = await copywriterAgent.generate(
      `Create a blog post about ${context.topic}`
    );
    return { copy: result.text };
  },
});
