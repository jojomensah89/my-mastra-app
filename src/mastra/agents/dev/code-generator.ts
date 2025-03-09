import { Agent } from "@mastra/core/agent";
import { google } from "@ai-sdk/google";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const codeGeneratorAgent = new Agent({
  name: "CodeGeneratorAgent",
  instructions: readFileSync(
    join(__dirname, "../../../../mastra/my-mastra-app/src/instructions/cursor-agent.md"), // Changed from 3 to 4 parent dirs
    "utf-8"
  ),
  model: google("gemini-1.5-pro-latest"),
});
