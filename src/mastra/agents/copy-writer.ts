import { Agent } from "@mastra/core/agent";
import { google } from "@ai-sdk/google";

export const copywriterAgent = new Agent({
  name: "Copywriter",
  instructions: "You are a copywriter agent that writes blog post copy.",
  model: google("gemini-1.5-pro-latest"),
});
 
