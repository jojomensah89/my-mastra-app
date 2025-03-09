import { Agent } from "@mastra/core/agent";
import { google } from "@ai-sdk/google";
import { editorTool } from "../tools/editor-tool";
import { copywriterTool } from "../tools/copy-writer-tool";
import { Mastra } from "@mastra/core/mastra";

export const publisherAgent = new Agent({
  name: "publisherAgent",
  instructions:
    "You are a publisher agent that first calls the copywriter agent to write blog post copy about a specific topic and then calls the editor agent to edit the copy. Just return the final edited copy.",
  model: google("gemini-1.5-pro-latest"),
  tools: { copywriterTool, editorTool },
});

const mastra = new Mastra({
  agents: { publisherAgent },
});
