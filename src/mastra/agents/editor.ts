import { Agent } from "@mastra/core/agent";
import { google } from "@ai-sdk/google";

export const editorAgent = new Agent({
  name: "Editor",
  instructions: "You are an editor agent that edits blog post copy.",
  model: google("gemini-1.5-pro-latest"),
});
