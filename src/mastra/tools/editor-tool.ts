import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { editorAgent } from "../agents/editor";

export const editorTool = createTool({
  id: "editor-agent",
  description: "Calls the editor agent to edit blog post copy.",
  inputSchema: z.object({
    copy: z.string().describe("Blog post copy"),
  }),
  outputSchema: z.object({
    copy: z.string().describe("Edited blog post copy"),
  }),
  execute: async ({ context }) => {
    const result = await editorAgent.generate(
      `Edit the following blog post only returning the edited copy: ${context.copy}`
    );
    return { copy: result.text };
  },
});
