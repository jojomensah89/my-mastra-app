import { Agent } from "@mastra/core/agent";
import { google } from "@ai-sdk/google";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const codeReviewerAgent = new Agent({
  name: "CodeReviewerAgent",
  instructions: readFileSync(
    join(
      __dirname,
      "../../../../mastra/my-mastra-app/src/instructions/v0.md"
    ), // Changed from 3 to 4 parent dirs
    "utf-8"
  ),
  model: google("gemini-1.5-pro-latest"),
});
