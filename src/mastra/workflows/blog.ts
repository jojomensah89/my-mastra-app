import { Agent } from "@mastra/core/agent";
import { Step, Workflow } from "@mastra/core/workflows";
import { z } from "zod";
import { google } from "@ai-sdk/google";
import { copywriterAgent } from "../agents/copy-writer";
import { editorAgent } from "../agents/editor";


const copywriterStep = new Step({
  id: "copywriterStep",
  execute: async ({ context }) => {
    if (!context?.triggerData?.topic) {
      throw new Error("Topic not found in trigger data");
    }
    const result = await copywriterAgent.generate(
      `Create a blog post about ${context.triggerData.topic}`,
    );
    console.log("copywriter result", result.text);
    return {
      copy: result.text,
    };
  },
});

const editorStep = new Step({
  id: "editorStep",
  execute: async ({ context }) => {
    const copy = context?.getStepResult<{ copy: number }>(
      "copywriterStep"
    )?.copy;

    const result = await editorAgent.generate(
      `Edit the following blog post only returning the edited copy: ${copy}`
    );
    console.log("editor result", result.text);
    return {
      copy: result.text,
    };
  },
});


const blogWorkflow = new Workflow({
  name: "blog-workflow",
  triggerSchema: z.object({
    topic: z.string(),
  }),
});

blogWorkflow.step(copywriterStep).then(editorStep);
 
blogWorkflow.commit();

export { blogWorkflow };
